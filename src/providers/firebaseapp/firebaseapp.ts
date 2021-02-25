import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, take, first } from 'rxjs/operators';
import { Message } from '../../models/message';
import { Profile } from '../../models/profile';
import { UserConversation } from '../../models/userConversation';
import * as firebase from 'firebase/app';
import { AngularFireDatabase, AngularFireList  } from 'angularfire2/database';

@Injectable()
export class FirebaseappProvider {

  constructor(
  	public http: HttpClient
		, public afdb: AngularFireDatabase
		) {
  }

  getOfferedGames(userKey, conversationKey){
		var offeredGamesRef = this.afdb
		.list(`/conversations/${conversationKey}/deal/${userKey}/offer`)
		.valueChanges()

		return offeredGamesRef;

  }

  updateUserProfileImage(userKey, profileImage){
  	var selectedRef = this.afdb.list(`/users/${userKey}/`)
  	.set('profileImage',profileImage)
  }

  updateConversationOffers(userKey, conversationKey, selectedGames){
    // console.log("[FBAPP] updateSelectedGames : ", selectedGames)
  	var selectedRef = this.afdb.list(`/conversations/${conversationKey}/deal/${userKey}/`)
  	.set('offer',selectedGames)

  }

  updateUserTradeLocations(userKey, trade_locations){
  	var userRef = this.afdb.list(`/users/${userKey}/`)
  	.set('trade_locations',trade_locations);
  }

	updateUserWishList(user, wishList){
		var userRef = this.afdb.list('/users', ref=> ref.orderByChild('email').equalTo(user.email))
		var userSub = userRef.snapshotChanges().pipe(
		  map(changes => 
		    changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
		  )
		).subscribe((res)=>{
    	// console.log("get user data", res)
						
			if(!res[0]) return;

			var key = res[0]["key"];

			// console.log("adding to wishlist[" + key + "]", wishList)
			
			userRef.update(key, {
				wishList: wishList
			})

			userSub.unsubscribe();
		})
	}

	updateUserOwnedList(user, ownedList){
		var userRef = this.afdb.list('/users', ref=> ref.orderByChild('email').equalTo(user.email))
		var userSub = userRef.snapshotChanges().pipe(
		  map(changes => 
		    changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
		  )
		).subscribe((res)=>{
    	// console.log("get user data", res)
						
			if(!res[0]) return;

			var key = res[0]["key"];

			// console.log("adding to owned[" + key + "]", ownedList)
			
			userRef.update(key, {
				ownedList: ownedList
			})

			userSub.unsubscribe();
		})

	}

	addGameToRent(user, game){
		var rentRef = this.afdb.list('/shop/rent/games')
		var rentSub = rentRef.snapshotChanges().pipe(
		  map(changes => 
		    changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
		  )
		).subscribe((res)=>{
    	// console.log("get user data", res)
						
			if(!res[0]) return;
			res.push(game)
			// var key = res[0]["key"];
			// console.log("adding to owned[" + key + "]", ownedList)
			
			rentRef.push(game)

			rentSub.unsubscribe();
		})
	}

	getConversationMessages(key){
		var conversationRef = this.afdb
		.list('/conversations/'+key+"/messages/", ref => ref.limitToLast(80))
		.valueChanges(["child_added"])

		return conversationRef;

	}

	getTraderConversationKey(trader : Profile, user : Profile){
		// console.log("-fbapp getTraderConversationKey: ", trader.conversations, user.conversations)
		if(!trader.conversations || !user.conversations){
			console.log("r")
			return;
		} 		

		for(let u in user.conversations){

			for(let t in trader.conversations){
				if(trader.conversations[t].key === user.conversations[u].key)
					return user.conversations[u].key;
			}

		}

		return null;
	}

	createNewThread(trader : Profile, user : Profile, msg){
		// console.log("push convo " + msg, trader, user)

		var members = {};
		members[trader.key] = true;
		members[user.key] = true;

		var message = new Message(msg, user.first_name + " " + user.last_name,  user.key, firebase.database.ServerValue.TIMESTAMP)

		var converRef = this.pushConversation([message], members)
		
		user.conversations = user.conversations ? user.conversations : [];

		var userConversation = new UserConversation(
			converRef.key, 
			trader.key,
			trader.first_name + " " + trader.last_name
		);
		user.conversations[converRef.key] = userConversation;

		// console.log("uckey:", user.conversations)

		this.updateUserConversation(user.key, converRef.key, userConversation)

		trader.conversations = trader.conversations ? trader.conversations : [];
		var traderConversation = new UserConversation(
			converRef.key, 
			user.key,
			user.first_name + " " + user.last_name,
			true
		);

		trader.conversations[converRef.key] = traderConversation;

		var traderConversationKey = this.afdb.list('/users/'+trader.key+'/conversations/').update(converRef.key, traderConversation)

		return converRef
	}

	updateUserConversation(userKey, converKey, conversation){
		return this.afdb
		.list('/users/'+userKey+'/conversations/')
		.update(converKey, conversation)

	}


	pushConversation(messages, members){

		return this.afdb.list('/conversations').push({
			messages: messages,
			members: members
		})
		
	}

	updateConversation(key, trader : Profile, user : Profile, msg){
		// console.log("update convo " + key)
		let message = new Message(
			msg,
			user.first_name + " " + user.last_name,
			user.key,
			firebase.database.ServerValue.TIMESTAMP
		)
		this.afdb.list(`/conversations/${key}/messages`).push(message)
		this.afdb.list(`/users/${trader.key}/conversations`).update(key,{"unread":true})

	}

	readConversation(converKey, userKey){
		if(!converKey) return;
		if(!userKey) return;

		return this.afdb.list(`/users/${userKey}/conversations/`)
		.update(converKey, {unread:false})
	}

	getUserConversations(user : Profile, events = null){
		return this.afdb
			.list('/users/'+user.key+'/conversations/')
			.snapshotChanges(events)
			.pipe(
      	map(changes => 
        	changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    )
	}


	getProfile(key){
		return new Promise((resolve,reject)=>{

			var subscription = this.afdb
			.object('/users/'+key)
			.snapshotChanges()
			.subscribe((res)=>{
				resolve(res.payload.val());
				subscription.unsubscribe();
			});


		})
	}

	getConversationGuarantee(converKey){
		return this.afdb
					.object(`/conversations/${converKey}/guarantee/`)
					.snapshotChanges()
					
		    
	}

	updateConversationGuarantee(converKey, userKey){
		// console.log("converKey ", converKey)

 	return new Promise((resolve,reject)=>{
		var subscription = this.afdb
				.object(`/conversations/${converKey}/guarantee`)
				.snapshotChanges()
				.subscribe((res)=>{
					let guaranteeMembers = res.payload.val()

					if(!guaranteeMembers){
						guaranteeMembers = {};
						guaranteeMembers[userKey] = true
					}

					else if(guaranteeMembers[userKey]){
						guaranteeMembers[userKey] = false
						// console.log("guarantee false")
					}else{
						guaranteeMembers[userKey] = true
						// console.log("guarantee true")
					}

					
						// console.log("guaranteememb ", guaranteeMembers)
					this.afdb.list(`/conversations/${converKey}`)
						.update("guarantee", guaranteeMembers)
				
					resolve(guaranteeMembers)


					subscription.unsubscribe();
				});

 	})

		// console.log("test ", subscription)
	}

	getGamesForRent(){
		var rentRef = this.afdb
		.list('shop/rent/games', ref => ref.limitToLast(80))
		.valueChanges(["child_added"])

		return rentRef;
	}

}

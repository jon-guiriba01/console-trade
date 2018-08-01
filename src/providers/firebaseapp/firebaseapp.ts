import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, take, first } from 'rxjs/operators';
import { Message } from '../../models/Message';
import { Profile } from '../../models/Profile';
import { UserConversation } from '../../models/userConversation';
import * as firebase from 'firebase/app';
import { AngularFireDatabase, AngularFireList  } from 'angularfire2/database';

@Injectable()
export class FirebaseappProvider {

  constructor(
  	public http: HttpClient
		, public afdb: AngularFireDatabase
		) {
    console.log('Hello FirebaseappProvider Provider');
  }

	updateUserWishList(user, wishList){
		var userRef = this.afdb.list('/users', ref=> ref.orderByChild('email').equalTo(user.email))
		var userSub = userRef.snapshotChanges().pipe(
		  map(changes => 
		    changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
		  )
		).subscribe((res)=>{
    	console.log("get user data", res)
						
			if(!res[0]) return;

			var key = res[0]["key"];

			console.log("adding to wishlist[" + key + "]", wishList)
			
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
    	console.log("get user data", res)
						
			if(!res[0]) return;

			var key = res[0]["key"];

			console.log("adding to owned[" + key + "]", ownedList)
			
			userRef.update(key, {
				ownedList: ownedList
			})

			userSub.unsubscribe();
		})

	}

	getConversationMessages(key){
		var conversationRef = this.afdb
		.list('/conversations/'+key+"/messages/")
		.valueChanges(["child_added"])

		return conversationRef;

	}

	getTraderConversationKey(trader : Profile, user : Profile){
		console.log("-fbapp getTraderConversationKey: ", trader.conversations, user.conversations)
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
		console.log("push convo " + msg, trader, user)

		var members = {};
		members[trader.key] = true;
		members[user.key] = true;

		var message = new Message(msg, user.name,  user.key, firebase.database.ServerValue.TIMESTAMP)

		var converRef = this.pushConversation([message], members)
		
		user.conversations = user.conversations ? user.conversations : [];

		var userConversation = new UserConversation(
			converRef.key, 
			trader.key,
			trader.first_name + " " + trader.last_name
		);
		user.conversations[converRef.key] = userConversation;

		console.log("uckey:", user.conversations)

		this.updateUserConversation(user.key, converRef.key, userConversation)

		trader.conversations = trader.conversations ? trader.conversations : [];
		var traderConversation = new UserConversation(
			converRef.key, 
			user.key,
			user.first_name + " " + user.last_name
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

	updateConversation(key, trader, user, msg){
		console.log("update convo " + key)

		var conversationSub = this.afdb
		.object('/conversations/' + key)
		.snapshotChanges()
		.subscribe((res)=>{
			try{

				var conversation = res.payload.val();
				
				if(!conversation) return;
				
				conversation["messages"] = conversation["messages"] || [];

				var message = new Message(msg, user.name, user.key, firebase.database.ServerValue.TIMESTAMP)


				conversation["messages"].push(message)

				this.afdb.list('/conversations').update(key, {
					messages : conversation["messages"]
				})

				console.log("converRef update: " , res.payload.val())
				conversationSub.unsubscribe();

			}catch(err){
				console.log("Error updating conversation ", err)
			}

		})
	}

	getUserConversations(user : Profile){
		return this.afdb
		.object('/users/'+user.key+'/conversations/')
		.snapshotChanges()
	}

	getMessages(user){
		var conversations;
		var subscription = this.getUserConversations(user).subscribe((res)=>{
			conversations = res.payload.val()
			subscription.unsubscribe();
		});
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

}

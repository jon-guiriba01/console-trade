import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, take, first } from 'rxjs/operators';
import { Message } from '../../models/Message';
import { Profile } from '../../models/Profile';
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

	getConversation(key){
		var conversationRef = this.afdb
		.list('/conversations/'+key+"/messages")
		.valueChanges(["child_added"])

		return conversationRef;

	}

	getConversationKey(trader : Profile, user : Profile){
		if(!trader.conversations || !user.conversations) return;		
			console.log("getConversationKey trader", trader)
			console.log("getConversationKey user", user)

		for(var converKey of user.conversations){
			console.log("cjecking ", converKey)
			if(trader.conversations.indexOf(converKey) != -1)
				return converKey;
		}
		return null;
	}

	pushConversation(trader : Profile, user : Profile, msg){
		// console.log("push convo " + msg, trader, user)
		var members = {};
		members[trader.key] = true;
		members[user.key] = true;

		var message = new Message(msg, user.name,  user.key, firebase.database.ServerValue.TIMESTAMP)

		var converRef = this.afdb.list('/conversations').push({
			messages: [message],
			members: members
		})
		
		user.conversations = user.conversations ? user.conversations : []
		user.conversations.push(converRef.key)

		var userConversationKey = this.afdb.list('/users').update(user.key, {
			conversations : user.conversations
		})

		trader.conversations = trader.conversations ? trader.conversations : []
		trader.conversations.push(converRef.key)

		var traderConversationKey = this.afdb.list('/users').update(trader.key, {
			conversations : trader.conversations
		})

		return converRef
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

		// return this.afdb.list(
		// 	'/conversations', 
		// 	ref=> ref.orderByChild('members').equalTo(user.key)
		// ).valueChanges().subscribe((res)=>{
		// 	console.log("updateConversation ",res)
		// })
	}

}

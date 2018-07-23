import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, take, first } from 'rxjs/operators';

import * as firebase from 'firebase/app';
import { AngularFireDatabase, AngularFireList  } from 'angularfire2/database';
/*
  Generated class for the FirebaseappProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FirebaseappProvider {

  constructor(
  	public http: HttpClient
		, public afdb: AngularFireDatabase) {
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

	getConversation(trader, user){
		// console.log("get convo ", trader, user)
	
		if(!trader["conversations"] || !user["conversations"]) return;		

		var conversationKey = this.getConversationKey(trader, user);
		
		var conversationRef = this.afdb.object('/conversations/'+conversationKey)
		.valueChanges();


		return conversationRef;

	}

	getConversationKey(trader, user){
		if(!trader["conversations"] || !user["conversations"]) return;		

		for(var converKey of user.conversations){
			console.log("cjecking " + converKey)
			if(trader.conversations.includes(converKey))
				return converKey;
		}
		return null;
	}

	pushConversation(trader, user, msg){
		// console.log("push convo " + msg, trader, user)
		var members = {};
		members[trader.key] = true;
		members[user.key] = true;

		var converRef = this.afdb.list('/conversations').push({
			messages: [msg],
			members: members
		})
		
		var userSub = this.afdb.object('/users/'+user.key).snapshotChanges().subscribe((res)=>{
			
			console.log("users conv ", res.payload.val())
			
			var userObj = res.payload.val();
			var conversations = userObj["conversations"] ? userObj["conversations"] : []

			conversations.push(converRef.key);

			this.afdb.list('/users').update(user.key, {
				conversations : conversations
			})
			this.afdb.list('/users').update(trader.key, {
				conversations : conversations
			})

			userSub.unsubscribe();
		})

		return converRef
	}

	updateConversation(key, trader, user, msg){
		console.log("update convo " + key)
		var conversationSub = this.afdb
		.object('/conversations/' + key)
		.snapshotChanges()
		.subscribe((res)=>{
			var conversation = res.payload.val();

			conversation["messages"] = conversation["messages"] || [];

			conversation["messages"].push(msg)

			this.afdb.list('/conversations').update(key, {
				messages : conversation["messages"]
			})

			console.log("converRef update: " , res.payload.val())
			conversationSub.unsubscribe();
		})

		// return this.afdb.list(
		// 	'/conversations', 
		// 	ref=> ref.orderByChild('members').equalTo(user.key)
		// ).valueChanges().subscribe((res)=>{
		// 	console.log("updateConversation ",res)
		// })
	}

}

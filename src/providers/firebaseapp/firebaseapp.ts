import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

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

}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Game } from '../../models/game';
import * as firebase from 'firebase/app';
import { AngularFireDatabase, AngularFireList  } from 'angularfire2/database';
import { Profile } from '../../models/profile';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { C } from '../../config';
 

@Injectable()
export class ProfileProvider {
	// user : Profile = new Profile(
	// 	"assets/imgs/temp_profile_img_1.png", 
	// 	"Jon Carlo Guiriba", 
	// 	"Quezon City",
	// 	[],
	// 	[],[
	// 		"ps4","ns","xbox1"
	// 	],[
	// 		{
	// 			location: "Casa Milan Quezon City"
	// 		},
	// 		{
	// 			location: "St peter chapels novaliches"
	// 		},
	// 		{
	// 			location: "SM fairview quezon city"
	// 		},
	// 	]
	// );

	user : Profile;


  constructor(
  	public http: HttpClient
		, public afdb: AngularFireDatabase) {
    console.log('Hello ProfileProvider Provider');
    this.user = new Profile();
  }

	addGameToProfile(user : firebase.User, game : Game, owned : boolean){
		console.log("addGamToProfile: ",game)
		var userRef = this.afdb.list('/users', ref=> ref.orderByChild('email').equalTo(user.email))

  	this.user.wishList.push(game)

		var userSub = userRef.snapshotChanges().pipe(
		  map(changes => 
		    changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
		  )
		).subscribe((res)=>{
    	console.log("get user data", res)
						
			if(!res[0]) return;
				var key = res[0]["key"];
				if(owned){
    			console.log("adding to owned[" + key + "]", this.user.ownedList)
					userRef.update(key, {
							id : game.id,
							cover_url : game.cover_url,
							name : game.name,
							platforms : game.platforms
					})

				}
				else{
    			console.log("adding to wishlist[" + key + "]", this.user.wishList)
					
					userRef.update(key, {
						wishList: this.user.wishList
					})

				}

			userSub.unsubscribe();
		})
	}

}
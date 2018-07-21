import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Game } from '../../models/game';
import { Profile } from '../../models/profile';
import { Observable } from 'rxjs';
import { C } from '../../config';
import * as _ from 'underscore/underscore';
import { FirebaseappProvider } from '../../providers/firebaseapp/firebaseapp';
 

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
	allListsUpdateTimeout = null
	wishListUpdateTimeout = null
	ownedListUpdateTimeout = null

  constructor(
  	public http: HttpClient
  	, public fbapp: FirebaseappProvider) {
  	this.user = new Profile();
  }

	addGameToProfile(user : firebase.User, game : Game, owned : boolean){
		console.log("addGamToProfile: ",game)

    var duplicate = _.find(this.user.wishList, e=>{return e.id === game.id})

    if(duplicate)
      this.user.ownedList.push(game)
  	else
      this.user.wishList.push(game)

		this.fbapp.updateUserWishList(user, this.user.wishList)


	}

	toggleItemOwnership(authUser, item, owned){
  	if(owned){
			var duplicate = _.find(this.user.wishList, e=>{return e.id === item.id})  
			if(duplicate) return;

			this.user.wishList.push(item)
			this.user.ownedList = _.reject(this.user.ownedList, e=>{ return e.id === item.id});
  	}else{
			var duplicate = _.find(this.user.ownedList, e=>{return e.id === item.id})  
			if(duplicate) return;
			
			this.user.ownedList.push(item)
			this.user.wishList = _.reject(this.user.wishList, e=>{ return e.id === item.id});
		}

  	this.startAllListsUpdateTImer(authUser);

  }

  toggleItemPlatform(authUser, item, platform, owned){
  	if(_.contains(item.platforms, platform)){
  		item.platforms = _.reject(item.platforms, el=>{ return el === platform; });
  	}else{
  		item.platforms.push(platform)
  	}

  	if(owned){
  		this.startWishListUpdateTImer(authUser);
  	}else{
  		this.startOwnedListUpdateTImer(authUser);
  	}


  }

  removeItem(authUser, item, owned){


  	if(owned){
  		this.user.ownedList = _.reject(this.user.ownedList, el=>{ return el.id === item.id; });
  		this.startOwnedListUpdateTImer(authUser);
  	}else{
  		this.user.wishList = _.reject(this.user.wishList, el=>{ return el.id === item.id; });
  		this.startWishListUpdateTImer(authUser);
  	}


  }

  private startAllListsUpdateTImer(authUser){
		clearTimeout(this.allListsUpdateTimeout)

  	var self = this;

  	this.allListsUpdateTimeout = setTimeout( function(){
  		self.fbapp.updateUserWishList(authUser, self.user.wishList)
  		self.fbapp.updateUserOwnedList(authUser, self.user.ownedList)
  	},1000)
  }


  private startWishListUpdateTImer(authUser){
		clearTimeout(this.wishListUpdateTimeout)

  	var self = this;

  	this.wishListUpdateTimeout = setTimeout( function(){
  		self.fbapp.updateUserWishList(authUser, self.user.wishList)
  	},1000)
  }


  private startOwnedListUpdateTImer(authUser){
		clearTimeout(this.ownedListUpdateTimeout)

  	var self = this;

  	this.ownedListUpdateTimeout = setTimeout( function(){
  		self.fbapp.updateUserOwnedList(authUser, self.user.ownedList)
  	},1000)
  }


}
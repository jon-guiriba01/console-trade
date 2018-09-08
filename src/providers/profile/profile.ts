import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Game } from '../../models/game';
import { Profile } from '../../models/profile';
import { Observable } from 'rxjs';
import { C } from '../../config';
import * as _ from 'underscore/underscore';
import { FirebaseappProvider } from '../../providers/firebaseapp/firebaseapp';
import { ToastController } from 'ionic-angular';
 

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
    , public fbapp: FirebaseappProvider
  	, public toastCtrl: ToastController
    ) {
  	this.user = new Profile();
  }

	addGameToProfile(fbUser : firebase.User, game : Game, owned : boolean){

    var duplicate = _.find(this.user.wishList, e=>{return e.id === game.id})

    if(!game.platforms) 
      game.platforms = [];
    // console.log("addGamToProfile: ",game)
    
    if(duplicate || this.user.wishList.length > 8){
      
      let alreadyOwned = _.find(this.user.ownedList, e=>{return e.id === game.id})
      if(alreadyOwned) return;

      this.user.addToOwnedList(game)
      this.fbapp.updateUserOwnedList(fbUser, this.user.ownedList)
    }
  	else{

      this.user.addToWishList(game)
      this.fbapp.updateUserWishList(fbUser, this.user.wishList)
    }



	}

	toggleItemList(authUser, item, owned){
  	if(owned){
			var duplicate = _.find(this.user.wishList, e=>{return e.id === item.id});

			if(duplicate) return;

    if(this.user.wishList.length > 8) return;
      this.user.addToWishList(item)
			this.user.ownedList = _.reject(this.user.ownedList, e=>{ return e.id === item.id});
  	}else{
			var duplicate = _.find(this.user.ownedList, e=>{return e.id === item.id})  
			if(duplicate) return;
			
    if(this.user.ownedList.length > 8) return;

			this.user.addToOwnedList(item)
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

  isItemMatch(item){
    for(var wishItem of this.user.wishList){
      if(wishItem.id === item.id)
        return true;
    }

    return false;
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
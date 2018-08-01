import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NavController } from 'ionic-angular';
import { AppAuthProvider } from '../../providers/app-auth/app-auth';
import { ProfileProvider } from '../../providers/profile/profile';
import { IgdbProvider } from '../../providers/igdb/igdb';
import { Game } from '../../models/game';
import { C } from '../../config';
import * as _ from 'underscore/underscore';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {
	searchInput

  constructor(
  	public navCtrl: NavController,
  	public igdb: IgdbProvider,
    private auth: AppAuthProvider,
  	private profile: ProfileProvider
	) {

  }

  toggleItemOwnership(item, owned){
     this.profile.toggleItemOwnership(this.auth.user, item, owned);
  }

  toggleItemPlatform(item, platform, owned){
    this.profile.toggleItemPlatform(this.auth.user, item, platform, owned);
  }

  removeItem(item, owned){
    console.log("pressing")
    this.profile.removeItem(this.auth.user, item, owned);

  }

  timeout
  searchtTitle(){
  	clearTimeout(this.timeout);
  	
  	this.timeout = setTimeout(()=>{
  		if(!this.searchInput) return;

  		if(this.searchInput.length > 2)
  			this.igdb.search(this.searchInput)
  	}, 300)
  }

  clearSearch(){
  	this.igdb.searchOptions = [];
  }

  addGameToProfile(item){

  	var platforms = [""];
  	
  	if(item.platforms){
	  	if(item.platforms.includes(C.PS4_ID))
	  		platforms.push("ps4")

	  	if(item.platforms.includes(C.NS_ID))
	  		platforms.push("nintendo_switch")

	  	if(item.platforms.includes(C.XBOX1_ID))
	  		platforms.push("xbox1")
  	}
    var url = null;
    if(item.cover)
  	  url = item.cover.url.replace("thumb","cover_big").replace("//","http://")

    var game = new Game(item.id, item.name, url, platforms);
  	this.profile.addGameToProfile(this.auth.user, game, false)
  	this.searchInput = null;
  	this.igdb.searchOptions = [];
  }



}

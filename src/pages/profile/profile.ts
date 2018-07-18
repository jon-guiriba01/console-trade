import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NavController } from 'ionic-angular';
import { AppAuthProvider } from '../../providers/app-auth/app-auth';
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
  	private auth: AppAuthProvider
	) {

  }

  toggleItemOwnership(item, owned){
  	if(owned){

  		var duplicate = _.find(this.auth.profile.ownedList, e=>{return e.title === item.title})  
  		if(duplicate) return;

  		this.auth.profile.ownedList.push(item)
  		this.auth.profile.wishList = _.reject(this.auth.profile.wishList, el=>{ return el.title === item.title; });
  	
  	}else{

  		var duplicate = _.find(this.auth.profile.wishList, e=>{return e.title === item.title})  
  		if(duplicate) return;

  		this.auth.profile.wishList.push(item)
  		this.auth.profile.ownedList = _.reject(this.auth.profile.ownedList, el=>{ return el.title === item.title; });
  	}
  }

  toggleItemPlatform(item, platform){

  	if(_.contains(item.platforms, platform)){
  		item.platforms = _.reject(item.platforms, el=>{ return el === platform; });
  	}else{
  		item.platforms.push(platform)

  	}
  }

  timeout
  searchtTitle(){
  	clearTimeout(this.timeout);
  	
  	this.timeout = setTimeout(()=>{
  		if(!this.searchInput) return;

  		if(this.searchInput.length > 2)
  			this.igdb.search(this.searchInput)
  	}, 500)
  }

  clearSearch(){
  	this.igdb.searchOptions = [];
  }

  addGameToProfile(game){

  	var platforms = [];
  	
  	if(game.platforms){
	  	if(game.platforms.includes(C.PS4_ID))
	  		platforms.push("ps4")

	  	if(game.platforms.includes(C.NS_ID))
	  		platforms.push("nintendo_switch")

	  	if(game.platforms.includes(C.XBOX1_ID))
	  		platforms.push("xbox1")
  	}

  	var url = game.cover.url.replace("thumb","cover_big")
  	this.auth.profile.wishList.push(new Game(game.name, url, platforms))
  	this.searchInput = null;
  	this.igdb.searchOptions = [];
  }



}

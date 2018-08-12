import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NavController, App } from 'ionic-angular';
import { AppAuthProvider } from '../../providers/app-auth/app-auth';
import { ProfileProvider } from '../../providers/profile/profile';
import { IgdbProvider } from '../../providers/igdb/igdb';
import { Game } from '../../models/game';
import { C } from '../../config';
import * as _ from 'underscore/underscore';
import { IonicImageLoader, ImageLoaderConfig } from 'ionic-image-loader';
import { MapPage } from '../../pages/map/map';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {
	searchInput
  searchIsLoading = false;
  searchOptions : any = [];

  constructor(
  	public navCtrl: NavController
    , public igdb: IgdbProvider
    , private auth: AppAuthProvider
    , private profile: ProfileProvider
    , private imgLoader: ImageLoaderConfig
    , private app: App
	) {
    imgLoader.setBackgroundSize('cover');

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
    this.searchIsLoading = true;
  	clearTimeout(this.timeout);
  	
  	this.timeout = setTimeout(()=>{

  		if(!this.searchInput || this.searchInput.length < 2){
        this.clearSearch();
      }
      else{ 
        this.igdb.search(this.searchInput).then((res: Array<any>)=>{
          this.searchOptions = res;

          if(res.length == 0){
            this.searchOptions.push({id: "err", name: "No Games Found"})
          }

          this.searchIsLoading = false;
        });
      }

  	}, 300)
  }

  clearSearch(){
    this.searchIsLoading = false;
  	this.searchOptions = [];
  }

  addGameToProfile(item){
    if(item.id === "err") return;

  	var platforms = [""];
  	
  	if(item.platforms){
	  	if(item.platforms.includes(C.PS4_ID))
	  		platforms.push(C.PS4)

	  	if(item.platforms.includes(C.NS_ID))
	  		platforms.push(C.NS)

	  	if(item.platforms.includes(C.XBOX1_ID))
	  		platforms.push(C.XBOX1)
  	}
    var url = null;
    if(item.cover)
  	  url = item.cover.url.replace("thumb","cover_big").replace("//","http://")

    var game = new Game(item.id, item.name, url, platforms);
  	this.profile.addGameToProfile(this.auth.user, game, false)
  	this.searchInput = null;
  	this.searchOptions = [];
  }

  navToMap(){
      this.app.getRootNavs()[0].push(MapPage);
  }


}

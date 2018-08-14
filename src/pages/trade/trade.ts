import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, Platform, App, Events } from 'ionic-angular';
import { AppAuthProvider } from '../../providers/app-auth/app-auth';
import { ProfileProvider } from '../../providers/profile/profile';
import { TradeProvider } from '../../providers/trade/trade';
import { ChatPage } from '../../pages/chat/chat';

import { Profile } from '../../models/profile';
import { C } from '../../config';
import 'rxjs/add/observable/fromEvent';
import { IonicImageLoader, ImageLoaderConfig } from 'ionic-image-loader';

@Component({
  selector: 'page-trade',
  templateUrl: 'trade.html'
})
export class TradePage {

  refresh = true;

  constructor(
  	public navCtrl: NavController
		, public platform: Platform
		, private trade: TradeProvider
		, private profile: ProfileProvider
    , private app: App
		, private events: Events
  	) {

    this.getNearestPossibleTrades();

    this.events.subscribe("profile:changed", (res)=>{
      this.refresh = true;
    })

  }

  ionViewDidLoad() {

  }

  ionViewWillEnter() {
    if(this.refresh){
      this.refresh = false;
      this.trade.getNearestPossibleTrades(this.profile.user.key);
    }
  }

  getNearestPossibleTrades(){
  	console.log("getNearestPossibleTrades")
  	this.trade.getNearestPossibleTrades(this.profile.user.key);
  }

  showChat(trader){
  	this.app.getRootNavs()[0].push(ChatPage, {
  		trader : trader
  	});
  }

}

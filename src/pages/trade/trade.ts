import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, Platform, App } from 'ionic-angular';
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

  constructor(
  	public navCtrl: NavController
		, public platform: Platform
		, private trade: TradeProvider
		, private profile: ProfileProvider
		, private app: App
  	) {


  }

  ionViewDidLoad() {

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

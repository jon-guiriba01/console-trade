import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, Platform, App, Events, LoadingController } from 'ionic-angular';
import { AppAuthProvider } from '../../providers/app-auth/app-auth';
import { ProfileProvider } from '../../providers/profile/profile';
import { TradeProvider } from '../../providers/trade/trade';
import { ChatPage } from '../../pages/chat/chat';
import { AllTradersPage } from '../../pages/all-traders/all-traders';
import * as $ from 'jquery'
import { Profile } from '../../models/profile';
import { C } from '../../config';
import 'rxjs/add/observable/fromEvent';
import { IonicImageLoader, ImageLoaderConfig } from 'ionic-image-loader';
import { Storage  } from '@ionic/storage';

@Component({
  selector: 'page-trade',
  templateUrl: 'trade.html'
})
export class TradePage {

  refresh = true;
  showDisclaimer = true;
  showMatchingOnly = true;
  offset = 0;
  limit = 15;
  traders = [];
  hasMore = false;

  constructor(
  	public navCtrl: NavController
		, public platform: Platform
		, private trade: TradeProvider
		, private profile: ProfileProvider
    , private app: App
    , private events: Events
    , private storage: Storage 
		, private loadCtrl: LoadingController 
  	) {

    this.events.subscribe("profile:changed", (res)=>{
      this.refresh = true;
    })

    this.storage.get('showDisclaimer').then((res)=>{
      this.showDisclaimer = !res;
    });

  }

  ionViewDidLoad() {

  }

  ionViewWillEnter() {
    if(this.refresh){
      this.refresh = false;
      this.getTrades(this.profile.user.key, 15, 0);
    }
  }
  showChat(trader){
  	this.app.getRootNavs()[0].push(ChatPage, {
  		trader : trader
  	});
  }

  expandToggle(trader){
    if(trader.expanded)
      trader.expanded = false;
    else trader.expanded = true;
  }

  confirmDisclaimer(){
    this.showDisclaimer = false;
    this.storage.set("showDisclaimer", true);
  }

  toggleTraders(){
    this.showMatchingOnly = !this.showMatchingOnly;
    this.offset = 0;
    this.hasMore = false;
    this.getTrades(this.profile.user.key, this.limit, this.offset);
  }

  showMore(){
    this.offset++;
    this.getTrades(this.profile.user.key, this.limit, this.offset, true);
  }



  getTrades(userKey, limit = 15, offset = 0, concat = false){
    // console.log("[getTrades] --concat"+concat)

    if(this.showMatchingOnly){
     this.trade.getNearestPossibleTrades(userKey, limit, offset).then((res : Array<any>)=>{
       // console.log("res ", res.length)
       this.hasMore = res.length == 15 ? true : false;
     
       if(concat){
         this.traders = this.traders.concat(res)
       }
       else  
         this.traders = res;
     

     });
    }else{
     this.trade.getNearestTrades(userKey, limit, offset).then((res : Array<any>)=>{
       // console.log("res ", res.length)
       this.hasMore = res.length == 15 ? true : false;

       if(concat){
         this.traders = this.traders.concat(res)
       }
       else  
         this.traders = res;
     });
    }

  }


}

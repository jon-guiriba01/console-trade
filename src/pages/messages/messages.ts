import { Component } from '@angular/core';
import { NavController, App, Events, LoadingController } from 'ionic-angular';
import { ProfileProvider } from '../../providers/profile/profile';
import { MessagesProvider } from '../../providers/messages/messages';
import { FirebaseappProvider } from '../../providers/firebaseapp/firebaseapp';
import { map, take, first } from 'rxjs/operators';
import { ChatPage } from '../../pages/chat/chat';
import { Profile } from '../../models/profile';

@Component({
  selector: 'page-messages',
  templateUrl: 'messages.html'
})
export class MessagesPage {

  pendingLoad;

  constructor(
  	public navCtrl: NavController
  	, public profile: ProfileProvider
  	, public fbApp: FirebaseappProvider
    , private app: App
    , private events: Events
    , private loadCtrl: LoadingController 
    , private messages: MessagesProvider 
  ) {

   
  }


  ionViewWillEnter(){

  }

  showChat(trader){
    // console.log("showChat", trader)
    var matchingTrades = [];

    if(trader.ownedList)
    for(var traderOwned of trader.ownedList){
      for(var userWish of this.profile.user.wishList){
          if(userWish.id === traderOwned.id){
             matchingTrades.push(traderOwned);
          }
      }
    }

    var matchingWishes = [];
    
    if(trader.wishList)
    for(var traderWish of trader.wishList){
      for(var userOwned of this.profile.user.ownedList){
          if(userOwned.id === traderWish.id){
             matchingWishes.push(userOwned);
          }
      }
    }
    
    trader.matchingTrades = matchingTrades;
    trader.matchingWishes = matchingWishes;

    this.app.getRootNavs()[0].push(ChatPage, {
      trader : trader
    });

  }

  getRandomPic(){
    return 'assets/imgs/temp_profile_img_'+this.getRandomInt(1,2)+'.png';
  }

  getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  

}

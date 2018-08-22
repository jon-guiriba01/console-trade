import { Component } from '@angular/core';
import { NavController, App, Events } from 'ionic-angular';
import { ProfileProvider } from '../../providers/profile/profile';
import { FirebaseappProvider } from '../../providers/firebaseapp/firebaseapp';
import { map, take, first } from 'rxjs/operators';
import { ChatPage } from '../../pages/chat/chat';
import { Profile } from '../../models/profile';

@Component({
  selector: 'page-messages',
  templateUrl: 'messages.html'
})
export class MessagesPage {

	traders : any = [];
  pendingLoad = true;

  constructor(
  	public navCtrl: NavController
  	, public profile: ProfileProvider
  	, public fbApp: FirebaseappProvider
    , private app: App
    , private events: Events
  ) {
    this.events.subscribe("profile:changed",(res)=>{
      this.pendingLoad = true;
    });
  }

  ionViewWillEnter(){
    if(this.profile.user.email == "" || !this.pendingLoad) return;

    this.pendingLoad = false;
    this.traders = [];

    this.fbApp.getUserConversations(this.profile.user)
    .subscribe((res)=>{
      if(!res) return;

      for(var convo in res.payload.val()){
        var conversation = res.payload.val()[convo];

        this.fbApp.getProfile(conversation.traderKey).then((res:Profile)=>{
          if(res.profileImage == null || res.profileImage == ""){
            res.profileImage = this.getRandomPic();
          }
          this.traders.push(res)

        })

        

      }

      console.log("conversations: ", this.traders)
    })

  }

  showChat(trader){

    var matchingTrades = [];
    for(var traderOwned of trader.ownedList){
      for(var userWish of this.profile.user.wishList){
          if(userWish.id === traderOwned.id){
             matchingTrades.push(traderOwned);
          }
      }
    }

    var matchingWishes = [];
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

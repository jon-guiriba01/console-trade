import { Component } from '@angular/core';
import { NavController, App } from 'ionic-angular';
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

  constructor(
  	public navCtrl: NavController
  	, public profile: ProfileProvider
  	, public fbApp: FirebaseappProvider
    , private app: App
  ) {
  	this.fbApp.getUserConversations(profile.user)
  	.subscribe((res)=>{
  		if(!res) return;

  		for(var convo in res.payload.val()){
        var conversation = res.payload.val()[convo];

        this.fbApp.getProfile(conversation.traderKey).then((res:Profile)=>{
          if(res.profileImage == null || res.profileImage == ""){
            res.profileImage = this.getRandomPic();
          }

          var matchingTrades = [];
          for(var traderOwned of res.ownedList){
            for(var userOwned of profile.user.wishList){
                if(userOwned.id === traderOwned.id){
                   matchingTrades.push(traderOwned);
                }
            }
          }
          res["matchingTrades"] = matchingTrades;
          this.traders.push(res)

        })

  			

  		}

  		console.log("conversations: ", this.traders)
  	})
  }

  showChat(trader){
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

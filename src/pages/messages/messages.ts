import { Component } from '@angular/core';
import { NavController, App } from 'ionic-angular';
import { ProfileProvider } from '../../providers/profile/profile';
import { FirebaseappProvider } from '../../providers/firebaseapp/firebaseapp';
import { map, take, first } from 'rxjs/operators';
import { ChatPage } from '../../pages/chat/chat';

@Component({
  selector: 'page-messages',
  templateUrl: 'messages.html'
})
export class MessagesPage {

	traders = [];

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

        this.fbApp.getProfile(conversation.traderKey).then((res)=>{
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


  

}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProfileProvider } from '../../providers/profile/profile';
import { FirebaseappProvider } from '../../providers/firebaseapp/firebaseapp';
import { AppAuthProvider } from '../../providers/app-auth/app-auth';

@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})
export class ChatPage {

	trader;
	message = "";
	chat = {};

	converKey;

  constructor(
  	public navCtrl: NavController
  	, public navParams: NavParams
  	, public profile: ProfileProvider
  	, public fbApp: FirebaseappProvider
  	, public auth: AppAuthProvider
  	) {

  	this.trader = navParams.get('trader')
  }

  ionViewDidLoad() {
  	this.fbApp.getConversation(this.trader, this.profile.user);
  	console.log("chat page load")

	 	this.converKey =	this.fbApp.getConversationKey(this.trader, this.profile.user)
  	console.log("onLoad converKey: " + this.converKey)

  }

  send(){
  	console.log("sent message: " , this.message)
  	

  	if(this.converKey){
  		console.log("UPDATE CHAT " + this.converKey)
			this.fbApp.updateConversation(this.converKey, this.trader, this.profile.user, this.message)
		}else{
  		console.log("PUSH CHAT " + this.converKey)
			this.converKey = this.fbApp.pushConversation(this.trader,this.profile.user,this.message).key	  			
		}

  	// var converSub =	this.fbApp
  	// .getConversation(this.trader, this.profile.user)
  	// .subscribe((res)=>{
			// console.log("conver res: ", res);

  		// var key;
  		// if(!res){
				// var converRef = this.fbApp.pushConversation(this.trader,this.profile.user,this.message)	  			
  		// 	key = converRef.key;
  		// }
  		// else{
  		// 	key = res[0]["key"];
  		// 	this.fbApp.updateConversation(key, this.trader, this.profile.user, this.message)
  		// }

  		// converSub.unsubscribe();
  	// })
  	



  	this.message = "";
  }

}

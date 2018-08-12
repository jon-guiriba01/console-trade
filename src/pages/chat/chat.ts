import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';
import { ProfileProvider } from '../../providers/profile/profile';
import { FirebaseappProvider } from '../../providers/firebaseapp/firebaseapp';
import { AppAuthProvider } from '../../providers/app-auth/app-auth';
import 'rxjs/add/observable/fromEvent';
import { IonicImageLoader, ImageLoaderConfig } from 'ionic-image-loader';
import { MapPage } from '../../pages/map/map';

@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})
export class ChatPage {

	trader;
	message = "";
	chatSub;
	thread = [];
  threads = [];
	converKey;

  constructor(
  	public navCtrl: NavController
  	, public navParams: NavParams
  	, public profile: ProfileProvider
  	, public fbApp: FirebaseappProvider
  	, public auth: AppAuthProvider
    , private app: App
  	) {
  	this.trader = navParams.get('trader')
    console.log("[chat] trader: ", this.trader)
    this.converKey =  this.fbApp.getTraderConversationKey(this.trader, this.profile.user)

    if(this.converKey){
      this.chatSub = this.fbApp.getConversationMessages(this.converKey).subscribe((res)=>{
          console.log("thread ", res);
          this.thread = res;
          this.threads[this.trader.key] = res;
       })
     }

  }

  ionViewDidLoad(){
  }

  ionViewWillEnter() {
  }

  ionViewDidLeave(){
  	if(this.chatSub){
  		console.log("ONLEAVE CHAT PAGE")
  		this.chatSub.unsubscribe();
  	}
  }

  send(){
  	console.log("sent message: " , this.message)
  	

  	if(this.converKey){
  		console.log("UPDATE CHAT " + this.converKey)
			this.fbApp.updateConversation(this.converKey, this.trader, this.profile.user, this.message)
		}else{
			this.converKey = this.fbApp.createNewThread(this.trader,this.profile.user,this.message).key	  			
      console.log("PUSH CHAT " + this.converKey)
			
  		this.chatSub = this.fbApp.getConversationMessages(this.converKey).subscribe((res)=>{
  				console.log("thread ", res);
  				this.thread = res;
  		})
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

  navToMap(){
      this.app.getRootNavs()[0].push(MapPage, {
        target : this.trader
      });
  }


}

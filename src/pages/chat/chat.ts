import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App, PopoverController  } from 'ionic-angular';
import { ProfileProvider } from '../../providers/profile/profile';
import { FirebaseappProvider } from '../../providers/firebaseapp/firebaseapp';
import { AppAuthProvider } from '../../providers/app-auth/app-auth';
import 'rxjs/add/observable/fromEvent';
import { IonicImageLoader, ImageLoaderConfig } from 'ionic-image-loader';
import { MapPage } from '../../pages/map/map';
import { CourierPopoverPage } from '../../pages/courier-popover/courier-popover';
import * as $ from 'jquery'

@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})
export class ChatPage {

	trader;
	message = "";
	chatSub;
	thread = [];
	converKey;
  userOfferedGamesSub;
  traderOfferedGamesSub;
  userOfferedGames = [];
  traderOfferedGames = [];
  courier ={
    name: "No Courier Selected"
  } 

  constructor(
  	public navCtrl: NavController
  	, public navParams: NavParams
  	, public profile: ProfileProvider
  	, public fbApp: FirebaseappProvider
  	, public auth: AppAuthProvider
    , private app: App
    , public popoverCtrl: PopoverController
  	) {
  	this.trader = navParams.get('trader')
    console.log("[chat] trader: ", this.trader)
    this.converKey =  this.fbApp.getTraderConversationKey(this.trader, this.profile.user)

    if(this.converKey){
      this.chatSub = this.fbApp.getConversationMessages(this.converKey)
        .subscribe((res)=>{
          console.log("thread ", res);
          this.thread = res;
       })

      this.traderOfferedGamesSub = this.fbApp.getOfferedGames(
        this.trader.key,
        this.converKey
      ).subscribe( (res)=>{
        this.traderOfferedGames = res;

        for(var game of res){
          for(var traderGame of this.trader.matchingTrades){
            if(game["id"] === traderGame.id){
              traderGame.isSelected = true;
            }
          }
        }

        console.log(">>> traderrOG",res)
      });

      this.userOfferedGamesSub = this.fbApp.getOfferedGames(
        this.profile.user.key,
        this.converKey
      ).subscribe( (res)=>{
        this.userOfferedGames = res;

        if(!this.trader.matchingWishes)
          this.trader.matchingWishes = [];

        for(var game of res){
          for(var traderGame of this.trader.matchingWishes){
            if(game["id"] === traderGame.id){
              traderGame.isSelected = true;
            }
          }
        }
      
        console.log(">>> userOG",res)
      });
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
    if(this.userOfferedGamesSub){
      this.userOfferedGamesSub.unsubscribe();
    }
  	if(this.traderOfferedGamesSub){
  		this.traderOfferedGamesSub.unsubscribe();
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

  saveTimeout;
  selectGame(game){
    clearTimeout(this.saveTimeout)

    if(!game.isSelected){
      game.isSelected = true;
      this.userOfferedGames.push(game)
    }
    else{ 
      game.isSelected = false;
      this.userOfferedGames = this.userOfferedGames.filter( (e)=>{
        return e.id != game.id
      } )
    }

    setTimeout(()=>{
      this.fbApp.updateConversationOffers(this.profile.user.key, this.converKey, this.userOfferedGames);
    },500);


  }

  selectCourier(){
    // this.courierStatus = "waiting for confirmation";
    // console.log(222)
    // $('.meetup').css('width','25%')
    // $('.meetup').css('padding','15px 0')
    // $('.courier').css('width','75%')

    let popover = this.popoverCtrl.create(CourierPopoverPage)
    popover.present();

    popover.onDidDismiss((courier)=>{
      if(!courier) return
        this.courier = courier;
    })
  }
  
}

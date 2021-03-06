import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, 
  App, PopoverController, Content  } from 'ionic-angular';
import { ProfileProvider } from '../../providers/profile/profile';
import { FirebaseappProvider } from '../../providers/firebaseapp/firebaseapp';
import { AppAuthProvider } from '../../providers/app-auth/app-auth';
import 'rxjs/add/observable/fromEvent';
import { IonicImageLoader, ImageLoaderConfig } from 'ionic-image-loader';
import { MapPage } from '../../pages/map/map';
import { CourierPopoverPage } from '../../pages/courier-popover/courier-popover';
import { MessagesProvider } from '../../providers/messages/messages';
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
  showMatching = true;
  guaranteeStatus = "Transaction not guaranteed";
  guaranteeSub;
  private mutationObserver: MutationObserver

  constructor(
  	public navCtrl: NavController
  	, public navParams: NavParams
  	, public profile: ProfileProvider
  	, public fbApp: FirebaseappProvider
  	, public auth: AppAuthProvider
    , private app: App
    , public popoverCtrl: PopoverController
    , public messages: MessagesProvider
  	) {


    this.trader = navParams.get('trader')
    console.log("trader ", this.trader)
    // if(this.trader.matchingWishes && this.trader.matchingTrades)
    //   if(this.trader.matchingWishes.length > 0 && this.trader.matchingTrades.length > 0)
    //     this.showMatching = true;

    this.profile.currentConversation = this.trader.key;
    // console.log("[chat] trader: ", this.trader)
    this.converKey =  this.fbApp.getTraderConversationKey(this.trader, this.profile.user)
    this.fbApp.readConversation(this.converKey, this.profile.user.key);

    if(this.converKey){
      this.chatSub = this.fbApp.getConversationMessages(this.converKey)
        .subscribe((res)=>{
          // console.log("thread ", res);
          this.thread = res;
          this.fbApp.readConversation(this.converKey, this.profile.user.key)

          setTimeout(()=>{$('#chatContent').scrollTop($('#chatContent')[0].scrollHeight);}, 100)
     

       })

      this.observeTraderOfferedGames();
      this.observeUserOfferedGames();

     }


    this.guaranteeSub = this.fbApp.getConversationGuarantee(this.converKey)
      .subscribe((res)=>{
        var guaranteeMembers = res.payload.val();
        // console.log(11, guaranteeMembers)

        // if(this.guarantee)
        let cnt = 0;
        for(var member in guaranteeMembers){
          if(guaranteeMembers[member])
            cnt++;
        }

        switch (cnt) {
          case 1:
            this.guaranteeStatus = "Waiting for partner to accept"
            break;
          case 2:
            this.guaranteeStatus = "Guaranteed transaction accepted. Please wait a representative will contact you soon"
            break;
          
          default:
            this.guaranteeStatus = "Transaction not guaranteed"
            break;
        }

    });

  }

  ionViewDidLoad() {
  }

  observeTraderOfferedGames(){
    this.traderOfferedGamesSub = this.fbApp.getOfferedGames(
      this.trader.key,
      this.converKey
    ).subscribe( (res)=>{
      this.traderOfferedGames = res;
      if(!this.trader.matchingTrades) return;

      for(var game of res){
        
        for(var traderGame of this.trader.matchingTrades){
          if(game["id"] === traderGame.id){
            traderGame.isSelected = true;
          }
        }
      }

      // console.log(">>> traderrOG",res)
    });
  }

  observeUserOfferedGames(){
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
    
      // console.log(">>> userOG",res)
    });
  }

  ionViewWillEnter() {
  }

  ionViewDidLeave(){
    this.profile.currentConversation = null;
    if(this.chatSub){
      // console.log("ONLEAVE CHAT PAGE")
      this.chatSub.unsubscribe();
    }
    if(this.userOfferedGamesSub){
      this.userOfferedGamesSub.unsubscribe();
    }
    if(this.traderOfferedGamesSub){
      this.traderOfferedGamesSub.unsubscribe();
    }
  	if(this.guaranteeSub){
  		this.guaranteeSub.unsubscribe();
  	}
  }

  send(){

    if(this.message.trim().length <= 0){
      return;
    } 
        

  	if(this.converKey){
  		// console.log("UPDATE CHAT " + this.converKey)
			this.fbApp.updateConversation(this.converKey, this.trader, this.profile.user, this.message)
		}else{
			this.converKey = this.fbApp.createNewThread(this.trader,this.profile.user,this.message).key	  			
			
  		this.chatSub = this.fbApp.getConversationMessages(this.converKey).subscribe((res)=>{
  				// console.log("thread ", res);
  				this.thread = res;
          this.fbApp.readConversation(this.converKey, this.profile.user.key)
  		})
		}

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

  selectGuarantee(){
    this.selectCourier();

    this.fbApp.updateConversationGuarantee(this.converKey, this.profile.user.key)
      .then((res)=>{
        var yesCnt = 0;

        for(var member in res){
          console.log("xxxx ", res[member])
          if(res[member])
            yesCnt++;
        }

    })
  }

  traderContainsGame(item){
    if(this.trader.matchingTrades)
    return this.trader.matchingTrades.find(game => game.id == item.id);
  }

  userrContainsGame(item){
    if(this.trader.matchingWishes)
    return this.trader.matchingWishes.find(game => game.id == item.id);
  }


  
}

import { LoadingController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { Injectable  } from '@angular/core';
import { ProfileProvider } from '../../providers/profile/profile';
import { Profile } from '../../models/profile';

@Injectable()
export class MessagesProvider {

	unreadMsgCnt = 0;
	traders = [];
	traderTemp = [];

  constructor(
  	public http: HttpClient
  	, private loadCtrl: LoadingController 
  	, private profile: ProfileProvider 
  ) {
  }

  loadConversations(fbApp){
    var load = this.loadCtrl.create();
    load.present();

    fbApp.getUserConversations(this.profile.user).subscribe((res)=>{
    	this.unreadMsgCnt = 0;
      load.dismiss();
      if(!res) return;

      let traderPromises = [];
      for(var convo in res){
        var conversation = res[convo];

        traderPromises.push(this.addTraderToList(fbApp, conversation)) 
      }
      
      Promise.all(traderPromises).then((traders)=>{
        this.sortUnreadMessages(traders)
      	// console.log("[loadConversation]: ", this.traders)
      })

    })

  }

  sortUnreadMessages(traders){
    let unreadTraders = traders.filter(trader=>{return trader.hasUnreadMessage})
    let readTraders = traders.filter(trader=>{return !trader.hasUnreadMessage})

    this.traders = unreadTraders.concat(readTraders);  
  }

  addTraderToList(fbApp, conversation){
    return new Promise((resolve,reject)=>{
      fbApp.getProfile(conversation.traderKey).then((res:Profile)=>{
        res["hasUnreadMessage"] = conversation.unread;

        if(conversation.unread && this.profile.currentConversation != res.key){
        	this.unreadMsgCnt++;
        }

        resolve(res)
      })

    })
  }



}

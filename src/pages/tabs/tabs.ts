import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events} from 'ionic-angular';

import { TradePage } from '../trade/trade';
import { MessagesPage } from '../messages/messages';
import { ProfilePage } from '../profile/profile';
import { OptionsPage } from '../options/options';
import { DealPage } from '../deal/deal';
import { ShopPage } from '../shop/shop';
import { AppAuthProvider } from '../../providers/app-auth/app-auth';
import { FirebaseappProvider } from '../../providers/firebaseapp/firebaseapp';
import { ProfileProvider } from '../../providers/profile/profile';
import { MessagesProvider } from '../../providers/messages/messages';


@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})


export class TabsPage {

  tab1Root = ProfilePage;
  tab2Root = TradePage;
  tab3Root = MessagesPage;
  tab4Root = DealPage;
  tab5Root = ShopPage;

  constructor(
    public navCtrl: NavController
    , public auth: AppAuthProvider
    , private fbApp: FirebaseappProvider
    , private profile: ProfileProvider
    , private events: Events
    , private messages: MessagesProvider
  	) {
    this.events.subscribe("profile:loaded",()=>{

      this.messages.loadConversations(this.fbApp)

      // this.fbApp
      // .getUserConversations(this.profile.user,["child_added"])
      // .subscribe((res)=>{
      // })
    })

  }

  navTo(page){
  	this.navCtrl.push(OptionsPage, {}, {animate:true, direction: 'forward'})
  }


  logout(){
    this.auth.logout();
  }
}

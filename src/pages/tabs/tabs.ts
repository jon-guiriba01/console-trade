import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { TradePage } from '../trade/trade';
import { MessagesPage } from '../messages/messages';
import { ProfilePage } from '../profile/profile';
import { OptionsPage } from '../options/options';
import { DealPage } from '../deal/deal';
import { AppAuthProvider } from '../../providers/app-auth/app-auth';


@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})


export class TabsPage {

  tab1Root = ProfilePage;
  tab2Root = TradePage;
  tab3Root = MessagesPage;
  tab4Root = DealPage;

  constructor(public navCtrl: NavController
  	) {
  
  }

  navTo(page){
  	this.navCtrl.push(OptionsPage, {}, {animate:true, direction: 'forward'})
  }
}

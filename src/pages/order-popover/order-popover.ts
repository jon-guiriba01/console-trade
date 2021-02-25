import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-order-popover',
  templateUrl: 'order-popover.html',
})
export class OrderPopoverPage {

	cart = {
		games: []
	};

  constructor(
  	public navCtrl: NavController
  	, public navParams: NavParams
  	) {
  	this.cart.games = this.navParams.get("games");
  }

  ionViewDidLoad() {
  }

}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-courier-popover',
  templateUrl: 'courier-popover.html',
})
export class CourierPopoverPage {

	couriers = [
		{
			id:0,
			logo: "assets/imgs/courier_express_logo.png",
			name: "Courier Express",
			price: 200
		},
		{
			id:1,
			logo: "assets/imgs/lalamove_logo.png",
			name: "Lalamove",
			price: 260
		}
	]

  constructor(
  	public navCtrl: NavController
  	, public navParams: NavParams
    , public popoverCtrl: PopoverController
    , public viewCtrl: ViewController
  ) {
  }

  ionViewDidLoad() {
  }

  selectCourier(opt){
		this.viewCtrl.dismiss(this.couriers[opt])
  }

}

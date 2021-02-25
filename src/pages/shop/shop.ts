import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController, ToastController } from 'ionic-angular';
import { FirebaseappProvider } from '../../providers/firebaseapp/firebaseapp';
import * as _ from 'underscore/underscore';
import { OrderPopoverPage } from '../../pages/order-popover/order-popover';
import { OrderPage } from '../../pages/order/order';

@Component({
  selector: 'page-shop',
  templateUrl: 'shop.html',
})
export class ShopPage {

  priceWeeks = 120;
  priceMonth = 200;
  
	gamesForRent = [

	]

  cart = {
    games : []
  }

  constructor(
  	public navCtrl: NavController
  	, public navParams: NavParams
    , public fbapp: FirebaseappProvider
    , public popoverCtrl: PopoverController
    , private toastCtrl: ToastController
  	) {

  	let rentGamesRef = fbapp.getGamesForRent();

  	rentGamesRef.subscribe((res)=>{
  		this.gamesForRent = res;
  		console.log(this.gamesForRent)
  	})

  }

  ionViewDidLoad() {
    let orderStatus = this.navParams.get("orderStatus");
    if(orderStatus != null)
      this.displaySendingToast(orderStatus)
  }

  displaySendingToast(status){

    let message = 'Order successfully recieved';
   
    if(status == "error"){
      message = 'Error placing order';
    }

    let toast = this.toastCtrl.create({
      message: message,
      duration: 3000,
      position: 'top'
    });

    toast.onDidDismiss(() => {
    });

    toast.present();
  }

  addGameToCart(game){
    let isDuplicate = this.cart.games.find( e =>{return e.id == game.id}  )
    if(isDuplicate) return;

    this.cart.games.push(game);
  }

  removeGameFromCart(game){
    this.cart.games = _.reject(this.cart.games, (e)=>{return e.id == game.id; });
  }

  order(){
    this.navCtrl.push(OrderPage, {cart: this.cart})
    // let popover = this.popoverCtrl.create(OrderPopoverPage, {
    //   games: this.cart.games
    // })
    // popover.present();

    // popover.onDidDismiss((courier)=>{
    // })
  }
}

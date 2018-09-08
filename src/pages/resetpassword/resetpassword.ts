import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { AppAuthProvider } from '../../providers/app-auth/app-auth';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-resetpassword',
  templateUrl: 'resetpassword.html',
})
export class ResetpasswordPage {

	email = "";

  constructor(
  	public navCtrl: NavController
  	, public navParams: NavParams
		, private auth: AppAuthProvider
		, private toastCtrl: ToastController
  ) {
  }

  ionViewDidLoad() {
  }

 resetPassword(){
 	this.auth.resetPassword(this.email)
 	.then(()=>{
 		this.showToast("Email sent!", true)
 	})
 	.catch(err=>this.showToast(err))
 }

 showToast(msg, redirect = false){

  let toast = this.toastCtrl.create({
    message: msg,
    duration: 1500,
    position: 'top'
  });

  toast.onDidDismiss(() => {
  	if(redirect)
  		this.navCtrl.push(LoginPage)
  });

  toast.present();
 }

}

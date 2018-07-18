import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AppAuthProvider } from '../../providers/app-auth/app-auth';
import { LoginPage } from '../../pages/login/login';

@Component({
  selector: 'page-options',
  templateUrl: 'options.html',
})
export class OptionsPage {

  constructor(
  	public navCtrl: NavController
  	, public navParams: NavParams
  	, public auth: AppAuthProvider
  	) {
  }

  ionViewDidLoad() {
  }

  logout(){
  	this.auth.logout();
  }

}

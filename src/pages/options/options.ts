import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AppAuthProvider } from '../../providers/app-auth/app-auth';
import { LoginPage } from '../../pages/login/login';
import { EmailComposer } from '@ionic-native/email-composer';

@Component({
  selector: 'page-options',
  templateUrl: 'options.html',
})
export class OptionsPage {

  constructor(
  	public navCtrl: NavController
  	, public navParams: NavParams
  	, public auth: AppAuthProvider
    , public emailComposer: EmailComposer
  	) {
  }

  ionViewDidLoad() {
  }

  feedback(){
    let email = {
      to: 'lemontree.development@gmail.com',
      subject: 'Console Nation Feedback',
    };

    this.emailComposer.open(email);
  }

  logout(){
  	this.auth.logout();
  }

}

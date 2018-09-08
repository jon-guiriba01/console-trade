import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NavController } from 'ionic-angular';
import { SignupPage } from '../signup/signup';
import { ResetpasswordPage } from '../resetpassword/resetpassword';
import { TabsPage } from '../tabs/tabs';
import { AppAuthProvider } from '../../providers/app-auth/app-auth';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
	loginForm: FormGroup;
	loginError: string;

	constructor(
		private navCtrl: NavController,
		private auth: AppAuthProvider,
		fb: FormBuilder
	) {
		this.loginForm = fb.group({
			email: ['', Validators.compose([Validators.required, Validators.email])],
			password: ['', Validators.compose([Validators.required, Validators.minLength(3)])]
		});
	}

  login() {
		let data = this.loginForm.value;

		if (!data.email) {
			return;
		}

		let credentials = {
			email: data.email,
			password: data.password
		};
		this.auth.signInWithEmail(credentials)
			.then(
				() => this.navCtrl.setRoot(TabsPage),
				error => this.loginError = error.message
			);
    }

  private signup(){
    this.navCtrl.push(SignupPage);
  }

  loginWithGoogle() {
	  let gl = this.auth.googleLogin()
	    // .then(
	    //   (res) =>{
	    //   	console.log(10101,res)
	    //   	this.navCtrl.setRoot(TabsPage)
	    //   },
	    //   error => console.log(error.message)
	    // )
  }
  onSignIn(){

  }

  navToPassword(){
  	this.navCtrl.push(ResetpasswordPage);
  }

}
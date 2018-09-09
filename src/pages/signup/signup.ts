import { Component } from '@angular/core';
import { Platform, IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AppAuthProvider } from '../../providers/app-auth/app-auth';
import { TabsPage } from '../tabs/tabs';
import { Keyboard } from '@ionic-native/keyboard';

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
	canSubmit = false;

	validation_messages = {
		'first_name': [
				{ type: 'required', message: 'first name is required.' },
				{ type: 'minlength', message: 'first name must be at least 2 characters long.' },
				{ type: 'maxlength', message: 'first name cannot be more than 20 characters long.' },
				{ type: 'validUsername', message: 'Your username has already been taken.' }
			],
		'last_name': [
				{ type: 'required', message: 'last name is required.' },
				{ type: 'minlength', message: 'last name must be at least 2 characters long.' },
				{ type: 'maxlength', message: 'last name cannot be more than 20 characters long.' },
				{ type: 'validUsername', message: 'Your username has already been taken.' }
			],
			'email': [
				{ type: 'required', message: 'email is required.' },
				{ type: 'email', message: 'must be a valid email.' }
			],
			'password': [
				{ type: 'required', message: 'password is required.' },
				{ type: 'pattern', message: 'password must contain 1 upper case and 1 number.' },
				{ type: 'minlength', message: 'password must be at least 8 characters.' }
			],

	}

	signupForm: FormGroup;
	loginError: string;

	passwordType = "password";
	showPasswordIcon = "ios-eye-off";

  constructor(
  	public navCtrl: NavController
  	, public navParams: NavParams
  	, public auth: AppAuthProvider
  	, private keyboard: Keyboard
  	, private platform: Platform
  	, fb: FormBuilder) {

		this.platform.ready().then(() => {
			this.keyboard.disableScroll(false);
		});
  	var passwordRegex = '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).+$';

		this.signupForm = fb.group({
			first_name: ['', Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(20)])],
			last_name: ['', Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(20)])],
			email: ['', Validators.compose([Validators.required, Validators.email])],
			password: ['', Validators.compose([Validators.required, Validators.pattern(passwordRegex), Validators.minLength(8), Validators.maxLength(20)])],
			gender: ['', Validators.compose([Validators.required])],
		});

  }
  ionViewDidLoad() {
  }

  ionViewDidEnter() {
	}

	ionViewWillLeave() {
	}

  checkForm(){
  	this.canSubmit = this.signupForm.errors == null;
  }
  showPassword(){
  	if(this.passwordType == "password"){
  		this.passwordType = "text";
  		this.showPasswordIcon = "ios-eye";
  	}
  	else{
  		this.passwordType = "password";
  		this.showPasswordIcon = "ios-eye-off";
  	}
  }

  private signup(){

  	let form = {
			firstName: this.signupForm.value.first_name,
			lastName: this.signupForm.value.last_name,
			email: this.signupForm.value.email,
			password: this.signupForm.value.password,
			gender: this.signupForm.value.gender
		};

		this.auth.signUp(form).then( () => this.navCtrl.setRoot(TabsPage),
			error => console.log("signup error", error)
		);


  }

}

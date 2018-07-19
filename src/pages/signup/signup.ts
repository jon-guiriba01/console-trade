import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AppAuthProvider } from '../../providers/app-auth/app-auth';
import { TabsPage } from '../tabs/tabs';

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
	canSubmit = false;

	validation_messages = {
		'first_name': [
				{ type: 'required', message: 'first name is required.' },
				{ type: 'minlength', message: 'Username must be at least 3 characters long.' },
				{ type: 'maxlength', message: 'Username cannot be more than 12 characters long.' },
				{ type: 'validUsername', message: 'Your username has already been taken.' }
			],
		'last_name': [
				{ type: 'required', message: 'last name is required.' },
				{ type: 'minlength', message: 'Username must be at least 5 characters long.' },
				{ type: 'maxlength', message: 'Username cannot be more than 25 characters long.' },
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
  	, fb: FormBuilder) {

  	var passwordRegex = '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$';

		this.signupForm = fb.group({
			first_name: ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(12)])],
			last_name: ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(12)])],
			email: ['', Validators.compose([Validators.required, Validators.email])],
			password: ['', Validators.compose([Validators.required, Validators.pattern(passwordRegex), Validators.minLength(8)])],
		});

  }
  ionViewDidLoad() {

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
			password: this.signupForm.value.password
		};

		this.auth.signUp(form).then(
			() => this.navCtrl.setRoot(TabsPage),
			error => console.log("signup error", error)
		);


  }
}
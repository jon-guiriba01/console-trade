import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import AuthProvider = firebase.auth.AuthProvider;
import { Profile } from '../../models/profile';
import { C } from '../../config';
import { AngularFireDatabase, AngularFireList  } from 'angularfire2/database';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Game } from '../../models/game';
import { Geolocation } from '@ionic-native/geolocation';
import { GooglePlus } from '@ionic-native/google-plus';
import { ToastController } from 'ionic-angular';

@Injectable()
export class AppAuthProvider {


	public user: firebase.User;
	constructor(
		public afAuth: AngularFireAuth
    ,public  geolocation: Geolocation
		, public afdb: AngularFireDatabase
		, private googlePlus: GooglePlus
		, private toastCtrl: ToastController
		) {
	}

	signInWithEmail(credentials) {
		return this.afAuth.auth.signInWithEmailAndPassword(credentials.email,
			 credentials.password);
	}

	signUp(form) {
	 return new Promise( (resolve,reject)=>{
	 	this.afAuth.auth.createUserWithEmailAndPassword(form.email,form.password).then((res : firebase.auth.UserCredential)=>{

 			res.user.sendEmailVerification();

		 	var profile = new Profile();
		 	profile.first_name = form.firstName,
			profile.last_name = form.lastName,
			profile.email = form.email.toLowerCase()
			profile.gender = form.gender;
			profile.profileImage = this.getRandomProfileImage(form.gender);

			this.getUserCurrentPosition()
			.then(coord=>profile.last_location = coord)
			.then(()=>{

	      // console.log("[Signup]" , profile)
		  	
	  		this.afdb.list('/users').push(profile).then(snap=>{
					this.afdb.list('/users').update(snap.key,{
						key : snap.key
					})
					resolve();
				})

			})

		 }).catch( (err : firebase.auth.Error)=>{
		 		this.toastCtrl.create({
		 			message: err.message,
		 			duration: 1500,
		 			position: 'middle'
		 		})
		 		.present()
		 });

	 })
	}

	private getUserCurrentPosition(){
		return new Promise((resolve,reject)=>{
	    this.geolocation.getCurrentPosition().then((geodata) => {
	  		resolve({
	          lat:geodata.coords.latitude, 
	          long: geodata.coords.longitude
	        })

	    }).catch((error) => {
	    	resolve({});
	      console.log('Error getting location', error);
	    })
		})
	}

	get authenticated(): boolean {
		return this.user !== null;
	}

	getEmail() {
		return this.user && this.user.email;
	}

	logout(): Promise<void> {
		this.user = null;
		return this.afAuth.auth.signOut();
	}

	resetPassword(email){
		return this.afAuth.auth.sendPasswordResetEmail(email)
	}

	googleLogin() {
		// console.log("googlelogin")
			let opt = {
        'webClientId': '670922071182-meeqgiin43vk18i54v5kag524cane4d3.apps.googleusercontent.com'
      	,'offline': true
      };
      
  		// return new Promise((resolve, reject) => { 
      this.googlePlus.login(opt).then( res => {
              const googleCredential = firebase.auth.GoogleAuthProvider
                  .credential(res.idToken);
              // console.log('googleCredential', googleCredential)
              // console.log('loginRes', res)

              firebase.auth().signInWithCredential(googleCredential)
              .then( response => {
                console.log("Firebase success: " + JSON.stringify(response));
                // resolve(response)
            	}, err => {
				          console.error("Error: ", err)
				          // reject(err);
				      });

      }).catch(err => {
          console.error("Error: ", err)
          // reject(err);
      });
    // });
   }

	logInWithGoogle() {
		return this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
	}

	logInWithGoogleRedirect(){
		

		return this.afAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())
			.then((res) => {
					// console.log("redir", res);
				return this.afAuth.auth.getRedirectResult().then( result => {
					// console.log("redir2",result);
					// This gives you a Google Access Token.
					// You can use it to access the Google API.
					let token = result.credential["accessToken"];
					// The signed-in user info.
					this.user = result.user;
					// console.log(220202,token, this.user);
				}).catch(function(error) {
					// Handle Errors here.
					alert(error.message);
				});
			});
	}

	getRandomProfileImage(gender){

		let opt = this.getRandomInt(1,9);

		if(gender == "f")
			opt = this.getRandomInt(10,18);

		return [
			"https://firebasestorage.googleapis.com/v0/b/console-trade.appspot.com/o/images%2Ftemp_profile_images%2Ftemp_profile_img_1.png?alt=media&token=926bfd10-fd52-4b5b-b861-6b4cccf0c528"
			,"https://firebasestorage.googleapis.com/v0/b/console-trade.appspot.com/o/images%2Ftemp_profile_images%2Ftemp_profile_img_3.png?alt=media&token=a671e695-2842-444c-b534-3d6a30ba2575"
			,"https://firebasestorage.googleapis.com/v0/b/console-trade.appspot.com/o/images%2Ftemp_profile_images%2Ftemp_profile_img_4.png?alt=media&token=a794717a-2ad6-4748-8594-bb9a3a900db6"
			,"https://firebasestorage.googleapis.com/v0/b/console-trade.appspot.com/o/images%2Ftemp_profile_images%2Ftemp_profile_img_5.png?alt=media&token=494ba40d-8e26-4d78-8e60-db59b4ac74cf"
			,"https://firebasestorage.googleapis.com/v0/b/console-trade.appspot.com/o/images%2Ftemp_profile_images%2Ftemp_profile_img_6.png?alt=media&token=c44da33e-f090-4455-a586-e2eca21e1ce2"
			,"https://firebasestorage.googleapis.com/v0/b/console-trade.appspot.com/o/images%2Ftemp_profile_images%2Ftemp_profile_img_7.png?alt=media&token=28c6321e-43e2-454c-a5dd-01e8fab83420"
			,"https://firebasestorage.googleapis.com/v0/b/console-trade.appspot.com/o/images%2Ftemp_profile_images%2Ftemp_profile_img_10.png?alt=media&token=120deefc-643a-45d9-8775-611f2dbd9568"
			,"https://firebasestorage.googleapis.com/v0/b/console-trade.appspot.com/o/images%2Ftemp_profile_images%2Ftemp_profile_img_11.png?alt=media&token=5040e85f-6753-4a0c-8757-450a06437d32"
			,"https://firebasestorage.googleapis.com/v0/b/console-trade.appspot.com/o/images%2Ftemp_profile_images%2Ftemp_profile_img_16.png?alt=media&token=f5e6b7fc-de33-45fc-9e23-ef6176f6aa9a"
			,"https://firebasestorage.googleapis.com/v0/b/console-trade.appspot.com/o/images%2Ftemp_profile_images%2Ftemp_profile_img_17.png?alt=media&token=3068d24a-f7d4-4e3a-aa53-8214bd7c4dd7"
			,"https://firebasestorage.googleapis.com/v0/b/console-trade.appspot.com/o/images%2Ftemp_profile_images%2Ftemp_profile_img_2.png?alt=media&token=a6378dfe-5f46-4021-bcc0-d24900e32c13"
			,"https://firebasestorage.googleapis.com/v0/b/console-trade.appspot.com/o/images%2Ftemp_profile_images%2Ftemp_profile_img_8.png?alt=media&token=71bbaf6c-9d76-4b04-aba5-1591f3932192"
			,"https://firebasestorage.googleapis.com/v0/b/console-trade.appspot.com/o/images%2Ftemp_profile_images%2Ftemp_profile_img_9.png?alt=media&token=aea36a3f-d9e8-4f7b-aaee-6b348086c50c"
			,"https://firebasestorage.googleapis.com/v0/b/console-trade.appspot.com/o/images%2Ftemp_profile_images%2Ftemp_profile_img_12.png?alt=media&token=0050e68c-9baa-4ae7-bcb2-6a9ade80bfd6"
			,"https://firebasestorage.googleapis.com/v0/b/console-trade.appspot.com/o/images%2Ftemp_profile_images%2Ftemp_profile_img_13.png?alt=media&token=d15b6368-f299-46cc-8588-7f2906de7606"
			,"https://firebasestorage.googleapis.com/v0/b/console-trade.appspot.com/o/images%2Ftemp_profile_images%2Ftemp_profile_img_14.png?alt=media&token=093fd30f-a38f-4874-9654-1123c54d1cdd"
			,"https://firebasestorage.googleapis.com/v0/b/console-trade.appspot.com/o/images%2Ftemp_profile_images%2Ftemp_profile_img_15.png?alt=media&token=ad13c6ee-9421-41df-96f5-086f6b2451fc"
			,"https://firebasestorage.googleapis.com/v0/b/console-trade.appspot.com/o/images%2Ftemp_profile_images%2Ftemp_profile_img_18.png?alt=media&token=703f376c-3e36-4b31-8d6b-0abf852cd9e9"
		][opt]
	}

	getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
	}
}
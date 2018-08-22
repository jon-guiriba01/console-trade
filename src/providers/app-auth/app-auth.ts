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

@Injectable()
export class AppAuthProvider {


	public user: firebase.User;

	constructor(
		public afAuth: AngularFireAuth
    ,public  geolocation: Geolocation
		, public afdb: AngularFireDatabase
		) {

	}

	signInWithEmail(credentials) {
		return this.afAuth.auth.signInWithEmailAndPassword(credentials.email,
			 credentials.password);
	}

	signUp(form) {
	 return new Promise( (resolve,reject)=>{
	 	this.afAuth.auth.createUserWithEmailAndPassword(form.email,form.password).then((e)=>{

		 	var profile = new Profile();
		 	profile.first_name = form.firstName,
			profile.last_name = form.lastName,
			profile.email = form.email.toLowerCase()
			profile.profileImage = C.DEFAULT_PROFILE_IMG


	    this.geolocation.getCurrentPosition().then((geodata) => {
	  		profile.last_location = {
	          lat:geodata.coords.latitude, 
	          long: geodata.coords.longitude
	        }

	  		this.afdb.list('/users').push(profile).then(snap=>{
					this.afdb.list('/users').update(snap.key,{
						key : snap.key
					})
					resolve();
				})

	    }).catch((error) => {
	    	reject();
	      console.log('Error getting location', error);
	    });

		 });

	 });
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

	logInWithGoogle() {
		return this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
	}

	logInWithGoogleRedirect(){
		return this.afAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())
			.then((res) => {
					console.log("redir", res);
				return this.afAuth.auth.getRedirectResult().then( result => {
					console.log("redir2",result);
					// This gives you a Google Access Token.
					// You can use it to access the Google API.
					let token = result.credential["accessToken"];
					// The signed-in user info.
					let user = result.user;
					console.log(220202,token, user);
				}).catch(function(error) {
					// Handle Errors here.
					alert(error.message);
				});
			});
		}

}
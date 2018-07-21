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

@Injectable()
export class AppAuthProvider {


	public user: firebase.User;

	constructor(
		public afAuth: AngularFireAuth
		, public afdb: AngularFireDatabase
		) {

		afAuth.authState.subscribe(user => {
			console.log("user", user)
			this.user = user;
		});
	}

	signInWithEmail(credentials) {
		return this.afAuth.auth.signInWithEmailAndPassword(credentials.email,
			 credentials.password);
	}

	signUp(form) {
	 return this.afAuth.auth.createUserWithEmailAndPassword(form.email,form.password).then((e)=>{


		this.afdb.list('/users').push({
				first_name: form.firstName,
				last_name: form.lastName,
				email: form.email
			})
			 		
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
			.then(() => {
				return this.afAuth.auth.getRedirectResult().then( result => {
					// This gives you a Google Access Token.
					// You can use it to access the Google API.
					let token = result.credential["accessToken"];
					// The signed-in user info.
					let user = result.user;
					console.log(token, user);
				}).catch(function(error) {
					// Handle Errors here.
					alert(error.message);
				});
			});
		}

}
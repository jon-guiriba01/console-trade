import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import AuthProvider = firebase.auth.AuthProvider;
import { Profile } from '../../models/profile';
import { C } from '../../config';
import { AngularFireDatabase, AngularFireList  } from 'angularfire2/database';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Geolocation } from '@ionic-native/geolocation';

@Injectable()
export class AppAuthProvider {

	public profile: Profile = new Profile(
		"assets/imgs/temp_profile_img_1.png", 
		"Jon Carlo Guiriba", 
		"Quezon City",
		[
			{
				title: "Crash Bandicoot",
				cover_url:"https://images.igdb.com/igdb/image/upload/t_cover_big/kqlntgss9yb5invq8nxi.jpg",
				platforms: [C.PS4,C.XBOX1,C.NS]
			},
			{
				title: "Zelda Breath of the Wild",
				cover_url:"https://images.igdb.com/igdb/image/upload/t_cover_big/mievpzb9rbzzenmznvnr.jpg",
				platforms: [C.NS]
			},
			{
				title: "Detroit Become Human",
				cover_url:"https://images.igdb.com/igdb/image/upload/t_cover_big/gfzcaqqg1iinenf1rntp.jpg",
				platforms: [C.PS4]
			},
			{
				title: "Halo 5",
				cover_url:"https://images.igdb.com/igdb/image/upload/t_cover_big/rzjnrhuv5rozj52g9aq3.jpg",
				platforms: [C.XBOX1]
			},
		],
		[
			{
				title: "Zelda Breath of the Wild",
				cover_url:"https://images.igdb.com/igdb/image/upload/t_cover_big/mievpzb9rbzzenmznvnr.jpg",
				platforms: [C.NS]
			},
			{
				title: "Detroit Become Human",
				cover_url:"https://images.igdb.com/igdb/image/upload/t_cover_big/gfzcaqqg1iinenf1rntp.jpg",
				platforms: [C.PS4]
			},
			{
				title: "Halo 5",
				cover_url:"https://images.igdb.com/igdb/image/upload/t_cover_big/rzjnrhuv5rozj52g9aq3.jpg",
				platforms: [C.XBOX1]
			},
		],[
			"ps4","ns","xbox1"
		],[
			{
				location: "Casa Milan Quezon City"
			},
			{
				location: "St peter chapels novaliches"
			},
			{
				location: "SM fairview quezon city"
			},
		]
	);


	public user: firebase.User;

	constructor(
		public afAuth: AngularFireAuth
		, public afdb: AngularFireDatabase
		, private geolocation: Geolocation
		) {

		afAuth.authState.subscribe(user => {
			console.log("user", user)
			this.user = user;

			let usersRef : AngularFireList<any>;
  		let users: any;

			if(this.user != null){
				var userRef = this.afdb.list('/user', ref=> ref.orderByChild('email').equalTo(this.user.email))

				var userSub = userRef.snapshotChanges().pipe(
		      map(changes => 
		        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
		      )
   			).subscribe((res)=>{
					if(!res[0]) return;
					this.profile.name = res[0]["first_name"] + " " + res[0]["last_name"]
					
					this.geolocation.getCurrentPosition().then((geodata) => {
						userRef.update(res[0]["key"], {
							last_location: {
								lat:geodata.coords.latitude, 
								long: geodata.coords.longitude
							}
						})

						userSub.unsubscribe();

					}).catch((error) => {
					  console.log('Error getting location', error);
					});


				})

			}

		});
	}

	signInWithEmail(credentials) {
		return this.afAuth.auth.signInWithEmailAndPassword(credentials.email,
			 credentials.password);
	}

	signUp(form) {
	 return this.afAuth.auth.createUserWithEmailAndPassword(form.email,form.password).then((e)=>{


		this.afdb.list('user').push({
				first_name: form.firstName,
				last_name: form.lastName,
				email: form.email,
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
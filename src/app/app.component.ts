import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AppAuthProvider } from '../providers/app-auth/app-auth';
import { AngularFireDatabase, AngularFireList  } from 'angularfire2/database';
import { map } from 'rxjs/operators';
import { ProfileProvider } from '../providers/profile/profile';
import { Geolocation } from '@ionic-native/geolocation';

import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = null;

  constructor(
    platform: Platform
    , statusBar: StatusBar
    , splashScreen: SplashScreen
    , afdb: AngularFireDatabase
    , auth: AppAuthProvider
    , profile: ProfileProvider
    , geolocation: Geolocation
    ) {

    platform.ready().then(() => {
        // Okay, so the platform is ready and our plugins are available.
        // Here you can do any higher level native things you might need.
        statusBar.styleDefault();
        splashScreen.hide();

        
         auth.afAuth.authState
          .subscribe(
            user => {
          console.log("app component subscription")
              if (user) {

          let usersRef : AngularFireList<any>;
          let users: any;

          if(user != null){
            var userRef = afdb.list('/users', ref=> ref.orderByChild('email').equalTo(user.email))

            var userSub = userRef.snapshotChanges().pipe(
              map(changes => 
                changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
              )
             ).subscribe((res)=>{
              if(!res[0]) return;

              console.log("fb user", res)

              profile.user.profileImage = res[0]["profile_image"] ? res[0]["profile_image"] : "assets/imgs/temp_profile_img_1.png";
              profile.user.name = res[0]["first_name"] + " " + res[0]["last_name"];
              profile.user.wishList = res[0]["wishList"] ? res[0]["wishList"] : [];

              // profile.user.ownedList = res[0]["ownedlist"];

              geolocation.getCurrentPosition().then((geodata) => {
                userRef.update(res[0]["key"], {
                  last_location: {
                    lat:geodata.coords.latitude, 
                    long: geodata.coords.longitude
                  }
                })

                console.log("user from component ", profile.user)
                userSub.unsubscribe();

              }).catch((error) => {
                console.log('Error getting location', error);
              });
            })

          }


                this.rootPage = TabsPage;
              } else {
                this.rootPage = LoginPage;
              }
            },
            () => {
              this.rootPage = LoginPage;
            });
          
      });
      
  }
}
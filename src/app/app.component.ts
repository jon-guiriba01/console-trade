import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AppAuthProvider } from '../providers/app-auth/app-auth';
import { AngularFireDatabase, AngularFireList  } from 'angularfire2/database';
import { map } from 'rxjs/operators';
import { ProfileProvider } from '../providers/profile/profile';
import { Geolocation } from '@ionic-native/geolocation';
import { TradeProvider } from '../providers/trade/trade';

import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = null;

  constructor(
    public platform: Platform
    ,public  statusBar: StatusBar
    ,public  splashScreen: SplashScreen
    ,public  afdb: AngularFireDatabase
    ,public  auth: AppAuthProvider
    ,public  profile: ProfileProvider
    ,public  geolocation: Geolocation
    , public trade: TradeProvider
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
              this.rootPage = TabsPage;

              let usersRef : AngularFireList<any>;
              let users: any;

                this.initProfile(user).then((e)=>{
                  return this.initTrades(user)
                })


            }else {
              this.rootPage = LoginPage;
            }
          },
          () => {
            this.rootPage = LoginPage;
          });
          
      });
      
  }

  initTrades(user){
    this.trade.getNearestPossibleTrades(this.profile.user.key);
  }

  initProfile(user){

    return new Promise( (resolve, reject)=>{

      var userRef = this.afdb.list('/users', ref=> ref.orderByChild('email').equalTo(user.email))

      var userSub = userRef.snapshotChanges().pipe(
        map(changes => 
          changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
        )
       ).subscribe((res)=>{
        if(!res[0] || !res[0]["key"]) return;

        console.log("fb user", res)

        this.profile.user.profileImage = res[0]["profile_image"] || "assets/imgs/temp_profile_img_1.png";
        this.profile.user.name = res[0]["first_name"] + " " + res[0]["last_name"];
        this.profile.user.first_name = res[0]["first_name"] || "";
        this.profile.user.last_name = res[0]["last_name"] || "";
        this.profile.user.email = res[0]["email"] || "";
        this.profile.user.wishList = res[0]["wishList"] || [];
        this.profile.user.ownedList = res[0]["ownedList"] || [];
        this.profile.user.key = res[0].key || "";
        this.profile.user.conversations = res[0]["conversations"] || [];

        this.geolocation.getCurrentPosition().then((geodata) => {
          userRef.update(res[0]["key"], {
            last_location: {
              lat:geodata.coords.latitude, 
              long: geodata.coords.longitude
            }
          }).then((e)=>{
            resolve();
          })

          console.log("user from component ", this.profile.user)
          userSub.unsubscribe();
        }).catch((error) => {
          reject( console.log('Error getting location', error) );
        });
      })

    });
  }
}
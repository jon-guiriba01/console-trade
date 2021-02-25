var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Profile } from '../../models/profile';
import { AngularFireDatabase } from 'angularfire2/database';
import { Geolocation } from '@ionic-native/geolocation';
import { GooglePlus } from '@ionic-native/google-plus';
import { ToastController } from 'ionic-angular';
var AppAuthProvider = /** @class */ (function () {
    function AppAuthProvider(afAuth, geolocation, afdb, googlePlus, toastCtrl) {
        this.afAuth = afAuth;
        this.geolocation = geolocation;
        this.afdb = afdb;
        this.googlePlus = googlePlus;
        this.toastCtrl = toastCtrl;
    }
    AppAuthProvider.prototype.signInWithEmail = function (credentials) {
        return this.afAuth.auth.signInWithEmailAndPassword(credentials.email, credentials.password);
    };
    AppAuthProvider.prototype.signUp = function (form) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.afAuth.auth.createUserWithEmailAndPassword(form.email, form.password).then(function (res) {
                res.user.sendEmailVerification();
                var profile = new Profile();
                profile.first_name = form.firstName,
                    profile.last_name = form.lastName,
                    profile.email = form.email.toLowerCase();
                profile.gender = form.gender;
                profile.profileImage = _this.getRandomProfileImage(form.gender);
                _this.getUserCurrentPosition()
                    .then(function (coord) { return profile.last_location = coord; })
                    .then(function () {
                    // console.log("[Signup]" , profile)
                    _this.afdb.list('/users').push(profile).then(function (snap) {
                        _this.afdb.list('/users').update(snap.key, {
                            key: snap.key
                        });
                        resolve();
                    });
                });
            }).catch(function (err) {
                _this.toastCtrl.create({
                    message: err.message,
                    duration: 1500,
                    position: 'middle'
                })
                    .present();
            });
        });
    };
    AppAuthProvider.prototype.getUserCurrentPosition = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.geolocation.getCurrentPosition().then(function (geodata) {
                resolve({
                    lat: geodata.coords.latitude,
                    long: geodata.coords.longitude
                });
            }).catch(function (error) {
                resolve({});
                console.log('Error getting location', error);
            });
        });
    };
    Object.defineProperty(AppAuthProvider.prototype, "authenticated", {
        get: function () {
            return this.user !== null;
        },
        enumerable: true,
        configurable: true
    });
    AppAuthProvider.prototype.getEmail = function () {
        return this.user && this.user.email;
    };
    AppAuthProvider.prototype.logout = function () {
        this.user = null;
        return this.afAuth.auth.signOut();
    };
    AppAuthProvider.prototype.resetPassword = function (email) {
        return this.afAuth.auth.sendPasswordResetEmail(email);
    };
    AppAuthProvider.prototype.googleLogin = function () {
        // console.log("googlelogin")
        var opt = {
            'webClientId': '670922071182-meeqgiin43vk18i54v5kag524cane4d3.apps.googleusercontent.com',
            'offline': true
        };
        // return new Promise((resolve, reject) => { 
        this.googlePlus.login(opt).then(function (res) {
            var googleCredential = firebase.auth.GoogleAuthProvider
                .credential(res.idToken);
            // console.log('googleCredential', googleCredential)
            // console.log('loginRes', res)
            firebase.auth().signInWithCredential(googleCredential)
                .then(function (response) {
                console.log("Firebase success: " + JSON.stringify(response));
                // resolve(response)
            }, function (err) {
                console.error("Error: ", err);
                // reject(err);
            });
        }).catch(function (err) {
            console.error("Error: ", err);
            // reject(err);
        });
        // });
    };
    AppAuthProvider.prototype.logInWithGoogle = function () {
        return this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    };
    AppAuthProvider.prototype.logInWithGoogleRedirect = function () {
        var _this = this;
        return this.afAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())
            .then(function (res) {
            // console.log("redir", res);
            return _this.afAuth.auth.getRedirectResult().then(function (result) {
                // console.log("redir2",result);
                // This gives you a Google Access Token.
                // You can use it to access the Google API.
                var token = result.credential["accessToken"];
                // The signed-in user info.
                _this.user = result.user;
                // console.log(220202,token, this.user);
            }).catch(function (error) {
                // Handle Errors here.
                alert(error.message);
            });
        });
    };
    AppAuthProvider.prototype.getRandomProfileImage = function (gender) {
        var opt = this.getRandomInt(1, 9);
        if (gender == "f")
            opt = this.getRandomInt(10, 18);
        return [
            "https://firebasestorage.googleapis.com/v0/b/console-trade.appspot.com/o/images%2Ftemp_profile_images%2Ftemp_profile_img_1.png?alt=media&token=926bfd10-fd52-4b5b-b861-6b4cccf0c528",
            "https://firebasestorage.googleapis.com/v0/b/console-trade.appspot.com/o/images%2Ftemp_profile_images%2Ftemp_profile_img_3.png?alt=media&token=a671e695-2842-444c-b534-3d6a30ba2575",
            "https://firebasestorage.googleapis.com/v0/b/console-trade.appspot.com/o/images%2Ftemp_profile_images%2Ftemp_profile_img_4.png?alt=media&token=a794717a-2ad6-4748-8594-bb9a3a900db6",
            "https://firebasestorage.googleapis.com/v0/b/console-trade.appspot.com/o/images%2Ftemp_profile_images%2Ftemp_profile_img_5.png?alt=media&token=494ba40d-8e26-4d78-8e60-db59b4ac74cf",
            "https://firebasestorage.googleapis.com/v0/b/console-trade.appspot.com/o/images%2Ftemp_profile_images%2Ftemp_profile_img_6.png?alt=media&token=c44da33e-f090-4455-a586-e2eca21e1ce2",
            "https://firebasestorage.googleapis.com/v0/b/console-trade.appspot.com/o/images%2Ftemp_profile_images%2Ftemp_profile_img_7.png?alt=media&token=28c6321e-43e2-454c-a5dd-01e8fab83420",
            "https://firebasestorage.googleapis.com/v0/b/console-trade.appspot.com/o/images%2Ftemp_profile_images%2Ftemp_profile_img_10.png?alt=media&token=120deefc-643a-45d9-8775-611f2dbd9568",
            "https://firebasestorage.googleapis.com/v0/b/console-trade.appspot.com/o/images%2Ftemp_profile_images%2Ftemp_profile_img_11.png?alt=media&token=5040e85f-6753-4a0c-8757-450a06437d32",
            "https://firebasestorage.googleapis.com/v0/b/console-trade.appspot.com/o/images%2Ftemp_profile_images%2Ftemp_profile_img_16.png?alt=media&token=f5e6b7fc-de33-45fc-9e23-ef6176f6aa9a",
            "https://firebasestorage.googleapis.com/v0/b/console-trade.appspot.com/o/images%2Ftemp_profile_images%2Ftemp_profile_img_17.png?alt=media&token=3068d24a-f7d4-4e3a-aa53-8214bd7c4dd7",
            "https://firebasestorage.googleapis.com/v0/b/console-trade.appspot.com/o/images%2Ftemp_profile_images%2Ftemp_profile_img_2.png?alt=media&token=a6378dfe-5f46-4021-bcc0-d24900e32c13",
            "https://firebasestorage.googleapis.com/v0/b/console-trade.appspot.com/o/images%2Ftemp_profile_images%2Ftemp_profile_img_8.png?alt=media&token=71bbaf6c-9d76-4b04-aba5-1591f3932192",
            "https://firebasestorage.googleapis.com/v0/b/console-trade.appspot.com/o/images%2Ftemp_profile_images%2Ftemp_profile_img_9.png?alt=media&token=aea36a3f-d9e8-4f7b-aaee-6b348086c50c",
            "https://firebasestorage.googleapis.com/v0/b/console-trade.appspot.com/o/images%2Ftemp_profile_images%2Ftemp_profile_img_12.png?alt=media&token=0050e68c-9baa-4ae7-bcb2-6a9ade80bfd6",
            "https://firebasestorage.googleapis.com/v0/b/console-trade.appspot.com/o/images%2Ftemp_profile_images%2Ftemp_profile_img_13.png?alt=media&token=d15b6368-f299-46cc-8588-7f2906de7606",
            "https://firebasestorage.googleapis.com/v0/b/console-trade.appspot.com/o/images%2Ftemp_profile_images%2Ftemp_profile_img_14.png?alt=media&token=093fd30f-a38f-4874-9654-1123c54d1cdd",
            "https://firebasestorage.googleapis.com/v0/b/console-trade.appspot.com/o/images%2Ftemp_profile_images%2Ftemp_profile_img_15.png?alt=media&token=ad13c6ee-9421-41df-96f5-086f6b2451fc",
            "https://firebasestorage.googleapis.com/v0/b/console-trade.appspot.com/o/images%2Ftemp_profile_images%2Ftemp_profile_img_18.png?alt=media&token=703f376c-3e36-4b31-8d6b-0abf852cd9e9"
        ][opt];
    };
    AppAuthProvider.prototype.getRandomInt = function (min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    AppAuthProvider = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [AngularFireAuth,
            Geolocation,
            AngularFireDatabase,
            GooglePlus,
            ToastController])
    ], AppAuthProvider);
    return AppAuthProvider;
}());
export { AppAuthProvider };
//# sourceMappingURL=app-auth.js.map
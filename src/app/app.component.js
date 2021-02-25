var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { Platform, Events, LoadingController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AppAuthProvider } from '../providers/app-auth/app-auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { map } from 'rxjs/operators';
import { ProfileProvider } from '../providers/profile/profile';
import { Geolocation } from '@ionic-native/geolocation';
import { TradeProvider } from '../providers/trade/trade';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, afdb, auth, profile, geolocation, trade, events, loadCtrl) {
        var _this = this;
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.afdb = afdb;
        this.auth = auth;
        this.profile = profile;
        this.geolocation = geolocation;
        this.trade = trade;
        this.events = events;
        this.loadCtrl = loadCtrl;
        this.rootPage = null;
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
            auth.afAuth.authState
                .subscribe(function (user) {
                if (user) {
                    // console.log("[fb user]", user)
                    var load_1 = _this.loadCtrl.create();
                    load_1.present();
                    _this.auth.user = user;
                    _this.rootPage = TabsPage;
                    var usersRef = void 0, users = void 0;
                    _this.initProfile(user).then(function (e) {
                        load_1.dismiss();
                        _this.events.publish("profile:loaded");
                    }).catch(function (res) {
                        load_1.dismiss();
                        _this.events.publish("profile:loaded");
                    });
                }
                else {
                    _this.rootPage = LoginPage;
                }
            }, function () {
                _this.rootPage = LoginPage;
            });
        });
    }
    MyApp.prototype.initProfile = function (user) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var userRef = _this.afdb.list('/users', function (ref) { return ref.orderByChild('email').equalTo(user.email); });
            var userSub = userRef.snapshotChanges().pipe(map(function (changes) {
                return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
            })).subscribe(function (res) {
                // console.log("[initProfile]", res)
                if (!res[0] || !res[0]["key"]) {
                    return;
                }
                _this.profile.user.profileImage = res[0]["profileImage"] || "assets/imgs/temp_profile_img_1.png";
                _this.profile.user.first_name = res[0]["first_name"] || "";
                _this.profile.user.last_name = res[0]["last_name"] || "";
                _this.profile.user.email = res[0]["email"] || "";
                _this.profile.user.wishList = res[0]["wishList"] || [];
                _this.profile.user.ownedList = res[0]["ownedList"] || [];
                _this.profile.user.key = res[0].key || "";
                _this.profile.user.conversations = res[0]["conversations"] || [];
                _this.profile.user.trade_locations = res[0]["trade_locations"] || [];
                _this.profile.user.gender = res[0]["gender"] || [];
                // console.log(">>geolocation ", this.profile.user)
                _this.geolocation.getCurrentPosition({ timeout: 20000, enableHighAccuracy: true }).then(function (geodata) {
                    userRef.update(res[0]["key"], {
                        last_location: {
                            lat: geodata.coords.latitude,
                            long: geodata.coords.longitude
                        }
                    }).then(function (e) {
                        resolve();
                    });
                    // console.log(">>user from component ", this.profile.user)
                    userSub.unsubscribe();
                }).catch(function (error) {
                    reject(console.log('>>Error getting location', error));
                });
            });
        });
    };
    MyApp = __decorate([
        Component({
            templateUrl: 'app.html'
        }),
        __metadata("design:paramtypes", [Platform,
            StatusBar,
            SplashScreen,
            AngularFireDatabase,
            AppAuthProvider,
            ProfileProvider,
            Geolocation,
            TradeProvider,
            Events,
            LoadingController])
    ], MyApp);
    return MyApp;
}());
export { MyApp };
//# sourceMappingURL=app.component.js.map
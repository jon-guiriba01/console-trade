webpackJsonp([0],{

/***/ 170:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 170;

/***/ }),

/***/ 215:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 215;

/***/ }),

/***/ 358:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return firebaseConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return C; });
var firebaseConfig = {
    web: {
        apiKey: "AIzaSyCs8fw6B3hdkNBkf9o48V_0sTGhxC1Pg_E",
        authDomain: "console-trade.firebaseapp.com",
        databaseURL: "https://console-trade.firebaseio.com",
        projectId: "console-trade",
        storageBucket: "console-trade.appspot.com",
        messagingSenderId: "670922071182"
    }
};
var C = {
    PS4: "ps4",
    XBOX1: "xbox1",
    NS: "nintendo_switch",
};
//# sourceMappingURL=config.js.map

/***/ }),

/***/ 366:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__trade_trade__ = __webpack_require__(367);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__contact_contact__ = __webpack_require__(369);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__options_options__ = __webpack_require__(370);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TabsPage = /** @class */ (function () {
    function TabsPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_2__trade_trade__["a" /* TradePage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_3__contact_contact__["a" /* ContactPage */];
    }
    TabsPage.prototype.navTo = function (page) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__options_options__["a" /* OptionsPage */], {}, { animate: true, direction: 'forward' });
    };
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tabs',template:/*ion-inline-start:"C:\wamp64\www\console-trade\src\pages\tabs\tabs.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>NAVBAR</ion-title>\n\n    <ion-icon class="settings" name="settings" (click)="navTo(\'options\')"></ion-icon>\n   \n  </ion-navbar>\n</ion-header>\n\n<ion-tabs tabsPlacement="bottom" selectedIndex="1">\n  <ion-tab [root]="tab1Root" tabTitle="Profile" tabIcon="contact"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Trade" tabIcon="contacts"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Sale" tabIcon="home"></ion-tab>\n</ion-tabs>\n\n'/*ion-inline-end:"C:\wamp64\www\console-trade\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 367:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TradePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__ = __webpack_require__(368);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_app_auth_app_auth__ = __webpack_require__(46);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TradePage = /** @class */ (function () {
    function TradePage(navCtrl, platform, auth, geolocation) {
        this.navCtrl = navCtrl;
        this.platform = platform;
        this.auth = auth;
        this.geolocation = geolocation;
        this.markers = [];
    }
    TradePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.platform.ready().then(function () {
            var mapInterval = setInterval(function () {
                console.log("Interval");
                if (google) {
                    _this.geocoder = new google.maps.Geocoder();
                    _this.initMap();
                    clearInterval(mapInterval);
                }
            }, 200);
        });
    };
    TradePage.prototype.initMap = function () {
        var _this = this;
        var self = this;
        this.geolocation.getCurrentPosition().then(function (resp) {
            var mylocation = new google.maps.LatLng(resp.coords.latitude, resp.coords.longitude);
            // let mylocation = new google.maps.LatLng(14.710761999999999,121.05234990000001);
            _this.map = new google.maps.Map(_this.mapElement.nativeElement, {
                zoom: 15,
                disableDefaultUI: true,
                center: mylocation
            });
            _this.addMarker(mylocation);
            for (var _i = 0, _a = _this.auth.profile.tradeLocations; _i < _a.length; _i++) {
                var tradeLocation = _a[_i];
                _this.geocoder.geocode({ 'address': tradeLocation["location"] }, function (res, status) {
                    if (status === 'OK') {
                        self.addMarker(res[0].geometry.location, null, "assets/imgs/blue_marker.png");
                    }
                    else {
                        console.log("Geocode was not successful for the following reason: " + status);
                    }
                });
            }
            _this.geocoder.geocode({ 'address': "SM Fairview Quezon City" }, function (results, status) {
                if (status === 'OK') {
                    var marker = new google.maps.Marker({
                        map: self.map,
                        label: "6",
                        position: results[0].geometry.location
                    });
                    var infowindow = new google.maps.InfoWindow({});
                    marker.addListener('click', function () {
                        console.log("clicked");
                        var content = "<div class='infow-container'>"
                            + "<img class='infow-img' src='https://images.igdb.com/igdb/image/upload/t_thumb/mievpzb9rbzzenmznvnr.jpg'>"
                            + "<img class='infow-img' src='https://images.igdb.com/igdb/image/upload/t_thumb/kqlntgss9yb5invq8nxi.jpg'>"
                            + "<img class='infow-img' src='https://images.igdb.com/igdb/image/upload/t_thumb/gfzcaqqg1iinenf1rntp.jpg'>"
                            + "<img class='infow-img' src='https://images.igdb.com/igdb/image/upload/t_thumb/rzjnrhuv5rozj52g9aq3.jpg'>"
                            + "<img class='infow-img' src='https://images.igdb.com/igdb/image/upload/t_thumb/kqlntgss9yb5invq8nxi.jpg'>"
                            + "<img class='infow-img' src='https://images.igdb.com/igdb/image/upload/t_thumb/rzjnrhuv5rozj52g9aq3.jpg'>"
                            + "</div>";
                        infowindow.setContent(content);
                        infowindow.open(this.map, marker);
                    });
                }
                else {
                    alert('Geocode was not successful for the following reason: ' + status);
                }
            });
        }).catch(function (e) {
            console.log("errrr", e);
        });
        // let watch = this.geolocation.watchPosition();
        // watch.subscribe((data) => {
        //   this.deleteMarkers();
        //   let updatelocation = new google.maps.LatLng(data.coords.latitude,data.coords.longitude);
        //   let image = 'assets/imgs/ns_icon.png';
        //   this.addMarker(updatelocation,image);
        //   this.setMapOnAll(this.map);
        // });
    };
    TradePage.prototype.addMarker = function (position, label, image) {
        if (label === void 0) { label = null; }
        if (image === void 0) { image = null; }
        var marker = new google.maps.Marker({
            map: this.map,
            position: position,
            label: label,
            icon: image
        });
        this.markers.push(marker);
    };
    TradePage.prototype.setMapOnAll = function (map) {
        for (var i = 0; i < this.markers.length; i++) {
            this.markers[i].setMap(map);
        }
    };
    TradePage.prototype.clearMarkers = function () {
        this.setMapOnAll(null);
    };
    TradePage.prototype.deleteMarkers = function () {
        this.clearMarkers();
        this.markers = [];
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('map'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], TradePage.prototype, "mapElement", void 0);
    TradePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-trade',template:/*ion-inline-start:"C:\wamp64\www\console-trade\src\pages\trade\trade.html"*/'<ion-content >\n  <div #map id="map" style="height: 100%;"></div>\n</ion-content>'/*ion-inline-end:"C:\wamp64\www\console-trade\src\pages\trade\trade.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_3__providers_app_auth_app_auth__["a" /* AppAuthProvider */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */]])
    ], TradePage);
    return TradePage;
}());

//# sourceMappingURL=trade.js.map

/***/ }),

/***/ 369:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactPage = /** @class */ (function () {
    function ContactPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contact',template:/*ion-inline-start:"C:\wamp64\www\console-trade\src\pages\contact\contact.html"*/'<ion-content>\n  <ion-list>\n    <ion-list-header>Follow us on Twitter</ion-list-header>\n    <ion-item>\n      <ion-icon name="ionic" item-start></ion-icon>\n      @ionicframework\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\wamp64\www\console-trade\src\pages\contact\contact.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 370:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OptionsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var OptionsPage = /** @class */ (function () {
    function OptionsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    OptionsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad OptionsPage');
    };
    OptionsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-options',template:/*ion-inline-start:"C:\wamp64\www\console-trade\src\pages\options\options.html"*/'<!--\n  Generated template for the OptionsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>options</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"C:\wamp64\www\console-trade\src\pages\options\options.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */]])
    ], OptionsPage);
    return OptionsPage;
}());

//# sourceMappingURL=options.js.map

/***/ }),

/***/ 371:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__signup_signup__ = __webpack_require__(372);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_app_auth_app_auth__ = __webpack_require__(46);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, auth, fb) {
        this.navCtrl = navCtrl;
        this.auth = auth;
        this.loginForm = fb.group({
            email: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].email])],
            password: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].minLength(6)])]
        });
    }
    LoginPage.prototype.login = function () {
        var _this = this;
        var data = this.loginForm.value;
        if (!data.email) {
            return;
        }
        var credentials = {
            email: data.email,
            password: data.password
        };
        this.auth.signInWithEmail(credentials)
            .then(function () { return _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]); }, function (error) { return _this.loginError = error.message; });
    };
    LoginPage.prototype.signup = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__signup_signup__["a" /* SignupPage */]);
    };
    LoginPage.prototype.loginWithGoogle = function () {
        var _this = this;
        this.auth.signInWithGoogleRedirect()
            .then(function () { return _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]); }, function (error) { return console.log(error.message); });
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\wamp64\www\console-trade\src\pages\login\login.html"*/'<ion-content padding>\n  <form (ngSubmit)="login()" [formGroup]="loginForm">\n      <ion-list inset>\n        <ion-item [ngClass]="{ invalid: emailErrors.hasError(\'*\', [\'touched\', \'dirty\']) }">\n          <ion-input type="text" placeholder="Email" formControlName="email"></ion-input>\n        </ion-item>\n\n        <div ngxErrors="email" #emailErrors="ngxErrors">\n          <div [ngxError]="[\'email\', \'required\']" [when]="[\'touched\', \'dirty\']">It should be a valid email</div>\n        </div>\n\n        <ion-item [ngClass]="{ invalid: passwordErrors.hasError(\'*\', [\'touched\']) }">\n          <ion-input type="password" placeholder="Password" formControlName="password"></ion-input>\n        </ion-item>\n\n        <div ngxErrors="password" #passwordErrors="ngxErrors">\n          <div [ngxError]="[\'minlength\', \'required\']" [when]="[\'touched\']">It should be at least 5 characters</div>\n        </div>\n      </ion-list>\n\n      <div padding-horizontal>\n        <div class="form-error">{{loginError}}</div>\n\n        <button ion-button full type="submit" [disabled]="!loginForm.valid">Log in</button>\n        <div class="login-footer">\n          <p>\n            <a href="#">Forgot password?</a>\n            If you\'re a new user, please sign up.\n          </p>\n        </div>\n\n        <ion-list>\n\n          <button ion-button icon-start block clear (click)="loginWithGoogle()">\n            <ion-icon name="logo-google"></ion-icon>\n            Log in with Google\n          </button>\n\n          <button ion-button icon-start block clear (click)="signup()">\n            <ion-icon name="person-add"></ion-icon>\n            Sign up\n          </button>\n        </ion-list>\n      </div>\n    </form>\n</ion-content>\n'/*ion-inline-end:"C:\wamp64\www\console-trade\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_5__providers_app_auth_app_auth__["a" /* AppAuthProvider */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 372:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_app_auth_app_auth__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(90);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SignupPage = /** @class */ (function () {
    function SignupPage(navCtrl, navParams, auth, fb) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.auth = auth;
        this.canSubmit = false;
        this.validation_messages = {
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
        };
        this.passwordType = "password";
        this.showPasswordIcon = "ios-eye-off";
        var passwordRegex = '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$';
        this.signupForm = fb.group({
            first_name: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].minLength(3), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].maxLength(12)])],
            last_name: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].minLength(3), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].maxLength(12)])],
            email: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].email])],
            password: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].pattern(passwordRegex), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].minLength(8)])],
        });
    }
    SignupPage.prototype.ionViewDidLoad = function () {
    };
    SignupPage.prototype.checkForm = function () {
        this.canSubmit = this.signupForm.errors == null;
    };
    SignupPage.prototype.showPassword = function () {
        if (this.passwordType == "password") {
            this.passwordType = "text";
            this.showPasswordIcon = "ios-eye";
        }
        else {
            this.passwordType = "password";
            this.showPasswordIcon = "ios-eye-off";
        }
    };
    SignupPage.prototype.signup = function () {
        var _this = this;
        var form = {
            firstName: this.signupForm.value.first_name,
            lastName: this.signupForm.value.last_name,
            email: this.signupForm.value.email,
            password: this.signupForm.value.password
        };
        this.auth.signUp(form).then(function () { return _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]); }, function (error) { return console.log("signup error", error); });
    };
    SignupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-signup',template:/*ion-inline-start:"C:\wamp64\www\console-trade\src\pages\signup\signup.html"*/'<ion-header>\n  <ion-navbar>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  \n  <form (ngSubmit)="signup()" [formGroup]="signupForm" (change)="checkForm()">\n\n  		<h2>Signup</h2>\n      <ion-list inset>\n\n        <ion-item style="margin-top: 20px;">\n          <ion-input type="text" placeholder="First Name" formControlName="first_name"></ion-input>\n        </ion-item>\n        \n        <div class="error-list" >\n        	<div *ngFor="let validation of validation_messages.first_name" >\n	        	<h5 class="error-msg" *ngIf="signupForm.get(\'first_name\').hasError(validation.type) && (signupForm.get(\'first_name\').dirty || signupForm.get(\'first_name\').touched)" >\n	        		{{validation.message}}\n	        	</h5>\n        	</div>\n        </div>\n\n        <ion-item style="margin-top: 20px;" >\n          <ion-input type="text" placeholder="Last Name" formControlName="last_name"></ion-input>\n        </ion-item>\n        \n        <div class="error-list" >\n        	<div *ngFor="let validation of validation_messages.last_name" >\n	        	<h5 class="error-msg" *ngIf="signupForm.get(\'last_name\').hasError(validation.type) && (signupForm.get(\'last_name\').dirty || signupForm.get(\'last_name\').touched)" >\n	        		{{validation.message}}\n	        	</h5>\n        	</div>\n        </div>\n\n        <ion-item >\n          <ion-input type="text" placeholder="Email" formControlName="email"></ion-input>\n        </ion-item>\n        \n        <div class="error-list" >\n        	<div *ngFor="let validation of validation_messages.email" >\n\n	        	<h5 class="error-msg" *ngIf="signupForm.get(\'email\').hasError(\'required\') && \n	        	(signupForm.get(\'email\').dirty || signupForm.get(\'email\').touched) &&\n	        	validation.type == \'required\'\n	        	" >\n	        		{{validation.message}}\n	        	</h5>\n	        	<h5 class="error-msg" *ngIf="!signupForm.get(\'email\').hasError(\'required\') && signupForm.get(\'email\').hasError(validation.type) && (signupForm.get(\'email\').dirty || signupForm.get(\'email\').touched);" >\n	        		{{validation.message}}\n	        	</h5>\n					</div>\n				</div>\n\n        <ion-item>\n          <ion-input type="{{passwordType}}" placeholder="Password" formControlName="password"></ion-input>\n        	<ion-icon name="{{showPasswordIcon}}" (click)="showPassword()" item-right></ion-icon>\n        </ion-item>\n        \n        <div class="error-list" >\n        	<div *ngFor="let validation of validation_messages.password" >\n	        	<h5 class="error-msg" *ngIf="signupForm.get(\'password\').hasError(validation.type) && (signupForm.get(\'password\').dirty || signupForm.get(\'password\').touched)" >\n	        		{{validation.message}}\n	        	</h5>\n        	</div>\n        </div>\n\n      </ion-list>\n\n      <div class="btn-container">\n      	<button ion-button type="submit" [disabled]="!signupForm.valid">Submit</button>\n      </div>\n\n\n    </form>\n\n</ion-content>\n'/*ion-inline-end:"C:\wamp64\www\console-trade\src\pages\signup\signup.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_app_auth_app_auth__["a" /* AppAuthProvider */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]])
    ], SignupPage);
    return SignupPage;
}());

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 375:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(376);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(380);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 380:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(417);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__ = __webpack_require__(259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2_auth__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__config__ = __webpack_require__(358);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ultimate_ngxerrors__ = __webpack_require__(718);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_trade_trade__ = __webpack_require__(367);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_contact_contact__ = __webpack_require__(369);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_home_home__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_tabs_tabs__ = __webpack_require__(366);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_login_login__ = __webpack_require__(371);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_signup_signup__ = __webpack_require__(372);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_options_options__ = __webpack_require__(370);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_app_auth_app_auth__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_geolocation__ = __webpack_require__(368);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_angularfire2_database__ = __webpack_require__(359);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_10__pages_trade_trade__["a" /* TradePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_options_options__["a" /* OptionsPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_6_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_8__config__["b" /* firebaseConfig */].web),
                __WEBPACK_IMPORTED_MODULE_19_angularfire2_database__["b" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_9__ultimate_ngxerrors__["a" /* NgxErrorsModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_10__pages_trade_trade__["a" /* TradePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_options_options__["a" /* OptionsPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_7_angularfire2_auth__["a" /* AngularFireAuth */],
                __WEBPACK_IMPORTED_MODULE_18__ionic_native_geolocation__["a" /* Geolocation */],
                __WEBPACK_IMPORTED_MODULE_19_angularfire2_database__["a" /* AngularFireDatabase */],
                __WEBPACK_IMPORTED_MODULE_17__providers_app_auth_app_auth__["a" /* AppAuthProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 417:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_app_auth_app_auth__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__ = __webpack_require__(366);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_login_login__ = __webpack_require__(371);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, auth) {
        var _this = this;
        this.rootPage = null;
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
            auth.afAuth.authState.subscribe(function (user) {
                if (user) {
                    _this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__["a" /* TabsPage */];
                }
                else {
                    _this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */];
                }
            }, function () {
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */];
            });
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\wamp64\www\console-trade\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\wamp64\www\console-trade\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_4__providers_app_auth_app_auth__["a" /* AppAuthProvider */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppAuthProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_profile__ = __webpack_require__(708);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__config__ = __webpack_require__(358);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__ = __webpack_require__(359);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AppAuthProvider = /** @class */ (function () {
    function AppAuthProvider(afAuth, afdb) {
        var _this = this;
        this.afAuth = afAuth;
        this.afdb = afdb;
        this.profile = new __WEBPACK_IMPORTED_MODULE_3__models_profile__["a" /* Profile */]("assets/imgs/crow.jpg", "Jon Carlo Guiriba", "Quezon City", [
            {
                title: "Crash Bandicoot",
                cover_url: "https://images.igdb.com/igdb/image/upload/t_cover_big/kqlntgss9yb5invq8nxi.jpg",
                platforms: [__WEBPACK_IMPORTED_MODULE_4__config__["a" /* C */].PS4, __WEBPACK_IMPORTED_MODULE_4__config__["a" /* C */].XBOX1, __WEBPACK_IMPORTED_MODULE_4__config__["a" /* C */].NS]
            },
            {
                title: "Zelda Breath of the Wild",
                cover_url: "https://images.igdb.com/igdb/image/upload/t_cover_big/mievpzb9rbzzenmznvnr.jpg",
                platforms: [__WEBPACK_IMPORTED_MODULE_4__config__["a" /* C */].NS]
            },
            {
                title: "Detroit Become Human",
                cover_url: "https://images.igdb.com/igdb/image/upload/t_cover_big/gfzcaqqg1iinenf1rntp.jpg",
                platforms: [__WEBPACK_IMPORTED_MODULE_4__config__["a" /* C */].PS4]
            },
            {
                title: "Halo 5",
                cover_url: "https://images.igdb.com/igdb/image/upload/t_cover_big/rzjnrhuv5rozj52g9aq3.jpg",
                platforms: [__WEBPACK_IMPORTED_MODULE_4__config__["a" /* C */].XBOX1]
            },
        ], [
            "ps4", "ns", "xbox1"
        ], [
            {
                location: "Casa Milan Quezon City"
            },
            {
                location: "St peter chapels novaliches"
            },
            {
                location: "SM fairview quezon city"
            },
        ]);
        afAuth.authState.subscribe(function (user) {
            _this.user = user;
        });
    }
    AppAuthProvider.prototype.signInWithEmail = function (credentials) {
        return this.afAuth.auth.signInWithEmailAndPassword(credentials.email, credentials.password);
    };
    AppAuthProvider.prototype.signUp = function (form) {
        var _this = this;
        return this.afAuth.auth.createUserWithEmailAndPassword(form.email, form.password).then(function (e) {
            _this.afdb.list('user').push({
                first_name: form.firstName,
                last_name: form.lastName,
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
    AppAuthProvider.prototype.signOut = function () {
        return this.afAuth.auth.signOut();
    };
    AppAuthProvider.prototype.signInWithGoogle = function () {
        return this.afAuth.auth.signInWithPopup(new __WEBPACK_IMPORTED_MODULE_2_firebase_app__["auth"].GoogleAuthProvider());
    };
    AppAuthProvider.prototype.signInWithGoogleRedirect = function () {
        var _this = this;
        return this.afAuth.auth.signInWithRedirect(new __WEBPACK_IMPORTED_MODULE_2_firebase_app__["auth"].GoogleAuthProvider())
            .then(function () {
            return _this.afAuth.auth.getRedirectResult().then(function (result) {
                // This gives you a Google Access Token.
                // You can use it to access the Google API.
                var token = result.credential["accessToken"];
                // The signed-in user info.
                var user = result.user;
                console.log(token, user);
            }).catch(function (error) {
                // Handle Errors here.
                alert(error.message);
            });
        });
    };
    AppAuthProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], AppAuthProvider);
    return AppAuthProvider;
}());

//# sourceMappingURL=app-auth.js.map

/***/ }),

/***/ 708:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Profile; });
var Profile = /** @class */ (function () {
    function Profile(profileImage, name, location, tradeList, consoles, tradeLocations) {
        if (profileImage === void 0) { profileImage = null; }
        if (name === void 0) { name = null; }
        if (location === void 0) { location = null; }
        if (tradeList === void 0) { tradeList = null; }
        if (consoles === void 0) { consoles = null; }
        if (tradeLocations === void 0) { tradeLocations = null; }
        this.profileImage = profileImage;
        this.name = name;
        this.location = location;
        this.tradeList = tradeList;
        this.consoles = consoles;
        this.tradeLocations = tradeLocations;
    }
    return Profile;
}());

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 90:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_app_auth_app_auth__ = __webpack_require__(46);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, auth) {
        this.navCtrl = navCtrl;
        this.auth = auth;
    }
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\wamp64\www\console-trade\src\pages\home\home.html"*/'<ion-content>\n\n<div class="profile">\n  <div class="profile-image">\n    <img class="circle-head" src="{{auth.profile.profileImage}}">\n    <h5>edit</h5>\n  </div>\n  <div class="profile-info-wrapper">\n    <div class="profile-info">\n      <h4>{{auth.profile.name}}</h4>\n      <h5>{{auth.profile.location}}</h5>\n    </div>\n  </div>\n</div>\n\n<hr inset padding-horizontal>\n\n<div class="trade-info" padding-horizontal>\n  <ion-item  inset >\n    <ion-input type="text" placeholder="Add a game"></ion-input>\n  </ion-item>\n  <h5 float-right class="tip-text">*tap games to toggle</h5>\n  \n  <h5 style="padding-top: 30px;">Looking for</h5>\n  <div class="trade-list">\n    <div class="trade-item" *ngFor="let item of auth.profile.tradeList">\n      <div class="trade-img">\n        <img class="fit-img" src="{{item.cover_url}}">\n      </div>\n      <div class="platforms">\n        <img [ngClass]="{\'faded\': item.platforms.indexOf(\'xbox1\') == -1}" src="assets/imgs/xbox_icon.png">\n        <img [ngClass]="{\'faded\': item.platforms.indexOf(\'p4\') == -1}" src="assets/imgs/ps4_icon.png">\n        <img [ngClass]="{\'faded\': item.platforms.indexOf(\'ns\') == -1}" src="assets/imgs/ns_icon.png">\n      </div>\n    </div>    \n  </div>\n\n  <h5>Has</h5>\n  \n  <div class="trunk">\n    <div class="trade-item" *ngFor="let item of auth.profile.tradeList">\n      <div class="trade-img">\n        <img class="fit-img" src="{{item.cover_url}}">\n      </div>\n\n      <div class="platforms">\n        <img [ngClass]="{\'faded\': item.platforms.indexOf(\'xbox1\') == -1}" src="assets/imgs/xbox_icon.png">\n        <img [ngClass]="{\'faded\': item.platforms.indexOf(\'p4\') == -1}" src="assets/imgs/ps4_icon.png">\n        <img [ngClass]="{\'faded\': item.platforms.indexOf(\'ns\') == -1}" src="assets/imgs/ns_icon.png">\n      </div>\n      \n    </div>    \n  </div>\n</div>\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\wamp64\www\console-trade\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_app_auth_app_auth__["a" /* AppAuthProvider */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ })

},[375]);
//# sourceMappingURL=main.js.map
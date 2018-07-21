webpackJsonp([0],{

/***/ 191:
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
webpackEmptyAsyncContext.id = 191;

/***/ }),

/***/ 234:
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
webpackEmptyAsyncContext.id = 234;

/***/ }),

/***/ 290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirebaseappProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(90);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
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




/*
  Generated class for the FirebaseappProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var FirebaseappProvider = /** @class */ (function () {
    function FirebaseappProvider(http, afdb) {
        this.http = http;
        this.afdb = afdb;
        console.log('Hello FirebaseappProvider Provider');
    }
    FirebaseappProvider.prototype.updateUserWishList = function (user, wishList) {
        var userRef = this.afdb.list('/users', function (ref) { return ref.orderByChild('email').equalTo(user.email); });
        var userSub = userRef.snapshotChanges().pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["map"])(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        })).subscribe(function (res) {
            console.log("get user data", res);
            if (!res[0])
                return;
            var key = res[0]["key"];
            console.log("adding to wishlist[" + key + "]", wishList);
            userRef.update(key, {
                wishList: wishList
            });
            userSub.unsubscribe();
        });
    };
    FirebaseappProvider.prototype.updateUserOwnedList = function (user, ownedList) {
        var userRef = this.afdb.list('/users', function (ref) { return ref.orderByChild('email').equalTo(user.email); });
        var userSub = userRef.snapshotChanges().pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["map"])(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        })).subscribe(function (res) {
            console.log("get user data", res);
            if (!res[0])
                return;
            var key = res[0]["key"];
            console.log("adding to owned[" + key + "]", ownedList);
            userRef.update(key, {
                ownedList: ownedList
            });
            userSub.unsubscribe();
        });
    };
    FirebaseappProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], FirebaseappProvider);
    return FirebaseappProvider;
}());

//# sourceMappingURL=firebaseapp.js.map

/***/ }),

/***/ 291:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TradePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_app_auth_app_auth__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_profile_profile__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_trade_trade__ = __webpack_require__(292);
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
    function TradePage(navCtrl, platform, auth, geolocation, trade, profile) {
        this.navCtrl = navCtrl;
        this.platform = platform;
        this.auth = auth;
        this.geolocation = geolocation;
        this.trade = trade;
        this.profile = profile;
        this.markers = [];
    }
    TradePage.prototype.ionViewDidLoad = function () {
        //  this.platform.ready().then(() => {
        // if(google){
        // 		this.geocoder = new google.maps.Geocoder();
        //   	this.initMap();
        // }
        // });
    };
    TradePage.prototype.getNearestPossibleTrades = function () {
        console.log("getNearestPossibleTrades");
        this.trade.getNearestPossibleTrades(this.auth.user.email);
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
            for (var _i = 0, _a = _this.profile.user.tradeLocations; _i < _a.length; _i++) {
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
            selector: 'page-trade',template:/*ion-inline-start:"C:\wamp64\www\console-trade\src\pages\trade\trade.html"*/'<ion-content >\n<div style="height: 100%;" (click)="getNearestPossibleTrades()">\n	\n</div>\n <!--  <div #map id="map" style="height: 100%;"></div> -->\n</ion-content>'/*ion-inline-end:"C:\wamp64\www\console-trade\src\pages\trade\trade.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_3__providers_app_auth_app_auth__["a" /* AppAuthProvider */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_5__providers_trade_trade__["a" /* TradeProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_profile_profile__["a" /* ProfileProvider */]])
    ], TradePage);
    return TradePage;
}());

//# sourceMappingURL=trade.js.map

/***/ }),

/***/ 292:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TradeProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TradeProvider = /** @class */ (function () {
    function TradeProvider(http) {
        this.http = http;
    }
    TradeProvider.prototype.getNearestPossibleTrades = function (email) {
        console.log("provider getNPT: " + email);
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]()
            .set("key", "eJQ0S7PjPs9BJJEJY8fXaJTNrngJIko4");
        // var url = "https://lemon-data-center-js.herokuapp.com/";
        var url = 'http://localhost:3000/api/getNPT?email=' + email;
        this.http.get(url, { headers: headers }).subscribe(function (res) {
            console.log("res", res);
        });
    };
    TradeProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], TradeProvider);
    return TradeProvider;
}());

//# sourceMappingURL=trade.js.map

/***/ }),

/***/ 293:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
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

/***/ 294:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_app_auth_app_auth__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_profile_profile__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_igdb_igdb__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_game__ = __webpack_require__(501);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__config__ = __webpack_require__(296);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ProfilePage = /** @class */ (function () {
    function ProfilePage(navCtrl, igdb, auth, profile) {
        this.navCtrl = navCtrl;
        this.igdb = igdb;
        this.auth = auth;
        this.profile = profile;
    }
    ProfilePage.prototype.toggleItemOwnership = function (item, owned) {
        this.profile.toggleItemOwnership(this.auth.user, item, owned);
    };
    ProfilePage.prototype.toggleItemPlatform = function (item, platform, owned) {
        this.profile.toggleItemPlatform(this.auth.user, item, platform, owned);
    };
    ProfilePage.prototype.removeItem = function (item, owned) {
        console.log("pressing");
        this.profile.removeItem(this.auth.user, item, owned);
    };
    ProfilePage.prototype.searchtTitle = function () {
        var _this = this;
        clearTimeout(this.timeout);
        this.timeout = setTimeout(function () {
            if (!_this.searchInput)
                return;
            if (_this.searchInput.length > 2)
                _this.igdb.search(_this.searchInput);
        }, 500);
    };
    ProfilePage.prototype.clearSearch = function () {
        this.igdb.searchOptions = [];
    };
    ProfilePage.prototype.addGameToProfile = function (option) {
        var platforms = [];
        if (option.platforms) {
            if (option.platforms.includes(__WEBPACK_IMPORTED_MODULE_6__config__["a" /* C */].PS4_ID))
                platforms.push("ps4");
            if (option.platforms.includes(__WEBPACK_IMPORTED_MODULE_6__config__["a" /* C */].NS_ID))
                platforms.push("nintendo_switch");
            if (option.platforms.includes(__WEBPACK_IMPORTED_MODULE_6__config__["a" /* C */].XBOX1_ID))
                platforms.push("xbox1");
        }
        var url = option.cover.url.replace("thumb", "cover_big");
        console.log("addGameToProfile: ", option);
        var game = new __WEBPACK_IMPORTED_MODULE_5__models_game__["a" /* Game */](option.id, option.name, url, platforms);
        console.log("addGameToProfile [game]: ", game);
        this.profile.addGameToProfile(this.auth.user, game, false);
        this.searchInput = null;
        this.igdb.searchOptions = [];
    };
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-profile',template:/*ion-inline-start:"C:\wamp64\www\console-trade\src\pages\profile\profile.html"*/'<ion-content class="ps4-bg" (click)="clearSearch()">\n\n\n\n<div class="profile">\n\n  <div class="profile-image">\n\n    <img class="circle-head" src="{{profile.user.profileImage}}">\n\n  </div>\n\n  <div class="profile-info-wrapper">\n\n    <div class="profile-info">\n\n        <h4>{{profile.user.name}}</h4>\n\n        <!-- <ion-icon name="create"></ion-icon> -->\n\n      <!-- <h5>{{profile.user.location}}</h5> -->\n\n    </div>\n\n  </div>\n\n</div>\n\n\n\n<hr inset padding-horizontal style="background-color: #fff;">\n\n\n\n<div class="trade-info" >\n\n  \n\n  <div class="game-input-wrapper">\n\n    <ion-item  inset >\n\n      <ion-input (ionChange)="searchtTitle()" type="text" [(ngModel)]="searchInput" placeholder="Add a game"></ion-input>\n\n    </ion-item>\n\n    <h5 float-right class="tip-text">*tap games to toggle</h5>\n\n    <div class="autocomplete">\n\n      <ion-list>\n\n        <ion-item class="autocomplete-item" *ngFor="let item of igdb.searchOptions" (click)="addGameToProfile(item)">\n\n          <!-- <img *ngIf="item.cover != null" src="{{item.cover.url}}"> -->\n\n          <h5>{{item.name}}</h5>\n\n        </ion-item>\n\n      </ion-list>\n\n    </div>\n\n  </div>\n\n  \n\n  <h5 class="divider" style="padding-top: 30px;">Looking for</h5>\n\n\n\n  <div class="display-grid">\n\n    <div class="trade-item" *ngFor="let item of profile.user.wishList">\n\n      <div class="trade-img" (tap)="toggleItemOwnership(item, true)" (onPressing)="removeItem(item, false)">\n\n        <img class="fit-img" src="{{item.cover_url}}">\n\n      </div>\n\n      <div class="platforms">\n\n        <img (tap)="toggleItemPlatform(item, \'xbox1\', false)" [ngClass]="{\'faded\': item.platforms.indexOf(\'xbox1\') == -1}" src="assets/imgs/xbox_icon.png">\n\n        <img (tap)="toggleItemPlatform(item, \'ps4\', false)" [ngClass]="{\'faded\': item.platforms.indexOf(\'ps4\') == -1}" src="assets/imgs/ps4_icon.png">\n\n        <img (tap)="toggleItemPlatform(item, \'nintendo_switch\', false)" [ngClass]="{\'faded\': item.platforms.indexOf(\'nintendo_switch\') == -1}" src="assets/imgs/ns_icon.png">\n\n      </div>\n\n    </div>    \n\n  </div>\n\n\n\n  <h5 class="divider">Owned</h5>\n\n  \n\n  <div class="display-grid">\n\n    <div class="trade-item" *ngFor="let item of profile.user.ownedList">\n\n      <div class="trade-img" (tap)="toggleItemOwnership(item, false)" (onPressing)="removeItem(item, false)">\n\n        <img class="fit-img" src="{{item.cover_url}}">\n\n      </div>\n\n      <div class="platforms">\n\n        <img (tap)="toggleItemPlatform(item, \'xbox1\', true)" [ngClass]="{\'faded\': item.platforms.indexOf(\'xbox1\') == -1}" src="assets/imgs/xbox_icon.png">\n\n        <img (tap)="toggleItemPlatform(item, \'ps4\', true)" [ngClass]="{\'faded\': item.platforms.indexOf(\'ps4\') == -1}" src="assets/imgs/ps4_icon.png">\n\n        <img (tap)="toggleItemPlatform(item, \'nintendo_switch\', true)" [ngClass]="{\'faded\': item.platforms.indexOf(\'nintendo_switch\') == -1}" src="assets/imgs/ns_icon.png">\n\n      </div>\n\n      \n\n    </div>    \n\n  </div>\n\n</div>\n\n\n\n\n\n</ion-content>\n\n\n\n'/*ion-inline-end:"C:\wamp64\www\console-trade\src\pages\profile\profile.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_igdb_igdb__["a" /* IgdbProvider */],
            __WEBPACK_IMPORTED_MODULE_2__providers_app_auth_app_auth__["a" /* AppAuthProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_profile_profile__["a" /* ProfileProvider */]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 295:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IgdbProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var IgdbProvider = /** @class */ (function () {
    function IgdbProvider(http) {
        this.http = http;
        // const PS4_ID = 48;
        // const NINTENDO_SWITCH_ID = 130;
        // const XBOX_ONE = 49;
        this.searchOptions = [];
    }
    IgdbProvider.prototype.search = function (input) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]()
            .set("user-key", "5227ae6e46cee2806cf25779d4c97966")
            .set("Accept", "application/json");
        var search = "https://api-endpoint.igdb.com/games/?search=" + input + "&filter[release_dates.platform][any]=48,49,130&fields=*";
        // var search = 'https://api-endpoint.igdb.com/games/?search=' + input +
        // "&filter[release_dates.platform][any]=48,49,130" +
        // "&filter[version_parent][not_exists]=1" +
        // "&fields=*";
        this.http.get(search, { headers: headers }).subscribe(function (res) {
            var gameIds = "";
            console.log("res", res);
            var first = true;
            for (var _i = 0, res_1 = res; _i < res_1.length; _i++) {
                var r = res_1[_i];
                if (first)
                    gameIds += r["id"];
                else
                    gameIds += "," + r["id"];
                first = false;
            }
            _this.searchOptions = res;
        });
    };
    IgdbProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], IgdbProvider);
    return IgdbProvider;
}());

//# sourceMappingURL=igdb.js.map

/***/ }),

/***/ 296:
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
    PS4_ID: 48,
    NS_ID: 130,
    XBOX1_ID: 49,
};
//# sourceMappingURL=config.js.map

/***/ }),

/***/ 297:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OptionsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_app_auth_app_auth__ = __webpack_require__(45);
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
    function OptionsPage(navCtrl, navParams, auth) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.auth = auth;
    }
    OptionsPage.prototype.ionViewDidLoad = function () {
    };
    OptionsPage.prototype.logout = function () {
        this.auth.logout();
    };
    OptionsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-options',template:/*ion-inline-start:"C:\wamp64\www\console-trade\src\pages\options\options.html"*/'<!--\n  Generated template for the OptionsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Options</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list inset>\n  	<ion-item (click)="logout()">\n  		Logout\n  	</ion-item>\n	</ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\wamp64\www\console-trade\src\pages\options\options.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_app_auth_app_auth__["a" /* AppAuthProvider */]])
    ], OptionsPage);
    return OptionsPage;
}());

//# sourceMappingURL=options.js.map

/***/ }),

/***/ 298:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__signup_signup__ = __webpack_require__(299);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tabs_tabs__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_app_auth_app_auth__ = __webpack_require__(45);
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
            .then(function () { return _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__tabs_tabs__["a" /* TabsPage */]); }, function (error) { return _this.loginError = error.message; });
    };
    LoginPage.prototype.signup = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__signup_signup__["a" /* SignupPage */]);
    };
    LoginPage.prototype.loginWithGoogle = function () {
        var _this = this;
        this.auth.logInWithGoogle()
            .then(function () { return _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__tabs_tabs__["a" /* TabsPage */]); }, function (error) { return console.log(error.message); });
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\wamp64\www\console-trade\src\pages\login\login.html"*/'<ion-content padding>\n  <form [formGroup]="loginForm">\n      <ion-list inset>\n        <ion-item [ngClass]="{ invalid: emailErrors.hasError(\'*\', [\'touched\', \'dirty\']) }">\n          <ion-input type="text" placeholder="Email" formControlName="email"></ion-input>\n        </ion-item>\n\n        <div ngxErrors="email" #emailErrors="ngxErrors">\n          <div [ngxError]="[\'email\', \'required\']" [when]="[\'touched\', \'dirty\']">It should be a valid email</div>\n        </div>\n\n        <ion-item [ngClass]="{ invalid: passwordErrors.hasError(\'*\', [\'touched\']) }">\n          <ion-input type="password" placeholder="Password" formControlName="password"></ion-input>\n        </ion-item>\n\n        <div ngxErrors="password" #passwordErrors="ngxErrors">\n          <div [ngxError]="[\'minlength\', \'required\']" [when]="[\'touched\']">It should be at least 5 characters</div>\n        </div>\n      </ion-list>\n\n      <div padding-horizontal>\n        <div class="form-error">{{loginError}}</div>\n\n        <button ion-button full type="submit" [disabled]="!loginForm.valid" (click)="login()" >Log in</button>\n        <div class="login-footer">\n          <p>\n            <a href="#">Forgot password?</a>\n            If you\'re a new user, please sign up.\n          </p>\n        </div>\n      </div>\n\n        <ion-list>\n          <button ion-button icon-start block clear (click)="loginWithGoogle()">\n            <ion-icon name="logo-google"></ion-icon>\n            Log in with Google\n          </button>\n\n          <button ion-button icon-start block clear (click)="signup()">\n            <ion-icon name="person-add"></ion-icon>\n            Sign up\n          </button>\n        </ion-list>\n    </form>\n</ion-content>\n'/*ion-inline-end:"C:\wamp64\www\console-trade\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_5__providers_app_auth_app_auth__["a" /* AppAuthProvider */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 299:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_app_auth_app_auth__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tabs_tabs__ = __webpack_require__(92);
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
        this.auth.signUp(form).then(function () { return _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__tabs_tabs__["a" /* TabsPage */]); }, function (error) { return console.log("signup error", error); });
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

/***/ 302:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(303);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(425);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 425:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(465);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2_auth__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__config__ = __webpack_require__(296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ultimate_ngxerrors__ = __webpack_require__(502);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_trade_trade__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_contact_contact__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_profile_profile__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_tabs_tabs__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_login_login__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_signup_signup__ = __webpack_require__(299);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_options_options__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_app_auth_app_auth__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_geolocation__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_angularfire2_database__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__providers_igdb_igdb__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__angular_common_http__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__providers_trade_trade__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__providers_profile_profile__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pipes_keys_keys__ = __webpack_require__(515);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__providers_firebaseapp_firebaseapp__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26_ionic_long_press__ = __webpack_require__(516);
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
                __WEBPACK_IMPORTED_MODULE_12__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_options_options__["a" /* OptionsPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_24__pipes_keys_keys__["a" /* KeysPipe */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_6_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_8__config__["b" /* firebaseConfig */].web),
                __WEBPACK_IMPORTED_MODULE_19_angularfire2_database__["b" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_21__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_26_ionic_long_press__["a" /* LongPressModule */],
                __WEBPACK_IMPORTED_MODULE_9__ultimate_ngxerrors__["a" /* NgxErrorsModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_10__pages_trade_trade__["a" /* TradePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_profile_profile__["a" /* ProfilePage */],
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
                __WEBPACK_IMPORTED_MODULE_17__providers_app_auth_app_auth__["a" /* AppAuthProvider */],
                __WEBPACK_IMPORTED_MODULE_21__angular_common_http__["a" /* HttpClient */],
                __WEBPACK_IMPORTED_MODULE_20__providers_igdb_igdb__["a" /* IgdbProvider */],
                __WEBPACK_IMPORTED_MODULE_22__providers_trade_trade__["a" /* TradeProvider */],
                __WEBPACK_IMPORTED_MODULE_23__providers_profile_profile__["a" /* ProfileProvider */],
                __WEBPACK_IMPORTED_MODULE_25__providers_firebaseapp_firebaseapp__["a" /* FirebaseappProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 45:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppAuthProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(90);
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
        afAuth.authState.subscribe(function (user) {
            console.log("user", user);
            _this.user = user;
        });
    }
    AppAuthProvider.prototype.signInWithEmail = function (credentials) {
        return this.afAuth.auth.signInWithEmailAndPassword(credentials.email, credentials.password);
    };
    AppAuthProvider.prototype.signUp = function (form) {
        var _this = this;
        return this.afAuth.auth.createUserWithEmailAndPassword(form.email, form.password).then(function (e) {
            _this.afdb.list('/users').push({
                first_name: form.firstName,
                last_name: form.lastName,
                email: form.email,
                wishList: {
                    empty: true
                },
                ownedList: {
                    empty: true
                },
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
    AppAuthProvider.prototype.logInWithGoogle = function () {
        return this.afAuth.auth.signInWithPopup(new __WEBPACK_IMPORTED_MODULE_2_firebase_app__["auth"].GoogleAuthProvider());
    };
    AppAuthProvider.prototype.logInWithGoogleRedirect = function () {
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
            __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], AppAuthProvider);
    return AppAuthProvider;
}());

//# sourceMappingURL=app-auth.js.map

/***/ }),

/***/ 465:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_app_auth_app_auth__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_operators__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_profile_profile__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_geolocation__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_login_login__ = __webpack_require__(298);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
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











var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, afdb, auth, profile, geolocation) {
        var _this = this;
        this.rootPage = null;
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
            auth.afAuth.authState
                .subscribe(function (user) {
                console.log("app component subscription");
                if (user) {
                    var usersRef = void 0;
                    var users = void 0;
                    if (user != null) {
                        var userRef = afdb.list('/users', function (ref) { return ref.orderByChild('email').equalTo(user.email); });
                        var userSub = userRef.snapshotChanges().pipe(Object(__WEBPACK_IMPORTED_MODULE_6_rxjs_operators__["map"])(function (changes) {
                            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
                        })).subscribe(function (res) {
                            if (!res[0])
                                return;
                            console.log("fb user", res);
                            profile.user.profileImage = res[0]["profile_image"] ? res[0]["profile_image"] : "assets/imgs/temp_profile_img_1.png";
                            profile.user.name = res[0]["first_name"] + " " + res[0]["last_name"];
                            profile.user.wishList = res[0]["wishList"] ? res[0]["wishList"] : [];
                            profile.user.ownedList = res[0]["ownedList"] ? res[0]["ownedList"] : [];
                            geolocation.getCurrentPosition().then(function (geodata) {
                                userRef.update(res[0]["key"], {
                                    last_location: {
                                        lat: geodata.coords.latitude,
                                        long: geodata.coords.longitude
                                    }
                                });
                                console.log("user from component ", profile.user);
                                userSub.unsubscribe();
                            }).catch(function (error) {
                                console.log('Error getting location', error);
                            });
                        });
                    }
                    _this.rootPage = __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__["a" /* TabsPage */];
                }
                else {
                    _this.rootPage = __WEBPACK_IMPORTED_MODULE_10__pages_login_login__["a" /* LoginPage */];
                }
            }, function () {
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_10__pages_login_login__["a" /* LoginPage */];
            });
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\wamp64\www\console-trade\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\wamp64\www\console-trade\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_4__providers_app_auth_app_auth__["a" /* AppAuthProvider */],
            __WEBPACK_IMPORTED_MODULE_7__providers_profile_profile__["a" /* ProfileProvider */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_geolocation__["a" /* Geolocation */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 498:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Profile; });
var Profile = /** @class */ (function () {
    function Profile() {
        this.wishList = [];
        this.ownedList = [];
        this.consoles = [];
        this.tradeLocations = [];
    }
    return Profile;
}());

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 501:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Game; });
var Game = /** @class */ (function () {
    function Game(id, name, cover_url, platforms) {
        if (id === void 0) { id = null; }
        if (name === void 0) { name = null; }
        if (cover_url === void 0) { cover_url = null; }
        if (platforms === void 0) { platforms = null; }
        this.id = id;
        this.name = name;
        this.cover_url = cover_url;
        this.platforms = platforms;
    }
    return Game;
}());

//# sourceMappingURL=game.js.map

/***/ }),

/***/ 515:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KeysPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var KeysPipe = /** @class */ (function () {
    function KeysPipe() {
    }
    KeysPipe.prototype.transform = function (value, args) {
        var values = [];
        for (var key in value) {
            values.push(value);
        }
        return values;
    };
    KeysPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({
            name: 'keys',
        })
    ], KeysPipe);
    return KeysPipe;
}());

//# sourceMappingURL=keys.js.map

/***/ }),

/***/ 91:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_profile__ = __webpack_require__(498);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_underscore_underscore__ = __webpack_require__(499);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_underscore_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_underscore_underscore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_firebaseapp_firebaseapp__ = __webpack_require__(290);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProfileProvider = /** @class */ (function () {
    function ProfileProvider(http, fbapp) {
        this.http = http;
        this.fbapp = fbapp;
        this.allListsUpdateTimeout = null;
        this.wishListUpdateTimeout = null;
        this.ownedListUpdateTimeout = null;
        this.user = new __WEBPACK_IMPORTED_MODULE_2__models_profile__["a" /* Profile */]();
    }
    ProfileProvider.prototype.addGameToProfile = function (user, game, owned) {
        console.log("addGamToProfile: ", game);
        this.user.wishList.push(game);
        this.fbapp.updateUserWishList(user, this.user.wishList);
    };
    ProfileProvider.prototype.toggleItemOwnership = function (authUser, item, owned) {
        console.log(item);
        if (owned) {
            var duplicate = __WEBPACK_IMPORTED_MODULE_3_underscore_underscore__["find"](this.user.ownedList, function (e) { return e.name === item.name; });
            if (duplicate)
                return;
            this.user.ownedList.push(item);
            this.user.wishList = __WEBPACK_IMPORTED_MODULE_3_underscore_underscore__["reject"](this.user.wishList, function (e) { return e.name === item.name; });
        }
        else {
            var duplicate = __WEBPACK_IMPORTED_MODULE_3_underscore_underscore__["find"](this.user.wishList, function (e) { return e.name === item.name; });
            if (duplicate)
                return;
            this.user.wishList.push(item);
            this.user.ownedList = __WEBPACK_IMPORTED_MODULE_3_underscore_underscore__["reject"](this.user.ownedList, function (e) { return e.name === item.name; });
        }
        this.startAllListsUpdateTImer(authUser);
    };
    ProfileProvider.prototype.toggleItemPlatform = function (authUser, item, platform, owned) {
        if (__WEBPACK_IMPORTED_MODULE_3_underscore_underscore__["contains"](item.platforms, platform)) {
            item.platforms = __WEBPACK_IMPORTED_MODULE_3_underscore_underscore__["reject"](item.platforms, function (el) { return el === platform; });
        }
        else {
            item.platforms.push(platform);
        }
        if (owned) {
            this.startWishListUpdateTImer(authUser);
        }
        else {
            this.startOwnedListUpdateTImer(authUser);
        }
    };
    ProfileProvider.prototype.removeItem = function (authUser, item, owned) {
        if (owned) {
            this.user.ownedList = __WEBPACK_IMPORTED_MODULE_3_underscore_underscore__["reject"](this.user.ownedList, function (el) { return el.name === item.name; });
            this.startOwnedListUpdateTImer(authUser);
        }
        else {
            this.user.wishList = __WEBPACK_IMPORTED_MODULE_3_underscore_underscore__["reject"](this.user.wishList, function (el) { return el.name === item.name; });
            this.startWishListUpdateTImer(authUser);
        }
    };
    ProfileProvider.prototype.startAllListsUpdateTImer = function (authUser) {
        clearTimeout(this.allListsUpdateTimeout);
        var self = this;
        this.allListsUpdateTimeout = setTimeout(function () {
            self.fbapp.updateUserWishList(authUser, self.user.wishList);
            self.fbapp.updateUserOwnedList(authUser, self.user.ownedList);
        }, 1000);
    };
    ProfileProvider.prototype.startWishListUpdateTImer = function (authUser) {
        clearTimeout(this.wishListUpdateTimeout);
        var self = this;
        this.wishListUpdateTimeout = setTimeout(function () {
            self.fbapp.updateUserWishList(authUser, self.user.wishList);
        }, 1000);
    };
    ProfileProvider.prototype.startOwnedListUpdateTImer = function (authUser) {
        clearTimeout(this.ownedListUpdateTimeout);
        var self = this;
        this.ownedListUpdateTimeout = setTimeout(function () {
            self.fbapp.updateUserOwnedList(authUser, self.user.ownedList);
        }, 1000);
    };
    ProfileProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_4__providers_firebaseapp_firebaseapp__["a" /* FirebaseappProvider */]])
    ], ProfileProvider);
    return ProfileProvider;
}());

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 92:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__trade_trade__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__contact_contact__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__profile_profile__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__options_options__ = __webpack_require__(297);
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
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_4__profile_profile__["a" /* ProfilePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_2__trade_trade__["a" /* TradePage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_3__contact_contact__["a" /* ContactPage */];
    }
    TabsPage.prototype.navTo = function (page) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__options_options__["a" /* OptionsPage */], {}, { animate: true, direction: 'forward' });
    };
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tabs',template:/*ion-inline-start:"C:\wamp64\www\console-trade\src\pages\tabs\tabs.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>NAVBAR</ion-title>\n\n    <ion-icon class="settings" name="settings" (click)="navTo(\'options\')"></ion-icon>\n   \n  </ion-navbar>\n</ion-header>\n\n<ion-tabs tabsPlacement="bottom" selectedIndex="0">\n  <ion-tab [root]="tab1Root" tabTitle="Profile" tabIcon="contact"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Trade" tabIcon="contacts"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Sale" tabIcon="home"></ion-tab>\n</ion-tabs>\n\n'/*ion-inline-end:"C:\wamp64\www\console-trade\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ })

},[302]);
//# sourceMappingURL=main.js.map
webpackJsonp([0],{

/***/ 188:
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
webpackEmptyAsyncContext.id = 188;

/***/ }),

/***/ 231:
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
webpackEmptyAsyncContext.id = 231;

/***/ }),

/***/ 279:
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

/***/ 287:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TradePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_app_auth_app_auth__ = __webpack_require__(44);
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
            if (google) {
                _this.geocoder = new google.maps.Geocoder();
                _this.initMap();
            }
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
            selector: 'page-trade',template:/*ion-inline-start:"C:\wamp64\www\console-trade\src\pages\trade\trade.html"*/'<ion-content >\n <!--  <div #map id="map" style="height: 100%;"></div> -->\n</ion-content>'/*ion-inline-end:"C:\wamp64\www\console-trade\src\pages\trade\trade.html"*/
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

/***/ 289:
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

/***/ 290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_app_auth_app_auth__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_igdb_igdb__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_underscore_underscore__ = __webpack_require__(496);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_underscore_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_underscore_underscore__);
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
    function ProfilePage(navCtrl, igdb, auth) {
        this.navCtrl = navCtrl;
        this.igdb = igdb;
        this.auth = auth;
    }
    ProfilePage.prototype.toggleItemOwnership = function (item, owned) {
        if (owned) {
            var duplicate = __WEBPACK_IMPORTED_MODULE_4_underscore_underscore__["find"](this.auth.profile.ownedList, function (e) { return e.title === item.title; });
            if (duplicate)
                return;
            this.auth.profile.ownedList.push(item);
            this.auth.profile.wishList = __WEBPACK_IMPORTED_MODULE_4_underscore_underscore__["reject"](this.auth.profile.wishList, function (el) { return el.title === item.title; });
        }
        else {
            var duplicate = __WEBPACK_IMPORTED_MODULE_4_underscore_underscore__["find"](this.auth.profile.wishList, function (e) { return e.title === item.title; });
            if (duplicate)
                return;
            this.auth.profile.wishList.push(item);
            this.auth.profile.ownedList = __WEBPACK_IMPORTED_MODULE_4_underscore_underscore__["reject"](this.auth.profile.ownedList, function (el) { return el.title === item.title; });
        }
    };
    ProfilePage.prototype.toggleItemPlatform = function (item, platform) {
        if (__WEBPACK_IMPORTED_MODULE_4_underscore_underscore__["contains"](item.platforms, platform)) {
            item.platforms = __WEBPACK_IMPORTED_MODULE_4_underscore_underscore__["reject"](item.platforms, function (el) { return el === platform; });
        }
        else {
            item.platforms.push(platform);
        }
    };
    ProfilePage.prototype.searchtTitle = function () {
        this.igdb.search(this.searchInput);
    };
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-profile',template:/*ion-inline-start:"C:\wamp64\www\console-trade\src\pages\profile\profile.html"*/'<ion-content class="ps4-bg" (click)="clearSearch()">\n\n<div class="profile">\n  <div class="profile-image">\n    <img class="circle-head" src="{{auth.profile.profileImage}}">\n  </div>\n  <div class="profile-info-wrapper">\n    <div class="profile-info">\n        <h4>{{auth.profile.name}}</h4>\n        <!-- <ion-icon name="create"></ion-icon> -->\n      <!-- <h5>{{auth.profile.location}}</h5> -->\n    </div>\n  </div>\n</div>\n\n<hr inset padding-horizontal style="background-color: #fff;">\n\n<div class="trade-info" >\n  \n  <div class="game-input-wrapper">\n    <ion-item  inset >\n      <ion-input (ionChange)="searchtTitle()" type="text" [(ngModel)]="searchInput" placeholder="Add a game"></ion-input>\n    </ion-item>\n    <h5 float-right class="tip-text">*tap games to toggle</h5>\n    <div class="autocomplete">\n      <ion-list>\n        <ion-item class="autocomplete-item" *ngFor="let item of igdb.searchOptions" (click)="addGameToProfile(item)">\n          <!-- <img *ngIf="item.cover != null" src="{{item.cover.url}}"> -->\n          <h5>{{item.name}}</h5>\n        </ion-item>\n      </ion-list>\n    </div>\n  </div>\n  \n  <h5 class="divider" style="padding-top: 30px;">Looking for</h5>\n\n  <div class="display-grid">\n    <div class="trade-item" *ngFor="let item of auth.profile.wishList">\n      <div class="trade-img" (click)="toggleItemOwnership(item, true)">\n        <img class="fit-img" src="{{item.cover_url}}">\n      </div>\n      <div class="platforms">\n        <img (click)="toggleItemPlatform(item, \'xbox1\')" [ngClass]="{\'faded\': item.platforms.indexOf(\'xbox1\') == -1}" src="assets/imgs/xbox_icon.png">\n        <img (click)="toggleItemPlatform(item, \'ps4\')" [ngClass]="{\'faded\': item.platforms.indexOf(\'ps4\') == -1}" src="assets/imgs/ps4_icon.png">\n        <img (click)="toggleItemPlatform(item, \'nintendo_switch\')" [ngClass]="{\'faded\': item.platforms.indexOf(\'nintendo_switch\') == -1}" src="assets/imgs/ns_icon.png">\n      </div>\n    </div>    \n  </div>\n\n  <h5 class="divider" >Owned</h5>\n  \n  <div class="display-grid">\n    <div class="trade-item" *ngFor="let item of auth.profile.ownedList">\n      <div class="trade-img" (click)="toggleItemOwnership(item, false)">\n        <img class="fit-img" src="{{item.cover_url}}">\n      </div>\n\n      <div class="platforms">\n        <img (click)="toggleItemPlatform(item, \'xbox1\')" [ngClass]="{\'faded\': item.platforms.indexOf(\'xbox1\') == -1}" src="assets/imgs/xbox_icon.png">\n        <img (click)="toggleItemPlatform(item, \'ps4\')" [ngClass]="{\'faded\': item.platforms.indexOf(\'ps4\') == -1}" src="assets/imgs/ps4_icon.png">\n        <img (click)="toggleItemPlatform(item, \'nintendo_switch\')" [ngClass]="{\'faded\': item.platforms.indexOf(\'nintendo_switch\') == -1}" src="assets/imgs/ns_icon.png">\n      </div>\n      \n    </div>    \n  </div>\n</div>\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\wamp64\www\console-trade\src\pages\profile\profile.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_igdb_igdb__["a" /* IgdbProvider */],
            __WEBPACK_IMPORTED_MODULE_2__providers_app_auth_app_auth__["a" /* AppAuthProvider */]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 291:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IgdbProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(154);
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


/*
  Generated class for the IgdbProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var IgdbProvider = /** @class */ (function () {
    function IgdbProvider(http) {
        this.http = http;
    }
    IgdbProvider.prototype.search = function (input) {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]()
            .set("user-key", "5227ae6e46cee2806cf25779d4c97966")
            .set("Accept", "application/json");
        this.http.get('https://api-endpoint.igdb.com/games/?search=' + input).subscribe(function (res) {
            console.log(res);
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

/***/ 293:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OptionsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_app_auth_app_auth__ = __webpack_require__(44);
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

/***/ 294:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__signup_signup__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tabs_tabs__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_app_auth_app_auth__ = __webpack_require__(44);
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

/***/ 295:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_app_auth_app_auth__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tabs_tabs__ = __webpack_require__(89);
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

/***/ 298:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(299);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(421);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 421:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(462);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2_auth__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__config__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ultimate_ngxerrors__ = __webpack_require__(498);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_trade_trade__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_contact_contact__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_profile_profile__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_tabs_tabs__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_login_login__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_signup_signup__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_options_options__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_app_auth_app_auth__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_geolocation__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_angularfire2_database__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__providers_igdb_igdb__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__angular_common_http__ = __webpack_require__(154);
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
                __WEBPACK_IMPORTED_MODULE_13__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_6_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_8__config__["b" /* firebaseConfig */].web),
                __WEBPACK_IMPORTED_MODULE_19_angularfire2_database__["b" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_21__angular_common_http__["b" /* HttpClientModule */],
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
                __WEBPACK_IMPORTED_MODULE_20__providers_igdb_igdb__["a" /* IgdbProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 44:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppAuthProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_profile__ = __webpack_require__(481);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__config__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_operators__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_geolocation__ = __webpack_require__(288);
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








var AppAuthProvider = /** @class */ (function () {
    function AppAuthProvider(afAuth, afdb, geolocation) {
        var _this = this;
        this.afAuth = afAuth;
        this.afdb = afdb;
        this.geolocation = geolocation;
        this.profile = new __WEBPACK_IMPORTED_MODULE_3__models_profile__["a" /* Profile */]("assets/imgs/temp_profile_img_1.png", "Jon Carlo Guiriba", "Quezon City", [
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
            console.log("user", user);
            _this.user = user;
            var usersRef;
            var users;
            if (_this.user != null) {
                var userRef = _this.afdb.list('/user', function (ref) { return ref.orderByChild('email').equalTo(_this.user.email); });
                var userSub = userRef.snapshotChanges().pipe(Object(__WEBPACK_IMPORTED_MODULE_6_rxjs_operators__["map"])(function (changes) {
                    return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
                })).subscribe(function (res) {
                    if (!res[0])
                        return;
                    _this.profile.name = res[0]["first_name"] + " " + res[0]["last_name"];
                    _this.geolocation.getCurrentPosition().then(function (geodata) {
                        userRef.update(res[0]["key"], {
                            last_location: {
                                lat: geodata.coords.latitude,
                                long: geodata.coords.longitude
                            }
                        });
                        userSub.unsubscribe();
                    }).catch(function (error) {
                        console.log('Error getting location', error);
                    });
                });
            }
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
                email: form.email,
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
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["a" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["a" /* AngularFireAuth */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__["a" /* AngularFireDatabase */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_7__ionic_native_geolocation__["a" /* Geolocation */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__ionic_native_geolocation__["a" /* Geolocation */]) === "function" && _c || Object])
    ], AppAuthProvider);
    return AppAuthProvider;
    var _a, _b, _c;
}());

//# sourceMappingURL=app-auth.js.map

/***/ }),

/***/ 462:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_app_auth_app_auth__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_login_login__ = __webpack_require__(294);
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
            auth.afAuth.authState
                .subscribe(function (user) {
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

/***/ 481:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Profile; });
var Profile = /** @class */ (function () {
    function Profile(profileImage, name, location, wishList, ownedList, consoles, tradeLocations) {
        if (profileImage === void 0) { profileImage = null; }
        if (name === void 0) { name = null; }
        if (location === void 0) { location = null; }
        if (wishList === void 0) { wishList = null; }
        if (ownedList === void 0) { ownedList = null; }
        if (consoles === void 0) { consoles = null; }
        if (tradeLocations === void 0) { tradeLocations = null; }
        this.profileImage = profileImage;
        this.name = name;
        this.location = location;
        this.wishList = wishList;
        this.ownedList = ownedList;
        this.consoles = consoles;
        this.tradeLocations = tradeLocations;
    }
    return Profile;
}());

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 89:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__trade_trade__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__contact_contact__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__profile_profile__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__options_options__ = __webpack_require__(293);
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

},[298]);
//# sourceMappingURL=main.js.map
webpackJsonp([0],{

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TradeProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(54);
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
        this.matchingTraders = [];
        this.loading = false;
    }
    TradeProvider.prototype.getNearestPossibleTrades = function (key) {
        var _this = this;
        console.log("provider getNPT: " + key);
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]()
            .set("key", "eJQ0S7PjPs9BJJEJY8fXaJTNrngJIko4");
        var url = 'https://lemon-data-center-js.herokuapp.com/api/getNPT?key=' + key;
        // var url = 'http://localhost:3000/api/getNPT?key='+key;
        this.loading = true;
        var httpSub = this.http.get(url, { headers: headers }).subscribe(function (res) {
            _this.matchingTraders = res;
            console.log("get getNearestPossibleTrades: ", _this.matchingTraders);
            _this.loading = false;
            httpSub.unsubscribe();
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

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_profile_profile__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_firebaseapp_firebaseapp__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_app_auth_app_auth__ = __webpack_require__(42);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ChatPage = /** @class */ (function () {
    function ChatPage(navCtrl, navParams, profile, fbApp, auth) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.profile = profile;
        this.fbApp = fbApp;
        this.auth = auth;
        this.message = "";
        this.thread = [];
        this.threads = [];
        this.trader = navParams.get('trader');
        this.converKey = this.fbApp.getTraderConversationKey(this.trader, this.profile.user);
        if (this.converKey) {
            this.chatSub = this.fbApp.getConversationMessages(this.converKey).subscribe(function (res) {
                console.log("thread ", res);
                _this.thread = res;
                _this.threads[_this.trader.key] = res;
            });
        }
    }
    ChatPage.prototype.ionViewDidLoad = function () {
    };
    ChatPage.prototype.ionViewWillEnter = function () {
    };
    ChatPage.prototype.ionViewDidLeave = function () {
        if (this.chatSub) {
            console.log("ONLEAVE CHAT PAGE");
            this.chatSub.unsubscribe();
        }
    };
    ChatPage.prototype.send = function () {
        var _this = this;
        console.log("sent message: ", this.message);
        if (this.converKey) {
            console.log("UPDATE CHAT " + this.converKey);
            this.fbApp.updateConversation(this.converKey, this.trader, this.profile.user, this.message);
        }
        else {
            this.converKey = this.fbApp.createNewThread(this.trader, this.profile.user, this.message).key;
            console.log("PUSH CHAT " + this.converKey);
            this.chatSub = this.fbApp.getConversationMessages(this.converKey).subscribe(function (res) {
                console.log("thread ", res);
                _this.thread = res;
            });
        }
        // var converSub =	this.fbApp
        // .getConversation(this.trader, this.profile.user)
        // .subscribe((res)=>{
        // console.log("conver res: ", res);
        // var key;
        // if(!res){
        // var converRef = this.fbApp.pushConversation(this.trader,this.profile.user,this.message)	  			
        // 	key = converRef.key;
        // }
        // else{
        // 	key = res[0]["key"];
        // 	this.fbApp.updateConversation(key, this.trader, this.profile.user, this.message)
        // }
        // converSub.unsubscribe();
        // })
        this.message = "";
    };
    ChatPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-chat',template:/*ion-inline-start:"C:\wamp64\www\console-trade\src\pages\chat\chat.html"*/'<!--\n  Generated template for the ChatPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header class="ps4-header">\n\n  <ion-navbar>\n    <ion-title>{{trader.first_name + " " + trader.last_name}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="ps4" padding>\n\n	<div class="thread">\n		<div class="chat-message" [ngClass]="{\'trader-message\': message.senderKey !== profile.user.key}" *ngFor="let message of thread">\n			<h5>{{message.text}}</h5>\n		</div>\n	</div>\n\n	<div class="ps4-message-input message-input">\n			<ion-input [(ngModel)]="message" placeholder="Type a message..." (keyup.enter)="send()">\n			</ion-input>\n			<button (click)="send()">Send</button>\n	</div>\n</ion-content>\n'/*ion-inline-end:"C:\wamp64\www\console-trade\src\pages\chat\chat.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_profile_profile__["a" /* ProfileProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_firebaseapp_firebaseapp__["a" /* FirebaseappProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_app_auth_app_auth__["a" /* AppAuthProvider */]])
    ], ChatPage);
    return ChatPage;
}());

//# sourceMappingURL=chat.js.map

/***/ }),

/***/ 195:
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
webpackEmptyAsyncContext.id = 195;

/***/ }),

/***/ 238:
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
webpackEmptyAsyncContext.id = 238;

/***/ }),

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Profile; });
var Profile = /** @class */ (function () {
    function Profile() {
        this.profileImage = "";
        this.name = "";
        this.first_name = "";
        this.last_name = "";
        this.email = "";
        this.key = "";
        this.wishList = [];
        this.ownedList = [];
        this.consoles = [];
        this.tradeLocations = [];
        this.last_location = {};
    }
    return Profile;
}());

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 294:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TradePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_app_auth_app_auth__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_profile_profile__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_trade_trade__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_chat_chat__ = __webpack_require__(161);
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
    function TradePage(navCtrl, platform, auth, geolocation, trade, profile, app) {
        this.navCtrl = navCtrl;
        this.platform = platform;
        this.auth = auth;
        this.geolocation = geolocation;
        this.trade = trade;
        this.profile = profile;
        this.app = app;
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
        this.trade.getNearestPossibleTrades(this.profile.user.key);
    };
    TradePage.prototype.showChat = function (trader) {
        this.app.getRootNavs()[0].push(__WEBPACK_IMPORTED_MODULE_6__pages_chat_chat__["a" /* ChatPage */], {
            trader: trader
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
            selector: 'page-trade',template:/*ion-inline-start:"C:\wamp64\www\console-trade\src\pages\trade\trade.html"*/'<ion-content class="ps4">\n<!-- <div style="height: 100%;" (click)="getNearestPossibleTrades()">\n	\n</div> -->\n <!--  <div #map id="map" style="height: 100%;"></div> -->\n	<ion-spinner *ngIf="trade.loading" name="bubbles"></ion-spinner>\n\n	<h4 padding	>Matches found</h4>\n 	<ion-item class="matching-trades" *ngFor="let trader of trade.matchingTraders" no-lines>\n 		<div class="trader-info">\n 			<ion-icon style="color: #fff;" name="chatbubbles" (click)="showChat(trader)"></ion-icon>\n	 		<h5>{{trader.first_name + " " + trader.last_name}} </h5>\n	 		<h5>{{trader.matchingTrades.length}} matches  </h5>\n 			<h5>{{trader.distance | ceil}} miles away</h5>\n 		</div>\n 		<div class="trade-grid">\n	 		<div class="trade-item" *ngFor="let item of trader.matchingTrades">\n	 			<img class="fit-img" src="{{item.cover_url | replace: \'cover_big\':\'thumb\'}}">\n	 		</div>\n 		</div>\n 		<div class="trade-grid white">\n	 		<div class="trade-item" *ngFor="let item of trader.matchingWishes">\n	 			<img class="fit-img" src="{{item.cover_url | replace: \'cover_big\':\'thumb\'}}">\n	 		</div>\n 		</div>\n 	</ion-item>\n</ion-content>'/*ion-inline-end:"C:\wamp64\www\console-trade\src\pages\trade\trade.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_3__providers_app_auth_app_auth__["a" /* AppAuthProvider */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_5__providers_trade_trade__["a" /* TradeProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_profile_profile__["a" /* ProfileProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* App */]])
    ], TradePage);
    return TradePage;
}());

//# sourceMappingURL=trade.js.map

/***/ }),

/***/ 295:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessagesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_profile_profile__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_firebaseapp_firebaseapp__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_chat_chat__ = __webpack_require__(161);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MessagesPage = /** @class */ (function () {
    function MessagesPage(navCtrl, profile, fbApp, app) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.profile = profile;
        this.fbApp = fbApp;
        this.app = app;
        this.traders = [];
        this.fbApp.getUserConversations(profile.user)
            .subscribe(function (res) {
            if (!res)
                return;
            for (var convo in res.payload.val()) {
                var conversation = res.payload.val()[convo];
                _this.fbApp.getProfile(conversation.traderKey).then(function (res) {
                    _this.traders.push(res);
                });
            }
            console.log("conversations: ", _this.traders);
        });
    }
    MessagesPage.prototype.showChat = function (trader) {
        this.app.getRootNavs()[0].push(__WEBPACK_IMPORTED_MODULE_4__pages_chat_chat__["a" /* ChatPage */], {
            trader: trader
        });
    };
    MessagesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-messages',template:/*ion-inline-start:"C:\wamp64\www\console-trade\src\pages\messages\messages.html"*/'<ion-content class="ps4">\n    <ion-item *ngFor="let trader of traders" (click)="showChat(trader)" no-lines>\n    	<h5 class="trader-name">{{trader.first_name + " " + trader.last_name}}</h5>\n    	<div class="matches">\n	    	<div class="trade-item"  *ngFor="let item of trader.ownedList">\n	    		<ng-container *ngIf="profile.isItemMatch(item)">\n    				<img src="{{item.cover_url | replace: \'cover_big\':\'thumb\'}}">\n	    		</ng-container>\n	    	</div>\n    	</div>\n    </ion-item>\n</ion-content>\n'/*ion-inline-end:"C:\wamp64\www\console-trade\src\pages\messages\messages.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_profile_profile__["a" /* ProfileProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_firebaseapp_firebaseapp__["a" /* FirebaseappProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* App */]])
    ], MessagesPage);
    return MessagesPage;
}());

//# sourceMappingURL=messages.js.map

/***/ }),

/***/ 296:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_app_auth_app_auth__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_profile_profile__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_igdb_igdb__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_game__ = __webpack_require__(504);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__config__ = __webpack_require__(298);
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
        }, 300);
    };
    ProfilePage.prototype.clearSearch = function () {
        this.igdb.searchOptions = [];
    };
    ProfilePage.prototype.addGameToProfile = function (item) {
        var platforms = [""];
        if (item.platforms) {
            if (item.platforms.includes(__WEBPACK_IMPORTED_MODULE_6__config__["a" /* C */].PS4_ID))
                platforms.push("ps4");
            if (item.platforms.includes(__WEBPACK_IMPORTED_MODULE_6__config__["a" /* C */].NS_ID))
                platforms.push("nintendo_switch");
            if (item.platforms.includes(__WEBPACK_IMPORTED_MODULE_6__config__["a" /* C */].XBOX1_ID))
                platforms.push("xbox1");
        }
        var url = null;
        if (item.cover)
            url = item.cover.url.replace("thumb", "cover_big").replace("//", "http://");
        var game = new __WEBPACK_IMPORTED_MODULE_5__models_game__["a" /* Game */](item.id, item.name, url, platforms);
        this.profile.addGameToProfile(this.auth.user, game, false);
        this.searchInput = null;
        this.igdb.searchOptions = [];
    };
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-profile',template:/*ion-inline-start:"C:\wamp64\www\console-trade\src\pages\profile\profile.html"*/'<ion-content class="ps4" (click)="clearSearch()">\n\n\n\n<div class="profile">\n\n  <div class="profile-image">\n\n    <img class="circle-head" src="{{profile.user.profileImage}}">\n\n  </div>\n\n  <div class="profile-info-wrapper">\n\n    <div class="profile-info">\n\n        <h4>{{profile.user.name}}</h4>\n\n        <!-- <ion-icon name="create"></ion-icon> -->\n\n      <!-- <h5>{{profile.user.location}}</h5> -->\n\n    </div>\n\n  </div>\n\n</div>\n\n\n\n<hr inset padding-horizontal style="background-color: #fff;">\n\n\n\n<div class="trade-info" >\n\n  \n\n  <div class="game-input-wrapper">\n\n    <ion-item  inset >\n\n      <ion-input (ionChange)="searchtTitle()" type="text" [(ngModel)]="searchInput" placeholder="Add a game"></ion-input>\n\n    </ion-item>\n\n    <h5 float-right class="tip-text">*tap games to toggle, hold to delete</h5>\n\n    <div class="autocomplete">\n\n      <ion-list>\n\n        <ion-item class="autocomplete-item" *ngFor="let item of igdb.searchOptions" (click)="addGameToProfile(item)">\n\n          <!-- <img *ngIf="item.cover != null" src="{{item.cover.url}}"> -->\n\n          <h5>{{item.name}}</h5>\n\n        </ion-item>\n\n      </ion-list>\n\n    </div>\n\n  </div>\n\n  \n\n  <h5 class="divider" style="padding-top: 30px;">Looking for</h5>\n\n\n\n  <div class="display-grid">\n\n    <div class="trade-item" *ngFor="let item of profile.user.wishList">\n\n      <div ion-long-press class="trade-img" (tap)="toggleItemOwnership(item, false)" [interval]="400" (onPressing)="removeItem(item, false)">\n\n        <img *ngIf="item.cover_url" class="fit-img" src="{{item.cover_url}}">\n\n        <img *ngIf="!item.cover_url" class="fit-img" >\n\n        <h5 *ngIf="!item.cover_url" class="trade-img-title" >{{item.name}}</h5>\n\n      </div>\n\n      <div class="platforms">\n\n        <img (tap)="toggleItemPlatform(item, \'xbox1\', false)" [ngClass]="{\'faded\': item.platforms.indexOf(\'xbox1\') == -1}" src="assets/imgs/xbox_icon.png">\n\n        <img (tap)="toggleItemPlatform(item, \'ps4\', false)" [ngClass]="{\'faded\': item.platforms.indexOf(\'ps4\') == -1}" src="assets/imgs/ps4_icon.png">\n\n        <img (tap)="toggleItemPlatform(item, \'nintendo_switch\', false)" [ngClass]="{\'faded\': item.platforms.indexOf(\'nintendo_switch\') == -1}" src="assets/imgs/ns_icon.png">\n\n      </div>\n\n    </div>    \n\n  </div>\n\n\n\n  <h5 class="divider">Owned</h5>\n\n  \n\n  <div class="display-grid">\n\n    <div class="trade-item" *ngFor="let item of profile.user.ownedList">\n\n      <div ion-long-press class="trade-img" (tap)="toggleItemOwnership(item, true)" [interval]="400" (onPressing)="removeItem(item, true)">\n\n        <img *ngIf="item.cover_url" class="fit-img" src="{{item.cover_url}}">\n\n        <img *ngIf="!item.cover_url" class="fit-img" >\n\n        <h5 *ngIf="!item.cover_url" class="trade-img-title" >{{item.name}}</h5>\n\n      </div>\n\n      <div class="platforms">\n\n        <img (tap)="toggleItemPlatform(item, \'xbox1\', true)" [ngClass]="{\'faded\': item.platforms.indexOf(\'xbox1\') == -1}" src="assets/imgs/xbox_icon.png">\n\n        <img (tap)="toggleItemPlatform(item, \'ps4\', true)" [ngClass]="{\'faded\': item.platforms.indexOf(\'ps4\') == -1}" src="assets/imgs/ps4_icon.png">\n\n        <img (tap)="toggleItemPlatform(item, \'nintendo_switch\', true)" [ngClass]="{\'faded\': item.platforms.indexOf(\'nintendo_switch\') == -1}" src="assets/imgs/ns_icon.png">\n\n      </div>\n\n      \n\n    </div>    \n\n  </div>\n\n</div>\n\n\n\n\n\n</ion-content>\n\n\n\n'/*ion-inline-end:"C:\wamp64\www\console-trade\src\pages\profile\profile.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_igdb_igdb__["a" /* IgdbProvider */],
            __WEBPACK_IMPORTED_MODULE_2__providers_app_auth_app_auth__["a" /* AppAuthProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_profile_profile__["a" /* ProfileProvider */]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 297:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IgdbProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(54);
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
        var excludedPlatforms = "0";
        var included = [
            41 // wii
            ,
            48 // xbox1
            ,
            49 // ps4
            ,
            130 // switch
        ];
        for (var i = 1; i < 150; i++) {
            if (included.indexOf(i) > -1)
                continue;
            excludedPlatforms += "," + i;
        }
        var search = "https://api-endpoint.igdb.com/games/"
            + "?search=" + input
            + "&filter[release_dates.platform][not_in]=" + excludedPlatforms
            + "&filter[category][eq]=" + "0"
            + "&filter[release_dates.platform][exists]"
            + "&filter[version_parent][not_exists]"
            + "&fields=*";
        // var search = 'https://api-endpoint.igdb.com/games/?search=' + input +
        // "&filter[release_dates.platform][any]=48,49,130" +
        // "&filter[version_parent][not_exists]=1" +
        // "&fields=*";
        var httpSub = this.http.get(search, { headers: headers }).subscribe(function (res) {
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
            httpSub.unsubscribe();
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

/***/ 298:
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

/***/ 299:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OptionsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_app_auth_app_auth__ = __webpack_require__(42);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_app_auth_app_auth__["a" /* AppAuthProvider */]])
    ], OptionsPage);
    return OptionsPage;
}());

//# sourceMappingURL=options.js.map

/***/ }),

/***/ 300:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__signup_signup__ = __webpack_require__(301);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tabs_tabs__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_app_auth_app_auth__ = __webpack_require__(42);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_5__providers_app_auth_app_auth__["a" /* AppAuthProvider */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 301:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_app_auth_app_auth__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tabs_tabs__ = __webpack_require__(94);
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
                { type: 'minlength', message: 'first name must be at least 3 characters long.' },
                { type: 'maxlength', message: 'first name cannot be more than 20 characters long.' },
                { type: 'validUsername', message: 'Your username has already been taken.' }
            ],
            'last_name': [
                { type: 'required', message: 'last name is required.' },
                { type: 'minlength', message: 'last name must be at least 3 characters long.' },
                { type: 'maxlength', message: 'last name cannot be more than 20 characters long.' },
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
            first_name: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].minLength(3), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].maxLength(20)])],
            last_name: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].minLength(3), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].maxLength(20)])],
            email: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].email])],
            password: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].pattern(passwordRegex), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].minLength(8), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].maxLength(20)])],
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_app_auth_app_auth__["a" /* AppAuthProvider */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]])
    ], SignupPage);
    return SignupPage;
}());

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 304:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(305);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(427);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 42:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppAuthProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_profile__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_geolocation__ = __webpack_require__(92);
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
    function AppAuthProvider(afAuth, geolocation, afdb) {
        var _this = this;
        this.afAuth = afAuth;
        this.geolocation = geolocation;
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
        return new Promise(function (resolve, reject) {
            _this.afAuth.auth.createUserWithEmailAndPassword(form.email, form.password).then(function (e) {
                var profile = new __WEBPACK_IMPORTED_MODULE_3__models_profile__["a" /* Profile */]();
                profile.first_name = form.firstName,
                    profile.last_name = form.lastName,
                    profile.email = form.email;
                _this.geolocation.getCurrentPosition().then(function (geodata) {
                    profile.last_location = {
                        lat: geodata.coords.latitude,
                        long: geodata.coords.longitude
                    };
                    _this.afdb.list('/users').push(profile).then(function (snap) {
                        _this.afdb.list('/users').update(snap.key, {
                            key: snap.key
                        });
                        resolve();
                    });
                }).catch(function (error) {
                    reject();
                    console.log('Error getting location', error);
                });
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
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], AppAuthProvider);
    return AppAuthProvider;
}());

//# sourceMappingURL=app-auth.js.map

/***/ }),

/***/ 427:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(467);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2_auth__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__config__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ultimate_ngxerrors__ = __webpack_require__(505);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_trade_trade__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_messages_messages__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_profile_profile__ = __webpack_require__(296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_tabs_tabs__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_login_login__ = __webpack_require__(300);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_signup_signup__ = __webpack_require__(301);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_options_options__ = __webpack_require__(299);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_chat_chat__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers_app_auth_app_auth__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_native_geolocation__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_angularfire2_database__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__providers_igdb_igdb__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__angular_common_http__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__providers_trade_trade__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__providers_profile_profile__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pipes_pipes_module__ = __webpack_require__(518);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__providers_firebaseapp_firebaseapp__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27_ionic_long_press__ = __webpack_require__(522);
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
                __WEBPACK_IMPORTED_MODULE_17__pages_chat_chat__["a" /* ChatPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_trade_trade__["a" /* TradePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_messages_messages__["a" /* MessagesPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_options_options__["a" /* OptionsPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_tabs_tabs__["a" /* TabsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_6_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_8__config__["b" /* firebaseConfig */].web),
                __WEBPACK_IMPORTED_MODULE_20_angularfire2_database__["b" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_22__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_27_ionic_long_press__["a" /* LongPressModule */],
                __WEBPACK_IMPORTED_MODULE_25__pipes_pipes_module__["a" /* PipesModule */],
                __WEBPACK_IMPORTED_MODULE_9__ultimate_ngxerrors__["a" /* NgxErrorsModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_17__pages_chat_chat__["a" /* ChatPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_trade_trade__["a" /* TradePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_messages_messages__["a" /* MessagesPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_options_options__["a" /* OptionsPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_7_angularfire2_auth__["a" /* AngularFireAuth */],
                __WEBPACK_IMPORTED_MODULE_19__ionic_native_geolocation__["a" /* Geolocation */],
                __WEBPACK_IMPORTED_MODULE_20_angularfire2_database__["a" /* AngularFireDatabase */],
                __WEBPACK_IMPORTED_MODULE_18__providers_app_auth_app_auth__["a" /* AppAuthProvider */],
                __WEBPACK_IMPORTED_MODULE_22__angular_common_http__["a" /* HttpClient */],
                __WEBPACK_IMPORTED_MODULE_21__providers_igdb_igdb__["a" /* IgdbProvider */],
                __WEBPACK_IMPORTED_MODULE_23__providers_trade_trade__["a" /* TradeProvider */],
                __WEBPACK_IMPORTED_MODULE_24__providers_profile_profile__["a" /* ProfileProvider */],
                __WEBPACK_IMPORTED_MODULE_26__providers_firebaseapp_firebaseapp__["a" /* FirebaseappProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 467:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_app_auth_app_auth__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_operators__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_profile_profile__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_geolocation__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_trade_trade__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_tabs_tabs__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_login_login__ = __webpack_require__(300);
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
    function MyApp(platform, statusBar, splashScreen, afdb, auth, profile, geolocation, trade) {
        var _this = this;
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.afdb = afdb;
        this.auth = auth;
        this.profile = profile;
        this.geolocation = geolocation;
        this.trade = trade;
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
                    _this.rootPage = __WEBPACK_IMPORTED_MODULE_10__pages_tabs_tabs__["a" /* TabsPage */];
                    var usersRef = void 0;
                    var users = void 0;
                    _this.initProfile(user).then(function (e) {
                        return _this.initTrades(user);
                    });
                }
                else {
                    _this.rootPage = __WEBPACK_IMPORTED_MODULE_11__pages_login_login__["a" /* LoginPage */];
                }
            }, function () {
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_11__pages_login_login__["a" /* LoginPage */];
            });
        });
    }
    MyApp.prototype.initTrades = function (user) {
        this.trade.getNearestPossibleTrades(this.profile.user.key);
    };
    MyApp.prototype.initProfile = function (user) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var userRef = _this.afdb.list('/users', function (ref) { return ref.orderByChild('email').equalTo(user.email); });
            var userSub = userRef.snapshotChanges().pipe(Object(__WEBPACK_IMPORTED_MODULE_6_rxjs_operators__["map"])(function (changes) {
                return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
            })).subscribe(function (res) {
                if (!res[0] || !res[0]["key"])
                    return;
                console.log("fb user", res);
                _this.profile.user.profileImage = res[0]["profile_image"] || "assets/imgs/temp_profile_img_1.png";
                _this.profile.user.name = res[0]["first_name"] + " " + res[0]["last_name"];
                _this.profile.user.first_name = res[0]["first_name"] || "";
                _this.profile.user.last_name = res[0]["last_name"] || "";
                _this.profile.user.email = res[0]["email"] || "";
                _this.profile.user.wishList = res[0]["wishList"] || [];
                _this.profile.user.ownedList = res[0]["ownedList"] || [];
                _this.profile.user.key = res[0].key || "";
                _this.profile.user.conversations = res[0]["conversations"] || [];
                console.log(">>geolocation ", _this.profile.user);
                _this.geolocation.getCurrentPosition({ timeout: 20000, enableHighAccuracy: true }).then(function (geodata) {
                    userRef.update(res[0]["key"], {
                        last_location: {
                            lat: geodata.coords.latitude,
                            long: geodata.coords.longitude
                        }
                    }).then(function (e) {
                        resolve();
                    });
                    console.log(">>user from component ", _this.profile.user);
                    userSub.unsubscribe();
                }).catch(function (error) {
                    reject(console.log('>>Error getting location', error));
                });
            });
        });
    };
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\wamp64\www\console-trade\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\wamp64\www\console-trade\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_4__providers_app_auth_app_auth__["a" /* AppAuthProvider */],
            __WEBPACK_IMPORTED_MODULE_7__providers_profile_profile__["a" /* ProfileProvider */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_9__providers_trade_trade__["a" /* TradeProvider */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 502:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Message; });
var Message = /** @class */ (function () {
    function Message(text, sender, senderKey, createdAt) {
        this.text = "";
        this.sender = "";
        this.senderKey = "";
        this.text = text;
        this.sender = sender;
        this.senderKey = senderKey;
        this.createdAt = createdAt;
    }
    return Message;
}());

//# sourceMappingURL=Message.js.map

/***/ }),

/***/ 503:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserConversation; });
var UserConversation = /** @class */ (function () {
    function UserConversation(key, traderKey, name) {
        this.key = "";
        this.traderKey = "";
        this.name = "";
        this.key = key;
        this.traderKey = traderKey;
        this.name = name;
    }
    return UserConversation;
}());

//# sourceMappingURL=userConversation.js.map

/***/ }),

/***/ 504:
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

/***/ 518:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PipesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__keys_keys__ = __webpack_require__(519);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__replace_replace__ = __webpack_require__(520);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__distance_distance__ = __webpack_require__(521);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var PipesModule = /** @class */ (function () {
    function PipesModule() {
    }
    PipesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_1__keys_keys__["a" /* KeysPipe */],
                __WEBPACK_IMPORTED_MODULE_2__replace_replace__["a" /* ReplacePipe */],
                __WEBPACK_IMPORTED_MODULE_3__distance_distance__["a" /* DistancePipe */]
            ],
            imports: [],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__keys_keys__["a" /* KeysPipe */],
                __WEBPACK_IMPORTED_MODULE_2__replace_replace__["a" /* ReplacePipe */],
                __WEBPACK_IMPORTED_MODULE_3__distance_distance__["a" /* DistancePipe */]
            ]
        })
    ], PipesModule);
    return PipesModule;
}());

//# sourceMappingURL=pipes.module.js.map

/***/ }),

/***/ 519:
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

/***/ 520:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReplacePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**
 * Generated class for the ReplacePipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
var ReplacePipe = /** @class */ (function () {
    function ReplacePipe() {
    }
    /**
     * Takes a value and makes it lowercase.
     */
    ReplacePipe.prototype.transform = function (value) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        return value.replace(args[0], args[1]);
    };
    ReplacePipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({
            name: 'replace',
        })
    ], ReplacePipe);
    return ReplacePipe;
}());

//# sourceMappingURL=replace.js.map

/***/ }),

/***/ 521:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DistancePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**
 * Generated class for the DistancePipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
var DistancePipe = /** @class */ (function () {
    function DistancePipe() {
    }
    /**
     * Takes a value and makes it lowercase.
     */
    DistancePipe.prototype.transform = function (value) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        return Math.ceil(parseFloat(value));
    };
    DistancePipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({
            name: 'ceil',
        })
    ], DistancePipe);
    return DistancePipe;
}());

//# sourceMappingURL=distance.js.map

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_profile__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_underscore_underscore__ = __webpack_require__(500);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_underscore_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_underscore_underscore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_firebaseapp_firebaseapp__ = __webpack_require__(93);
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
        var duplicate = __WEBPACK_IMPORTED_MODULE_3_underscore_underscore__["find"](this.user.wishList, function (e) { return e.id === game.id; });
        if (!game.platforms)
            game.platforms = [];
        console.log("addGamToProfile: ", game);
        if (duplicate) {
            this.user.ownedList.push(game);
            this.fbapp.updateUserOwnedList(user, this.user.ownedList);
        }
        else {
            this.user.wishList.push(game);
            this.fbapp.updateUserWishList(user, this.user.wishList);
        }
    };
    ProfileProvider.prototype.toggleItemOwnership = function (authUser, item, owned) {
        if (owned) {
            var duplicate = __WEBPACK_IMPORTED_MODULE_3_underscore_underscore__["find"](this.user.wishList, function (e) { return e.id === item.id; });
            if (duplicate)
                return;
            this.user.wishList.push(item);
            this.user.ownedList = __WEBPACK_IMPORTED_MODULE_3_underscore_underscore__["reject"](this.user.ownedList, function (e) { return e.id === item.id; });
        }
        else {
            var duplicate = __WEBPACK_IMPORTED_MODULE_3_underscore_underscore__["find"](this.user.ownedList, function (e) { return e.id === item.id; });
            if (duplicate)
                return;
            this.user.ownedList.push(item);
            this.user.wishList = __WEBPACK_IMPORTED_MODULE_3_underscore_underscore__["reject"](this.user.wishList, function (e) { return e.id === item.id; });
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
            this.user.ownedList = __WEBPACK_IMPORTED_MODULE_3_underscore_underscore__["reject"](this.user.ownedList, function (el) { return el.id === item.id; });
            this.startOwnedListUpdateTImer(authUser);
        }
        else {
            this.user.wishList = __WEBPACK_IMPORTED_MODULE_3_underscore_underscore__["reject"](this.user.wishList, function (el) { return el.id === item.id; });
            this.startWishListUpdateTImer(authUser);
        }
    };
    ProfileProvider.prototype.isItemMatch = function (item) {
        for (var _i = 0, _a = this.user.wishList; _i < _a.length; _i++) {
            var wishItem = _a[_i];
            if (wishItem.id === item.id)
                return true;
        }
        return false;
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

/***/ 93:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirebaseappProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_Message__ = __webpack_require__(502);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_userConversation__ = __webpack_require__(503);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase_app__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_database__ = __webpack_require__(91);
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
    FirebaseappProvider.prototype.getConversationMessages = function (key) {
        var conversationRef = this.afdb
            .list('/conversations/' + key + "/messages/")
            .valueChanges(["child_added"]);
        return conversationRef;
    };
    FirebaseappProvider.prototype.getTraderConversationKey = function (trader, user) {
        console.log("-fbapp getTraderConversationKey: ", trader.conversations, user.conversations);
        if (!trader.conversations || !user.conversations) {
            console.log("r");
            return;
        }
        for (var u in user.conversations) {
            for (var t in trader.conversations) {
                if (trader.conversations[t].key === user.conversations[u].key)
                    return user.conversations[u].key;
            }
        }
        return null;
    };
    FirebaseappProvider.prototype.createNewThread = function (trader, user, msg) {
        console.log("push convo " + msg, trader, user);
        var members = {};
        members[trader.key] = true;
        members[user.key] = true;
        var message = new __WEBPACK_IMPORTED_MODULE_3__models_Message__["a" /* Message */](msg, user.name, user.key, __WEBPACK_IMPORTED_MODULE_5_firebase_app__["database"].ServerValue.TIMESTAMP);
        var converRef = this.pushConversation([message], members);
        user.conversations = user.conversations ? user.conversations : [];
        var userConversation = new __WEBPACK_IMPORTED_MODULE_4__models_userConversation__["a" /* UserConversation */](converRef.key, trader.key, trader.first_name + " " + trader.last_name);
        user.conversations[converRef.key] = userConversation;
        console.log("uckey:", user.conversations);
        this.updateUserConversation(user.key, converRef.key, userConversation);
        trader.conversations = trader.conversations ? trader.conversations : [];
        var traderConversation = new __WEBPACK_IMPORTED_MODULE_4__models_userConversation__["a" /* UserConversation */](converRef.key, user.key, user.first_name + " " + user.last_name);
        trader.conversations[converRef.key] = traderConversation;
        var traderConversationKey = this.afdb.list('/users/' + trader.key + '/conversations/').update(converRef.key, traderConversation);
        return converRef;
    };
    FirebaseappProvider.prototype.updateUserConversation = function (userKey, converKey, conversation) {
        return this.afdb
            .list('/users/' + userKey + '/conversations/')
            .update(converKey, conversation);
    };
    FirebaseappProvider.prototype.pushConversation = function (messages, members) {
        return this.afdb.list('/conversations').push({
            messages: messages,
            members: members
        });
    };
    FirebaseappProvider.prototype.updateConversation = function (key, trader, user, msg) {
        var _this = this;
        console.log("update convo " + key);
        var conversationSub = this.afdb
            .object('/conversations/' + key)
            .snapshotChanges()
            .subscribe(function (res) {
            try {
                var conversation = res.payload.val();
                if (!conversation)
                    return;
                conversation["messages"] = conversation["messages"] || [];
                var message = new __WEBPACK_IMPORTED_MODULE_3__models_Message__["a" /* Message */](msg, user.name, user.key, __WEBPACK_IMPORTED_MODULE_5_firebase_app__["database"].ServerValue.TIMESTAMP);
                conversation["messages"].push(message);
                _this.afdb.list('/conversations').update(key, {
                    messages: conversation["messages"]
                });
                console.log("converRef update: ", res.payload.val());
                conversationSub.unsubscribe();
            }
            catch (err) {
                console.log("Error updating conversation ", err);
            }
        });
    };
    FirebaseappProvider.prototype.getUserConversations = function (user) {
        return this.afdb
            .object('/users/' + user.key + '/conversations/')
            .snapshotChanges();
    };
    FirebaseappProvider.prototype.getMessages = function (user) {
        var conversations;
        var subscription = this.getUserConversations(user).subscribe(function (res) {
            conversations = res.payload.val();
            subscription.unsubscribe();
        });
    };
    FirebaseappProvider.prototype.getProfile = function (key) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var subscription = _this.afdb
                .object('/users/' + key)
                .snapshotChanges()
                .subscribe(function (res) {
                resolve(res.payload.val());
                subscription.unsubscribe();
            });
        });
    };
    FirebaseappProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_6_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], FirebaseappProvider);
    return FirebaseappProvider;
}());

//# sourceMappingURL=firebaseapp.js.map

/***/ }),

/***/ 94:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__trade_trade__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__messages_messages__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__profile_profile__ = __webpack_require__(296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__options_options__ = __webpack_require__(299);
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
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_3__messages_messages__["a" /* MessagesPage */];
    }
    TabsPage.prototype.navTo = function (page) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__options_options__["a" /* OptionsPage */], {}, { animate: true, direction: 'forward' });
    };
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tabs',template:/*ion-inline-start:"C:\wamp64\www\console-trade\src\pages\tabs\tabs.html"*/'<ion-header class="ps4-header">\n  <ion-navbar>\n    <ion-title></ion-title>\n\n    <ion-icon class="settings" name="settings" (click)="navTo(\'options\')"></ion-icon>\n   \n  </ion-navbar>\n</ion-header>\n\n<ion-tabs tabsPlacement="bottom" selectedIndex="0">\n  <ion-tab [root]="tab1Root" tabTitle="Profile" tabIcon="contact"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Trade" tabIcon="contacts"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Messages" tabIcon="chatbubbles"></ion-tab>\n</ion-tabs>\n\n'/*ion-inline-end:"C:\wamp64\www\console-trade\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ })

},[304]);
//# sourceMappingURL=main.js.map
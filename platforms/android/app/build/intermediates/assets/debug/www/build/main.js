webpackJsonp([0],{

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TradeProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(29);
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
    TradeProvider.prototype.getNearestPossibleTrades = function (key, limit, offset) {
        var _this = this;
        if (limit === void 0) { limit = 15; }
        if (offset === void 0) { offset = 0; }
        // console.log("[GetNeareastPossibleTrades] " + key)
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]()
                .set("key", "eJQ0S7PjPs9BJJEJY8fXaJTNrngJIko4");
            var url = "https://lemon-data-center-js.herokuapp.com/api/getNPT?key=" + key + "&limit=" + limit + "&offset=" + offset;
            // var url = `http://localhost:3000/api/getNPT?key=${key}&limit=${limit}&offset=${offset}`;
            _this.loading = true;
            var httpSub = _this.http.get(url, { headers: headers }).subscribe(function (res) {
                _this.matchingTraders = res ? res : [];
                // console.log("get getNearestPossibleTrades: ", this.matchingTraders)
                _this.loading = false;
                resolve(_this.matchingTraders);
                httpSub.unsubscribe();
            });
        });
    };
    TradeProvider.prototype.getNearestTrades = function (key, limit, offset) {
        var _this = this;
        if (limit === void 0) { limit = 15; }
        if (offset === void 0) { offset = 0; }
        // console.log("[GetNeareastTrades] " + key)
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]()
                .set("key", "eJQ0S7PjPs9BJJEJY8fXaJTNrngJIko4");
            var url = "https://lemon-data-center-js.herokuapp.com/api/getNT?key=" + key + "&limit=" + limit + "&offset=" + offset;
            // var url = `http://localhost:3000/api/getNT?key=${key}&limit=${limit}&offset=${offset}`;
            _this.loading = true;
            var httpSub = _this.http.get(url, { headers: headers }).subscribe(function (res) {
                _this.matchingTraders = res ? res : [];
                // console.log("get getNearestPossibleTrades: ", this.matchingTraders)
                _this.loading = false;
                resolve(_this.matchingTraders);
                httpSub.unsubscribe();
            });
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

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_profile_profile__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_firebaseapp_firebaseapp__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_app_auth_app_auth__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_fromEvent__ = __webpack_require__(312);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_fromEvent___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_fromEvent__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_map_map__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_courier_popover_courier_popover__ = __webpack_require__(313);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_messages_messages__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_jquery__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_jquery__);
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
    function ChatPage(navCtrl, navParams, profile, fbApp, auth, app, popoverCtrl, messages) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.profile = profile;
        this.fbApp = fbApp;
        this.auth = auth;
        this.app = app;
        this.popoverCtrl = popoverCtrl;
        this.messages = messages;
        this.message = "";
        this.thread = [];
        this.userOfferedGames = [];
        this.traderOfferedGames = [];
        this.courier = {
            name: "No Courier Selected"
        };
        this.showMatching = true;
        this.guaranteeStatus = "Transaction not guaranteed";
        this.trader = navParams.get('trader');
        console.log("trader ", this.trader);
        // if(this.trader.matchingWishes && this.trader.matchingTrades)
        //   if(this.trader.matchingWishes.length > 0 && this.trader.matchingTrades.length > 0)
        //     this.showMatching = true;
        this.profile.currentConversation = this.trader.key;
        // console.log("[chat] trader: ", this.trader)
        this.converKey = this.fbApp.getTraderConversationKey(this.trader, this.profile.user);
        this.fbApp.readConversation(this.converKey, this.profile.user.key);
        if (this.converKey) {
            this.chatSub = this.fbApp.getConversationMessages(this.converKey)
                .subscribe(function (res) {
                // console.log("thread ", res);
                _this.thread = res;
                _this.fbApp.readConversation(_this.converKey, _this.profile.user.key);
                setTimeout(function () { __WEBPACK_IMPORTED_MODULE_9_jquery__('#chatContent').scrollTop(__WEBPACK_IMPORTED_MODULE_9_jquery__('#chatContent')[0].scrollHeight); }, 100);
            });
            this.observeTraderOfferedGames();
            this.observeUserOfferedGames();
        }
        this.guaranteeSub = this.fbApp.getConversationGuarantee(this.converKey)
            .subscribe(function (res) {
            var guaranteeMembers = res.payload.val();
            // console.log(11, guaranteeMembers)
            // if(this.guarantee)
            var cnt = 0;
            for (var member in guaranteeMembers) {
                if (guaranteeMembers[member])
                    cnt++;
            }
            switch (cnt) {
                case 1:
                    _this.guaranteeStatus = "Waiting for partner to accept";
                    break;
                case 2:
                    _this.guaranteeStatus = "Guaranteed transaction accepted. Please wait a representative will contact you soon";
                    break;
                default:
                    _this.guaranteeStatus = "Transaction not guaranteed";
                    break;
            }
        });
    }
    ChatPage.prototype.ionViewDidLoad = function () {
    };
    ChatPage.prototype.observeTraderOfferedGames = function () {
        var _this = this;
        this.traderOfferedGamesSub = this.fbApp.getOfferedGames(this.trader.key, this.converKey).subscribe(function (res) {
            _this.traderOfferedGames = res;
            if (!_this.trader.matchingTrades)
                return;
            for (var _i = 0, res_1 = res; _i < res_1.length; _i++) {
                var game = res_1[_i];
                for (var _a = 0, _b = _this.trader.matchingTrades; _a < _b.length; _a++) {
                    var traderGame = _b[_a];
                    if (game["id"] === traderGame.id) {
                        traderGame.isSelected = true;
                    }
                }
            }
            // console.log(">>> traderrOG",res)
        });
    };
    ChatPage.prototype.observeUserOfferedGames = function () {
        var _this = this;
        this.userOfferedGamesSub = this.fbApp.getOfferedGames(this.profile.user.key, this.converKey).subscribe(function (res) {
            _this.userOfferedGames = res;
            if (!_this.trader.matchingWishes)
                _this.trader.matchingWishes = [];
            for (var _i = 0, res_2 = res; _i < res_2.length; _i++) {
                var game = res_2[_i];
                for (var _a = 0, _b = _this.trader.matchingWishes; _a < _b.length; _a++) {
                    var traderGame = _b[_a];
                    if (game["id"] === traderGame.id) {
                        traderGame.isSelected = true;
                    }
                }
            }
            // console.log(">>> userOG",res)
        });
    };
    ChatPage.prototype.ionViewWillEnter = function () {
    };
    ChatPage.prototype.ionViewDidLeave = function () {
        this.profile.currentConversation = null;
        if (this.chatSub) {
            // console.log("ONLEAVE CHAT PAGE")
            this.chatSub.unsubscribe();
        }
        if (this.userOfferedGamesSub) {
            this.userOfferedGamesSub.unsubscribe();
        }
        if (this.traderOfferedGamesSub) {
            this.traderOfferedGamesSub.unsubscribe();
        }
        if (this.guaranteeSub) {
            this.guaranteeSub.unsubscribe();
        }
    };
    ChatPage.prototype.send = function () {
        var _this = this;
        if (this.message.trim().length <= 0) {
            return;
        }
        if (this.converKey) {
            // console.log("UPDATE CHAT " + this.converKey)
            this.fbApp.updateConversation(this.converKey, this.trader, this.profile.user, this.message);
        }
        else {
            this.converKey = this.fbApp.createNewThread(this.trader, this.profile.user, this.message).key;
            this.chatSub = this.fbApp.getConversationMessages(this.converKey).subscribe(function (res) {
                // console.log("thread ", res);
                _this.thread = res;
                _this.fbApp.readConversation(_this.converKey, _this.profile.user.key);
            });
        }
        this.message = "";
    };
    ChatPage.prototype.navToMap = function () {
        this.app.getRootNavs()[0].push(__WEBPACK_IMPORTED_MODULE_6__pages_map_map__["a" /* MapPage */], {
            target: this.trader
        });
    };
    ChatPage.prototype.selectGame = function (game) {
        var _this = this;
        clearTimeout(this.saveTimeout);
        if (!game.isSelected) {
            game.isSelected = true;
            this.userOfferedGames.push(game);
        }
        else {
            game.isSelected = false;
            this.userOfferedGames = this.userOfferedGames.filter(function (e) {
                return e.id != game.id;
            });
        }
        setTimeout(function () {
            _this.fbApp.updateConversationOffers(_this.profile.user.key, _this.converKey, _this.userOfferedGames);
        }, 500);
    };
    ChatPage.prototype.selectCourier = function () {
        // this.courierStatus = "waiting for confirmation";
        // console.log(222)
        // $('.meetup').css('width','25%')
        // $('.meetup').css('padding','15px 0')
        // $('.courier').css('width','75%')
        var _this = this;
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_7__pages_courier_popover_courier_popover__["a" /* CourierPopoverPage */]);
        popover.present();
        popover.onDidDismiss(function (courier) {
            if (!courier)
                return;
            _this.courier = courier;
        });
    };
    ChatPage.prototype.selectGuarantee = function () {
        this.selectCourier();
        this.fbApp.updateConversationGuarantee(this.converKey, this.profile.user.key)
            .then(function (res) {
            var yesCnt = 0;
            for (var member in res) {
                console.log("xxxx ", res[member]);
                if (res[member])
                    yesCnt++;
            }
        });
    };
    ChatPage.prototype.traderContainsGame = function (item) {
        if (this.trader.matchingTrades)
            return this.trader.matchingTrades.find(function (game) { return game.id == item.id; });
    };
    ChatPage.prototype.userrContainsGame = function (item) {
        if (this.trader.matchingWishes)
            return this.trader.matchingWishes.find(function (game) { return game.id == item.id; });
    };
    ChatPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-chat',template:/*ion-inline-start:"C:\wamp64\www\console-trade\src\pages\chat\chat.html"*/'<!--\n  Generated template for the ChatPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header >\n\n  <ion-navbar>\n    <ion-title>{{trader.first_name + " " + trader.last_name}}</ion-title>\n  </ion-navbar>\n</ion-header>\n  <h5 name="menu" menuToggle class="menu-toggle-forced">TRADE DETAILS</h5>\n<ion-content >\n \n	<ion-list id="chatContent" class="thread"  >\n		<div class="chat-message" [ngClass]="{\'trader-message\': message.senderKey !== profile.user.key}" *ngFor="let message of thread; let i = index">\n			<h5>{{message.text}}</h5>\n		</div>\n	</ion-list>\n\n	<div class="message-input message-input">\n			<ion-input [(ngModel)]="message" placeholder="Type a message..." (keyup.enter)="send()">\n			</ion-input>\n			<button (click)="send()">Send</button>\n	</div>\n</ion-content>\n\n\n<ion-nav #chatMenu [root]="rootPage">\n</ion-nav>\n\n<ion-menu class="chat-menu" side="right" [content]="chatMenu">\n  <ion-content>\n  	<ion-header>\n  		<h5>Preferred Trading Locations</h5>\n      <button ion-button class="location-btn" (click)="navToMap()">\n        <ion-icon name="compass"></ion-icon>\n      </button>\n  	</ion-header>\n  	<ion-list class="location-list">\n  		<ion-item *ngFor="let tradeLocation of trader.trade_locations">\n  			{{tradeLocation}}\n  		</ion-item>\n  	</ion-list>\n\n    <h5 class="divider" *ngIf="showMatching">{{trader.first_name + " " + trader.last_name}} has</h5>\n    <div class="trade-grid">\n      <div [class.matching-item]="traderContainsGame(item)" class="trade-item" *ngFor="let item of trader.ownedList">\n        <img-loader *ngIf="item.cover_url" class="fit-img" src="{{item.cover_url}}"></img-loader>\n        <img *ngIf="!item.cover_url" class="fit-img" >\n        <img class="select-icon" *ngIf="item.isSelected" src="assets/imgs/selector_green.png">\n      </div>\n    </div>\n\n    <h5 class="divider" *ngIf="showMatching">{{profile.user.first_name + " " + profile.user.last_name}} has</h5>\n 		<div class="trade-grid" >\n	 		<div class="trade-item" [class.matching-item]="userrContainsGame(item)" *ngFor="let item of profile.user.ownedList" (click)="selectGame(item)">\n	 			<img-loader *ngIf="item.cover_url" class="fit-img" src="{{item.cover_url}}"></img-loader>\n        <img *ngIf="!item.cover_url" class="fit-img" >\n        <!-- <img class="select-icon" *ngIf="item.isSelected" src="assets/imgs/selector_orange.png"> -->\n        <h5 class="selected-item" *ngIf="item.isSelected" >FOR TRADE</h5>\n	 		</div>\n 		</div>\n    <div class="action-row" >\n      <!-- <h5 class="methodText">{{courier.name}} <span *ngIf="courier.price">&#8369;</span>{{courier.price}}</h5> -->\n      <h5 class="methodText">{{guaranteeStatus}}</h5>\n      <!-- <h5 class="action-option meetup" (click)="selectMeetup()">MEETUP</h5> -->\n      <button ion-button class="action-option courier" (click)="selectGuarantee()">Guaranteed Delivery </button>\n      <!-- <h5 class="action-option courier" (click)="selectCourier()">SELECT COURIER</h5> -->\n      <!-- <span *ngIf="courier.price">&#8369;</span> -->\n    </div>\n  </ion-content>\n</ion-menu>'/*ion-inline-end:"C:\wamp64\www\console-trade\src\pages\chat\chat.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_profile_profile__["a" /* ProfileProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_firebaseapp_firebaseapp__["a" /* FirebaseappProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_app_auth_app_auth__["a" /* AppAuthProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* App */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* PopoverController */],
            __WEBPACK_IMPORTED_MODULE_8__providers_messages_messages__["a" /* MessagesProvider */]])
    ], ChatPage);
    return ChatPage;
}());

//# sourceMappingURL=chat.js.map

/***/ }),

/***/ 168:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_profile_profile__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_firebaseapp_firebaseapp__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jquery__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_jquery__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MapPage = /** @class */ (function () {
    function MapPage(navCtrl, navParams, platform, geolocation, profile, fbApp, loadCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.platform = platform;
        this.geolocation = geolocation;
        this.profile = profile;
        this.fbApp = fbApp;
        this.loadCtrl = loadCtrl;
        this.markers = [];
        this.searchInput = "";
        this.canEdit = true;
        this.target = this.profile.user;
        this.sessionToken = new google.maps.places.AutocompleteSessionToken();
    }
    MapPage.prototype.ionViewDidLoad = function () {
    };
    MapPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.target = this.profile.user;
        var customTarget = this.navParams.get('target');
        if (customTarget) {
            this.canEdit = false;
            if (!customTarget.target_locations)
                customTarget.target_locations = [];
            this.target = customTarget;
            // console.log("using custom target", this.target)
        }
        this.platform.ready().then(function () {
            if (google) {
                _this.geocoder = new google.maps.Geocoder();
                _this.places = new google.maps.places.AutocompleteService();
                _this.initMap();
            }
        });
    };
    MapPage.prototype.searchLocation = function () {
        var _this = this;
        // console.log("searchLocation: " + this.searchInput)
        clearTimeout(this.timeout);
        this.timeout = setTimeout(function () {
            _this.places.getPlacePredictions({
                input: _this.searchInput,
                sessionToken: _this.sessionToken
            }, function (res) {
                // console.log("place prediction ", res)
            });
        }, 500);
    };
    MapPage.prototype.initMap = function () {
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
            _this.addMarker(mylocation, { label: "YOU", remember: false });
            _this.initAutoComplete(resp);
            _this.initClickEvent();
            if (_this.target.trade_locations)
                _this.initMarkers(_this.target.trade_locations);
        }).catch(function (e) {
            console.log("errrr", e);
        });
    };
    MapPage.prototype.initMarkers = function (tradeLocations) {
        var self = this;
        for (var _i = 0, tradeLocations_1 = tradeLocations; _i < tradeLocations_1.length; _i++) {
            var tradeLocation = tradeLocations_1[_i];
            this.geocoder.geocode({ 'address': tradeLocation }, function (res, status) {
                if (status === 'OK') {
                    self.addMarker(res[0].geometry.location);
                }
                else {
                    console.log("Geocode was not successful for the following reason: " + status);
                }
            });
        }
    };
    MapPage.prototype.initAutoComplete = function (userLocation) {
        var mylocation = new google.maps.LatLng(userLocation.coords.latitude, userLocation.coords.longitude);
        var input = document.getElementById('autocomplete');
        this.map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);
        var circle = new google.maps.Circle({
            center: mylocation,
            radius: userLocation.coords.accuracy
        });
        this.places = new google.maps.places.PlacesService(this.map);
        var autocomplete = new google.maps.places.Autocomplete(input, {
            bounds: circle.getBounds(),
            strictBounds: true
        });
        var self = this;
        autocomplete.addListener('place_changed', function () {
            var place = this.getPlace();
            if (!place)
                return;
            // console.log("[autocomplete:select]", place)
            if (place.geometry) {
                self.map.panTo(place.geometry.location);
                self.map.setZoom(15);
                self.addMarker(place.geometry.location);
                self.addTradeLocation(input["value"]);
            }
            else {
            }
        });
    };
    MapPage.prototype.clearAutocomplete = function () {
        __WEBPACK_IMPORTED_MODULE_5_jquery__('#autocomplete').val("");
    };
    MapPage.prototype.initClickEvent = function () {
        var _this = this;
        if (!this.canEdit)
            return;
        this.map.addListener("click", function (event) {
            var loading = _this.loadCtrl.create();
            loading.present();
            var latitude = event.latLng.lat();
            var longitude = event.latLng.lng();
            _this.geocoder.geocode({ 'location': event.latLng }, function (res) {
                // console.log("click ", res)
                if (!res)
                    return;
                _this.addMarker(event.latLng);
                _this.addTradeLocation(res[0].formatted_address);
                loading.dismiss();
            });
        });
    };
    MapPage.prototype.addTradeLocation = function (location) {
        var _this = this;
        if (!this.canEdit)
            return;
        clearTimeout(this.dbTimeout);
        this.target.trade_locations.push(location);
        if (this.target.trade_locations.length > 3) {
            this.removeLastTradeLocation();
        }
        // console.log("[map] addTradeLocation ", this.target)
        this.dbTimeout = setTimeout(function () {
            _this.fbApp.updateUserTradeLocations(_this.target.key, _this.target.trade_locations);
        }, 500);
    };
    MapPage.prototype.removeLastTradeLocation = function () {
        var tradeLocation = this.target.trade_locations.shift();
        var marker = this.markers[0];
        // console.log("removing ", this.markers, this.target.trade_locations)
        marker.setMap(null);
        this.markers.shift();
    };
    MapPage.prototype.addMarker = function (position, options) {
        if (options === void 0) { options = null; }
        options = options ? options : { remember: true };
        var marker = new google.maps.Marker({
            map: this.map,
            position: position,
            label: options.label,
            icon: options.icon
        });
        if (options.remember)
            this.markers.push(marker);
    };
    MapPage.prototype.setMapOnAll = function (map) {
        for (var i = 0; i < this.markers.length; i++) {
            this.markers[i].setMap(map);
        }
    };
    MapPage.prototype.clearMarkers = function () {
        this.setMapOnAll(null);
    };
    MapPage.prototype.deleteMarkers = function () {
        this.clearMarkers();
        this.markers = [];
    };
    MapPage.prototype.findLocation = function (location) {
        var _this = this;
        if (!this.map)
            return;
        this.geocoder.geocode({ 'address': location }, function (res, status) {
            if (status === 'OK') {
                _this.map.panTo(res[0].geometry.location);
                _this.map.setZoom(15);
            }
            else {
                console.log("Geocode was not successful for the following reason: " + status);
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('map'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], MapPage.prototype, "mapElement", void 0);
    MapPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-map',template:/*ion-inline-start:"C:\wamp64\www\console-trade\src\pages\map\map.html"*/'<ion-header >\n\n  <ion-navbar>\n    <ion-title *ngIf="canEdit">Pick preferred trade locations</ion-title>\n    <ion-title *ngIf="!canEdit">{{target.first_name + " " + target.last_name}}\'s preferred trade locations</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content >\n\n  <h5 class="status-msg">Loading Map</h5>\n	<input id="autocomplete" class="display-none" type="text" [ngModel]="searchInput" (ionChange)="searchLocation" (click)="clearAutocomplete()">\n  <div #map id="map" style="height: 100%;"></div>\n\n  <div class="trade-locations-container">\n  	<!-- <h5 class="trade-location-header">Trade Locations</h5> -->\n     <h5 class="trade-location" *ngFor="let tradeLocation of target.trade_locations" (click)="findLocation(tradeLocation)">{{tradeLocation}}</h5>\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\wamp64\www\console-trade\src\pages\map\map.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_2__providers_profile_profile__["a" /* ProfileProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_firebaseapp_firebaseapp__["a" /* FirebaseappProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], MapPage);
    return MapPage;
}());

//# sourceMappingURL=map.js.map

/***/ }),

/***/ 170:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IgdbProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config__ = __webpack_require__(98);
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
            3 // Linux
            ,
            6 // windows pc
            ,
            9 // ps3
            ,
            12 // xbox 360
            ,
            14 // Mac
            ,
            41 // wii
            ,
            48 // xbox1
            ,
            49 // ps4
            ,
            92 // steamOs
            ,
            130 // switch
        ];
        for (var i = 1; i < 164; i++) {
            if (included.indexOf(i) > -1)
                continue;
            excludedPlatforms += "," + i;
        }
        var search = "https://api-endpoint.igdb.com/games/"
            + "?search=" + input
            + "&filter[release_dates.platform][not_in]=" + excludedPlatforms
            + "&filter[category][eq]=" + "0"
            + "&filter[release_dates.platform][exists]"
            // + "&filter[version_parent][not_existss]"
            + "&fields=*";
        // var search = 'https://api-endpoint.igdb.com/games/?search=' + input +
        // "&filter[release_dates.platform][any]=48,49,130" +
        // "&filter[version_parent][not_exists]=1" +
        // "&fields=*";
        return new Promise(function (resolve, reject) {
            var httpSub = _this.http.get(search, { headers: headers }).subscribe(function (res) {
                var gameIds = "";
                // console.log("[igdb] search raw: ", res)
                var first = true;
                for (var _i = 0, res_1 = res; _i < res_1.length; _i++) {
                    var r = res_1[_i];
                    if (first)
                        gameIds += r["id"];
                    else
                        gameIds += "," + r["id"];
                    first = false;
                }
                var filteredSearch = _this.removeUnsupportedPlatforms(res);
                // console.log("[igdb] search clean: ", filteredSearch)
                resolve(filteredSearch);
                httpSub.unsubscribe();
            });
        });
    };
    IgdbProvider.prototype.removeUnsupportedPlatforms = function (games) {
        return games.filter(function (game) {
            if (game.platforms)
                return game.platforms.indexOf(__WEBPACK_IMPORTED_MODULE_2__config__["a" /* C */].PS4_ID) != -1
                    || game.platforms.indexOf(__WEBPACK_IMPORTED_MODULE_2__config__["a" /* C */].XBOX1_ID) != -1
                    || game.platforms.indexOf(__WEBPACK_IMPORTED_MODULE_2__config__["a" /* C */].NS_ID) != -1;
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

/***/ 173:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShopPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_firebaseapp_firebaseapp__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_underscore_underscore__ = __webpack_require__(310);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_underscore_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_underscore_underscore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_order_order__ = __webpack_require__(328);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ShopPage = /** @class */ (function () {
    function ShopPage(navCtrl, navParams, fbapp, popoverCtrl, toastCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fbapp = fbapp;
        this.popoverCtrl = popoverCtrl;
        this.toastCtrl = toastCtrl;
        this.priceWeeks = 120;
        this.priceMonth = 200;
        this.gamesForRent = [];
        this.cart = {
            games: []
        };
        var rentGamesRef = fbapp.getGamesForRent();
        rentGamesRef.subscribe(function (res) {
            _this.gamesForRent = res;
            console.log(_this.gamesForRent);
        });
    }
    ShopPage.prototype.ionViewDidLoad = function () {
        var orderStatus = this.navParams.get("orderStatus");
        if (orderStatus != null)
            this.displaySendingToast(orderStatus);
    };
    ShopPage.prototype.displaySendingToast = function (status) {
        var message = 'Order successfully recieved';
        if (status == "error") {
            message = 'Error placing order';
        }
        var toast = this.toastCtrl.create({
            message: message,
            duration: 3000,
            position: 'top'
        });
        toast.onDidDismiss(function () {
        });
        toast.present();
    };
    ShopPage.prototype.addGameToCart = function (game) {
        var isDuplicate = this.cart.games.find(function (e) { return e.id == game.id; });
        if (isDuplicate)
            return;
        this.cart.games.push(game);
    };
    ShopPage.prototype.removeGameFromCart = function (game) {
        this.cart.games = __WEBPACK_IMPORTED_MODULE_3_underscore_underscore__["reject"](this.cart.games, function (e) { return e.id == game.id; });
    };
    ShopPage.prototype.order = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__pages_order_order__["a" /* OrderPage */], { cart: this.cart });
        // let popover = this.popoverCtrl.create(OrderPopoverPage, {
        //   games: this.cart.games
        // })
        // popover.present();
        // popover.onDidDismiss((courier)=>{
        // })
    };
    ShopPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-shop',template:/*ion-inline-start:"C:\wamp64\www\console-trade\src\pages\shop\shop.html"*/'<ion-content padding>\n<!-- 	<div class="row-1 shop-row">\n		<div class="device-container">\n			<div class="device">\n				<img class="fit-img" src="assets/imgs/ps4_device.png">\n			</div>\n			<div class="device">\n				<img class="fit-img" src="assets/imgs/xbox1_device.png">\n			</div>\n			<div class="device">\n				<img class="fit-img" src="assets/imgs/ns_device.png">\n			</div>\n		</div>\n		<div class="prices">\n			<h5>&#x20B1;1000 / month</h5>\n			<h5>&#x20B1;600 / 2weeks</h5>\n		</div>\n	</div> -->\n\n	<div class="row-2 shop-row">\n		<div class="games">\n			<img class="game" src="{{game.cover_url}}" *ngFor="let game of gamesForRent" (click)="addGameToCart(game)">\n		</div>\n\n		<div class="prices">\n			<h5>&#x20B1;{{priceMonth}} / month</h5>\n			<h5>&#x20B1;{{priceWeeks}} / 2weeks</h5>\n		</div>\n\n	</div>\n\n	<div class="row-3 shop-row">\n		<div class="cart">\n			<div class="games">\n				<img class="game" src="{{game.cover_url}}" *ngFor="let game of cart.games" (click)="removeGameFromCart(game)">\n			</div>\n		</div>\n	</div>\n\n		<button class="order-btn" ion-button (click)="order()">Order</button>\n	\n</ion-content>\n'/*ion-inline-end:"C:\wamp64\www\console-trade\src\pages\shop\shop.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_firebaseapp_firebaseapp__["a" /* FirebaseappProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* PopoverController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */]])
    ], ShopPage);
    return ShopPage;
}());

//# sourceMappingURL=shop.js.map

/***/ }),

/***/ 174:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__signup_signup__ = __webpack_require__(329);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__resetpassword_resetpassword__ = __webpack_require__(331);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tabs_tabs__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_app_auth_app_auth__ = __webpack_require__(39);
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
            password: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].minLength(3)])]
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
            .then(function () { return _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__tabs_tabs__["a" /* TabsPage */]); }, function (error) { return _this.loginError = error.message; });
    };
    LoginPage.prototype.signup = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__signup_signup__["a" /* SignupPage */]);
    };
    LoginPage.prototype.loginWithGoogle = function () {
        var gl = this.auth.googleLogin();
        // .then(
        //   (res) =>{
        //   	console.log(10101,res)
        //   	this.navCtrl.setRoot(TabsPage)
        //   },
        //   error => console.log(error.message)
        // )
    };
    LoginPage.prototype.onSignIn = function () {
    };
    LoginPage.prototype.navToPassword = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__resetpassword_resetpassword__["a" /* ResetpasswordPage */]);
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\wamp64\www\console-trade\src\pages\login\login.html"*/'<ion-content class="page-content" padding>\n  <form class="loginForm" [formGroup]="loginForm">\n    <div class="form-header">\n      <img src="assets/imgs/icon.png"/>\n    </div>\n      <ion-list >\n        <ion-item [ngClass]="{ invalid: emailErrors.hasError(\'*\', [\'touched\', \'dirty\']) }">\n          <ion-input type="text" placeholder="Email" formControlName="email"></ion-input>\n        </ion-item>\n\n        <div ngxErrors="email" #emailErrors="ngxErrors">\n        </div>\n\n        <ion-item [ngClass]="{ invalid: passwordErrors.hasError(\'*\', [\'touched\']) }">\n          <ion-input type="password" placeholder="Password" formControlName="password"></ion-input>\n        </ion-item>\n\n        <div ngxErrors="password" #passwordErrors="ngxErrors">\n         \n        </div>\n      </ion-list>\n\n      <div padding-horizontal>\n        <div class="form-error" *ngIf="loginError" style="color: #cc0000;">Unable to login with username / password</div>\n\n        <button class="login-btn" ion-button full type="submit" [disabled]="!loginForm.valid" (click)="login()" >Log in</button>\n        <div class="login-footer">\n          <p (click)="navToPassword()">\n            <a href="#">Forgot password?</a>\n          </p>\n        </div>\n      </div>\n\n        <ion-list class="login-options-list">\n          <button ion-button icon-start block clear (click)="loginWithGoogle()">\n            <ion-icon name="logo-google"></ion-icon>\n            Log in with Google\n          </button>\n\n          <button ion-button icon-start block clear (click)="signup()">\n            <ion-icon name="person-add"></ion-icon>\n            Sign up\n          </button>\n        </ion-list>\n    </form>\n</ion-content>\n'/*ion-inline-end:"C:\wamp64\www\console-trade\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_6__providers_app_auth_app_auth__["a" /* AppAuthProvider */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 208:
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
webpackEmptyAsyncContext.id = 208;

/***/ }),

/***/ 251:
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
webpackEmptyAsyncContext.id = 251;

/***/ }),

/***/ 299:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Profile; });
var Profile = /** @class */ (function () {
    function Profile() {
        this.profileImage = "";
        this.first_name = "";
        this.last_name = "";
        this.email = "";
        this.key = "";
        this.wishList = [];
        this.ownedList = [];
        this.consoles = [];
        this.trade_locations = [];
        this.last_location = {};
        this.gender = "m";
        this.admin = false;
    }
    Profile.prototype.addToWishList = function (game) {
        if (this.wishList.length > 8)
            return;
        this.wishList.push(game);
    };
    Profile.prototype.addToOwnedList = function (game) {
        if (this.ownedList.length > 8)
            return;
        this.ownedList.push(game);
    };
    return Profile;
}());

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 311:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TradePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_profile_profile__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_trade_trade__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_chat_chat__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_fromEvent__ = __webpack_require__(312);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_fromEvent___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_fromEvent__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(314);
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
    function TradePage(navCtrl, platform, trade, profile, app, events, storage, loadCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.platform = platform;
        this.trade = trade;
        this.profile = profile;
        this.app = app;
        this.events = events;
        this.storage = storage;
        this.loadCtrl = loadCtrl;
        this.refresh = true;
        this.showDisclaimer = true;
        this.showMatchingOnly = true;
        this.offset = 0;
        this.limit = 15;
        this.traders = [];
        this.hasMore = false;
        this.events.subscribe("profile:changed", function (res) {
            _this.refresh = true;
        });
        this.storage.get('showDisclaimer').then(function (res) {
            _this.showDisclaimer = !res;
        });
    }
    TradePage.prototype.ionViewDidLoad = function () {
    };
    TradePage.prototype.ionViewWillEnter = function () {
        if (this.refresh) {
            this.refresh = false;
            this.getTrades(this.profile.user.key, 15, 0);
        }
    };
    TradePage.prototype.showChat = function (trader) {
        this.app.getRootNavs()[0].push(__WEBPACK_IMPORTED_MODULE_4__pages_chat_chat__["a" /* ChatPage */], {
            trader: trader
        });
    };
    TradePage.prototype.expandToggle = function (trader) {
        if (trader.expanded)
            trader.expanded = false;
        else
            trader.expanded = true;
    };
    TradePage.prototype.confirmDisclaimer = function () {
        this.showDisclaimer = false;
        this.storage.set("showDisclaimer", true);
    };
    TradePage.prototype.toggleTraders = function () {
        this.showMatchingOnly = !this.showMatchingOnly;
        this.offset = 0;
        this.hasMore = false;
        this.getTrades(this.profile.user.key, this.limit, this.offset);
    };
    TradePage.prototype.showMore = function () {
        this.offset++;
        this.getTrades(this.profile.user.key, this.limit, this.offset, true);
    };
    TradePage.prototype.getTrades = function (userKey, limit, offset, concat) {
        // console.log("[getTrades] --concat"+concat)
        var _this = this;
        if (limit === void 0) { limit = 15; }
        if (offset === void 0) { offset = 0; }
        if (concat === void 0) { concat = false; }
        if (this.showMatchingOnly) {
            this.trade.getNearestPossibleTrades(userKey, limit, offset).then(function (res) {
                // console.log("res ", res.length)
                _this.hasMore = res.length == 15 ? true : false;
                if (concat) {
                    _this.traders = _this.traders.concat(res);
                }
                else
                    _this.traders = res;
            });
        }
        else {
            this.trade.getNearestTrades(userKey, limit, offset).then(function (res) {
                // console.log("res ", res.length)
                _this.hasMore = res.length == 15 ? true : false;
                if (concat) {
                    _this.traders = _this.traders.concat(res);
                }
                else
                    _this.traders = res;
            });
        }
    };
    TradePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-trade',template:/*ion-inline-start:"C:\wamp64\www\console-trade\src\pages\trade\trade.html"*/'<ion-content style="margin-top: 35px; padding-bottom: 90px;">\n<!-- <div style="height: 100%;" (click)="getNearestPossibleTrades()">\n	\n</div> -->\n	<ion-spinner *ngIf="trade.loading" name="bubbles"></ion-spinner>\n<div *ngIf="showDisclaimer">\n	<div class="warning-msg">\n		All games traded are expected to be working with no issues and within its proper casing.\n		If the game is not in good condition please return it immediately. Console Nation is not responsible for any damages regarding transactions. Compensatory, direct, incidental, consequential 	or otherwise.\n	</div>\n	<h5 class="iunderstand" (click)="confirmDisclaimer()"> I Understand</h5>\n</div>\n\n	<h4  style="padding: 5px 5px 0 16px;">Matches found</h4>\n	<button ion-button class="view-market-btn" (click)="toggleTraders()">\n		<span *ngIf="showMatchingOnly">Show All</span>\n		<span *ngIf="!showMatchingOnly">Show Matching Only</span>\n	</button>\n	<div style="position: relative; margin-bottom: 100px;">\n\n		<div >\n		 	<ion-item class="matching-trades" *ngFor="let trader of traders" no-lines>\n\n		 		<div class="info-row">\n			 		<ion-icon *ngIf="!trader.expanded" name="arrow-dropdown" (click)="expandToggle(trader)"></ion-icon>\n			 		<ion-icon *ngIf="trader.expanded" name="arrow-dropup" (click)="expandToggle(trader)"></ion-icon>\n			 		<h5>{{trader.first_name + " " + trader.last_name}} has</h5>\n		 			<h5 class="trader-distance">{{trader.distance | ceil}}m away</h5>\n		 			<ion-icon class="chat-icon" style="color: #fff;" name="chatbubbles" (click)="showChat(trader)"></ion-icon>\n			 		<!-- <h5 class="info-matches">{{trader.matchingTrades.length}} matches</h5> -->\n		 		</div>\n			 		<div class="trade-grid">\n\n			 			<div *ngIf="showMatchingOnly">\n					 		<div class="trade-item" *ngFor="let item of trader.matchingTrades">\n					 			<img-loader *ngIf="item.cover_url" class="fit-img" src="{{item.cover_url }}"></img-loader>\n				        <img *ngIf="!item.cover_url" class="fit-img" >\n				        <h5 *ngIf="!item.cover_url" class="trade-img-title">{{item.name}}</h5>\n					 		</div>\n					 	</div>\n\n			 			<div *ngIf="!showMatchingOnly">\n					 		<div class="trade-item" *ngFor="let item of trader.ownedList">\n					 			<img-loader *ngIf="item.cover_url"  class="fit-img" src="{{item.cover_url }}"></img-loader>\n				        <img *ngIf="!item.cover_url" class="fit-img" >\n				        <h5 *ngIf="!item.cover_url" class="trade-img-title">{{item.name}}</h5>\n					 		</div>\n			 			</div>\n\n			 		</div>\n		 		<div *ngIf="trader.expanded">\n			 		<div class="info-row">\n				 		<h5>{{trader.first_name + " " + trader.last_name}} wants</h5>\n			 		</div>\n			 		<div class="trade-grid ">\n\n			 			<div *ngIf="showMatchingOnly">\n					 		<div class="trade-item" *ngFor="let item of trader.matchingWishes">\n					 			<img-loader *ngIf="item.cover_url"  class="fit-img" src="{{item.cover_url }}"></img-loader>\n				        <img *ngIf="!item.cover_url" class="fit-img" >\n				        <h5 *ngIf="!item.cover_url" class="trade-img-title">{{item.name}}</h5>\n					 		</div>\n			 			</div>\n\n			 			<div *ngIf="!showMatchingOnly">\n					 		<div class="trade-item" *ngFor="let item of trader.wishList">\n					 			<img-loader *ngIf="item.cover_url"  class="fit-img" src="{{item.cover_url }}"></img-loader>\n				        <img *ngIf="!item.cover_url" class="fit-img" >\n				        <h5 *ngIf="!item.cover_url" class="trade-img-title">{{item.name}}</h5>\n					 		</div>\n			 			</div>\n\n			 		</div>\n		 			\n		 		</div>\n		 	</ion-item>\n		</div>\n		<button ion-button class="more-btn" *ngIf="hasMore" (click)="showMore()">Show more</button>\n\n	<!-- 	<div *ngIf="!showMatchingOnly">\n		 	<ion-item class="matching-trades" *ngFor="let trader of traders" no-lines>\n\n		 		<div class="info-row">\n			 		<ion-icon *ngIf="!trader.expanded" name="arrow-dropdown" (click)="expandToggle(trader)"></ion-icon>\n			 		<ion-icon *ngIf="trader.expanded" name="arrow-dropup" (click)="expandToggle(trader)"></ion-icon>\n			 		<h5>{{trader.first_name + " " + trader.last_name}} has</h5>\n		 			<h5 class="trader-distance">{{trader.distance | ceil}}m away</h5>\n		 			<ion-icon style="color: #fff;" name="chatbubbles" (click)="showChat(trader)"></ion-icon>\n		 		</div>\n			 		<div class="trade-grid">\n				 		<div class="trade-item" *ngFor="let item of trader.wishList">\n				 			<img-loader *ngIf="item.cover_url" class="fit-img" src="{{item.cover_url }}"></img-loader>\n			        <img *ngIf="!item.cover_url" class="fit-img" >\n				 		</div>\n			 		</div>\n		 		<div *ngIf="trader.expanded">\n			 		<div class="info-row">\n				 		<h5>{{trader.first_name + " " + trader.last_name}} wants</h5>\n			 		</div>\n			 		<div class="trade-grid ">\n				 		<div class="trade-item" *ngFor="let item of trader.ownedList">\n				 			<img-loader *ngIf="item.cover_url"  class="fit-img" src="{{item.cover_url }}"></img-loader>\n			        <img *ngIf="!item.cover_url" class="fit-img" >\n				 		</div>\n			 		</div>\n		 			\n		 		</div>\n		 	</ion-item>\n		</div -->\n\n	</div>\n 	<h5 class="status-msg" *ngIf="traders.length == 0 && !trade.loading">\n 		No matching trader found near your area. Check again in a while.\n 	</h5>\n</ion-content>'/*ion-inline-end:"C:\wamp64\www\console-trade\src\pages\trade\trade.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_3__providers_trade_trade__["a" /* TradeProvider */],
            __WEBPACK_IMPORTED_MODULE_2__providers_profile_profile__["a" /* ProfileProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* App */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], TradePage);
    return TradePage;
}());

//# sourceMappingURL=trade.js.map

/***/ }),

/***/ 313:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CourierPopoverPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CourierPopoverPage = /** @class */ (function () {
    function CourierPopoverPage(navCtrl, navParams, popoverCtrl, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.popoverCtrl = popoverCtrl;
        this.viewCtrl = viewCtrl;
        this.couriers = [
            {
                id: 0,
                logo: "assets/imgs/courier_express_logo.png",
                name: "Courier Express",
                price: 200
            },
            {
                id: 1,
                logo: "assets/imgs/lalamove_logo.png",
                name: "Lalamove",
                price: 260
            }
        ];
    }
    CourierPopoverPage.prototype.ionViewDidLoad = function () {
    };
    CourierPopoverPage.prototype.selectCourier = function (opt) {
        this.viewCtrl.dismiss(this.couriers[opt]);
    };
    CourierPopoverPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-courier-popover',template:/*ion-inline-start:"C:\wamp64\www\console-trade\src\pages\courier-popover\courier-popover.html"*/'<ion-content>\n	<ion-list>\n		<ion-item class="courier-item" *ngFor="let courier of couriers">\n			<img src="{{courier.logo}}" (click)="selectCourier(courier.id)"><h5 >&#8369; {{courier.price}}</h5>\n		</ion-item>\n	</ion-list>\n	<h5 class="note">* Cash on delivery</h5>\n</ion-content>\n'/*ion-inline-end:"C:\wamp64\www\console-trade\src\pages\courier-popover\courier-popover.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* PopoverController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */]])
    ], CourierPopoverPage);
    return CourierPopoverPage;
}());

//# sourceMappingURL=courier-popover.js.map

/***/ }),

/***/ 315:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessagesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_profile_profile__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_messages_messages__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_firebaseapp_firebaseapp__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_chat_chat__ = __webpack_require__(167);
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
    function MessagesPage(navCtrl, profile, fbApp, app, events, loadCtrl, messages) {
        this.navCtrl = navCtrl;
        this.profile = profile;
        this.fbApp = fbApp;
        this.app = app;
        this.events = events;
        this.loadCtrl = loadCtrl;
        this.messages = messages;
    }
    MessagesPage.prototype.ionViewWillEnter = function () {
    };
    MessagesPage.prototype.showChat = function (trader) {
        // console.log("showChat", trader)
        var matchingTrades = [];
        if (trader.ownedList)
            for (var _i = 0, _a = trader.ownedList; _i < _a.length; _i++) {
                var traderOwned = _a[_i];
                for (var _b = 0, _c = this.profile.user.wishList; _b < _c.length; _b++) {
                    var userWish = _c[_b];
                    if (userWish.id === traderOwned.id) {
                        matchingTrades.push(traderOwned);
                    }
                }
            }
        var matchingWishes = [];
        if (trader.wishList)
            for (var _d = 0, _e = trader.wishList; _d < _e.length; _d++) {
                var traderWish = _e[_d];
                for (var _f = 0, _g = this.profile.user.ownedList; _f < _g.length; _f++) {
                    var userOwned = _g[_f];
                    if (userOwned.id === traderWish.id) {
                        matchingWishes.push(userOwned);
                    }
                }
            }
        trader.matchingTrades = matchingTrades;
        trader.matchingWishes = matchingWishes;
        this.app.getRootNavs()[0].push(__WEBPACK_IMPORTED_MODULE_5__pages_chat_chat__["a" /* ChatPage */], {
            trader: trader
        });
    };
    MessagesPage.prototype.getRandomPic = function () {
        return 'assets/imgs/temp_profile_img_' + this.getRandomInt(1, 2) + '.png';
    };
    MessagesPage.prototype.getRandomInt = function (min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    MessagesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-messages',template:/*ion-inline-start:"C:\wamp64\www\console-trade\src\pages\messages\messages.html"*/'<ion-content style="margin-top: 50px;">\n    <ion-item *ngFor="let trader of messages.traders" (click)="showChat(trader)" no-lines>\n        <div class="message-container">\n            <div class="trader-img-container">\n                <img class="fit-img" src="{{trader.profileImage}}"> \n            </div>\n            <div class="trader-info">\n                <h5 class="trader-name">{{trader.first_name + " " + trader.last_name}} </h5>\n            </div>\n            <h5 *ngIf="trader.hasUnreadMessage" class="notification">!</h5>\n        </div>\n<!--         <div class="message-container">\n            <div class="trader-info">\n                <h5 class="trader-name">{{trader.first_name + " " + trader.last_name}} </h5>\n            </div>\n            <div class="matches">\n                <div class="trade-item"  *ngFor="let item of trader.ownedList">\n                    <ng-container *ngIf="profile.isItemMatch(item)">\n                        <h5>{{item.name}}</h5>\n                    </ng-container>\n                </div>\n            </div>\n        </div> -->\n    </ion-item>\n</ion-content>\n'/*ion-inline-end:"C:\wamp64\www\console-trade\src\pages\messages\messages.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_profile_profile__["a" /* ProfileProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_firebaseapp_firebaseapp__["a" /* FirebaseappProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* App */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_messages_messages__["a" /* MessagesProvider */]])
    ], MessagesPage);
    return MessagesPage;
}());

//# sourceMappingURL=messages.js.map

/***/ }),

/***/ 316:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_app_auth_app_auth__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_profile_profile__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_igdb_igdb__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_game__ = __webpack_require__(317);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__config__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ionic_image_loader__ = __webpack_require__(318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_map_map__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_file_transfer__ = __webpack_require__(320);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_file__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_file_chooser__ = __webpack_require__(321);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_image_picker__ = __webpack_require__(322);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_jquery__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_storage_storage__ = __webpack_require__(323);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_firebaseapp_firebaseapp__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_image_resizer__ = __webpack_require__(325);
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
    function ProfilePage(navCtrl, igdb, auth, profile, imgLoader, app, events, transfer, file, fileChooser, imagePicker, platform, fbApp, fbStorage, loadingCtrl, imageResizer) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.igdb = igdb;
        this.auth = auth;
        this.profile = profile;
        this.imgLoader = imgLoader;
        this.app = app;
        this.events = events;
        this.transfer = transfer;
        this.file = file;
        this.fileChooser = fileChooser;
        this.imagePicker = imagePicker;
        this.platform = platform;
        this.fbApp = fbApp;
        this.fbStorage = fbStorage;
        this.loadingCtrl = loadingCtrl;
        this.imageResizer = imageResizer;
        this.searchIsLoading = false;
        this.searchOptions = [];
        this.isAdminMode = false;
        this.gamesForRent = [];
        console.log("const:", this.profile.user);
        imgLoader.setBackgroundSize('cover');
        var rentGamesRef = this.fbApp.getGamesForRent();
        rentGamesRef.subscribe(function (res) {
            _this.gamesForRent = res;
            console.log(_this.gamesForRent);
        });
    }
    ProfilePage.prototype.toggleItemList = function (item, owned) {
        this.profile.toggleItemList(this.auth.user, item, owned);
        this.events.publish("profile:changed");
    };
    ProfilePage.prototype.toggleItemPlatform = function (item, platform, owned) {
        this.profile.toggleItemPlatform(this.auth.user, item, platform, owned);
        this.events.publish("profile:changed");
    };
    ProfilePage.prototype.removeItem = function (item, owned) {
        // console.log("pressing")
        this.profile.removeItem(this.auth.user, item, owned);
        this.events.publish("profile:changed");
    };
    ProfilePage.prototype.searchtTitle = function () {
        var _this = this;
        this.searchIsLoading = true;
        clearTimeout(this.timeout);
        this.timeout = setTimeout(function () {
            if (!_this.searchInput || _this.searchInput.length < 2) {
                _this.clearSearch();
            }
            else {
                _this.igdb.search(_this.searchInput).then(function (res) {
                    _this.searchOptions = res;
                    if (res.length == 0) {
                        _this.searchOptions.push({ id: "err", name: "No Games Found" });
                    }
                    _this.searchIsLoading = false;
                });
            }
        }, 300);
    };
    ProfilePage.prototype.clearSearch = function () {
        this.searchIsLoading = false;
        this.searchOptions = [];
    };
    ProfilePage.prototype.addGameToProfile = function (item) {
        this.searchInput = null;
        this.searchOptions = [];
        var platforms = [""];
        if (item.platforms) {
            if (item.platforms.includes(__WEBPACK_IMPORTED_MODULE_6__config__["a" /* C */].PS4_ID))
                platforms.push(__WEBPACK_IMPORTED_MODULE_6__config__["a" /* C */].PS4);
            if (item.platforms.includes(__WEBPACK_IMPORTED_MODULE_6__config__["a" /* C */].NS_ID))
                platforms.push(__WEBPACK_IMPORTED_MODULE_6__config__["a" /* C */].NS);
            if (item.platforms.includes(__WEBPACK_IMPORTED_MODULE_6__config__["a" /* C */].XBOX1_ID))
                platforms.push(__WEBPACK_IMPORTED_MODULE_6__config__["a" /* C */].XBOX1);
        }
        var url = null;
        if (item.cover)
            url = item.cover.url.replace("thumb", "cover_big").replace("//", "http://");
        var game = new __WEBPACK_IMPORTED_MODULE_5__models_game__["a" /* Game */](item.id, item.name, url, platforms);
        this.profile.addGameToProfile(this.auth.user, game, false);
        this.events.publish("profile:changed");
    };
    ProfilePage.prototype.addGameToRent = function (item) {
        this.searchInput = null;
        this.searchOptions = [];
        var platforms = [""];
        if (item.platforms) {
            if (item.platforms.includes(__WEBPACK_IMPORTED_MODULE_6__config__["a" /* C */].PS4_ID))
                platforms.push(__WEBPACK_IMPORTED_MODULE_6__config__["a" /* C */].PS4);
            if (item.platforms.includes(__WEBPACK_IMPORTED_MODULE_6__config__["a" /* C */].NS_ID))
                platforms.push(__WEBPACK_IMPORTED_MODULE_6__config__["a" /* C */].NS);
            if (item.platforms.includes(__WEBPACK_IMPORTED_MODULE_6__config__["a" /* C */].XBOX1_ID))
                platforms.push(__WEBPACK_IMPORTED_MODULE_6__config__["a" /* C */].XBOX1);
        }
        var url = null;
        if (item.cover)
            url = item.cover.url.replace("thumb", "cover_big").replace("//", "http://");
        var game = new __WEBPACK_IMPORTED_MODULE_5__models_game__["a" /* Game */](item.id, item.name, url, platforms);
        this.fbApp.addGameToRent(this.auth.user, game);
        this.events.publish("profile:changed");
    };
    ProfilePage.prototype.navToMap = function () {
        this.app.getRootNavs()[0].push(__WEBPACK_IMPORTED_MODULE_8__pages_map_map__["a" /* MapPage */]);
    };
    ProfilePage.prototype.uploadImage = function () {
        if (this.platform.is('core')) {
            this.uploadImage_web();
        }
        else if (this.platform.is('android')) {
            this.uploadImage_and();
        }
    };
    ProfilePage.prototype.uploadImage_and = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.imagePicker.getPictures({
                maximumImagesCount: 1,
                outputType: 0
            }).then(function (res) {
                if (!res) {
                    return;
                }
                var file = res[0];
                return _this.file.resolveLocalFilesystemUrl(file);
            }).then(function (file) {
                return _this.imageResizer
                    .resize({
                    uri: file.nativeURL,
                    quality: 100,
                    width: 90,
                    height: 180,
                });
            }).then(function (filePath) {
                return _this.file.resolveLocalFilesystemUrl(filePath);
            }).then(function (file) {
                return _this.file.readAsDataURL(file.filesystem.root.nativeURL, file.name);
            }).then(function (res) {
                _this.storeImage(res);
            })
                .catch(function (e) { return console.log(e); });
        });
    };
    ProfilePage.prototype.uploadImage_web = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_13_jquery__('#fileInput').trigger("click");
        __WEBPACK_IMPORTED_MODULE_13_jquery__('#fileInput').change(function () {
            var file = __WEBPACK_IMPORTED_MODULE_13_jquery__('#fileInput')[0]['files'][0];
            if (!file)
                return;
            _this.getBase64(file).then(function (res) {
                //TODO resize image
                _this.storeImage(res);
                __WEBPACK_IMPORTED_MODULE_13_jquery__('#fileInput').val('');
            });
        });
    };
    ProfilePage.prototype.storeImage = function (base64) {
        // console.log("[storeImage]",base64)
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Uploading image...'
        });
        loading.present();
        this.fbStorage.uploadImage(base64, this.profile.user.email)
            .then(function (res) {
            // console.log("upload image",res)
            _this.fbApp.updateUserProfileImage(_this.profile.user.key, res);
            _this.profile.user.profileImage = res;
            loading.dismiss();
        }).catch(function (err) {
            console.log("storeImage", err);
            loading.dismiss();
        });
    };
    ProfilePage.prototype.toggleAdmin = function () {
        this.isAdminMode = !this.isAdminMode;
    };
    ProfilePage.prototype.getBase64 = function (file) {
        return new Promise(function (resolve, reject) {
            var reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = function () {
                resolve(reader.result);
            };
            reader.onerror = function (error) {
                reject(error);
            };
        });
    };
    ProfilePage.prototype.getExt = function (filename) {
        var idx = filename.lastIndexOf('.');
        return (idx < 1) ? "" : filename.substr(idx + 1);
    };
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-profile',template:/*ion-inline-start:"C:\wamp64\www\console-trade\src\pages\profile\profile.html"*/'<ion-content (click)="clearSearch()" [class.admin]="isAdminMode">\n\n<input id="fileInput" type="file" style="display: none" accept="image/*"/>\n\n<div class="profile">\n\n  <div class="profile-image">\n\n    <img-loader class="circle-head" src="{{profile.user.profileImage}}" (click)="uploadImage()"></img-loader>\n\n  </div>\n\n  <div class="profile-info-wrapper">\n\n    <div class="profile-info">\n\n        <h4>{{profile.user.first_name + " " + profile.user.last_name}}</h4>\n\n        <!-- <ion-icon name="create"></ion-icon> -->\n\n      <!-- <h5>{{profile.user.location}}</h5> -->\n\n    </div>\n\n  </div>\n\n  <button class="set-location-btn" ion-button (click)="navToMap()">\n\n    Set Trade Locations\n\n  </button>\n\n</div>\n\n\n\n<hr inset padding-horizontal style="background-color: #fff;">\n\n\n\n<div class="trade-info" >\n\n  <div class="admin-btn" (click)="toggleAdmin()" *ngIf="profile.user.admin == true">ADMIN</div>\n\n  <div class="game-input-wrapper">\n\n    <ion-spinner *ngIf="searchIsLoading" class="search-spinner" name="dots"></ion-spinner>        \n\n    <ion-item  inset class="game-input" no-lines>\n\n      <ion-input (ionChange)="searchtTitle()" type="text" [(ngModel)]="searchInput" placeholder="Search game titles">\n\n      </ion-input>\n\n    </ion-item>\n\n    <h5 float-right class="tip-text">*tap games to toggle, hold to delete</h5>\n\n    <div class="autocomplete">\n\n      <ion-list *ngIf="!isAdminMode">\n\n        <ion-item class="autocomplete-item" *ngFor="let item of searchOptions" (click)="addGameToProfile(item)">\n\n          <h5>{{item.name}}</h5>\n\n        </ion-item>\n\n      </ion-list>\n\n\n\n      <ion-list *ngIf="isAdminMode">\n\n        <ion-item>ADD TO RENT</ion-item>\n\n        <ion-item class="autocomplete-item" *ngFor="let item of searchOptions" (click)="addGameToRent(item)">\n\n          <h5>{{item.name}}</h5>\n\n        </ion-item>\n\n      </ion-list>\n\n    </div>\n\n  </div>\n\n  \n\n  <h5 class="divider" style="margin-top: 30px;">Looking for</h5>\n\n  <h5 class="display-text" *ngIf="profile.user.wishList.length == 0">Add games you want to have</h5>\n\n  <div class="display-grid">\n\n    <div class="trade-item" *ngFor="let item of profile.user.wishList">\n\n      <div ion-long-press class="trade-img" (click)="toggleItemList(item, false)" [interval]="400" (onPressing)="removeItem(item, false)">\n\n        <img-loader *ngIf="item.cover_url" class="fit-img" src="{{item.cover_url}}" ></img-loader>\n\n        <img *ngIf="!item.cover_url" class="fit-img" >\n\n        <h5 *ngIf="!item.cover_url" class="trade-img-title" >{{item.name}}</h5>\n\n      </div>\n\n      <div class="platforms">\n\n        <img (click)="toggleItemPlatform(item, \'xbox1\', false)" [ngClass]="{\'faded\': item.platforms.indexOf(\'xbox1\') == -1}" src="assets/imgs/xbox_icon.png">\n\n        <img (click)="toggleItemPlatform(item, \'ps4\', false)" [ngClass]="{\'faded\': item.platforms.indexOf(\'ps4\') == -1}" src="assets/imgs/ps4_icon.png">\n\n        <img (click)="toggleItemPlatform(item, \'ns\', false)" [ngClass]="{\'faded\': item.platforms.indexOf(\'ns\') == -1}" src="assets/imgs/ns_icon.png">\n\n      </div>\n\n    </div>    \n\n  </div>\n\n\n\n  <h5 class="divider">Owned</h5>\n\n\n\n  <h5 class="display-text" *ngIf="profile.user.ownedList.length == 0">Add games you want to trade</h5>\n\n  \n\n  <div class="display-grid">\n\n    <div class="trade-item" *ngFor="let item of profile.user.ownedList">\n\n      <div ion-long-press class="trade-img" (click)="toggleItemList(item, true)" [interval]="400" (onPressing)="removeItem(item, true)">\n\n        <img-loader *ngIf="item.cover_url" class="fit-img" src="{{item.cover_url}}" ></img-loader>\n\n        <img *ngIf="!item.cover_url" class="fit-img" >\n\n        <h5 *ngIf="!item.cover_url" class="trade-img-title" >{{item.name}}</h5>\n\n      </div>\n\n      <div class="platforms">\n\n        <img (click)="toggleItemPlatform(item, \'xbox1\', true)" [ngClass]="{\'faded\': item.platforms.indexOf(\'xbox1\') == -1}" src="assets/imgs/xbox_icon.png">\n\n        <img (click)="toggleItemPlatform(item, \'ps4\', true)" [ngClass]="{\'faded\': item.platforms.indexOf(\'ps4\') == -1}" src="assets/imgs/ps4_icon.png">\n\n        <img (click)="toggleItemPlatform(item, \'ns\', true)" [ngClass]="{\'faded\': item.platforms.indexOf(\'ns\') == -1}" src="assets/imgs/ns_icon.png">\n\n      </div>\n\n      \n\n    </div>    \n\n  </div>\n\n\n\n  <div *ngIf="profile.user.admin">\n\n    <h5 class="divider">Rent</h5>\n\n\n\n    <div class="display-grid">\n\n      <div class="trade-item" *ngFor="let item of gamesForRent">\n\n        <div ion-long-press class="trade-img" [interval]="400" (onPressing)="removeRentItem(item, true)">\n\n          <img-loader *ngIf="item.cover_url" class="fit-img" src="{{item.cover_url}}" ></img-loader>\n\n          <img *ngIf="!item.cover_url" class="fit-img" >\n\n          <h5 *ngIf="!item.cover_url" class="trade-img-title" >{{item.name}}</h5>\n\n        </div>\n\n        <div class="platforms">\n\n          <img (click)="toggleItemPlatform(item, \'xbox1\', true)" [ngClass]="{\'faded\': item.platforms.indexOf(\'xbox1\') == -1}" src="assets/imgs/xbox_icon.png">\n\n          <img (click)="toggleItemPlatform(item, \'ps4\', true)" [ngClass]="{\'faded\': item.platforms.indexOf(\'ps4\') == -1}" src="assets/imgs/ps4_icon.png">\n\n          <img (click)="toggleItemPlatform(item, \'ns\', true)" [ngClass]="{\'faded\': item.platforms.indexOf(\'ns\') == -1}" src="assets/imgs/ns_icon.png">\n\n        </div>\n\n        \n\n      </div>    \n\n    </div>\n\n    \n\n  </div>\n\n</div>\n\n\n\n\n\n</ion-content>\n\n\n\n'/*ion-inline-end:"C:\wamp64\www\console-trade\src\pages\profile\profile.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_igdb_igdb__["a" /* IgdbProvider */],
            __WEBPACK_IMPORTED_MODULE_2__providers_app_auth_app_auth__["a" /* AppAuthProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_profile_profile__["a" /* ProfileProvider */],
            __WEBPACK_IMPORTED_MODULE_7_ionic_image_loader__["a" /* ImageLoaderConfig */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* App */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */],
            __WEBPACK_IMPORTED_MODULE_9__ionic_native_file_transfer__["a" /* FileTransfer */],
            __WEBPACK_IMPORTED_MODULE_10__ionic_native_file__["a" /* File */],
            __WEBPACK_IMPORTED_MODULE_11__ionic_native_file_chooser__["a" /* FileChooser */],
            __WEBPACK_IMPORTED_MODULE_12__ionic_native_image_picker__["a" /* ImagePicker */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_15__providers_firebaseapp_firebaseapp__["a" /* FirebaseappProvider */],
            __WEBPACK_IMPORTED_MODULE_14__providers_storage_storage__["a" /* StorageProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_16__ionic_native_image_resizer__["a" /* ImageResizer */]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 317:
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

/***/ 323:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StorageProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(539);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(324);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var StorageProvider = /** @class */ (function () {
    function StorageProvider(http) {
        this.http = http;
    }
    StorageProvider.prototype.uploadImage = function (image, userEmail) {
        // console.log("f:uploadImage", image, userEmail)
        return new Promise(function (resolve, reject) {
            var storageRef = __WEBPACK_IMPORTED_MODULE_2_firebase__["storage"]().ref().child("images/" + userEmail + "/profile");
            var parseUpload = storageRef.putString(image, 'data_url');
            parseUpload.on('state_changed', function (_snapshot) {
                // console.log('snapshot progess ',_snapshot);
            }, function (_err) {
                console.log('snapshot err ', _err);
                reject(_err);
            }, function () {
                storageRef.getDownloadURL().then(function (res) {
                    // console.log('getDownloadURL ',res);
                    resolve(res);
                });
            });
        });
    };
    StorageProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], StorageProvider);
    return StorageProvider;
}());

//# sourceMappingURL=storage.js.map

/***/ }),

/***/ 326:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OptionsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_app_auth_app_auth__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_email_composer__ = __webpack_require__(172);
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
    function OptionsPage(navCtrl, navParams, auth, emailComposer) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.auth = auth;
        this.emailComposer = emailComposer;
    }
    OptionsPage.prototype.ionViewDidLoad = function () {
    };
    OptionsPage.prototype.feedback = function () {
        var email = {
            to: 'lemontree.development@gmail.com',
            subject: 'Console Nation Feedback',
        };
        this.emailComposer.open(email);
    };
    OptionsPage.prototype.logout = function () {
        this.auth.logout();
    };
    OptionsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-options',template:/*ion-inline-start:"C:\wamp64\www\console-trade\src\pages\options\options.html"*/'<!--\n  Generated template for the OptionsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Options</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list inset>\n    <ion-item (click)="feedback()">\n      Feedback\n    </ion-item>\n  	<ion-item (click)="logout()">\n  		Logout\n  	</ion-item>\n	</ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\wamp64\www\console-trade\src\pages\options\options.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_app_auth_app_auth__["a" /* AppAuthProvider */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_email_composer__["a" /* EmailComposer */]])
    ], OptionsPage);
    return OptionsPage;
}());

//# sourceMappingURL=options.js.map

/***/ }),

/***/ 327:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DealPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_igdb_igdb__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_game__ = __webpack_require__(317);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__config__ = __webpack_require__(98);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DealPage = /** @class */ (function () {
    function DealPage(navCtrl, navParams, igdb) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.igdb = igdb;
        this.searchIsLoading = false;
        this.searchOptions = [];
        this.cart = [];
        this.submitText = "Evaluate";
    }
    DealPage.prototype.ionViewDidLoad = function () {
    };
    DealPage.prototype.searchtTitle = function () {
        var _this = this;
        this.searchIsLoading = true;
        clearTimeout(this.timeout);
        this.timeout = setTimeout(function () {
            if (!_this.searchInput || _this.searchInput.length < 2) {
                _this.clearSearch();
            }
            else {
                _this.igdb.search(_this.searchInput).then(function (res) {
                    _this.searchOptions = res;
                    if (res.length == 0) {
                        _this.searchOptions.push({ id: "err", name: "No Games Found" });
                    }
                    _this.searchIsLoading = false;
                });
            }
        }, 300);
    };
    DealPage.prototype.clearSearch = function () {
        this.searchIsLoading = false;
        this.searchOptions = [];
    };
    DealPage.prototype.addGameToCart = function (item) {
        if (item.id === "err")
            return;
        var platforms = [""];
        if (item.platforms) {
            if (item.platforms.includes(__WEBPACK_IMPORTED_MODULE_4__config__["a" /* C */].PS4_ID))
                platforms.push(__WEBPACK_IMPORTED_MODULE_4__config__["a" /* C */].PS4);
            if (item.platforms.includes(__WEBPACK_IMPORTED_MODULE_4__config__["a" /* C */].NS_ID))
                platforms.push(__WEBPACK_IMPORTED_MODULE_4__config__["a" /* C */].NS);
            if (item.platforms.includes(__WEBPACK_IMPORTED_MODULE_4__config__["a" /* C */].XBOX1_ID))
                platforms.push(__WEBPACK_IMPORTED_MODULE_4__config__["a" /* C */].XBOX1);
        }
        var url = null;
        if (item.cover)
            url = item.cover.url.replace("thumb", "cover_big").replace("//", "http://");
        var game = new __WEBPACK_IMPORTED_MODULE_3__models_game__["a" /* Game */](item.id, item.name, url, platforms);
        this.searchInput = null;
        this.cart.push(game);
        // console.log(this.cart)
        this.clearSearch();
    };
    DealPage.prototype.removeItem = function (item) {
        this.cart = this.cart.filter(function (e) { return e.id !== item.id; });
    };
    DealPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-deal',template:/*ion-inline-start:"C:\wamp64\www\console-trade\src\pages\deal\deal.html"*/'<ion-content  (click)="clearSearch()" padding>\n\n	<div class="game-input-wrapper">\n    <ion-spinner *ngIf="searchIsLoading" class="search-spinner" name="dots"></ion-spinner>        \n    <div class="autocomplete">\n      <ion-list>\n        <ion-item class="autocomplete-item" *ngFor="let item of searchOptions" (click)="addGameToCart(item)">\n          <!-- <img *ngIf="item.cover != null" src="{{item.cover.url}}"> -->\n          <h5 style="margin-top: 0;">{{item.name}}</h5>\n        </ion-item>\n      </ion-list>\n    </div>\n		\n	</div>\n    <ion-item inset class="game-input" no-lines>\n      <ion-input (ionChange)="searchtTitle()" type="text" [(ngModel)]="searchInput" placeholder="Search game titles">\n      </ion-input>\n    </ion-item>\n\n\n  <div class="display-grid">\n    <div class="trade-item" *ngFor="let item of cart">\n      <div ion-long-press class="trade-img" (tap)="toggleItemOwnership(item, false)" [interval]="400" (onPressing)="removeItem(item, false)">\n        <img-loader *ngIf="item.cover_url" class="fit-img" src="{{item.cover_url}}" ></img-loader>\n        <img *ngIf="!item.cover_url" class="fit-img" >\n        <h5 *ngIf="!item.cover_url" class="trade-img-title" >{{item.name}}</h5>\n      </div>\n      <div class="platforms">\n        <img (tap)="toggleItemPlatform(item, \'xbox1\', false)" [ngClass]="{\'faded\': item.platforms.indexOf(\'xbox1\') == -1}" src="assets/imgs/xbox_icon.png">\n        <img (tap)="toggleItemPlatform(item, \'ps4\', false)" [ngClass]="{\'faded\': item.platforms.indexOf(\'ps4\') == -1}" src="assets/imgs/ps4_icon.png">\n        <img (tap)="toggleItemPlatform(item, \'ns\', false)" [ngClass]="{\'faded\': item.platforms.indexOf(\'ns\') == -1}" src="assets/imgs/ns_icon.png">\n      </div>\n    </div>    \n  </div>\n\n    <div *ngIf="cart.length == 0">\n      <h5 class="no-games-text">Add items you wish to trade-in and get money! (50% of retail price)</h5>\n    </div>\n  <div>\n    <button class="submit-btn" ion-button>{{submitText}}</button>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"C:\wamp64\www\console-trade\src\pages\deal\deal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_igdb_igdb__["a" /* IgdbProvider */]])
    ], DealPage);
    return DealPage;
}());

//# sourceMappingURL=deal.js.map

/***/ }),

/***/ 328:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_email_composer__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_shop_shop__ = __webpack_require__(173);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var OrderPage = /** @class */ (function () {
    function OrderPage(navCtrl, navParams, formBuilder, emailComposer, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.emailComposer = emailComposer;
        this.http = http;
        this.formInputs = {
            name: "",
            email: "",
            contactNo: "",
        };
        this.cart = {
            games: []
        };
        this.cart = this.navParams.get("cart");
        this.form = this.formBuilder.group({
            name: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required],
            email: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required],
            contactNo: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required],
            address: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required],
        });
    }
    OrderPage.prototype.submit = function () {
        this.sendEmail();
    };
    OrderPage.prototype.sendEmail = function () {
        var _this = this;
        var body = {
            name: this.form.value.name,
            email: this.form.value.email,
            contactNo: this.form.value.contactNo,
            address: this.form.value.address,
            to: "lemontree.development@gmail.com",
            subj: "CONSOLE TRADE - RENT ORDER"
        };
        this.http.post("https://lemon-data-center-js.herokuapp.com/api/email", body, {})
            .subscribe(function (data) {
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__pages_shop_shop__["a" /* ShopPage */], {
                orderSuccess: data
            });
            console.log("success sending mail ", data);
        }, function (error) {
            console.log("error sending mail", error);
        });
    };
    OrderPage.prototype.ionViewDidLoad = function () {
    };
    OrderPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-order',template:/*ion-inline-start:"C:\wamp64\www\console-trade\src\pages\order\order.html"*/'<ion-content padding style="margin-top: 26px;">\n\n<div class="form-container">\n <form [formGroup]="form" (ngSubmit)="submit()">\n      <ion-item>\n        <ion-label>Name</ion-label>\n        <ion-input type="text" [(ngModel)]="formInputs.name" name="name" formControlName="name"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label>Email</ion-label>\n        <ion-input type="text" [(ngModel)]="formInputs.email" name="email" formControlName="email"></ion-input>\n      </ion-item>\n      <ion-item class="contact-input">\n        <ion-label>Contact Num</ion-label>\n        <ion-input type="text" [(ngModel)]="formInputs.contactNo" name="contactNo" formControlName="contactNo"></ion-input>\n      </ion-item>\n      <ion-list-header no-lines>\n      Address\n      </ion-list-header>\n      <ion-item no-lines>\n        <ion-textarea  type="text" [(ngModel)]="formInputs.address" name="address" formControlName="address"></ion-textarea >\n      </ion-item>\n    </form>\n    <button ion-button type="submit" class="order-btn" block>Order</button>\n  \n</div>\n\n</ion-content>\n'/*ion-inline-end:"C:\wamp64\www\console-trade\src\pages\order\order.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_email_composer__["a" /* EmailComposer */],
            __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClient */]])
    ], OrderPage);
    return OrderPage;
}());

//# sourceMappingURL=order.js.map

/***/ }),

/***/ 329:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_app_auth_app_auth__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tabs_tabs__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_keyboard__ = __webpack_require__(330);
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
    function SignupPage(navCtrl, navParams, auth, keyboard, platform, fb) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.auth = auth;
        this.keyboard = keyboard;
        this.platform = platform;
        this.canSubmit = false;
        this.validation_messages = {
            'first_name': [
                { type: 'required', message: 'first name is required.' },
                { type: 'minlength', message: 'first name must be at least 2 characters long.' },
                { type: 'maxlength', message: 'first name cannot be more than 20 characters long.' },
                { type: 'validUsername', message: 'Your username has already been taken.' }
            ],
            'last_name': [
                { type: 'required', message: 'last name is required.' },
                { type: 'minlength', message: 'last name must be at least 2 characters long.' },
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
        this.platform.ready().then(function () {
            _this.keyboard.disableScroll(false);
        });
        var passwordRegex = '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).+$';
        this.signupForm = fb.group({
            first_name: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].minLength(2), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].maxLength(20)])],
            last_name: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].minLength(2), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].maxLength(20)])],
            email: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].email])],
            password: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].pattern(passwordRegex), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].minLength(8), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].maxLength(20)])],
            gender: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required])],
        });
    }
    SignupPage.prototype.ionViewDidLoad = function () {
    };
    SignupPage.prototype.ionViewDidEnter = function () {
    };
    SignupPage.prototype.ionViewWillLeave = function () {
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
            password: this.signupForm.value.password,
            gender: this.signupForm.value.gender
        };
        this.auth.signUp(form).then(function () { return _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__tabs_tabs__["a" /* TabsPage */]); }, function (error) { return console.log("signup error", error); });
    };
    SignupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-signup',template:/*ion-inline-start:"C:\wamp64\www\console-trade\src\pages\signup\signup.html"*/'<ion-header>\n  <ion-navbar>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding class="page-content">\n  \n  <form (ngSubmit)="signup()" [formGroup]="signupForm" (change)="checkForm()">\n\n  		<h2>Signup</h2>\n      <ion-list inset>\n\n        <ion-item style="margin-top: 20px;">\n          <ion-input type="text" placeholder="First Name" formControlName="first_name"></ion-input>\n        </ion-item>\n        \n        <div class="error-list" >\n        	<div *ngFor="let validation of validation_messages.first_name" >\n	        	<h5 class="error-msg" *ngIf="signupForm.get(\'first_name\').hasError(validation.type) && (signupForm.get(\'first_name\').dirty || signupForm.get(\'first_name\').touched)" >\n	        		{{validation.message}}\n	        	</h5>\n        	</div>\n        </div>\n\n        <ion-item style="margin-top: 20px;" >\n          <ion-input type="text" placeholder="Last Name" formControlName="last_name"></ion-input>\n        </ion-item>\n        \n        <div class="error-list" >\n        	<div *ngFor="let validation of validation_messages.last_name" >\n	        	<h5 class="error-msg" *ngIf="signupForm.get(\'last_name\').hasError(validation.type) && (signupForm.get(\'last_name\').dirty || signupForm.get(\'last_name\').touched)" >\n	        		{{validation.message}}\n	        	</h5>\n        	</div>\n        </div>\n\n        <ion-item >\n          <ion-input type="text" placeholder="Email" formControlName="email"></ion-input>\n        </ion-item>\n        \n        <div class="error-list" >\n        	<div *ngFor="let validation of validation_messages.email" >\n\n	        	<h5 class="error-msg" *ngIf="signupForm.get(\'email\').hasError(\'required\') && \n	        	(signupForm.get(\'email\').dirty || signupForm.get(\'email\').touched) &&\n	        	validation.type == \'required\'\n	        	" >\n	        		{{validation.message}}\n	        	</h5>\n	        	<h5 class="error-msg" *ngIf="!signupForm.get(\'email\').hasError(\'required\') && signupForm.get(\'email\').hasError(validation.type) && (signupForm.get(\'email\').dirty || signupForm.get(\'email\').touched);" >\n	        		{{validation.message}}\n	        	</h5>\n					</div>\n				</div>\n        <ion-item>\n          <ion-input type="{{passwordType}}" placeholder="Password" formControlName="password"></ion-input>\n        	<ion-icon name="{{showPasswordIcon}}" (click)="showPassword()" item-right></ion-icon>\n        </ion-item>\n        \n        <div class="error-list" >\n        	<div *ngFor="let validation of validation_messages.password" >\n	        	<h5 class="error-msg" *ngIf="signupForm.get(\'password\').hasError(validation.type) && (signupForm.get(\'password\').dirty || signupForm.get(\'password\').touched)" >\n	        		{{validation.message}}\n	        	</h5>\n        	</div>\n        </div>\n\n        <ion-list radio-group class="gender-row" formControlName="gender">\n          <ion-item no-lines>\n            <ion-label>Male</ion-label>\n            <ion-radio checked="true" value="m"></ion-radio>\n          </ion-item>\n          <ion-item no-lines>\n            <ion-label>Female</ion-label>\n            <ion-radio value="f"></ion-radio>\n          </ion-item>\n        </ion-list>\n\n        <div class="cb-policy">\n          <ion-checkbox ></ion-checkbox>\n          <ion-label>I have read and understood the <a href="https://jon-guiriba01.github.io/privacy-policy.github.io/console-nation">Privacy Policy</a></ion-label>\n        </div>\n\n      </ion-list>\n\n      <div class="btn-container">\n      	<button ion-button type="submit" [disabled]="!signupForm.valid">Submit</button>\n      </div>\n\n\n    </form>\n\n</ion-content>\n'/*ion-inline-end:"C:\wamp64\www\console-trade\src\pages\signup\signup.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_app_auth_app_auth__["a" /* AppAuthProvider */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_keyboard__["a" /* Keyboard */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]])
    ], SignupPage);
    return SignupPage;
}());

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 331:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResetpasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_app_auth_app_auth__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(174);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ResetpasswordPage = /** @class */ (function () {
    function ResetpasswordPage(navCtrl, navParams, auth, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.auth = auth;
        this.toastCtrl = toastCtrl;
        this.email = "";
    }
    ResetpasswordPage.prototype.ionViewDidLoad = function () {
    };
    ResetpasswordPage.prototype.resetPassword = function () {
        var _this = this;
        this.auth.resetPassword(this.email)
            .then(function () {
            _this.showToast("Email sent!", true);
        })
            .catch(function (err) { return _this.showToast(err); });
    };
    ResetpasswordPage.prototype.showToast = function (msg, redirect) {
        var _this = this;
        if (redirect === void 0) { redirect = false; }
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 1500,
            position: 'top'
        });
        toast.onDidDismiss(function () {
            if (redirect)
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
        });
        toast.present();
    };
    ResetpasswordPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-resetpassword',template:/*ion-inline-start:"C:\wamp64\www\console-trade\src\pages\resetpassword\resetpassword.html"*/'<ion-header>\n  <ion-navbar>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n	<ion-item>\n		<ion-label floating >\n			Email:\n		</ion-label>\n		<ion-input [(ngModel)]="email">\n		</ion-input>\n	</ion-item>\n	<button ion-button (click)="resetPassword()">\n		Reset Password\n	</button>\n</ion-content>\n'/*ion-inline-end:"C:\wamp64\www\console-trade\src\pages\resetpassword\resetpassword.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_app_auth_app_auth__["a" /* AppAuthProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */]])
    ], ResetpasswordPage);
    return ResetpasswordPage;
}());

//# sourceMappingURL=resetpassword.js.map

/***/ }),

/***/ 334:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(335);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(457);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 39:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppAuthProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_profile__ = __webpack_require__(299);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_geolocation__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_google_plus__ = __webpack_require__(308);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};









var AppAuthProvider = /** @class */ (function () {
    function AppAuthProvider(afAuth, geolocation, afdb, googlePlus, toastCtrl, platform) {
        this.afAuth = afAuth;
        this.geolocation = geolocation;
        this.afdb = afdb;
        this.googlePlus = googlePlus;
        this.toastCtrl = toastCtrl;
        this.platform = platform;
    }
    AppAuthProvider.prototype.signInWithEmail = function (credentials) {
        return this.afAuth.auth.signInWithEmailAndPassword(credentials.email, credentials.password);
    };
    AppAuthProvider.prototype.signUp = function (form) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.afAuth.auth.createUserWithEmailAndPassword(form.email, form.password).then(function (res) {
                res.user.sendEmailVerification();
                var profile = new __WEBPACK_IMPORTED_MODULE_3__models_profile__["a" /* Profile */]();
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
    AppAuthProvider.prototype.googleLogin_old = function () {
        // console.log("googlelogin")
        var opt = {
            'webClientId': '670922071182-meeqgiin43vk18i54v5kag524cane4d3.apps.googleusercontent.com',
            'offline': true
        };
        // return new Promise((resolve, reject) => { 
        this.googlePlus.login(opt).then(function (res) {
            var googleCredential = __WEBPACK_IMPORTED_MODULE_2_firebase_app__["auth"].GoogleAuthProvider
                .credential(res.idToken);
            // console.log('googleCredential', googleCredential)
            // console.log('loginRes', res)
            __WEBPACK_IMPORTED_MODULE_2_firebase_app__["auth"]().signInWithCredential(googleCredential)
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
    AppAuthProvider.prototype.webGoogleLogin = function () {
        return __awaiter(this, void 0, void 0, function () {
            var provider, credential, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        provider = new __WEBPACK_IMPORTED_MODULE_2_firebase_app__["auth"].GoogleAuthProvider();
                        console.log("provider", provider);
                        return [4 /*yield*/, this.afAuth.auth.signInWithPopup(provider)];
                    case 1:
                        credential = _a.sent();
                        console.log("credential", credential);
                        return [3 /*break*/, 3];
                    case 2:
                        err_1 = _a.sent();
                        console.log(err_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    AppAuthProvider.prototype.nativeGoogleLogin = function () {
        return __awaiter(this, void 0, void 0, function () {
            var gplusUser, gPlusAuth, err_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        console.log("nativeGoogleLogin");
                        return [4 /*yield*/, this.googlePlus.login({
                                'webClientId': '670922071182-k9igkfh3iikrl4lg60pp3587sbpfcpkv.apps.googleusercontent.com',
                                'offline': true,
                                'scopes': 'profile email'
                            })];
                    case 1:
                        gplusUser = _a.sent();
                        console.log("gplusUser", gplusUser);
                        return [4 /*yield*/, this.afAuth.auth.signInWithCredential(__WEBPACK_IMPORTED_MODULE_2_firebase_app__["auth"].GoogleAuthProvider.credential(gplusUser.idToken))];
                    case 2:
                        gPlusAuth = _a.sent();
                        console.log("gPlusAuth", gPlusAuth);
                        return [2 /*return*/, gPlusAuth];
                    case 3:
                        err_2 = _a.sent();
                        console.log(err_2);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    AppAuthProvider.prototype.googleLogin = function () {
        console.log("googleLogin");
        if (this.platform.is('android')) {
            this.nativeGoogleLogin();
        }
        else {
            this.webGoogleLogin();
        }
    };
    AppAuthProvider.prototype.logInWithGoogle = function () {
        return this.afAuth.auth.signInWithPopup(new __WEBPACK_IMPORTED_MODULE_2_firebase_app__["auth"].GoogleAuthProvider());
    };
    AppAuthProvider.prototype.logInWithGoogleRedirect = function () {
        var _this = this;
        return this.afAuth.auth.signInWithRedirect(new __WEBPACK_IMPORTED_MODULE_2_firebase_app__["auth"].GoogleAuthProvider())
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["AngularFireAuth"],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__["AngularFireDatabase"],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_google_plus__["a" /* GooglePlus */],
            __WEBPACK_IMPORTED_MODULE_7_ionic_angular__["k" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_7_ionic_angular__["i" /* Platform */]])
    ], AppAuthProvider);
    return AppAuthProvider;
}());

//# sourceMappingURL=app-auth.js.map

/***/ }),

/***/ 40:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_profile__ = __webpack_require__(299);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_underscore_underscore__ = __webpack_require__(310);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_underscore_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_underscore_underscore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_firebaseapp_firebaseapp__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(11);
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
    function ProfileProvider(http, fbapp, toastCtrl) {
        this.http = http;
        this.fbapp = fbapp;
        this.toastCtrl = toastCtrl;
        this.allListsUpdateTimeout = null;
        this.wishListUpdateTimeout = null;
        this.ownedListUpdateTimeout = null;
        this.currentConversation = null;
        this.user = new __WEBPACK_IMPORTED_MODULE_2__models_profile__["a" /* Profile */]();
    }
    ProfileProvider.prototype.addGameToProfile = function (fbUser, game, owned) {
        var duplicate = __WEBPACK_IMPORTED_MODULE_3_underscore_underscore__["find"](this.user.wishList, function (e) { return e.id === game.id; });
        if (!game.platforms)
            game.platforms = [];
        // console.log("addGamToProfile: ",game)
        if (duplicate || this.user.wishList.length > 8) {
            var alreadyOwned = __WEBPACK_IMPORTED_MODULE_3_underscore_underscore__["find"](this.user.ownedList, function (e) { return e.id === game.id; });
            if (alreadyOwned)
                return;
            this.user.addToOwnedList(game);
            this.fbapp.updateUserOwnedList(fbUser, this.user.ownedList);
        }
        else {
            this.user.addToWishList(game);
            this.fbapp.updateUserWishList(fbUser, this.user.wishList);
        }
    };
    ProfileProvider.prototype.toggleItemList = function (authUser, item, owned) {
        if (owned) {
            var duplicate = __WEBPACK_IMPORTED_MODULE_3_underscore_underscore__["find"](this.user.wishList, function (e) { return e.id === item.id; });
            if (duplicate)
                return;
            if (this.user.wishList.length > 8)
                return;
            this.user.addToWishList(item);
            this.user.ownedList = __WEBPACK_IMPORTED_MODULE_3_underscore_underscore__["reject"](this.user.ownedList, function (e) { return e.id === item.id; });
        }
        else {
            var duplicate = __WEBPACK_IMPORTED_MODULE_3_underscore_underscore__["find"](this.user.ownedList, function (e) { return e.id === item.id; });
            if (duplicate)
                return;
            if (this.user.ownedList.length > 8)
                return;
            this.user.addToOwnedList(item);
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
            __WEBPACK_IMPORTED_MODULE_4__providers_firebaseapp_firebaseapp__["a" /* FirebaseappProvider */],
            __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["k" /* ToastController */]])
    ], ProfileProvider);
    return ProfileProvider;
}());

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 457:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(497);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2__ = __webpack_require__(546);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_angularfire2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2_auth__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__config__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ultimate_ngxerrors__ = __webpack_require__(547);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_trade_trade__ = __webpack_require__(311);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_messages_messages__ = __webpack_require__(315);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_profile_profile__ = __webpack_require__(316);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_tabs_tabs__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_login_login__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_signup_signup__ = __webpack_require__(329);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_options_options__ = __webpack_require__(326);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_chat_chat__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_map_map__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_deal_deal__ = __webpack_require__(327);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_shop_shop__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_courier_popover_courier_popover__ = __webpack_require__(313);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_resetpassword_resetpassword__ = __webpack_require__(331);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_all_traders_all_traders__ = __webpack_require__(558);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_order_popover_order_popover__ = __webpack_require__(559);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_order_order__ = __webpack_require__(328);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__providers_app_auth_app_auth__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__ionic_native_geolocation__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28_angularfire2_database__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_28_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__providers_igdb_igdb__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__angular_common_http__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__providers_trade_trade__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__providers_profile_profile__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pipes_pipes_module__ = __webpack_require__(560);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__providers_firebaseapp_firebaseapp__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35_ionic_long_press__ = __webpack_require__(564);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__providers_ui_ui__ = __webpack_require__(565);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37_ionic_image_loader__ = __webpack_require__(318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__ionic_native_file_transfer__ = __webpack_require__(320);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__ionic_native_file__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__ionic_native_file_chooser__ = __webpack_require__(321);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__ionic_native_image_picker__ = __webpack_require__(322);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__providers_storage_storage__ = __webpack_require__(323);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__ionic_native_image_resizer__ = __webpack_require__(325);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__ionic_native_google_plus__ = __webpack_require__(308);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__ionic_storage__ = __webpack_require__(314);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__ionic_native_email_composer__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__providers_messages_messages__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__ionic_native_keyboard__ = __webpack_require__(330);
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
                __WEBPACK_IMPORTED_MODULE_18__pages_map_map__["a" /* MapPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_deal_deal__["a" /* DealPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_shop_shop__["a" /* ShopPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_courier_popover_courier_popover__["a" /* CourierPopoverPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_resetpassword_resetpassword__["a" /* ResetpasswordPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_all_traders_all_traders__["a" /* AllTradersPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_order_popover_order_popover__["a" /* OrderPopoverPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_order_order__["a" /* OrderPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], { scrollAssist: false, autoFocusAssist: false }, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_6_angularfire2__["AngularFireModule"].initializeApp(__WEBPACK_IMPORTED_MODULE_8__config__["b" /* firebaseConfig */].web),
                __WEBPACK_IMPORTED_MODULE_28_angularfire2_database__["AngularFireDatabaseModule"],
                __WEBPACK_IMPORTED_MODULE_30__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_35_ionic_long_press__["a" /* LongPressModule */],
                __WEBPACK_IMPORTED_MODULE_33__pipes_pipes_module__["a" /* PipesModule */],
                __WEBPACK_IMPORTED_MODULE_37_ionic_image_loader__["b" /* IonicImageLoader */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_9__ultimate_ngxerrors__["a" /* NgxErrorsModule */],
                __WEBPACK_IMPORTED_MODULE_45__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_17__pages_chat_chat__["a" /* ChatPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_trade_trade__["a" /* TradePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_messages_messages__["a" /* MessagesPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_options_options__["a" /* OptionsPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_map_map__["a" /* MapPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_deal_deal__["a" /* DealPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_shop_shop__["a" /* ShopPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_courier_popover_courier_popover__["a" /* CourierPopoverPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_resetpassword_resetpassword__["a" /* ResetpasswordPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_all_traders_all_traders__["a" /* AllTradersPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_order_popover_order_popover__["a" /* OrderPopoverPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_order_order__["a" /* OrderPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            providers: [
                // { provide: FirebaseOptionsToken, useValue: firebaseConfig.web },
                // { provide: FirebaseAppNameToken, useValue: 'stalldata' },
                // { provide: FirebaseAppConfigToken, useValue: firebaseConfig.web},
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_7_angularfire2_auth__["AngularFireAuth"],
                __WEBPACK_IMPORTED_MODULE_27__ionic_native_geolocation__["a" /* Geolocation */],
                __WEBPACK_IMPORTED_MODULE_28_angularfire2_database__["AngularFireDatabase"],
                __WEBPACK_IMPORTED_MODULE_26__providers_app_auth_app_auth__["a" /* AppAuthProvider */],
                __WEBPACK_IMPORTED_MODULE_30__angular_common_http__["a" /* HttpClient */],
                __WEBPACK_IMPORTED_MODULE_29__providers_igdb_igdb__["a" /* IgdbProvider */],
                __WEBPACK_IMPORTED_MODULE_31__providers_trade_trade__["a" /* TradeProvider */],
                __WEBPACK_IMPORTED_MODULE_32__providers_profile_profile__["a" /* ProfileProvider */],
                __WEBPACK_IMPORTED_MODULE_34__providers_firebaseapp_firebaseapp__["a" /* FirebaseappProvider */],
                __WEBPACK_IMPORTED_MODULE_36__providers_ui_ui__["a" /* UiProvider */],
                __WEBPACK_IMPORTED_MODULE_38__ionic_native_file_transfer__["a" /* FileTransfer */],
                __WEBPACK_IMPORTED_MODULE_39__ionic_native_file__["a" /* File */],
                __WEBPACK_IMPORTED_MODULE_40__ionic_native_file_chooser__["a" /* FileChooser */],
                __WEBPACK_IMPORTED_MODULE_41__ionic_native_image_picker__["a" /* ImagePicker */],
                __WEBPACK_IMPORTED_MODULE_43__ionic_native_image_resizer__["a" /* ImageResizer */],
                __WEBPACK_IMPORTED_MODULE_44__ionic_native_google_plus__["a" /* GooglePlus */],
                __WEBPACK_IMPORTED_MODULE_46__ionic_native_email_composer__["a" /* EmailComposer */],
                __WEBPACK_IMPORTED_MODULE_42__providers_storage_storage__["a" /* StorageProvider */],
                __WEBPACK_IMPORTED_MODULE_48__ionic_native_keyboard__["a" /* Keyboard */],
                __WEBPACK_IMPORTED_MODULE_47__providers_messages_messages__["a" /* MessagesProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirebaseappProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_message__ = __webpack_require__(529);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_userConversation__ = __webpack_require__(530);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase_app__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_database__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_angularfire2_database__);
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
    }
    FirebaseappProvider.prototype.getOfferedGames = function (userKey, conversationKey) {
        var offeredGamesRef = this.afdb
            .list("/conversations/" + conversationKey + "/deal/" + userKey + "/offer")
            .valueChanges();
        return offeredGamesRef;
    };
    FirebaseappProvider.prototype.updateUserProfileImage = function (userKey, profileImage) {
        var selectedRef = this.afdb.list("/users/" + userKey + "/")
            .set('profileImage', profileImage);
    };
    FirebaseappProvider.prototype.updateConversationOffers = function (userKey, conversationKey, selectedGames) {
        // console.log("[FBAPP] updateSelectedGames : ", selectedGames)
        var selectedRef = this.afdb.list("/conversations/" + conversationKey + "/deal/" + userKey + "/")
            .set('offer', selectedGames);
    };
    FirebaseappProvider.prototype.updateUserTradeLocations = function (userKey, trade_locations) {
        var userRef = this.afdb.list("/users/" + userKey + "/")
            .set('trade_locations', trade_locations);
    };
    FirebaseappProvider.prototype.updateUserWishList = function (user, wishList) {
        var userRef = this.afdb.list('/users', function (ref) { return ref.orderByChild('email').equalTo(user.email); });
        var userSub = userRef.snapshotChanges().pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["map"])(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        })).subscribe(function (res) {
            // console.log("get user data", res)
            if (!res[0])
                return;
            var key = res[0]["key"];
            // console.log("adding to wishlist[" + key + "]", wishList)
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
            // console.log("get user data", res)
            if (!res[0])
                return;
            var key = res[0]["key"];
            // console.log("adding to owned[" + key + "]", ownedList)
            userRef.update(key, {
                ownedList: ownedList
            });
            userSub.unsubscribe();
        });
    };
    FirebaseappProvider.prototype.addGameToRent = function (user, game) {
        var rentRef = this.afdb.list('/shop/rent/games');
        var rentSub = rentRef.snapshotChanges().pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["map"])(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        })).subscribe(function (res) {
            // console.log("get user data", res)
            if (!res[0])
                return;
            res.push(game);
            // var key = res[0]["key"];
            // console.log("adding to owned[" + key + "]", ownedList)
            rentRef.push(game);
            rentSub.unsubscribe();
        });
    };
    FirebaseappProvider.prototype.getConversationMessages = function (key) {
        var conversationRef = this.afdb
            .list('/conversations/' + key + "/messages/", function (ref) { return ref.limitToLast(80); })
            .valueChanges(["child_added"]);
        return conversationRef;
    };
    FirebaseappProvider.prototype.getTraderConversationKey = function (trader, user) {
        // console.log("-fbapp getTraderConversationKey: ", trader.conversations, user.conversations)
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
        // console.log("push convo " + msg, trader, user)
        var members = {};
        members[trader.key] = true;
        members[user.key] = true;
        var message = new __WEBPACK_IMPORTED_MODULE_3__models_message__["a" /* Message */](msg, user.first_name + " " + user.last_name, user.key, __WEBPACK_IMPORTED_MODULE_5_firebase_app__["database"].ServerValue.TIMESTAMP);
        var converRef = this.pushConversation([message], members);
        user.conversations = user.conversations ? user.conversations : [];
        var userConversation = new __WEBPACK_IMPORTED_MODULE_4__models_userConversation__["a" /* UserConversation */](converRef.key, trader.key, trader.first_name + " " + trader.last_name);
        user.conversations[converRef.key] = userConversation;
        // console.log("uckey:", user.conversations)
        this.updateUserConversation(user.key, converRef.key, userConversation);
        trader.conversations = trader.conversations ? trader.conversations : [];
        var traderConversation = new __WEBPACK_IMPORTED_MODULE_4__models_userConversation__["a" /* UserConversation */](converRef.key, user.key, user.first_name + " " + user.last_name, true);
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
        // console.log("update convo " + key)
        var message = new __WEBPACK_IMPORTED_MODULE_3__models_message__["a" /* Message */](msg, user.first_name + " " + user.last_name, user.key, __WEBPACK_IMPORTED_MODULE_5_firebase_app__["database"].ServerValue.TIMESTAMP);
        this.afdb.list("/conversations/" + key + "/messages").push(message);
        this.afdb.list("/users/" + trader.key + "/conversations").update(key, { "unread": true });
    };
    FirebaseappProvider.prototype.readConversation = function (converKey, userKey) {
        if (!converKey)
            return;
        if (!userKey)
            return;
        return this.afdb.list("/users/" + userKey + "/conversations/")
            .update(converKey, { unread: false });
    };
    FirebaseappProvider.prototype.getUserConversations = function (user, events) {
        if (events === void 0) { events = null; }
        return this.afdb
            .list('/users/' + user.key + '/conversations/')
            .snapshotChanges(events)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["map"])(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        }));
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
    FirebaseappProvider.prototype.getConversationGuarantee = function (converKey) {
        return this.afdb
            .object("/conversations/" + converKey + "/guarantee/")
            .snapshotChanges();
    };
    FirebaseappProvider.prototype.updateConversationGuarantee = function (converKey, userKey) {
        // console.log("converKey ", converKey)
        var _this = this;
        return new Promise(function (resolve, reject) {
            var subscription = _this.afdb
                .object("/conversations/" + converKey + "/guarantee")
                .snapshotChanges()
                .subscribe(function (res) {
                var guaranteeMembers = res.payload.val();
                if (!guaranteeMembers) {
                    guaranteeMembers = {};
                    guaranteeMembers[userKey] = true;
                }
                else if (guaranteeMembers[userKey]) {
                    guaranteeMembers[userKey] = false;
                    // console.log("guarantee false")
                }
                else {
                    guaranteeMembers[userKey] = true;
                    // console.log("guarantee true")
                }
                // console.log("guaranteememb ", guaranteeMembers)
                _this.afdb.list("/conversations/" + converKey)
                    .update("guarantee", guaranteeMembers);
                resolve(guaranteeMembers);
                subscription.unsubscribe();
            });
        });
        // console.log("test ", subscription)
    };
    FirebaseappProvider.prototype.getGamesForRent = function () {
        var rentRef = this.afdb
            .list('shop/rent/games', function (ref) { return ref.limitToLast(80); })
            .valueChanges(["child_added"]);
        return rentRef;
    };
    FirebaseappProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_6_angularfire2_database__["AngularFireDatabase"]])
    ], FirebaseappProvider);
    return FirebaseappProvider;
}());

//# sourceMappingURL=firebaseapp.js.map

/***/ }),

/***/ 497:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_app_auth_app_auth__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_operators__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_profile_profile__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_geolocation__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_trade_trade__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_tabs_tabs__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_login_login__ = __webpack_require__(174);
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
                    _this.rootPage = __WEBPACK_IMPORTED_MODULE_10__pages_tabs_tabs__["a" /* TabsPage */];
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
                    _this.rootPage = __WEBPACK_IMPORTED_MODULE_11__pages_login_login__["a" /* LoginPage */];
                }
            }, function () {
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_11__pages_login_login__["a" /* LoginPage */];
            });
        });
    }
    MyApp.prototype.initProfile = function (user) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var userRef = _this.afdb.list('/users', function (ref) { return ref.orderByChild('email').equalTo(user.email); });
            var userSub = userRef.snapshotChanges().pipe(Object(__WEBPACK_IMPORTED_MODULE_6_rxjs_operators__["map"])(function (changes) {
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
                _this.profile.user.admin = res[0]["admin"] || false;
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\wamp64\www\console-trade\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\wamp64\www\console-trade\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__["AngularFireDatabase"],
            __WEBPACK_IMPORTED_MODULE_4__providers_app_auth_app_auth__["a" /* AppAuthProvider */],
            __WEBPACK_IMPORTED_MODULE_7__providers_profile_profile__["a" /* ProfileProvider */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_9__providers_trade_trade__["a" /* TradeProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 529:
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

//# sourceMappingURL=message.js.map

/***/ }),

/***/ 530:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserConversation; });
var UserConversation = /** @class */ (function () {
    function UserConversation(key, traderKey, name, unread) {
        if (unread === void 0) { unread = false; }
        this.key = "";
        this.traderKey = "";
        this.name = "";
        this.key = key;
        this.traderKey = traderKey;
        this.name = name;
        this.unread = unread;
    }
    return UserConversation;
}());

//# sourceMappingURL=userConversation.js.map

/***/ }),

/***/ 558:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AllTradersPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AllTradersPage = /** @class */ (function () {
    function AllTradersPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AllTradersPage.prototype.ionViewDidLoad = function () {
    };
    AllTradersPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-all-traders',template:/*ion-inline-start:"C:\wamp64\www\console-trade\src\pages\all-traders\all-traders.html"*/'<!--\n  Generated template for the AllTradersPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>AllTraders</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"C:\wamp64\www\console-trade\src\pages\all-traders\all-traders.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], AllTradersPage);
    return AllTradersPage;
}());

//# sourceMappingURL=all-traders.js.map

/***/ }),

/***/ 559:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderPopoverPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var OrderPopoverPage = /** @class */ (function () {
    function OrderPopoverPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.cart = {
            games: []
        };
        this.cart.games = this.navParams.get("games");
    }
    OrderPopoverPage.prototype.ionViewDidLoad = function () {
    };
    OrderPopoverPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-order-popover',template:/*ion-inline-start:"C:\wamp64\www\console-trade\src\pages\order-popover\order-popover.html"*/'<ion-content padding>\n\n <form (ngSubmit)="logForm()">\n      <ion-item>\n        <ion-label>Name</ion-label>\n        <ion-input type="text" [(ngModel)]="formInputs.name" name="name"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label>Email</ion-label>\n        <ion-input type="text" [(ngModel)]="formInputs.email" name="email"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label>Contact Num</ion-label>\n        <ion-input type="text" [(ngModel)]="formInputs.contactNo" name="contactNo"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label>Address</ion-label>\n        <ion-input type="text" [(ngModel)]="formInputs.address" name="address"></ion-input>\n      </ion-item>\n      <button ion-button type="submit" block>Order</button>\n    </form>\n\n</ion-content>\n'/*ion-inline-end:"C:\wamp64\www\console-trade\src\pages\order-popover\order-popover.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], OrderPopoverPage);
    return OrderPopoverPage;
}());

//# sourceMappingURL=order-popover.js.map

/***/ }),

/***/ 560:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PipesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__keys_keys__ = __webpack_require__(561);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__replace_replace__ = __webpack_require__(562);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__distance_distance__ = __webpack_require__(563);
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

/***/ 561:
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

/***/ 562:
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
        if (!value)
            return "";
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

/***/ 563:
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

/***/ 565:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UiProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(29);
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
  Generated class for the UiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var UiProvider = /** @class */ (function () {
    function UiProvider(http) {
        this.http = http;
    }
    UiProvider.prototype.getRandomProfileImage = function () {
        return 0;
    };
    UiProvider.prototype.getRandomInt = function (min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    UiProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], UiProvider);
    return UiProvider;
}());

//# sourceMappingURL=ui.js.map

/***/ }),

/***/ 96:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__trade_trade__ = __webpack_require__(311);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__messages_messages__ = __webpack_require__(315);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__profile_profile__ = __webpack_require__(316);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__options_options__ = __webpack_require__(326);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__deal_deal__ = __webpack_require__(327);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shop_shop__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_app_auth_app_auth__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_firebaseapp_firebaseapp__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_profile_profile__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_messages_messages__ = __webpack_require__(97);
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
    function TabsPage(navCtrl, auth, fbApp, profile, events, messages) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.auth = auth;
        this.fbApp = fbApp;
        this.profile = profile;
        this.events = events;
        this.messages = messages;
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_4__profile_profile__["a" /* ProfilePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_2__trade_trade__["a" /* TradePage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_3__messages_messages__["a" /* MessagesPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_6__deal_deal__["a" /* DealPage */];
        this.tab5Root = __WEBPACK_IMPORTED_MODULE_7__shop_shop__["a" /* ShopPage */];
        this.events.subscribe("profile:loaded", function () {
            _this.messages.loadConversations(_this.fbApp);
            // this.fbApp
            // .getUserConversations(this.profile.user,["child_added"])
            // .subscribe((res)=>{
            // })
        });
    }
    TabsPage.prototype.navTo = function (page) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__options_options__["a" /* OptionsPage */], {}, { animate: true, direction: 'forward' });
    };
    TabsPage.prototype.logout = function () {
        this.auth.logout();
    };
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tabs',template:/*ion-inline-start:"C:\wamp64\www\console-trade\src\pages\tabs\tabs.html"*/'<ion-header class="ps4-header">\n  <ion-navbar>\n    <ion-title></ion-title>\n\n    <ion-icon class="settings" name="settings" (click)="navTo(OptionsPage)"></ion-icon>\n   \n  </ion-navbar>\n</ion-header>\n\n<h5 class="msg-notification" *ngIf="messages.unreadMsgCnt > 0">{{messages.unreadMsgCnt}}</h5>\n<ion-tabs tabsPlacement="bottom" selectedIndex="0">\n  <ion-tab [root]="tab1Root" tabTitle="Profile" tabIcon="contact"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Trade" tabIcon="contacts"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Messages" tabIcon="chatbubbles">\n  </ion-tab>\n  <!-- <ion-tab [root]="tab4Root" tabTitle="Sell" tabIcon="logo-usd"></ion-tab> -->\n  <ion-tab [root]="tab5Root" tabTitle="Rent" tabIcon="cart"></ion-tab>\n</ion-tabs>'/*ion-inline-end:"C:\wamp64\www\console-trade\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_8__providers_app_auth_app_auth__["a" /* AppAuthProvider */],
            __WEBPACK_IMPORTED_MODULE_9__providers_firebaseapp_firebaseapp__["a" /* FirebaseappProvider */],
            __WEBPACK_IMPORTED_MODULE_10__providers_profile_profile__["a" /* ProfileProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */],
            __WEBPACK_IMPORTED_MODULE_11__providers_messages_messages__["a" /* MessagesProvider */]])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 97:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessagesProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_profile_profile__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MessagesProvider = /** @class */ (function () {
    function MessagesProvider(http, loadCtrl, profile) {
        this.http = http;
        this.loadCtrl = loadCtrl;
        this.profile = profile;
        this.unreadMsgCnt = 0;
        this.traders = [];
        this.traderTemp = [];
    }
    MessagesProvider.prototype.loadConversations = function (fbApp) {
        var _this = this;
        var load = this.loadCtrl.create();
        load.present();
        fbApp.getUserConversations(this.profile.user).subscribe(function (res) {
            _this.unreadMsgCnt = 0;
            load.dismiss();
            if (!res)
                return;
            var traderPromises = [];
            for (var convo in res) {
                var conversation = res[convo];
                traderPromises.push(_this.addTraderToList(fbApp, conversation));
            }
            Promise.all(traderPromises).then(function (traders) {
                _this.sortUnreadMessages(traders);
                // console.log("[loadConversation]: ", this.traders)
            });
        });
    };
    MessagesProvider.prototype.sortUnreadMessages = function (traders) {
        var unreadTraders = traders.filter(function (trader) { return trader.hasUnreadMessage; });
        var readTraders = traders.filter(function (trader) { return !trader.hasUnreadMessage; });
        this.traders = unreadTraders.concat(readTraders);
    };
    MessagesProvider.prototype.addTraderToList = function (fbApp, conversation) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            fbApp.getProfile(conversation.traderKey).then(function (res) {
                res["hasUnreadMessage"] = conversation.unread;
                if (conversation.unread && _this.profile.currentConversation != res.key) {
                    _this.unreadMsgCnt++;
                }
                resolve(res);
            });
        });
    };
    MessagesProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_profile_profile__["a" /* ProfileProvider */]])
    ], MessagesProvider);
    return MessagesProvider;
}());

//# sourceMappingURL=messages.js.map

/***/ }),

/***/ 98:
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
    NS: "ns",
    PS4_ID: 48,
    NS_ID: 130,
    XBOX1_ID: 49,
};
//# sourceMappingURL=config.js.map

/***/ })

},[334]);
//# sourceMappingURL=main.js.map
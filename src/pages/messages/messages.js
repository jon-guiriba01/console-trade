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
import { NavController, App, Events, LoadingController } from 'ionic-angular';
import { ProfileProvider } from '../../providers/profile/profile';
import { MessagesProvider } from '../../providers/messages/messages';
import { FirebaseappProvider } from '../../providers/firebaseapp/firebaseapp';
import { ChatPage } from '../../pages/chat/chat';
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
        this.app.getRootNavs()[0].push(ChatPage, {
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
        Component({
            selector: 'page-messages',
            templateUrl: 'messages.html'
        }),
        __metadata("design:paramtypes", [NavController,
            ProfileProvider,
            FirebaseappProvider,
            App,
            Events,
            LoadingController,
            MessagesProvider])
    ], MessagesPage);
    return MessagesPage;
}());
export { MessagesPage };
//# sourceMappingURL=messages.js.map
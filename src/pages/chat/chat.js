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
import { NavController, NavParams, App, PopoverController } from 'ionic-angular';
import { ProfileProvider } from '../../providers/profile/profile';
import { FirebaseappProvider } from '../../providers/firebaseapp/firebaseapp';
import { AppAuthProvider } from '../../providers/app-auth/app-auth';
import 'rxjs/add/observable/fromEvent';
import { MapPage } from '../../pages/map/map';
import { CourierPopoverPage } from '../../pages/courier-popover/courier-popover';
import { MessagesProvider } from '../../providers/messages/messages';
import * as $ from 'jquery';
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
                setTimeout(function () { $('#chatContent').scrollTop($('#chatContent')[0].scrollHeight); }, 100);
            });
            this.observeTraderOfferedGames();
            this.observeUserOfferedGames();
        }
        console.log("test a", this.trader);
        console.log("test x ", this.profile.user);
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
        this.app.getRootNavs()[0].push(MapPage, {
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
        var popover = this.popoverCtrl.create(CourierPopoverPage);
        popover.present();
        popover.onDidDismiss(function (courier) {
            if (!courier)
                return;
            _this.courier = courier;
        });
    };
    ChatPage.prototype.selectGuarantee = function () {
        this.fbApp.updateConversationGuarantee(this.converKey, this.profile.user.key);
    };
    ChatPage = __decorate([
        Component({
            selector: 'page-chat',
            templateUrl: 'chat.html',
        }),
        __metadata("design:paramtypes", [NavController,
            NavParams,
            ProfileProvider,
            FirebaseappProvider,
            AppAuthProvider,
            App,
            PopoverController,
            MessagesProvider])
    ], ChatPage);
    return ChatPage;
}());
export { ChatPage };
//# sourceMappingURL=chat.js.map
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
import { NavController, Platform, App, Events, LoadingController } from 'ionic-angular';
import { ProfileProvider } from '../../providers/profile/profile';
import { TradeProvider } from '../../providers/trade/trade';
import { ChatPage } from '../../pages/chat/chat';
import 'rxjs/add/observable/fromEvent';
import { Storage } from '@ionic/storage';
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
        this.app.getRootNavs()[0].push(ChatPage, {
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
        Component({
            selector: 'page-trade',
            templateUrl: 'trade.html'
        }),
        __metadata("design:paramtypes", [NavController,
            Platform,
            TradeProvider,
            ProfileProvider,
            App,
            Events,
            Storage,
            LoadingController])
    ], TradePage);
    return TradePage;
}());
export { TradePage };
//# sourceMappingURL=trade.js.map
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { LoadingController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProfileProvider } from '../../providers/profile/profile';
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
        Injectable(),
        __metadata("design:paramtypes", [HttpClient,
            LoadingController,
            ProfileProvider])
    ], MessagesProvider);
    return MessagesProvider;
}());
export { MessagesProvider };
//# sourceMappingURL=messages.js.map
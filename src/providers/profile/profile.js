var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Profile } from '../../models/profile';
import * as _ from 'underscore/underscore';
import { FirebaseappProvider } from '../../providers/firebaseapp/firebaseapp';
import { ToastController } from 'ionic-angular';
var ProfileProvider = /** @class */ (function () {
    function ProfileProvider(http, fbapp, toastCtrl) {
        this.http = http;
        this.fbapp = fbapp;
        this.toastCtrl = toastCtrl;
        this.allListsUpdateTimeout = null;
        this.wishListUpdateTimeout = null;
        this.ownedListUpdateTimeout = null;
        this.currentConversation = null;
        this.user = new Profile();
    }
    ProfileProvider.prototype.addGameToProfile = function (fbUser, game, owned) {
        var duplicate = _.find(this.user.wishList, function (e) { return e.id === game.id; });
        if (!game.platforms)
            game.platforms = [];
        // console.log("addGamToProfile: ",game)
        if (duplicate || this.user.wishList.length > 8) {
            var alreadyOwned = _.find(this.user.ownedList, function (e) { return e.id === game.id; });
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
            var duplicate = _.find(this.user.wishList, function (e) { return e.id === item.id; });
            if (duplicate)
                return;
            if (this.user.wishList.length > 8)
                return;
            this.user.addToWishList(item);
            this.user.ownedList = _.reject(this.user.ownedList, function (e) { return e.id === item.id; });
        }
        else {
            var duplicate = _.find(this.user.ownedList, function (e) { return e.id === item.id; });
            if (duplicate)
                return;
            if (this.user.ownedList.length > 8)
                return;
            this.user.addToOwnedList(item);
            this.user.wishList = _.reject(this.user.wishList, function (e) { return e.id === item.id; });
        }
        this.startAllListsUpdateTImer(authUser);
    };
    ProfileProvider.prototype.toggleItemPlatform = function (authUser, item, platform, owned) {
        if (_.contains(item.platforms, platform)) {
            item.platforms = _.reject(item.platforms, function (el) { return el === platform; });
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
            this.user.ownedList = _.reject(this.user.ownedList, function (el) { return el.id === item.id; });
            this.startOwnedListUpdateTImer(authUser);
        }
        else {
            this.user.wishList = _.reject(this.user.wishList, function (el) { return el.id === item.id; });
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
        Injectable(),
        __metadata("design:paramtypes", [HttpClient,
            FirebaseappProvider,
            ToastController])
    ], ProfileProvider);
    return ProfileProvider;
}());
export { ProfileProvider };
//# sourceMappingURL=profile.js.map
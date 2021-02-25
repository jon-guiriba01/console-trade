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
import { NavController, NavParams } from 'ionic-angular';
import { IgdbProvider } from '../../providers/igdb/igdb';
import { Game } from '../../models/game';
import { C } from '../../config';
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
            if (item.platforms.includes(C.PS4_ID))
                platforms.push(C.PS4);
            if (item.platforms.includes(C.NS_ID))
                platforms.push(C.NS);
            if (item.platforms.includes(C.XBOX1_ID))
                platforms.push(C.XBOX1);
        }
        var url = null;
        if (item.cover)
            url = item.cover.url.replace("thumb", "cover_big").replace("//", "http://");
        var game = new Game(item.id, item.name, url, platforms);
        this.searchInput = null;
        this.cart.push(game);
        // console.log(this.cart)
        this.clearSearch();
    };
    DealPage.prototype.removeItem = function (item) {
        this.cart = this.cart.filter(function (e) { return e.id !== item.id; });
    };
    DealPage = __decorate([
        Component({
            selector: 'page-deal',
            templateUrl: 'deal.html',
        }),
        __metadata("design:paramtypes", [NavController,
            NavParams,
            IgdbProvider])
    ], DealPage);
    return DealPage;
}());
export { DealPage };
//# sourceMappingURL=deal.js.map
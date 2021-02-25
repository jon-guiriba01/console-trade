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
import { NavController, Events } from 'ionic-angular';
import { TradePage } from '../trade/trade';
import { MessagesPage } from '../messages/messages';
import { ProfilePage } from '../profile/profile';
import { OptionsPage } from '../options/options';
import { DealPage } from '../deal/deal';
import { ShopPage } from '../shop/shop';
import { AppAuthProvider } from '../../providers/app-auth/app-auth';
import { FirebaseappProvider } from '../../providers/firebaseapp/firebaseapp';
import { ProfileProvider } from '../../providers/profile/profile';
import { MessagesProvider } from '../../providers/messages/messages';
var TabsPage = /** @class */ (function () {
    function TabsPage(navCtrl, auth, fbApp, profile, events, messages) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.auth = auth;
        this.fbApp = fbApp;
        this.profile = profile;
        this.events = events;
        this.messages = messages;
        this.tab1Root = ProfilePage;
        this.tab2Root = TradePage;
        this.tab3Root = MessagesPage;
        this.tab4Root = DealPage;
        this.tab5Root = ShopPage;
        this.events.subscribe("profile:loaded", function () {
            _this.messages.loadConversations(_this.fbApp);
            // this.fbApp
            // .getUserConversations(this.profile.user,["child_added"])
            // .subscribe((res)=>{
            // })
        });
    }
    TabsPage.prototype.navTo = function (page) {
        this.navCtrl.push(OptionsPage, {}, { animate: true, direction: 'forward' });
    };
    TabsPage.prototype.logout = function () {
        this.auth.logout();
    };
    TabsPage = __decorate([
        Component({
            selector: 'page-tabs',
            templateUrl: 'tabs.html'
        }),
        __metadata("design:paramtypes", [NavController,
            AppAuthProvider,
            FirebaseappProvider,
            ProfileProvider,
            Events,
            MessagesProvider])
    ], TabsPage);
    return TabsPage;
}());
export { TabsPage };
//# sourceMappingURL=tabs.js.map
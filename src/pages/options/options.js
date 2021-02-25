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
import { AppAuthProvider } from '../../providers/app-auth/app-auth';
import { EmailComposer } from '@ionic-native/email-composer';
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
        Component({
            selector: 'page-options',
            templateUrl: 'options.html',
        }),
        __metadata("design:paramtypes", [NavController,
            NavParams,
            AppAuthProvider,
            EmailComposer])
    ], OptionsPage);
    return OptionsPage;
}());
export { OptionsPage };
//# sourceMappingURL=options.js.map
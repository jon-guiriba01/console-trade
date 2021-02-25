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
import { NavController, NavParams, ToastController } from 'ionic-angular';
import { AppAuthProvider } from '../../providers/app-auth/app-auth';
import { LoginPage } from '../login/login';
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
                _this.navCtrl.push(LoginPage);
        });
        toast.present();
    };
    ResetpasswordPage = __decorate([
        Component({
            selector: 'page-resetpassword',
            templateUrl: 'resetpassword.html',
        }),
        __metadata("design:paramtypes", [NavController,
            NavParams,
            AppAuthProvider,
            ToastController])
    ], ResetpasswordPage);
    return ResetpasswordPage;
}());
export { ResetpasswordPage };
//# sourceMappingURL=resetpassword.js.map
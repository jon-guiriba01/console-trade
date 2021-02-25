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
import { NavController, NavParams, PopoverController, ViewController } from 'ionic-angular';
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
                price: 300
            }
        ];
    }
    CourierPopoverPage.prototype.ionViewDidLoad = function () {
    };
    CourierPopoverPage.prototype.selectCourier = function (opt) {
        this.viewCtrl.dismiss(this.couriers[opt]);
    };
    CourierPopoverPage = __decorate([
        Component({
            selector: 'page-courier-popover',
            templateUrl: 'courier-popover.html',
        }),
        __metadata("design:paramtypes", [NavController,
            NavParams,
            PopoverController,
            ViewController])
    ], CourierPopoverPage);
    return CourierPopoverPage;
}());
export { CourierPopoverPage };
//# sourceMappingURL=courier-popover.js.map
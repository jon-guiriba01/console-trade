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
import * as firebase from 'firebase';
import 'rxjs/add/operator/map';
var StorageProvider = /** @class */ (function () {
    function StorageProvider(http) {
        this.http = http;
    }
    StorageProvider.prototype.uploadImage = function (image, userEmail) {
        return new Promise(function (resolve, reject) {
            var storageRef = firebase.storage().ref().child("images/" + userEmail + "/profile");
            var parseUpload = storageRef.putString(image, 'data_url');
            parseUpload.on('state_changed', function (_snapshot) {
                // console.log('snapshot progess ',_snapshot);
            }, function (_err) {
                console.log('snapshot err ', _err);
                reject(_err);
            }, function () {
                storageRef.getDownloadURL().then(function (res) {
                    // console.log('getDownloadURL ',res);
                    resolve(res);
                });
            });
        });
    };
    StorageProvider = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [HttpClient])
    ], StorageProvider);
    return StorageProvider;
}());
export { StorageProvider };
//# sourceMappingURL=storage.js.map
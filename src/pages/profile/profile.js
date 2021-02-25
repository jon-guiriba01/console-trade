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
import { NavController, App, Platform, Events, LoadingController } from 'ionic-angular';
import { AppAuthProvider } from '../../providers/app-auth/app-auth';
import { ProfileProvider } from '../../providers/profile/profile';
import { IgdbProvider } from '../../providers/igdb/igdb';
import { Game } from '../../models/game';
import { C } from '../../config';
import { ImageLoaderConfig } from 'ionic-image-loader';
import { MapPage } from '../../pages/map/map';
import { FileTransfer } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
import { FileChooser } from '@ionic-native/file-chooser';
import { ImagePicker } from '@ionic-native/image-picker';
import * as $ from 'jquery';
import { StorageProvider } from '../../providers/storage/storage';
import { FirebaseappProvider } from '../../providers/firebaseapp/firebaseapp';
import { ImageResizer } from '@ionic-native/image-resizer';
var ProfilePage = /** @class */ (function () {
    function ProfilePage(navCtrl, igdb, auth, profile, imgLoader, app, events, transfer, file, fileChooser, imagePicker, platform, fbApp, fbStorage, loadingCtrl, imageResizer) {
        this.navCtrl = navCtrl;
        this.igdb = igdb;
        this.auth = auth;
        this.profile = profile;
        this.imgLoader = imgLoader;
        this.app = app;
        this.events = events;
        this.transfer = transfer;
        this.file = file;
        this.fileChooser = fileChooser;
        this.imagePicker = imagePicker;
        this.platform = platform;
        this.fbApp = fbApp;
        this.fbStorage = fbStorage;
        this.loadingCtrl = loadingCtrl;
        this.imageResizer = imageResizer;
        this.searchIsLoading = false;
        this.searchOptions = [];
        imgLoader.setBackgroundSize('cover');
    }
    ProfilePage.prototype.toggleItemList = function (item, owned) {
        this.profile.toggleItemList(this.auth.user, item, owned);
        this.events.publish("profile:changed");
    };
    ProfilePage.prototype.toggleItemPlatform = function (item, platform, owned) {
        this.profile.toggleItemPlatform(this.auth.user, item, platform, owned);
        this.events.publish("profile:changed");
    };
    ProfilePage.prototype.removeItem = function (item, owned) {
        // console.log("pressing")
        this.profile.removeItem(this.auth.user, item, owned);
        this.events.publish("profile:changed");
    };
    ProfilePage.prototype.searchtTitle = function () {
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
    ProfilePage.prototype.clearSearch = function () {
        this.searchIsLoading = false;
        this.searchOptions = [];
    };
    ProfilePage.prototype.addGameToProfile = function (item) {
        this.searchInput = null;
        this.searchOptions = [];
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
        this.profile.addGameToProfile(this.auth.user, game, false);
        this.events.publish("profile:changed");
    };
    ProfilePage.prototype.navToMap = function () {
        this.app.getRootNavs()[0].push(MapPage);
    };
    ProfilePage.prototype.uploadImage = function () {
        if (this.platform.is('core')) {
            this.uploadImage_web();
        }
        else if (this.platform.is('android')) {
            this.uploadImage_and();
        }
    };
    ProfilePage.prototype.uploadImage_and = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.imagePicker.getPictures({
                maximumImagesCount: 1,
                outputType: 0
            }).then(function (res) {
                if (!res) {
                    return;
                }
                var file = res[0];
                return _this.file.resolveLocalFilesystemUrl(file);
            }).then(function (file) {
                return _this.imageResizer
                    .resize({
                    uri: file.nativeURL,
                    quality: 100,
                    width: 90,
                    height: 180,
                });
            }).then(function (filePath) {
                return _this.file.resolveLocalFilesystemUrl(filePath);
            }).then(function (file) {
                return _this.file.readAsDataURL(file.filesystem.root.nativeURL, file.name);
            }).then(function (res) {
                _this.storeImage(res);
            })
                .catch(function (e) { return console.log(e); });
        });
    };
    ProfilePage.prototype.uploadImage_web = function () {
        var _this = this;
        $('#fileInput').trigger("click");
        $('#fileInput').change(function () {
            var file = $('#fileInput')[0]['files'][0];
            if (!file)
                return;
            _this.getBase64(file).then(function (res) {
                //TODO resize image
                _this.storeImage(res);
                $('#fileInput').val('');
            });
        });
    };
    ProfilePage.prototype.storeImage = function (base64) {
        // console.log("[storeImage]",base64)
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Uploading image...'
        });
        loading.present();
        this.fbStorage.uploadImage(base64, this.profile.user.email)
            .then(function (res) {
            // console.log("upload image",res)
            _this.fbApp.updateUserProfileImage(_this.profile.user.key, res);
            _this.profile.user.profileImage = res;
            loading.dismiss();
        }).catch(function (err) {
            console.log("storeImage", err);
            loading.dismiss();
        });
    };
    ProfilePage.prototype.getBase64 = function (file) {
        return new Promise(function (resolve, reject) {
            var reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = function () {
                resolve(reader.result);
            };
            reader.onerror = function (error) {
                reject(error);
            };
        });
    };
    ProfilePage.prototype.getExt = function (filename) {
        var idx = filename.lastIndexOf('.');
        return (idx < 1) ? "" : filename.substr(idx + 1);
    };
    ProfilePage = __decorate([
        Component({
            selector: 'page-profile',
            templateUrl: 'profile.html'
        }),
        __metadata("design:paramtypes", [NavController,
            IgdbProvider,
            AppAuthProvider,
            ProfileProvider,
            ImageLoaderConfig,
            App,
            Events,
            FileTransfer,
            File,
            FileChooser,
            ImagePicker,
            Platform,
            FirebaseappProvider,
            StorageProvider,
            LoadingController,
            ImageResizer])
    ], ProfilePage);
    return ProfilePage;
}());
export { ProfilePage };
//# sourceMappingURL=profile.js.map
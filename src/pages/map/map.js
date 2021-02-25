var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, NavParams, Platform, LoadingController } from 'ionic-angular';
import { ProfileProvider } from '../../providers/profile/profile';
import { Geolocation } from '@ionic-native/geolocation';
import { FirebaseappProvider } from '../../providers/firebaseapp/firebaseapp';
import * as $ from 'jquery';
var MapPage = /** @class */ (function () {
    function MapPage(navCtrl, navParams, platform, geolocation, profile, fbApp, loadCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.platform = platform;
        this.geolocation = geolocation;
        this.profile = profile;
        this.fbApp = fbApp;
        this.loadCtrl = loadCtrl;
        this.markers = [];
        this.searchInput = "";
        this.canEdit = true;
        this.target = this.profile.user;
        this.sessionToken = new google.maps.places.AutocompleteSessionToken();
    }
    MapPage.prototype.ionViewDidLoad = function () {
    };
    MapPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.target = this.profile.user;
        var customTarget = this.navParams.get('target');
        if (customTarget) {
            this.canEdit = false;
            if (!customTarget.target_locations)
                customTarget.target_locations = [];
            this.target = customTarget;
            // console.log("using custom target", this.target)
        }
        this.platform.ready().then(function () {
            if (google) {
                _this.geocoder = new google.maps.Geocoder();
                _this.places = new google.maps.places.AutocompleteService();
                _this.initMap();
            }
        });
    };
    MapPage.prototype.searchLocation = function () {
        var _this = this;
        // console.log("searchLocation: " + this.searchInput)
        clearTimeout(this.timeout);
        this.timeout = setTimeout(function () {
            _this.places.getPlacePredictions({
                input: _this.searchInput,
                sessionToken: _this.sessionToken
            }, function (res) {
                // console.log("place prediction ", res)
            });
        }, 500);
    };
    MapPage.prototype.initMap = function () {
        var _this = this;
        var self = this;
        this.geolocation.getCurrentPosition().then(function (resp) {
            var mylocation = new google.maps.LatLng(resp.coords.latitude, resp.coords.longitude);
            // let mylocation = new google.maps.LatLng(14.710761999999999,121.05234990000001);
            _this.map = new google.maps.Map(_this.mapElement.nativeElement, {
                zoom: 15,
                disableDefaultUI: true,
                center: mylocation
            });
            _this.addMarker(mylocation, { label: "YOU", remember: false });
            _this.initAutoComplete(resp);
            _this.initClickEvent();
            if (_this.target.trade_locations)
                _this.initMarkers(_this.target.trade_locations);
        }).catch(function (e) {
            console.log("errrr", e);
        });
    };
    MapPage.prototype.initMarkers = function (tradeLocations) {
        var self = this;
        for (var _i = 0, tradeLocations_1 = tradeLocations; _i < tradeLocations_1.length; _i++) {
            var tradeLocation = tradeLocations_1[_i];
            this.geocoder.geocode({ 'address': tradeLocation }, function (res, status) {
                if (status === 'OK') {
                    self.addMarker(res[0].geometry.location);
                }
                else {
                    console.log("Geocode was not successful for the following reason: " + status);
                }
            });
        }
    };
    MapPage.prototype.initAutoComplete = function (userLocation) {
        var mylocation = new google.maps.LatLng(userLocation.coords.latitude, userLocation.coords.longitude);
        var input = document.getElementById('autocomplete');
        this.map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);
        var circle = new google.maps.Circle({
            center: mylocation,
            radius: userLocation.coords.accuracy
        });
        this.places = new google.maps.places.PlacesService(this.map);
        var autocomplete = new google.maps.places.Autocomplete(input, {
            bounds: circle.getBounds(),
            strictBounds: true
        });
        var self = this;
        autocomplete.addListener('place_changed', function () {
            var place = this.getPlace();
            if (!place)
                return;
            // console.log("[autocomplete:select]", place)
            if (place.geometry) {
                self.map.panTo(place.geometry.location);
                self.map.setZoom(15);
                self.addMarker(place.geometry.location);
                self.addTradeLocation(input["value"]);
            }
            else {
            }
        });
    };
    MapPage.prototype.clearAutocomplete = function () {
        $('#autocomplete').val("");
    };
    MapPage.prototype.initClickEvent = function () {
        var _this = this;
        if (!this.canEdit)
            return;
        this.map.addListener("click", function (event) {
            var loading = _this.loadCtrl.create();
            loading.present();
            var latitude = event.latLng.lat();
            var longitude = event.latLng.lng();
            _this.geocoder.geocode({ 'location': event.latLng }, function (res) {
                // console.log("click ", res)
                if (!res)
                    return;
                _this.addMarker(event.latLng);
                _this.addTradeLocation(res[0].formatted_address);
                loading.dismiss();
            });
        });
    };
    MapPage.prototype.addTradeLocation = function (location) {
        var _this = this;
        if (!this.canEdit)
            return;
        clearTimeout(this.dbTimeout);
        this.target.trade_locations.push(location);
        if (this.target.trade_locations.length > 3) {
            this.removeLastTradeLocation();
        }
        // console.log("[map] addTradeLocation ", this.target)
        this.dbTimeout = setTimeout(function () {
            _this.fbApp.updateUserTradeLocations(_this.target.key, _this.target.trade_locations);
        }, 500);
    };
    MapPage.prototype.removeLastTradeLocation = function () {
        var tradeLocation = this.target.trade_locations.shift();
        var marker = this.markers[0];
        // console.log("removing ", this.markers, this.target.trade_locations)
        marker.setMap(null);
        this.markers.shift();
    };
    MapPage.prototype.addMarker = function (position, options) {
        if (options === void 0) { options = null; }
        options = options ? options : { remember: true };
        var marker = new google.maps.Marker({
            map: this.map,
            position: position,
            label: options.label,
            icon: options.icon
        });
        if (options.remember)
            this.markers.push(marker);
    };
    MapPage.prototype.setMapOnAll = function (map) {
        for (var i = 0; i < this.markers.length; i++) {
            this.markers[i].setMap(map);
        }
    };
    MapPage.prototype.clearMarkers = function () {
        this.setMapOnAll(null);
    };
    MapPage.prototype.deleteMarkers = function () {
        this.clearMarkers();
        this.markers = [];
    };
    MapPage.prototype.findLocation = function (location) {
        var _this = this;
        if (!this.map)
            return;
        this.geocoder.geocode({ 'address': location }, function (res, status) {
            if (status === 'OK') {
                _this.map.panTo(res[0].geometry.location);
                _this.map.setZoom(15);
            }
            else {
                console.log("Geocode was not successful for the following reason: " + status);
            }
        });
    };
    __decorate([
        ViewChild('map'),
        __metadata("design:type", ElementRef)
    ], MapPage.prototype, "mapElement", void 0);
    MapPage = __decorate([
        Component({
            selector: 'page-map',
            templateUrl: 'map.html',
        }),
        __metadata("design:paramtypes", [NavController,
            NavParams,
            Platform,
            Geolocation,
            ProfileProvider,
            FirebaseappProvider,
            LoadingController])
    ], MapPage);
    return MapPage;
}());
export { MapPage };
//# sourceMappingURL=map.js.map
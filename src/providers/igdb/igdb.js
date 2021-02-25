var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { C } from '../../config';
var IgdbProvider = /** @class */ (function () {
    function IgdbProvider(http) {
        this.http = http;
        // const PS4_ID = 48;
        // const NINTENDO_SWITCH_ID = 130;
        // const XBOX_ONE = 49;
        this.searchOptions = [];
    }
    IgdbProvider.prototype.search = function (input) {
        var _this = this;
        var headers = new HttpHeaders()
            .set("user-key", "5227ae6e46cee2806cf25779d4c97966")
            .set("Accept", "application/json");
        var excludedPlatforms = "0";
        var included = [
            3 // Linux
            ,
            6 // windows pc
            ,
            9 // ps3
            ,
            12 // xbox 360
            ,
            14 // Mac
            ,
            41 // wii
            ,
            48 // xbox1
            ,
            49 // ps4
            ,
            92 // steamOs
            ,
            130 // switch
        ];
        for (var i = 1; i < 164; i++) {
            if (included.indexOf(i) > -1)
                continue;
            excludedPlatforms += "," + i;
        }
        var search = "https://api-endpoint.igdb.com/games/"
            + "?search=" + input
            + "&filter[release_dates.platform][not_in]=" + excludedPlatforms
            + "&filter[category][eq]=" + "0"
            + "&filter[release_dates.platform][exists]"
            // + "&filter[version_parent][not_existss]"
            + "&fields=*";
        // var search = 'https://api-endpoint.igdb.com/games/?search=' + input +
        // "&filter[release_dates.platform][any]=48,49,130" +
        // "&filter[version_parent][not_exists]=1" +
        // "&fields=*";
        return new Promise(function (resolve, reject) {
            var httpSub = _this.http.get(search, { headers: headers }).subscribe(function (res) {
                var gameIds = "";
                // console.log("[igdb] search raw: ", res)
                var first = true;
                for (var _i = 0, res_1 = res; _i < res_1.length; _i++) {
                    var r = res_1[_i];
                    if (first)
                        gameIds += r["id"];
                    else
                        gameIds += "," + r["id"];
                    first = false;
                }
                var filteredSearch = _this.removeUnsupportedPlatforms(res);
                // console.log("[igdb] search clean: ", filteredSearch)
                resolve(filteredSearch);
                httpSub.unsubscribe();
            });
        });
    };
    IgdbProvider.prototype.removeUnsupportedPlatforms = function (games) {
        return games.filter(function (game) {
            if (game.platforms)
                return game.platforms.indexOf(C.PS4_ID) != -1
                    || game.platforms.indexOf(C.XBOX1_ID) != -1
                    || game.platforms.indexOf(C.NS_ID) != -1;
        });
    };
    IgdbProvider = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [HttpClient])
    ], IgdbProvider);
    return IgdbProvider;
}());
export { IgdbProvider };
//# sourceMappingURL=igdb.js.map
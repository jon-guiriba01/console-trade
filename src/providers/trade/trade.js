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
var TradeProvider = /** @class */ (function () {
    function TradeProvider(http) {
        this.http = http;
        this.matchingTraders = [];
        this.loading = false;
    }
    TradeProvider.prototype.getNearestPossibleTrades = function (key, limit, offset) {
        var _this = this;
        if (limit === void 0) { limit = 15; }
        if (offset === void 0) { offset = 0; }
        // console.log("[GetNeareastPossibleTrades] " + key)
        return new Promise(function (resolve, reject) {
            var headers = new HttpHeaders()
                .set("key", "eJQ0S7PjPs9BJJEJY8fXaJTNrngJIko4");
            var url = "https://lemon-data-center-js.herokuapp.com/api/getNPT?key=" + key + "&limit=" + limit + "&offset=" + offset;
            // var url = `http://localhost:3000/api/getNPT?key=${key}&limit=${limit}&offset=${offset}`;
            _this.loading = true;
            var httpSub = _this.http.get(url, { headers: headers }).subscribe(function (res) {
                _this.matchingTraders = res ? res : [];
                // console.log("get getNearestPossibleTrades: ", this.matchingTraders)
                _this.loading = false;
                resolve(_this.matchingTraders);
                httpSub.unsubscribe();
            });
        });
    };
    TradeProvider.prototype.getNearestTrades = function (key, limit, offset) {
        var _this = this;
        if (limit === void 0) { limit = 15; }
        if (offset === void 0) { offset = 0; }
        // console.log("[GetNeareastTrades] " + key)
        return new Promise(function (resolve, reject) {
            var headers = new HttpHeaders()
                .set("key", "eJQ0S7PjPs9BJJEJY8fXaJTNrngJIko4");
            var url = "https://lemon-data-center-js.herokuapp.com/api/getNT?key=" + key + "&limit=" + limit + "&offset=" + offset;
            // var url = `http://localhost:3000/api/getNT?key=${key}&limit=${limit}&offset=${offset}`;
            _this.loading = true;
            var httpSub = _this.http.get(url, { headers: headers }).subscribe(function (res) {
                _this.matchingTraders = res ? res : [];
                // console.log("get getNearestPossibleTrades: ", this.matchingTraders)
                _this.loading = false;
                resolve(_this.matchingTraders);
                httpSub.unsubscribe();
            });
        });
    };
    TradeProvider = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [HttpClient])
    ], TradeProvider);
    return TradeProvider;
}());
export { TradeProvider };
//# sourceMappingURL=trade.js.map
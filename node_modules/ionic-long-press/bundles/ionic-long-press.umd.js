(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('ionic-angular/gestures/gesture'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('ionic-long-press', ['exports', '@angular/core', 'ionic-angular/gestures/gesture', '@angular/common'], factory) :
    (factory((global['ionic-long-press'] = {}),global.ng.core,null,global.ng.common));
}(this, (function (exports,core,gesture,common) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var LongPressDirective = /** @class */ (function () {
        function LongPressDirective(zone, el) {
            this.zone = zone;
            this.onPressStart = new core.EventEmitter();
            this.onPressing = new core.EventEmitter();
            this.onPressEnd = new core.EventEmitter();
            this.el = el.nativeElement;
        }
        /**
         * @return {?}
         */
        LongPressDirective.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                if (!this.interval)
                    this.interval = 500;
                if (this.interval < 40) {
                    throw new Error('A limit of 40ms is imposed so you don\'t destroy device performance. If you need less than a 40ms interval, please file an issue explaining your use case.');
                }
                this.pressGesture = new gesture.Gesture(this.el);
                this.pressGesture.listen();
                this.pressGesture.on('press', function (e) {
                    _this.onPressStart.emit(e);
                    _this.clearInt();
                    _this.int = /** @type {?} */ (setInterval(function () {
                        _this.onPressing.emit();
                    }, _this.interval));
                });
                this.pressGesture.on('pressup', function (e) {
                    _this.pressEnd();
                });
                this.pressGesture.on('pan', function (e) {
                    _this.pressEnd();
                });
                this.pressGesture.on('release', function (e) {
                    _this.pressEnd();
                });
                this.el.addEventListener('mouseleave', function (e) {
                    _this.pressEnd();
                });
                this.el.addEventListener('mouseout', function (e) {
                    _this.pressEnd();
                });
            };
        /**
         * @return {?}
         */
        LongPressDirective.prototype.clearInt = /**
         * @return {?}
         */
            function () {
                if (this.int !== undefined) {
                    clearInterval(this.int);
                    this.int = undefined;
                }
            };
        /**
         * @return {?}
         */
        LongPressDirective.prototype.pressEnd = /**
         * @return {?}
         */
            function () {
                this.clearInt();
                this.onPressEnd.emit();
            };
        /**
         * @return {?}
         */
        LongPressDirective.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                this.pressEnd();
                this.pressGesture.destroy();
            };
        LongPressDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: '[ion-long-press]'
                    },] },
        ];
        /** @nocollapse */
        LongPressDirective.ctorParameters = function () {
            return [
                { type: core.NgZone, },
                { type: core.ElementRef, },
            ];
        };
        LongPressDirective.propDecorators = {
            "interval": [{ type: core.Input },],
            "onPressStart": [{ type: core.Output },],
            "onPressing": [{ type: core.Output },],
            "onPressEnd": [{ type: core.Output },],
        };
        return LongPressDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var LongPressModule = /** @class */ (function () {
        function LongPressModule() {
        }
        LongPressModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule
                        ],
                        declarations: [LongPressDirective],
                        exports: [LongPressDirective]
                    },] },
        ];
        return LongPressModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    exports.LongPressDirective = LongPressDirective;
    exports.LongPressModule = LongPressModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW9uaWMtbG9uZy1wcmVzcy51bWQuanMubWFwIiwic291cmNlcyI6WyJuZzovL2lvbmljLWxvbmctcHJlc3MvZGlyZWN0aXZlcy9sb25nLXByZXNzLmRpcmVjdGl2ZS50cyIsIm5nOi8vaW9uaWMtbG9uZy1wcmVzcy9sb25nLXByZXNzLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE5nWm9uZSwgT25EZXN0cm95LCBPbkluaXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgR2VzdHVyZSB9IGZyb20gJ2lvbmljLWFuZ3VsYXIvZ2VzdHVyZXMvZ2VzdHVyZSc7XG5cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiAnW2lvbi1sb25nLXByZXNzXSdcbn0pXG5leHBvcnQgY2xhc3MgTG9uZ1ByZXNzRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuXG4gICAgQElucHV0KCkgaW50ZXJ2YWw6IG51bWJlcjtcblxuICAgIEBPdXRwdXQoKSBvblByZXNzU3RhcnQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgIEBPdXRwdXQoKSBvblByZXNzaW5nOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICBAT3V0cHV0KCkgb25QcmVzc0VuZDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgICBlbDogSFRNTEVsZW1lbnQ7XG4gICAgcHJlc3NHZXN0dXJlOiBHZXN0dXJlO1xuXG4gICAgaW50OiBudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHVibGljIHpvbmU6IE5nWm9uZSxcbiAgICAgICAgZWw6IEVsZW1lbnRSZWZcbiAgICApIHtcbiAgICAgICAgdGhpcy5lbCA9IGVsLm5hdGl2ZUVsZW1lbnQ7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIGlmICghdGhpcy5pbnRlcnZhbCkgdGhpcy5pbnRlcnZhbCA9IDUwMDtcbiAgICAgICAgaWYgKHRoaXMuaW50ZXJ2YWwgPCA0MCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdBIGxpbWl0IG9mIDQwbXMgaXMgaW1wb3NlZCBzbyB5b3UgZG9uXFwndCBkZXN0cm95IGRldmljZSBwZXJmb3JtYW5jZS4gSWYgeW91IG5lZWQgbGVzcyB0aGFuIGEgNDBtcyBpbnRlcnZhbCwgcGxlYXNlIGZpbGUgYW4gaXNzdWUgZXhwbGFpbmluZyB5b3VyIHVzZSBjYXNlLicpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5wcmVzc0dlc3R1cmUgPSBuZXcgR2VzdHVyZSh0aGlzLmVsKTtcbiAgICAgICAgdGhpcy5wcmVzc0dlc3R1cmUubGlzdGVuKCk7XG4gICAgICAgIHRoaXMucHJlc3NHZXN0dXJlLm9uKCdwcmVzcycsIChlOiBhbnkpID0+IHtcbiAgICAgICAgICAgIHRoaXMub25QcmVzc1N0YXJ0LmVtaXQoZSk7XG4gICAgICAgICAgICB0aGlzLmNsZWFySW50KCk7XG4gICAgICAgICAgICB0aGlzLmludCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm9uUHJlc3NpbmcuZW1pdCgpO1xuICAgICAgICAgICAgfSwgdGhpcy5pbnRlcnZhbCkgYXMgYW55O1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnByZXNzR2VzdHVyZS5vbigncHJlc3N1cCcsIChlOiBhbnkpID0+IHtcbiAgICAgICAgICAgIHRoaXMucHJlc3NFbmQoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5wcmVzc0dlc3R1cmUub24oJ3BhbicsIChlOiBhbnkpID0+IHtcbiAgICAgICAgICAgIHRoaXMucHJlc3NFbmQoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5wcmVzc0dlc3R1cmUub24oJ3JlbGVhc2UnLCAoZTogYW55KSA9PiB7XG4gICAgICAgICAgICB0aGlzLnByZXNzRW5kKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIChlOiBhbnkpID0+IHtcbiAgICAgICAgICAgIHRoaXMucHJlc3NFbmQoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsIChlOiBhbnkpID0+IHtcbiAgICAgICAgICAgIHRoaXMucHJlc3NFbmQoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY2xlYXJJbnQoKSB7XG4gICAgICAgIGlmICh0aGlzLmludCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBjbGVhckludGVydmFsKHRoaXMuaW50KTtcbiAgICAgICAgICAgIHRoaXMuaW50ID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJlc3NFbmQoKSB7XG4gICAgICAgIHRoaXMuY2xlYXJJbnQoKTtcbiAgICAgICAgdGhpcy5vblByZXNzRW5kLmVtaXQoKTtcbiAgICB9XG5cbiAgICBuZ09uRGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy5wcmVzc0VuZCgpO1xuICAgICAgICB0aGlzLnByZXNzR2VzdHVyZS5kZXN0cm95KCk7XG4gICAgfVxufSIsImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgR2VzdHVyZSB9IGZyb20gJ2lvbmljLWFuZ3VsYXIvZ2VzdHVyZXMvZ2VzdHVyZSc7XG5pbXBvcnQgeyBMb25nUHJlc3NEaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZXMvbG9uZy1wcmVzcy5kaXJlY3RpdmUnO1xuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtcbiAgICAgICAgQ29tbW9uTW9kdWxlXG4gICAgXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtMb25nUHJlc3NEaXJlY3RpdmVdLFxuICAgIGV4cG9ydHM6IFtMb25nUHJlc3NEaXJlY3RpdmVdXG59KVxuZXhwb3J0IGNsYXNzIExvbmdQcmVzc01vZHVsZSB7IH0iXSwibmFtZXMiOlsiRXZlbnRFbWl0dGVyIiwiR2VzdHVyZSIsIkRpcmVjdGl2ZSIsIk5nWm9uZSIsIkVsZW1lbnRSZWYiLCJJbnB1dCIsIk91dHB1dCIsIk5nTW9kdWxlIiwiQ29tbW9uTW9kdWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7UUFtQkksNEJBQ1csTUFDUCxFQUFjO1lBRFAsU0FBSSxHQUFKLElBQUk7Z0NBVjZCLElBQUlBLGlCQUFZLEVBQUU7OEJBQ3BCLElBQUlBLGlCQUFZLEVBQUU7OEJBQ2xCLElBQUlBLGlCQUFZLEVBQUU7WUFXeEQsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsYUFBYSxDQUFDO1NBQzlCOzs7O1FBRUQscUNBQVE7OztZQUFSO2dCQUFBLGlCQW1DQztnQkFsQ0csSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRO29CQUFFLElBQUksQ0FBQyxRQUFRLEdBQUcsR0FBRyxDQUFDO2dCQUN4QyxJQUFJLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxFQUFFO29CQUNwQixNQUFNLElBQUksS0FBSyxDQUFDLDRKQUE0SixDQUFDLENBQUM7aUJBQ2pMO2dCQUVELElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSUMsZUFBTyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztnQkFDekMsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUUsQ0FBQztnQkFDM0IsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFLFVBQUMsQ0FBTTtvQkFDakMsS0FBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQzFCLEtBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztvQkFDaEIsS0FBSSxDQUFDLEdBQUcscUJBQUcsV0FBVyxDQUFDO3dCQUNuQixLQUFJLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxDQUFDO3FCQUMxQixFQUFFLEtBQUksQ0FBQyxRQUFRLENBQVEsQ0FBQSxDQUFDO2lCQUM1QixDQUFDLENBQUM7Z0JBRUgsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsU0FBUyxFQUFFLFVBQUMsQ0FBTTtvQkFDbkMsS0FBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO2lCQUNuQixDQUFDLENBQUM7Z0JBRUgsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsS0FBSyxFQUFFLFVBQUMsQ0FBTTtvQkFDL0IsS0FBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO2lCQUNuQixDQUFDLENBQUM7Z0JBRUgsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsU0FBUyxFQUFFLFVBQUMsQ0FBTTtvQkFDbkMsS0FBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO2lCQUNuQixDQUFDLENBQUM7Z0JBRUgsSUFBSSxDQUFDLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZLEVBQUUsVUFBQyxDQUFNO29CQUMxQyxLQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7aUJBQ25CLENBQUMsQ0FBQztnQkFFSCxJQUFJLENBQUMsRUFBRSxDQUFDLGdCQUFnQixDQUFDLFVBQVUsRUFBRSxVQUFDLENBQU07b0JBQ3hDLEtBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztpQkFDbkIsQ0FBQyxDQUFDO2FBQ047Ozs7UUFFRCxxQ0FBUTs7O1lBQVI7Z0JBQ0ksSUFBSSxJQUFJLENBQUMsR0FBRyxLQUFLLFNBQVMsRUFBRTtvQkFDeEIsYUFBYSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFDeEIsSUFBSSxDQUFDLEdBQUcsR0FBRyxTQUFTLENBQUM7aUJBQ3hCO2FBQ0o7Ozs7UUFFRCxxQ0FBUTs7O1lBQVI7Z0JBQ0ksSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO2dCQUNoQixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxDQUFDO2FBQzFCOzs7O1FBRUQsd0NBQVc7OztZQUFYO2dCQUNJLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztnQkFDaEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsQ0FBQzthQUMvQjs7b0JBM0VKQyxjQUFTLFNBQUM7d0JBQ1AsUUFBUSxFQUFFLGtCQUFrQjtxQkFDL0I7Ozs7O3dCQUxvREMsV0FBTTt3QkFBdkNDLGVBQVU7Ozs7aUNBUXpCQyxVQUFLO3FDQUVMQyxXQUFNO21DQUNOQSxXQUFNO21DQUNOQSxXQUFNOztpQ0FaWDs7Ozs7OztBQ0FBOzs7O29CQUtDQyxhQUFRLFNBQUM7d0JBQ04sT0FBTyxFQUFFOzRCQUNMQyxtQkFBWTt5QkFDZjt3QkFDRCxZQUFZLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQzt3QkFDbEMsT0FBTyxFQUFFLENBQUMsa0JBQWtCLENBQUM7cUJBQ2hDOzs4QkFYRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
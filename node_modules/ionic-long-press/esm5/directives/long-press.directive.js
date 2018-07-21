/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Directive, ElementRef, EventEmitter, Input, NgZone, Output } from '@angular/core';
import { Gesture } from 'ionic-angular/gestures/gesture';
var LongPressDirective = /** @class */ (function () {
    function LongPressDirective(zone, el) {
        this.zone = zone;
        this.onPressStart = new EventEmitter();
        this.onPressing = new EventEmitter();
        this.onPressEnd = new EventEmitter();
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
        this.pressGesture = new Gesture(this.el);
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
        { type: Directive, args: [{
                    selector: '[ion-long-press]'
                },] },
    ];
    /** @nocollapse */
    LongPressDirective.ctorParameters = function () { return [
        { type: NgZone, },
        { type: ElementRef, },
    ]; };
    LongPressDirective.propDecorators = {
        "interval": [{ type: Input },],
        "onPressStart": [{ type: Output },],
        "onPressing": [{ type: Output },],
        "onPressEnd": [{ type: Output },],
    };
    return LongPressDirective;
}());
export { LongPressDirective };
function LongPressDirective_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    LongPressDirective.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    LongPressDirective.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    LongPressDirective.propDecorators;
    /** @type {?} */
    LongPressDirective.prototype.interval;
    /** @type {?} */
    LongPressDirective.prototype.onPressStart;
    /** @type {?} */
    LongPressDirective.prototype.onPressing;
    /** @type {?} */
    LongPressDirective.prototype.onPressEnd;
    /** @type {?} */
    LongPressDirective.prototype.el;
    /** @type {?} */
    LongPressDirective.prototype.pressGesture;
    /** @type {?} */
    LongPressDirective.prototype.int;
    /** @type {?} */
    LongPressDirective.prototype.zone;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9uZy1wcmVzcy5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9pb25pYy1sb25nLXByZXNzLyIsInNvdXJjZXMiOlsiZGlyZWN0aXZlcy9sb25nLXByZXNzLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQXFCLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5RyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7O0lBa0JyRCw0QkFDVyxNQUNQLEVBQWM7UUFEUCxTQUFJLEdBQUosSUFBSTs0QkFWNkIsSUFBSSxZQUFZLEVBQUU7MEJBQ3BCLElBQUksWUFBWSxFQUFFOzBCQUNsQixJQUFJLFlBQVksRUFBRTtRQVd4RCxJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxhQUFhLENBQUM7S0FDOUI7Ozs7SUFFRCxxQ0FBUTs7O0lBQVI7UUFBQSxpQkFtQ0M7UUFsQ0csSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRO1lBQUUsSUFBSSxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUM7UUFDeEMsSUFBSSxJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsRUFBRTtZQUNwQixNQUFNLElBQUksS0FBSyxDQUFDLDRKQUE0SixDQUFDLENBQUM7U0FDakw7UUFFRCxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUN6QyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQzNCLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxVQUFDLENBQU07WUFDakMsS0FBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDMUIsS0FBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQ2hCLEtBQUksQ0FBQyxHQUFHLHFCQUFHLFdBQVcsQ0FBQztnQkFDbkIsS0FBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsQ0FBQzthQUMxQixFQUFFLEtBQUksQ0FBQyxRQUFRLENBQVEsQ0FBQSxDQUFDO1NBQzVCLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFNBQVMsRUFBRSxVQUFDLENBQU07WUFDbkMsS0FBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1NBQ25CLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLEtBQUssRUFBRSxVQUFDLENBQU07WUFDL0IsS0FBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1NBQ25CLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFNBQVMsRUFBRSxVQUFDLENBQU07WUFDbkMsS0FBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1NBQ25CLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxFQUFFLENBQUMsZ0JBQWdCLENBQUMsWUFBWSxFQUFFLFVBQUMsQ0FBTTtZQUMxQyxLQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7U0FDbkIsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxVQUFVLEVBQUUsVUFBQyxDQUFNO1lBQ3hDLEtBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztTQUNuQixDQUFDLENBQUM7S0FDTjs7OztJQUVELHFDQUFROzs7SUFBUjtRQUNJLElBQUksSUFBSSxDQUFDLEdBQUcsS0FBSyxTQUFTLEVBQUU7WUFDeEIsYUFBYSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUN4QixJQUFJLENBQUMsR0FBRyxHQUFHLFNBQVMsQ0FBQztTQUN4QjtLQUNKOzs7O0lBRUQscUNBQVE7OztJQUFSO1FBQ0ksSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ2hCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLENBQUM7S0FDMUI7Ozs7SUFFRCx3Q0FBVzs7O0lBQVg7UUFDSSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDaEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsQ0FBQztLQUMvQjs7Z0JBM0VKLFNBQVMsU0FBQztvQkFDUCxRQUFRLEVBQUUsa0JBQWtCO2lCQUMvQjs7OztnQkFMb0QsTUFBTTtnQkFBdkMsVUFBVTs7OzZCQVF6QixLQUFLO2lDQUVMLE1BQU07K0JBQ04sTUFBTTsrQkFDTixNQUFNOzs2QkFaWDs7U0FNYSxrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE5nWm9uZSwgT25EZXN0cm95LCBPbkluaXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgR2VzdHVyZSB9IGZyb20gJ2lvbmljLWFuZ3VsYXIvZ2VzdHVyZXMvZ2VzdHVyZSc7XG5cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiAnW2lvbi1sb25nLXByZXNzXSdcbn0pXG5leHBvcnQgY2xhc3MgTG9uZ1ByZXNzRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuXG4gICAgQElucHV0KCkgaW50ZXJ2YWw6IG51bWJlcjtcblxuICAgIEBPdXRwdXQoKSBvblByZXNzU3RhcnQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgIEBPdXRwdXQoKSBvblByZXNzaW5nOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICBAT3V0cHV0KCkgb25QcmVzc0VuZDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgICBlbDogSFRNTEVsZW1lbnQ7XG4gICAgcHJlc3NHZXN0dXJlOiBHZXN0dXJlO1xuXG4gICAgaW50OiBudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHVibGljIHpvbmU6IE5nWm9uZSxcbiAgICAgICAgZWw6IEVsZW1lbnRSZWZcbiAgICApIHtcbiAgICAgICAgdGhpcy5lbCA9IGVsLm5hdGl2ZUVsZW1lbnQ7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIGlmICghdGhpcy5pbnRlcnZhbCkgdGhpcy5pbnRlcnZhbCA9IDUwMDtcbiAgICAgICAgaWYgKHRoaXMuaW50ZXJ2YWwgPCA0MCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdBIGxpbWl0IG9mIDQwbXMgaXMgaW1wb3NlZCBzbyB5b3UgZG9uXFwndCBkZXN0cm95IGRldmljZSBwZXJmb3JtYW5jZS4gSWYgeW91IG5lZWQgbGVzcyB0aGFuIGEgNDBtcyBpbnRlcnZhbCwgcGxlYXNlIGZpbGUgYW4gaXNzdWUgZXhwbGFpbmluZyB5b3VyIHVzZSBjYXNlLicpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5wcmVzc0dlc3R1cmUgPSBuZXcgR2VzdHVyZSh0aGlzLmVsKTtcbiAgICAgICAgdGhpcy5wcmVzc0dlc3R1cmUubGlzdGVuKCk7XG4gICAgICAgIHRoaXMucHJlc3NHZXN0dXJlLm9uKCdwcmVzcycsIChlOiBhbnkpID0+IHtcbiAgICAgICAgICAgIHRoaXMub25QcmVzc1N0YXJ0LmVtaXQoZSk7XG4gICAgICAgICAgICB0aGlzLmNsZWFySW50KCk7XG4gICAgICAgICAgICB0aGlzLmludCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm9uUHJlc3NpbmcuZW1pdCgpO1xuICAgICAgICAgICAgfSwgdGhpcy5pbnRlcnZhbCkgYXMgYW55O1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnByZXNzR2VzdHVyZS5vbigncHJlc3N1cCcsIChlOiBhbnkpID0+IHtcbiAgICAgICAgICAgIHRoaXMucHJlc3NFbmQoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5wcmVzc0dlc3R1cmUub24oJ3BhbicsIChlOiBhbnkpID0+IHtcbiAgICAgICAgICAgIHRoaXMucHJlc3NFbmQoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5wcmVzc0dlc3R1cmUub24oJ3JlbGVhc2UnLCAoZTogYW55KSA9PiB7XG4gICAgICAgICAgICB0aGlzLnByZXNzRW5kKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIChlOiBhbnkpID0+IHtcbiAgICAgICAgICAgIHRoaXMucHJlc3NFbmQoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsIChlOiBhbnkpID0+IHtcbiAgICAgICAgICAgIHRoaXMucHJlc3NFbmQoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY2xlYXJJbnQoKSB7XG4gICAgICAgIGlmICh0aGlzLmludCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBjbGVhckludGVydmFsKHRoaXMuaW50KTtcbiAgICAgICAgICAgIHRoaXMuaW50ID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJlc3NFbmQoKSB7XG4gICAgICAgIHRoaXMuY2xlYXJJbnQoKTtcbiAgICAgICAgdGhpcy5vblByZXNzRW5kLmVtaXQoKTtcbiAgICB9XG5cbiAgICBuZ09uRGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy5wcmVzc0VuZCgpO1xuICAgICAgICB0aGlzLnByZXNzR2VzdHVyZS5kZXN0cm95KCk7XG4gICAgfVxufSJdfQ==
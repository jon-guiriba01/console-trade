/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Directive, ElementRef, EventEmitter, Input, NgZone, Output } from '@angular/core';
import { Gesture } from 'ionic-angular/gestures/gesture';
export class LongPressDirective {
    /**
     * @param {?} zone
     * @param {?} el
     */
    constructor(zone, el) {
        this.zone = zone;
        this.onPressStart = new EventEmitter();
        this.onPressing = new EventEmitter();
        this.onPressEnd = new EventEmitter();
        this.el = el.nativeElement;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (!this.interval)
            this.interval = 500;
        if (this.interval < 40) {
            throw new Error('A limit of 40ms is imposed so you don\'t destroy device performance. If you need less than a 40ms interval, please file an issue explaining your use case.');
        }
        this.pressGesture = new Gesture(this.el);
        this.pressGesture.listen();
        this.pressGesture.on('press', (e) => {
            this.onPressStart.emit(e);
            this.clearInt();
            this.int = /** @type {?} */ (setInterval(() => {
                this.onPressing.emit();
            }, this.interval));
        });
        this.pressGesture.on('pressup', (e) => {
            this.pressEnd();
        });
        this.pressGesture.on('pan', (e) => {
            this.pressEnd();
        });
        this.pressGesture.on('release', (e) => {
            this.pressEnd();
        });
        this.el.addEventListener('mouseleave', (e) => {
            this.pressEnd();
        });
        this.el.addEventListener('mouseout', (e) => {
            this.pressEnd();
        });
    }
    /**
     * @return {?}
     */
    clearInt() {
        if (this.int !== undefined) {
            clearInterval(this.int);
            this.int = undefined;
        }
    }
    /**
     * @return {?}
     */
    pressEnd() {
        this.clearInt();
        this.onPressEnd.emit();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.pressEnd();
        this.pressGesture.destroy();
    }
}
LongPressDirective.decorators = [
    { type: Directive, args: [{
                selector: '[ion-long-press]'
            },] },
];
/** @nocollapse */
LongPressDirective.ctorParameters = () => [
    { type: NgZone, },
    { type: ElementRef, },
];
LongPressDirective.propDecorators = {
    "interval": [{ type: Input },],
    "onPressStart": [{ type: Output },],
    "onPressing": [{ type: Output },],
    "onPressEnd": [{ type: Output },],
};
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9uZy1wcmVzcy5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9pb25pYy1sb25nLXByZXNzLyIsInNvdXJjZXMiOlsiZGlyZWN0aXZlcy9sb25nLXByZXNzLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQXFCLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5RyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFLekQsTUFBTTs7Ozs7SUFhRixZQUNXLE1BQ1AsRUFBYztRQURQLFNBQUksR0FBSixJQUFJOzRCQVY2QixJQUFJLFlBQVksRUFBRTswQkFDcEIsSUFBSSxZQUFZLEVBQUU7MEJBQ2xCLElBQUksWUFBWSxFQUFFO1FBV3hELElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLGFBQWEsQ0FBQztLQUM5Qjs7OztJQUVELFFBQVE7UUFDSixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVE7WUFBRSxJQUFJLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQztRQUN4QyxJQUFJLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxFQUFFO1lBQ3BCLE1BQU0sSUFBSSxLQUFLLENBQUMsNEpBQTRKLENBQUMsQ0FBQztTQUNqTDtRQUVELElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3pDLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDM0IsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBTSxFQUFFLEVBQUU7WUFDckMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDMUIsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQ2hCLElBQUksQ0FBQyxHQUFHLHFCQUFHLFdBQVcsQ0FBQyxHQUFHLEVBQUU7Z0JBQ3hCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLENBQUM7YUFDMUIsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFRLENBQUEsQ0FBQztTQUM1QixDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFNLEVBQUUsRUFBRTtZQUN2QyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7U0FDbkIsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBTSxFQUFFLEVBQUU7WUFDbkMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1NBQ25CLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQU0sRUFBRSxFQUFFO1lBQ3ZDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztTQUNuQixDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsRUFBRSxDQUFDLGdCQUFnQixDQUFDLFlBQVksRUFBRSxDQUFDLENBQU0sRUFBRSxFQUFFO1lBQzlDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztTQUNuQixDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsRUFBRSxDQUFDLGdCQUFnQixDQUFDLFVBQVUsRUFBRSxDQUFDLENBQU0sRUFBRSxFQUFFO1lBQzVDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztTQUNuQixDQUFDLENBQUM7S0FDTjs7OztJQUVELFFBQVE7UUFDSixJQUFJLElBQUksQ0FBQyxHQUFHLEtBQUssU0FBUyxFQUFFO1lBQ3hCLGFBQWEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDeEIsSUFBSSxDQUFDLEdBQUcsR0FBRyxTQUFTLENBQUM7U0FDeEI7S0FDSjs7OztJQUVELFFBQVE7UUFDSixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDaEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztLQUMxQjs7OztJQUVELFdBQVc7UUFDUCxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDaEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsQ0FBQztLQUMvQjs7O1lBM0VKLFNBQVMsU0FBQztnQkFDUCxRQUFRLEVBQUUsa0JBQWtCO2FBQy9COzs7O1lBTG9ELE1BQU07WUFBdkMsVUFBVTs7O3lCQVF6QixLQUFLOzZCQUVMLE1BQU07MkJBQ04sTUFBTTsyQkFDTixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIElucHV0LCBOZ1pvbmUsIE9uRGVzdHJveSwgT25Jbml0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEdlc3R1cmUgfSBmcm9tICdpb25pYy1hbmd1bGFyL2dlc3R1cmVzL2dlc3R1cmUnO1xuXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogJ1tpb24tbG9uZy1wcmVzc10nXG59KVxuZXhwb3J0IGNsYXNzIExvbmdQcmVzc0RpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcblxuICAgIEBJbnB1dCgpIGludGVydmFsOiBudW1iZXI7XG5cbiAgICBAT3V0cHV0KCkgb25QcmVzc1N0YXJ0OiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICBAT3V0cHV0KCkgb25QcmVzc2luZzogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICAgQE91dHB1dCgpIG9uUHJlc3NFbmQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gICAgZWw6IEhUTUxFbGVtZW50O1xuICAgIHByZXNzR2VzdHVyZTogR2VzdHVyZTtcblxuICAgIGludDogbnVtYmVyO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHB1YmxpYyB6b25lOiBOZ1pvbmUsXG4gICAgICAgIGVsOiBFbGVtZW50UmVmXG4gICAgKSB7XG4gICAgICAgIHRoaXMuZWwgPSBlbC5uYXRpdmVFbGVtZW50O1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICBpZiAoIXRoaXMuaW50ZXJ2YWwpIHRoaXMuaW50ZXJ2YWwgPSA1MDA7XG4gICAgICAgIGlmICh0aGlzLmludGVydmFsIDwgNDApIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQSBsaW1pdCBvZiA0MG1zIGlzIGltcG9zZWQgc28geW91IGRvblxcJ3QgZGVzdHJveSBkZXZpY2UgcGVyZm9ybWFuY2UuIElmIHlvdSBuZWVkIGxlc3MgdGhhbiBhIDQwbXMgaW50ZXJ2YWwsIHBsZWFzZSBmaWxlIGFuIGlzc3VlIGV4cGxhaW5pbmcgeW91ciB1c2UgY2FzZS4nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMucHJlc3NHZXN0dXJlID0gbmV3IEdlc3R1cmUodGhpcy5lbCk7XG4gICAgICAgIHRoaXMucHJlc3NHZXN0dXJlLmxpc3RlbigpO1xuICAgICAgICB0aGlzLnByZXNzR2VzdHVyZS5vbigncHJlc3MnLCAoZTogYW55KSA9PiB7XG4gICAgICAgICAgICB0aGlzLm9uUHJlc3NTdGFydC5lbWl0KGUpO1xuICAgICAgICAgICAgdGhpcy5jbGVhckludCgpO1xuICAgICAgICAgICAgdGhpcy5pbnQgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5vblByZXNzaW5nLmVtaXQoKTtcbiAgICAgICAgICAgIH0sIHRoaXMuaW50ZXJ2YWwpIGFzIGFueTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5wcmVzc0dlc3R1cmUub24oJ3ByZXNzdXAnLCAoZTogYW55KSA9PiB7XG4gICAgICAgICAgICB0aGlzLnByZXNzRW5kKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMucHJlc3NHZXN0dXJlLm9uKCdwYW4nLCAoZTogYW55KSA9PiB7XG4gICAgICAgICAgICB0aGlzLnByZXNzRW5kKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMucHJlc3NHZXN0dXJlLm9uKCdyZWxlYXNlJywgKGU6IGFueSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5wcmVzc0VuZCgpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmVsLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCAoZTogYW55KSA9PiB7XG4gICAgICAgICAgICB0aGlzLnByZXNzRW5kKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLCAoZTogYW55KSA9PiB7XG4gICAgICAgICAgICB0aGlzLnByZXNzRW5kKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNsZWFySW50KCkge1xuICAgICAgICBpZiAodGhpcy5pbnQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLmludCk7XG4gICAgICAgICAgICB0aGlzLmludCA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByZXNzRW5kKCkge1xuICAgICAgICB0aGlzLmNsZWFySW50KCk7XG4gICAgICAgIHRoaXMub25QcmVzc0VuZC5lbWl0KCk7XG4gICAgfVxuXG4gICAgbmdPbkRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMucHJlc3NFbmQoKTtcbiAgICAgICAgdGhpcy5wcmVzc0dlc3R1cmUuZGVzdHJveSgpO1xuICAgIH1cbn0iXX0=
import { Directive, ElementRef, EventEmitter, Input, NgZone, Output, NgModule } from '@angular/core';
import { Gesture } from 'ionic-angular/gestures/gesture';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class LongPressDirective {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class LongPressModule {
}
LongPressModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule
                ],
                declarations: [LongPressDirective],
                exports: [LongPressDirective]
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

export { LongPressDirective, LongPressModule };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW9uaWMtbG9uZy1wcmVzcy5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vaW9uaWMtbG9uZy1wcmVzcy9kaXJlY3RpdmVzL2xvbmctcHJlc3MuZGlyZWN0aXZlLnRzIiwibmc6Ly9pb25pYy1sb25nLXByZXNzL2xvbmctcHJlc3MubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgTmdab25lLCBPbkRlc3Ryb3ksIE9uSW5pdCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBHZXN0dXJlIH0gZnJvbSAnaW9uaWMtYW5ndWxhci9nZXN0dXJlcy9nZXN0dXJlJztcblxuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6ICdbaW9uLWxvbmctcHJlc3NdJ1xufSlcbmV4cG9ydCBjbGFzcyBMb25nUHJlc3NEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG5cbiAgICBASW5wdXQoKSBpbnRlcnZhbDogbnVtYmVyO1xuXG4gICAgQE91dHB1dCgpIG9uUHJlc3NTdGFydDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICAgQE91dHB1dCgpIG9uUHJlc3Npbmc6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgIEBPdXRwdXQoKSBvblByZXNzRW5kOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAgIGVsOiBIVE1MRWxlbWVudDtcbiAgICBwcmVzc0dlc3R1cmU6IEdlc3R1cmU7XG5cbiAgICBpbnQ6IG51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwdWJsaWMgem9uZTogTmdab25lLFxuICAgICAgICBlbDogRWxlbWVudFJlZlxuICAgICkge1xuICAgICAgICB0aGlzLmVsID0gZWwubmF0aXZlRWxlbWVudDtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmludGVydmFsKSB0aGlzLmludGVydmFsID0gNTAwO1xuICAgICAgICBpZiAodGhpcy5pbnRlcnZhbCA8IDQwKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0EgbGltaXQgb2YgNDBtcyBpcyBpbXBvc2VkIHNvIHlvdSBkb25cXCd0IGRlc3Ryb3kgZGV2aWNlIHBlcmZvcm1hbmNlLiBJZiB5b3UgbmVlZCBsZXNzIHRoYW4gYSA0MG1zIGludGVydmFsLCBwbGVhc2UgZmlsZSBhbiBpc3N1ZSBleHBsYWluaW5nIHlvdXIgdXNlIGNhc2UuJyk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnByZXNzR2VzdHVyZSA9IG5ldyBHZXN0dXJlKHRoaXMuZWwpO1xuICAgICAgICB0aGlzLnByZXNzR2VzdHVyZS5saXN0ZW4oKTtcbiAgICAgICAgdGhpcy5wcmVzc0dlc3R1cmUub24oJ3ByZXNzJywgKGU6IGFueSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5vblByZXNzU3RhcnQuZW1pdChlKTtcbiAgICAgICAgICAgIHRoaXMuY2xlYXJJbnQoKTtcbiAgICAgICAgICAgIHRoaXMuaW50ID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMub25QcmVzc2luZy5lbWl0KCk7XG4gICAgICAgICAgICB9LCB0aGlzLmludGVydmFsKSBhcyBhbnk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMucHJlc3NHZXN0dXJlLm9uKCdwcmVzc3VwJywgKGU6IGFueSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5wcmVzc0VuZCgpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnByZXNzR2VzdHVyZS5vbigncGFuJywgKGU6IGFueSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5wcmVzc0VuZCgpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnByZXNzR2VzdHVyZS5vbigncmVsZWFzZScsIChlOiBhbnkpID0+IHtcbiAgICAgICAgICAgIHRoaXMucHJlc3NFbmQoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgKGU6IGFueSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5wcmVzc0VuZCgpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmVsLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3V0JywgKGU6IGFueSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5wcmVzc0VuZCgpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjbGVhckludCgpIHtcbiAgICAgICAgaWYgKHRoaXMuaW50ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5pbnQpO1xuICAgICAgICAgICAgdGhpcy5pbnQgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcmVzc0VuZCgpIHtcbiAgICAgICAgdGhpcy5jbGVhckludCgpO1xuICAgICAgICB0aGlzLm9uUHJlc3NFbmQuZW1pdCgpO1xuICAgIH1cblxuICAgIG5nT25EZXN0cm95KCkge1xuICAgICAgICB0aGlzLnByZXNzRW5kKCk7XG4gICAgICAgIHRoaXMucHJlc3NHZXN0dXJlLmRlc3Ryb3koKTtcbiAgICB9XG59IiwiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBHZXN0dXJlIH0gZnJvbSAnaW9uaWMtYW5ndWxhci9nZXN0dXJlcy9nZXN0dXJlJztcbmltcG9ydCB7IExvbmdQcmVzc0RpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlcy9sb25nLXByZXNzLmRpcmVjdGl2ZSc7XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW1xuICAgICAgICBDb21tb25Nb2R1bGVcbiAgICBdLFxuICAgIGRlY2xhcmF0aW9uczogW0xvbmdQcmVzc0RpcmVjdGl2ZV0sXG4gICAgZXhwb3J0czogW0xvbmdQcmVzc0RpcmVjdGl2ZV1cbn0pXG5leHBvcnQgY2xhc3MgTG9uZ1ByZXNzTW9kdWxlIHsgfSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7OztJQW1CSSxZQUNXLE1BQ1AsRUFBYztRQURQLFNBQUksR0FBSixJQUFJOzRCQVY2QixJQUFJLFlBQVksRUFBRTswQkFDcEIsSUFBSSxZQUFZLEVBQUU7MEJBQ2xCLElBQUksWUFBWSxFQUFFO1FBV3hELElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLGFBQWEsQ0FBQztLQUM5Qjs7OztJQUVELFFBQVE7UUFDSixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVE7WUFBRSxJQUFJLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQztRQUN4QyxJQUFJLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxFQUFFO1lBQ3BCLE1BQU0sSUFBSSxLQUFLLENBQUMsNEpBQTRKLENBQUMsQ0FBQztTQUNqTDtRQUVELElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3pDLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDM0IsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBTTtZQUNqQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMxQixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDaEIsSUFBSSxDQUFDLEdBQUcscUJBQUcsV0FBVyxDQUFDO2dCQUNuQixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxDQUFDO2FBQzFCLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBUSxDQUFBLENBQUM7U0FDNUIsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBTTtZQUNuQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7U0FDbkIsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBTTtZQUMvQixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7U0FDbkIsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBTTtZQUNuQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7U0FDbkIsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFNO1lBQzFDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztTQUNuQixDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsRUFBRSxDQUFDLGdCQUFnQixDQUFDLFVBQVUsRUFBRSxDQUFDLENBQU07WUFDeEMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1NBQ25CLENBQUMsQ0FBQztLQUNOOzs7O0lBRUQsUUFBUTtRQUNKLElBQUksSUFBSSxDQUFDLEdBQUcsS0FBSyxTQUFTLEVBQUU7WUFDeEIsYUFBYSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUN4QixJQUFJLENBQUMsR0FBRyxHQUFHLFNBQVMsQ0FBQztTQUN4QjtLQUNKOzs7O0lBRUQsUUFBUTtRQUNKLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNoQixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxDQUFDO0tBQzFCOzs7O0lBRUQsV0FBVztRQUNQLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNoQixJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxDQUFDO0tBQy9COzs7WUEzRUosU0FBUyxTQUFDO2dCQUNQLFFBQVEsRUFBRSxrQkFBa0I7YUFDL0I7Ozs7WUFMb0QsTUFBTTtZQUF2QyxVQUFVOzs7eUJBUXpCLEtBQUs7NkJBRUwsTUFBTTsyQkFDTixNQUFNOzJCQUNOLE1BQU07Ozs7Ozs7QUNaWDs7O1lBS0MsUUFBUSxTQUFDO2dCQUNOLE9BQU8sRUFBRTtvQkFDTCxZQUFZO2lCQUNmO2dCQUNELFlBQVksRUFBRSxDQUFDLGtCQUFrQixDQUFDO2dCQUNsQyxPQUFPLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQzthQUNoQzs7Ozs7Ozs7Ozs7Ozs7OyJ9
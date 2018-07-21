import { ElementRef, EventEmitter, NgZone, OnDestroy, OnInit } from '@angular/core';
import { Gesture } from 'ionic-angular/gestures/gesture';
export declare class LongPressDirective implements OnInit, OnDestroy {
    zone: NgZone;
    interval: number;
    onPressStart: EventEmitter<any>;
    onPressing: EventEmitter<any>;
    onPressEnd: EventEmitter<any>;
    el: HTMLElement;
    pressGesture: Gesture;
    int: number;
    constructor(zone: NgZone, el: ElementRef);
    ngOnInit(): void;
    clearInt(): void;
    pressEnd(): void;
    ngOnDestroy(): void;
}

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _this = this;
import { CordovaInstance, InstanceCheck, InstanceProperty, IonicNativePlugin, Plugin, checkAvailability } from '@ionic-native/core';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';
var TARGET_ELEMENT_FINDING_QUERYS = [
    '.show-page #',
];
/**
 * @hidden
 */
var /**
 * @hidden
 */
LatLng = (function () {
    function LatLng(lat, lng) {
        this.lat = lat;
        this.lng = lng;
    }
    LatLng.prototype.equals = function (other) {
        return this.lat === other.lat && this.lng === other.lng;
    };
    LatLng.prototype.toString = function () {
        return this.lat + ',' + this.lng;
    };
    LatLng.prototype.toUrlValue = function (precision) {
        precision = precision || 6;
        return this.lat.toFixed(precision) + ',' + this.lng.toFixed(precision);
    };
    return LatLng;
}());
/**
 * @hidden
 */
export { LatLng };
/**
 * @hidden
 */
var LatLngBounds = (function () {
    function LatLngBounds(points) {
        this._objectInstance = new (GoogleMaps.getPlugin()).LatLngBounds(points);
    }
    /**
     * Converts to string
     * @return {string}
     */
    /**
       * Converts to string
       * @return {string}
       */
    LatLngBounds.prototype.toString = /**
       * Converts to string
       * @return {string}
       */
    function () {
        return;
    };
    /**
     * Returns a string of the form "lat_sw,lng_sw,lat_ne,lng_ne" for this bounds, where "sw" corresponds to the southwest corner of the bounding box, while "ne" corresponds to the northeast corner of that box.
     * @param precision {number}
     * @return {string}
     */
    /**
       * Returns a string of the form "lat_sw,lng_sw,lat_ne,lng_ne" for this bounds, where "sw" corresponds to the southwest corner of the bounding box, while "ne" corresponds to the northeast corner of that box.
       * @param precision {number}
       * @return {string}
       */
    LatLngBounds.prototype.toUrlValue = /**
       * Returns a string of the form "lat_sw,lng_sw,lat_ne,lng_ne" for this bounds, where "sw" corresponds to the southwest corner of the bounding box, while "ne" corresponds to the northeast corner of that box.
       * @param precision {number}
       * @return {string}
       */
    function (precision) {
        return;
    };
    /**
     * Extends this bounds to contain the given point.
     * @param LatLng {ILatLng}
     */
    /**
       * Extends this bounds to contain the given point.
       * @param LatLng {ILatLng}
       */
    LatLngBounds.prototype.extend = /**
       * Extends this bounds to contain the given point.
       * @param LatLng {ILatLng}
       */
    function (LatLng) {
    };
    /**
     * Returns true if the given lat/lng is in this bounds.
     * @param LatLng {ILatLng}
     */
    /**
       * Returns true if the given lat/lng is in this bounds.
       * @param LatLng {ILatLng}
       */
    LatLngBounds.prototype.contains = /**
       * Returns true if the given lat/lng is in this bounds.
       * @param LatLng {ILatLng}
       */
    function (LatLng) {
        return;
    };
    /**
     * Computes the center of this LatLngBounds
     * @return {LatLng}
     */
    /**
       * Computes the center of this LatLngBounds
       * @return {LatLng}
       */
    LatLngBounds.prototype.getCenter = /**
       * Computes the center of this LatLngBounds
       * @return {LatLng}
       */
    function () {
        return;
    };
    __decorate([
        InstanceProperty,
        __metadata("design:type", Object)
    ], LatLngBounds.prototype, "northeast", void 0);
    __decorate([
        InstanceProperty,
        __metadata("design:type", Object)
    ], LatLngBounds.prototype, "southwest", void 0);
    __decorate([
        InstanceProperty,
        __metadata("design:type", String)
    ], LatLngBounds.prototype, "type", void 0);
    __decorate([
        CordovaInstance({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", String)
    ], LatLngBounds.prototype, "toString", null);
    __decorate([
        CordovaInstance({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", String)
    ], LatLngBounds.prototype, "toUrlValue", null);
    __decorate([
        CordovaInstance({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], LatLngBounds.prototype, "extend", null);
    __decorate([
        CordovaInstance({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Boolean)
    ], LatLngBounds.prototype, "contains", null);
    __decorate([
        CordovaInstance({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", LatLng)
    ], LatLngBounds.prototype, "getCenter", null);
    return LatLngBounds;
}());
export { LatLngBounds };
/**
 * @hidden
 */
var VisibleRegion = (function () {
    function VisibleRegion(southwest, northeast, farLeft, farRight, nearLeft, nearRight) {
        this._objectInstance = new (GoogleMaps.getPlugin()).VisibleRegion(southwest, northeast, farLeft, farRight, nearLeft, nearRight);
    }
    /**
     * Converts to string
     * @return {string}
     */
    /**
       * Converts to string
       * @return {string}
       */
    VisibleRegion.prototype.toString = /**
       * Converts to string
       * @return {string}
       */
    function () {
        return;
    };
    /**
     * Returns a string of the form "lat_sw,lng_sw,lat_ne,lng_ne" for this bounds, where "sw" corresponds to the southwest corner of the bounding box, while "ne" corresponds to the northeast corner of that box.
     * @param precision {number}
     * @return {string}
     */
    /**
       * Returns a string of the form "lat_sw,lng_sw,lat_ne,lng_ne" for this bounds, where "sw" corresponds to the southwest corner of the bounding box, while "ne" corresponds to the northeast corner of that box.
       * @param precision {number}
       * @return {string}
       */
    VisibleRegion.prototype.toUrlValue = /**
       * Returns a string of the form "lat_sw,lng_sw,lat_ne,lng_ne" for this bounds, where "sw" corresponds to the southwest corner of the bounding box, while "ne" corresponds to the northeast corner of that box.
       * @param precision {number}
       * @return {string}
       */
    function (precision) {
        return;
    };
    /**
     * Returns true if the given lat/lng is in this bounds.
     * @param LatLng {ILatLng}
     */
    /**
       * Returns true if the given lat/lng is in this bounds.
       * @param LatLng {ILatLng}
       */
    VisibleRegion.prototype.contains = /**
       * Returns true if the given lat/lng is in this bounds.
       * @param LatLng {ILatLng}
       */
    function (LatLng) {
        return;
    };
    __decorate([
        InstanceProperty,
        __metadata("design:type", Object)
    ], VisibleRegion.prototype, "northeast", void 0);
    __decorate([
        InstanceProperty,
        __metadata("design:type", Object)
    ], VisibleRegion.prototype, "southwest", void 0);
    __decorate([
        InstanceProperty,
        __metadata("design:type", Object)
    ], VisibleRegion.prototype, "farLeft", void 0);
    __decorate([
        InstanceProperty,
        __metadata("design:type", Object)
    ], VisibleRegion.prototype, "farRight", void 0);
    __decorate([
        InstanceProperty,
        __metadata("design:type", Object)
    ], VisibleRegion.prototype, "nearLeft", void 0);
    __decorate([
        InstanceProperty,
        __metadata("design:type", Object)
    ], VisibleRegion.prototype, "nearRight", void 0);
    __decorate([
        InstanceProperty,
        __metadata("design:type", String)
    ], VisibleRegion.prototype, "type", void 0);
    __decorate([
        CordovaInstance({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", String)
    ], VisibleRegion.prototype, "toString", null);
    __decorate([
        CordovaInstance({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", String)
    ], VisibleRegion.prototype, "toUrlValue", null);
    __decorate([
        CordovaInstance({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Boolean)
    ], VisibleRegion.prototype, "contains", null);
    return VisibleRegion;
}());
export { VisibleRegion };
/**
 * @hidden
 */
export var StreetViewSource = {
    DEFAULT: 'DEFAULT',
    OUTDOOR: 'OUTDOOR'
};
/**
 * @hidden
 * You can listen to these events where appropriate
 */
export var GoogleMapsEvent = {
    MAP_READY: 'map_ready',
    MAP_CLICK: 'map_click',
    MAP_LONG_CLICK: 'map_long_click',
    POI_CLICK: 'poi_click',
    MY_LOCATION_CLICK: 'my_location_click',
    MY_LOCATION_BUTTON_CLICK: 'my_location_button_click',
    INDOOR_BUILDING_FOCUSED: 'indoor_building_focused',
    INDOOR_LEVEL_ACTIVATED: 'indoor_level_activated',
    CAMERA_MOVE_START: 'camera_move_start',
    CAMERA_MOVE: 'camera_move',
    CAMERA_MOVE_END: 'camera_move_end',
    OVERLAY_CLICK: 'overlay_click',
    POLYGON_CLICK: 'polygon_click',
    POLYLINE_CLICK: 'polyline_click',
    CIRCLE_CLICK: 'circle_click',
    GROUND_OVERLAY_CLICK: 'groundoverlay_click',
    INFO_CLICK: 'info_click',
    INFO_LONG_CLICK: 'info_long_click',
    INFO_CLOSE: 'info_close',
    INFO_OPEN: 'info_open',
    MARKER_CLICK: 'marker_click',
    MARKER_DRAG: 'marker_drag',
    MARKER_DRAG_START: 'marker_drag_start',
    MARKER_DRAG_END: 'marker_drag_end',
    MAP_DRAG: 'map_drag',
    MAP_DRAG_START: 'map_drag_start',
    MAP_DRAG_END: 'map_drag_end',
    KML_CLICK: 'kml_click',
    PANORAMA_READY: 'panorama_ready',
    PANORAMA_CAMERA_CHANGE: 'panorama_camera_change',
    PANORAMA_LOCATION_CHANGE: 'panorama_location_change',
    PANORAMA_CLICK: 'panorama_click'
};
/**
 * @hidden
 */
export var GoogleMapsAnimation = {
    BOUNCE: 'BOUNCE',
    DROP: 'DROP'
};
/**
 * @hidden
 */
export var GoogleMapsMapTypeId = {
    NORMAL: 'MAP_TYPE_NORMAL',
    ROADMAP: 'MAP_TYPE_NORMAL',
    SATELLITE: 'MAP_TYPE_SATELLITE',
    HYBRID: 'MAP_TYPE_HYBRID',
    TERRAIN: 'MAP_TYPE_TERRAIN',
    NONE: 'MAP_TYPE_NONE'
};
/**
 * @name Google Maps
 * @description
 * This plugin uses the native Google Maps SDK
 * Note: As of Ionic native 4.0, this using the 2.0 version of the google maps plugin. Please make sure your plugin is updated
 * @usage
 * ```typescript
 * import {
 *  GoogleMaps,
 *  GoogleMap,
 *  GoogleMapsEvent,
 *  GoogleMapOptions,
 *  CameraPosition,
 *  MarkerOptions,
 *  Marker
 * } from '@ionic-native/google-maps';
 * import { Component } from "@angular/core/";
 *
 * @Component({
 *   selector: 'page-home',
 *   templateUrl: 'home.html'
 * })
 * export class HomePage {
 *   map: GoogleMap;
 *   constructor() { }
 *
 *   ionViewDidLoad() {
 *    this.loadMap();
 *   }
 *
 *  loadMap() {
 *
 *     let mapOptions: GoogleMapOptions = {
 *       camera: {
 *         target: {
 *           lat: 43.0741904,
 *           lng: -89.3809802
 *         },
 *         zoom: 18,
 *         tilt: 30
 *       }
 *     }
 *
 *     this.map = GoogleMaps.create('map_canvas', mapOptions);
 *
 *     let marker: Marker = this.map.addMarkerSync({
 *       title: 'Ionic',
 *       icon: 'blue',
 *       animation: 'DROP',
 *       position: {
 *         lat: 43.0741904,
 *         lng: -89.3809802
 *       }
 *     });
 *
 *     marker.on(GoogleMapsEvent.MARKER_CLICK)
 *       .subscribe(() => {
 *         alert('clicked');
 *       });
 *     });
 *   }
 * }
 *
 * ```
 * @classes
 * GoogleMaps
 * GoogleMap
 * StreetView
 * Circle
 * Encoding
 * Environment
 * Geocoder
 * GroundOverlay
 * HtmlInfoWindow
 * Geocoder
 * LatLng
 * LatLngBounds
 * Marker
 * MarkerCluster
 * Polygon
 * Polyline
 * Spherical
 * KmlOverlay
 * Poly
 * TileOverlay
 * BaseClass
 * BaseArrayClass
 * @interfaces
 * GoogleMapOptions
 * CameraPosition
 * CircleOptions
 * GeocoderRequest
 * GeocoderResult
 * GroundOverlayOptions
 * ILatLng
 * MarkerIcon
 * MarkerOptions
 * MarkerClusterIcon
 * MarkerClusterOptions
 * MyLocation
 * MyLocationOptions
 * PolygonOptions
 * PolylineOptions
 * TileOverlayOptions
 * KmlOverlayOptions
 * VisibleRegion
 */
var GoogleMaps = (function (_super) {
    __extends(GoogleMaps, _super);
    function GoogleMaps() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GoogleMaps_1 = GoogleMaps;
    /**
     * Creates a new GoogleMap instance
     * @param element {string | HTMLElement} Element ID or reference to attach the map to
     * @param options {GoogleMapOptions} [options] Options
     * @return {GoogleMap}
     */
    /**
       * Creates a new GoogleMap instance
       * @param element {string | HTMLElement} Element ID or reference to attach the map to
       * @param options {GoogleMapOptions} [options] Options
       * @return {GoogleMap}
       */
    GoogleMaps.create = /**
       * Creates a new GoogleMap instance
       * @param element {string | HTMLElement} Element ID or reference to attach the map to
       * @param options {GoogleMapOptions} [options] Options
       * @return {GoogleMap}
       */
    function (element, options) {
        if (checkAvailability(GoogleMaps_1.getPluginRef(), null, GoogleMaps_1.getPluginName()) === true) {
            if (element instanceof HTMLElement) {
                if (!element.offsetParent) {
                    throw new Error('Element must be under <body>');
                }
                if (element.getAttribute('__pluginMapId')) {
                    throw new Error(element.tagName + "[__pluginMapId='" + element.getAttribute('__pluginMapId') + "'] has already map.");
                }
            }
            else if (typeof element === 'object') {
                options = element;
                element = null;
            }
            var googleMap = new GoogleMap(element, options);
            googleMap.set('_overlays', {});
            return googleMap;
        }
        else {
            var errorMessage = [
                '[GoogleMaps]'
            ];
            if (!window.cordova) {
                errorMessage.push('You need to execute "$> ionic cordova run browser".');
                errorMessage.push('"$> ionic serve" is not supported.');
            }
            else {
                errorMessage.push('cordova-plugin-googlemaps is not installed or not ready yet.');
            }
            if (element instanceof HTMLElement) {
                displayErrorMessage(element, errorMessage.join('<br />'));
            }
            else if (typeof element === 'string') {
                var targets = Array.from(document.querySelectorAll('#' + element));
                if (targets.length > 0) {
                    targets = targets.filter(function (target) {
                        return !target.hasAttribute('__pluginmapid');
                    });
                }
                if (targets.length === 1 && targets[0]) {
                    displayErrorMessage(targets[0], errorMessage.join('<br />'));
                }
            }
            throw new Error(errorMessage.join(''));
        }
    };
    /**
     * @deprecation keep this for backward compatibility.
     * @hidden
     */
    /**
       * @deprecation keep this for backward compatibility.
       * @hidden
       */
    GoogleMaps.prototype.create = /**
       * @deprecation keep this for backward compatibility.
       * @hidden
       */
    function (element, options) {
        console.error('GoogleMaps', '[deprecated] Please use GoogleMaps.create()');
        return GoogleMaps_1.create(element, options);
    };
    /**
     * Creates a new StreetView instance
     * @param element {string | HTMLElement} Element ID or reference to attach the map to
     * @param options {StreetViewOptions} [options] Options
     * @return {StreetViewPanorama}
     */
    /**
       * Creates a new StreetView instance
       * @param element {string | HTMLElement} Element ID or reference to attach the map to
       * @param options {StreetViewOptions} [options] Options
       * @return {StreetViewPanorama}
       */
    GoogleMaps.createPanorama = /**
       * Creates a new StreetView instance
       * @param element {string | HTMLElement} Element ID or reference to attach the map to
       * @param options {StreetViewOptions} [options] Options
       * @return {StreetViewPanorama}
       */
    function (element, options) {
        if (checkAvailability(GoogleMaps_1.getPluginRef(), null, GoogleMaps_1.getPluginName()) === true) {
            if (element instanceof HTMLElement) {
                if (!element.offsetParent) {
                    throw new Error('Element must be under <body>');
                }
                if (element.getAttribute('__pluginMapId')) {
                    throw new Error(element.tagName + "[__pluginMapId='" + element.getAttribute('__pluginMapId') + "'] has already map.");
                }
            }
            return new StreetViewPanorama(element, options);
        }
        else {
            var errorMessage = [
                '[GoogleMaps]'
            ];
            if (!window.cordova) {
                errorMessage.push('You need to execute "$> ionic cordova run browser".');
                errorMessage.push('"$> ionic serve" is not supported.');
            }
            else {
                errorMessage.push('cordova-plugin-googlemaps is not installed or not ready yet.');
            }
            if (element instanceof HTMLElement) {
                displayErrorMessage(element, errorMessage.join('<br />'));
            }
            else if (typeof element === 'string') {
                var targets = Array.from(document.querySelectorAll('#' + element));
                if (targets.length > 0) {
                    targets = targets.filter(function (target) {
                        return !target.hasAttribute('__pluginmapid');
                    });
                }
                if (targets.length === 1 && targets[0]) {
                    displayErrorMessage(targets[0], errorMessage.join('<br />'));
                }
            }
            throw new Error(errorMessage.join(''));
        }
    };
    GoogleMaps.decorators = [
        { type: Injectable },
    ];
    /**
     * @name Google Maps
     * @description
     * This plugin uses the native Google Maps SDK
     * Note: As of Ionic native 4.0, this using the 2.0 version of the google maps plugin. Please make sure your plugin is updated
     * @usage
     * ```typescript
     * import {
     *  GoogleMaps,
     *  GoogleMap,
     *  GoogleMapsEvent,
     *  GoogleMapOptions,
     *  CameraPosition,
     *  MarkerOptions,
     *  Marker
     * } from '@ionic-native/google-maps';
     * import { Component } from "@angular/core/";
     *
     * @Component({
     *   selector: 'page-home',
     *   templateUrl: 'home.html'
     * })
     * export class HomePage {
     *   map: GoogleMap;
     *   constructor() { }
     *
     *   ionViewDidLoad() {
     *    this.loadMap();
     *   }
     *
     *  loadMap() {
     *
     *     let mapOptions: GoogleMapOptions = {
     *       camera: {
     *         target: {
     *           lat: 43.0741904,
     *           lng: -89.3809802
     *         },
     *         zoom: 18,
     *         tilt: 30
     *       }
     *     }
     *
     *     this.map = GoogleMaps.create('map_canvas', mapOptions);
     *
     *     let marker: Marker = this.map.addMarkerSync({
     *       title: 'Ionic',
     *       icon: 'blue',
     *       animation: 'DROP',
     *       position: {
     *         lat: 43.0741904,
     *         lng: -89.3809802
     *       }
     *     });
     *
     *     marker.on(GoogleMapsEvent.MARKER_CLICK)
     *       .subscribe(() => {
     *         alert('clicked');
     *       });
     *     });
     *   }
     * }
     *
     * ```
     * @classes
     * GoogleMaps
     * GoogleMap
     * StreetView
     * Circle
     * Encoding
     * Environment
     * Geocoder
     * GroundOverlay
     * HtmlInfoWindow
     * Geocoder
     * LatLng
     * LatLngBounds
     * Marker
     * MarkerCluster
     * Polygon
     * Polyline
     * Spherical
     * KmlOverlay
     * Poly
     * TileOverlay
     * BaseClass
     * BaseArrayClass
     * @interfaces
     * GoogleMapOptions
     * CameraPosition
     * CircleOptions
     * GeocoderRequest
     * GeocoderResult
     * GroundOverlayOptions
     * ILatLng
     * MarkerIcon
     * MarkerOptions
     * MarkerClusterIcon
     * MarkerClusterOptions
     * MyLocation
     * MyLocationOptions
     * PolygonOptions
     * PolylineOptions
     * TileOverlayOptions
     * KmlOverlayOptions
     * VisibleRegion
     */
    GoogleMaps = GoogleMaps_1 = __decorate([
        Plugin({
            pluginName: 'GoogleMaps',
            pluginRef: 'plugin.google.maps',
            plugin: 'cordova-plugin-googlemaps',
            repo: 'https://github.com/mapsplugin/cordova-plugin-googlemaps',
            document: 'https://ionicframework.com/docs/native/google-maps/',
            install: 'ionic cordova plugin add cordova-plugin-googlemaps --variable API_KEY_FOR_ANDROID="YOUR_ANDROID_API_KEY_IS_HERE" --variable API_KEY_FOR_IOS="YOUR_IOS_API_KEY_IS_HERE"',
            installVariables: ['API_KEY_FOR_ANDROID', 'API_KEY_FOR_IOS'],
            platforms: ['Android', 'iOS', 'Browser']
        })
    ], GoogleMaps);
    return GoogleMaps;
    var GoogleMaps_1;
}(IonicNativePlugin));
export { GoogleMaps };
var displayErrorMessage = function (element, message) {
    var errorDiv = document.createElement('div');
    errorDiv.innerHTML = message;
    errorDiv.style.color = 'red';
    errorDiv.style.position = 'absolute';
    errorDiv.style.width = '80%';
    errorDiv.style.height = '50%';
    errorDiv.style.top = '0px';
    errorDiv.style.bottom = '0px';
    errorDiv.style.right = '0px';
    errorDiv.style.left = '0px';
    errorDiv.style.padding = '0px';
    errorDiv.style.margin = 'auto';
    element.style.position = 'relative';
    element.style.backgroundColor = '#ccc7';
    element.appendChild(errorDiv);
};
var ɵ0 = displayErrorMessage;
var normalizeArgumentsOfEventListener = function (_objectInstance, args) {
    if (args[args.length - 1] instanceof GoogleMaps.getPlugin().BaseClass) {
        if (args[args.length - 1].type === 'Map' || args[args.length - 1].type === 'StreetViewPanorama') {
            args[args.length - 1] = _this;
        }
        else if (_objectInstance.__pgmId.indexOf('markercluster_') !== -1) {
            var _overlays = _objectInstance.getMap().get('_overlays') || {};
            var overlay = _overlays[args[args.length - 1].getId()];
            if (!overlay) {
                var markerJS = args[args.length - 1];
                var markerId_1 = markerJS.getId();
                var markerCluster = _objectInstance;
                overlay = new Marker(markerCluster.getMap(), markerJS);
                _objectInstance.getMap().get('_overlays')[markerId_1] = overlay;
                markerJS.one(markerJS.getId() + '_remove', function () {
                    _objectInstance.getMap().get('_overlays')[markerId_1] = null;
                    delete _objectInstance.getMap().get('_overlays')[markerId_1];
                });
            }
            args[args.length - 1] = overlay;
        }
        else {
            args[args.length - 1] = _objectInstance.getMap().get('_overlays')[args[args.length - 1].getId()];
        }
    }
    return args;
};
var ɵ1 = normalizeArgumentsOfEventListener;
/**
 * @hidden
 * https://github.com/mapsplugin/cordova-plugin-googlemaps-doc/blob/master/v2.0.0/class/BaseClass/README.md
 */
var BaseClass = (function () {
    function BaseClass(objInstance) {
        if (checkAvailability(GoogleMaps.getPluginRef(), null, GoogleMaps.getPluginName()) === true) {
            if (!objInstance) {
                objInstance = new (GoogleMaps.getPlugin().BaseClass)();
            }
            this._objectInstance = objInstance;
        }
        else {
            throw new Error('cordova-plugin-googlemaps is not ready. Please use platform.ready() before executing any methods.');
        }
    }
    /**
     * Adds an event listener.
     * @param eventName {string} event name you want to observe.
     * @return {Observable<any>}
     */
    /**
       * Adds an event listener.
       * @param eventName {string} event name you want to observe.
       * @return {Observable<any>}
       */
    BaseClass.prototype.addEventListener = /**
       * Adds an event listener.
       * @param eventName {string} event name you want to observe.
       * @return {Observable<any>}
       */
    function (eventName) {
        var _this = this;
        return new Observable(function (observer) {
            _this._objectInstance.addEventListener(eventName, function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                var newArgs = normalizeArgumentsOfEventListener.call(_this, _this._objectInstance, args);
                observer.next(newArgs);
            });
        });
    };
    /**
     * Attaches the handler for the event that is thrown by the target, where the minimum interval between events (in milliseconds) is specified as a parameter.
     * @param eventName {string} event name you want to observe.
     * @param throttleInterval {number} throttle interval in milliseconds
     * @return {Observable<any>}
     */
    // addThrottledEventListener(eventName: string, throttleInterval: number): Observable<any> {
    //   return new Observable((observer) => {
    //     this._objectInstance.addThrottledEventListener(eventName, (...args: any[]) => {
    //       const newArgs = normalizeArgumentsOfEventListener.call(this, this._objectInstance, args);
    //       observer.next(newArgs);
    //     });
    //   });
    // }
    /**
     * Adds an event listener that works once.
     * @param eventName {string} event name you want to observe.
     * @return {Promise<any>}
     */
    /**
       * Attaches the handler for the event that is thrown by the target, where the minimum interval between events (in milliseconds) is specified as a parameter.
       * @param eventName {string} event name you want to observe.
       * @param throttleInterval {number} throttle interval in milliseconds
       * @return {Observable<any>}
       */
    // addThrottledEventListener(eventName: string, throttleInterval: number): Observable<any> {
    //   return new Observable((observer) => {
    //     this._objectInstance.addThrottledEventListener(eventName, (...args: any[]) => {
    //       const newArgs = normalizeArgumentsOfEventListener.call(this, this._objectInstance, args);
    //       observer.next(newArgs);
    //     });
    //   });
    // }
    /**
       * Adds an event listener that works once.
       * @param eventName {string} event name you want to observe.
       * @return {Promise<any>}
       */
    BaseClass.prototype.addEventListenerOnce = /**
       * Attaches the handler for the event that is thrown by the target, where the minimum interval between events (in milliseconds) is specified as a parameter.
       * @param eventName {string} event name you want to observe.
       * @param throttleInterval {number} throttle interval in milliseconds
       * @return {Observable<any>}
       */
    // addThrottledEventListener(eventName: string, throttleInterval: number): Observable<any> {
    //   return new Observable((observer) => {
    //     this._objectInstance.addThrottledEventListener(eventName, (...args: any[]) => {
    //       const newArgs = normalizeArgumentsOfEventListener.call(this, this._objectInstance, args);
    //       observer.next(newArgs);
    //     });
    //   });
    // }
    /**
       * Adds an event listener that works once.
       * @param eventName {string} event name you want to observe.
       * @return {Promise<any>}
       */
    function (eventName) {
        var _this = this;
        return new Promise(function (resolve) {
            _this._objectInstance.one(eventName, function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                var newArgs = normalizeArgumentsOfEventListener.call(_this, _this._objectInstance, args);
                resolve(newArgs);
            });
        });
    };
    /**
     * @deprecated
     * Adds an event listener that works once.
     * @param eventName {string} event name you want to observe.
     * @return {Promise<any>}
     */
    /**
       * @deprecated
       * Adds an event listener that works once.
       * @param eventName {string} event name you want to observe.
       * @return {Promise<any>}
       */
    BaseClass.prototype.addListenerOnce = /**
       * @deprecated
       * Adds an event listener that works once.
       * @param eventName {string} event name you want to observe.
       * @return {Promise<any>}
       */
    function (eventName) {
        console.warn('[GoogleMaps] "addListenerOnce" is deprecated. Please use "addEventListenerOnce".');
        return this.addEventListenerOnce(eventName);
    };
    /**
     * Gets a value
     * @param key {any}
     */
    /**
       * Gets a value
       * @param key {any}
       */
    BaseClass.prototype.get = /**
       * Gets a value
       * @param key {any}
       */
    function (key) {
        return;
    };
    /**
     * Sets a value
     * @param key {string} The key name for the value. `(key)_changed` will be fired when you set value through this method.
     * @param value {any}
     * @param noNotify {boolean} [options] True if you want to prevent firing the `(key)_changed` event.
     */
    /**
       * Sets a value
       * @param key {string} The key name for the value. `(key)_changed` will be fired when you set value through this method.
       * @param value {any}
       * @param noNotify {boolean} [options] True if you want to prevent firing the `(key)_changed` event.
       */
    BaseClass.prototype.set = /**
       * Sets a value
       * @param key {string} The key name for the value. `(key)_changed` will be fired when you set value through this method.
       * @param value {any}
       * @param noNotify {boolean} [options] True if you want to prevent firing the `(key)_changed` event.
       */
    function (key, value, noNotify) {
    };
    /**
     * Bind a key to another object
     * @param key {string} The property name you want to observe.
     * @param target {any} The target object you want to observe.
     * @param targetKey? {string} [options]  The property name you want to observe. If you omit this, the `key` argument is used.
     * @param noNotify? {boolean} [options] True if you want to prevent `(key)_changed` event when you bind first time, because the internal status is changed from `undefined` to something.
     */
    /**
       * Bind a key to another object
       * @param key {string} The property name you want to observe.
       * @param target {any} The target object you want to observe.
       * @param targetKey? {string} [options]  The property name you want to observe. If you omit this, the `key` argument is used.
       * @param noNotify? {boolean} [options] True if you want to prevent `(key)_changed` event when you bind first time, because the internal status is changed from `undefined` to something.
       */
    BaseClass.prototype.bindTo = /**
       * Bind a key to another object
       * @param key {string} The property name you want to observe.
       * @param target {any} The target object you want to observe.
       * @param targetKey? {string} [options]  The property name you want to observe. If you omit this, the `key` argument is used.
       * @param noNotify? {boolean} [options] True if you want to prevent `(key)_changed` event when you bind first time, because the internal status is changed from `undefined` to something.
       */
    function (key, target, targetKey, noNotify) {
    };
    /**
     * Alias of `addEventListener`
     * @param key {string} The property name you want to observe.
     * @return {Observable<any>}
     */
    /**
       * Alias of `addEventListener`
       * @param key {string} The property name you want to observe.
       * @return {Observable<any>}
       */
    BaseClass.prototype.on = /**
       * Alias of `addEventListener`
       * @param key {string} The property name you want to observe.
       * @return {Observable<any>}
       */
    function (eventName) {
        var _this = this;
        return new Observable(function (observer) {
            _this._objectInstance.on(eventName, function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                var newArgs = normalizeArgumentsOfEventListener.call(_this, _this._objectInstance, args);
                observer.next(newArgs);
            });
        });
    };
    /**
     * Alias of `addThrottledEventListener`
     * @param key {string} The property name you want to observe.
     * @return {Observable<any>}
     */
    // @InstanceCheck({ observable: true })
    // onThrottled(eventName: string): Observable<any> {
    //   return new Observable((observer) => {
    //     this._objectInstance.onThrottled(eventName, (...args: any[]) => {
    //       const newArgs = normalizeArgumentsOfEventListener.call(this, this._objectInstance, args);
    //       observer.next(newArgs);
    //     });
    //   });
    // }
    /**
     * Alias of `addEventListenerOnce`
     * @param key {string} The property name you want to observe.
     * @return {Promise<any>}
     */
    /**
       * Alias of `addThrottledEventListener`
       * @param key {string} The property name you want to observe.
       * @return {Observable<any>}
       */
    // @InstanceCheck({ observable: true })
    // onThrottled(eventName: string): Observable<any> {
    //   return new Observable((observer) => {
    //     this._objectInstance.onThrottled(eventName, (...args: any[]) => {
    //       const newArgs = normalizeArgumentsOfEventListener.call(this, this._objectInstance, args);
    //       observer.next(newArgs);
    //     });
    //   });
    // }
    /**
       * Alias of `addEventListenerOnce`
       * @param key {string} The property name you want to observe.
       * @return {Promise<any>}
       */
    BaseClass.prototype.one = /**
       * Alias of `addThrottledEventListener`
       * @param key {string} The property name you want to observe.
       * @return {Observable<any>}
       */
    // @InstanceCheck({ observable: true })
    // onThrottled(eventName: string): Observable<any> {
    //   return new Observable((observer) => {
    //     this._objectInstance.onThrottled(eventName, (...args: any[]) => {
    //       const newArgs = normalizeArgumentsOfEventListener.call(this, this._objectInstance, args);
    //       observer.next(newArgs);
    //     });
    //   });
    // }
    /**
       * Alias of `addEventListenerOnce`
       * @param key {string} The property name you want to observe.
       * @return {Promise<any>}
       */
    function (eventName) {
        var _this = this;
        return new Promise(function (resolve) {
            _this._objectInstance.one(eventName, function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                var newArgs = normalizeArgumentsOfEventListener.call(_this, _this._objectInstance, args);
                resolve(newArgs);
            });
        });
    };
    /**
     * Return true if this object has event listener for event name
     * @param eventName {string} Event name
     * @return {boolean}
     */
    /**
       * Return true if this object has event listener for event name
       * @param eventName {string} Event name
       * @return {boolean}
       */
    BaseClass.prototype.hasEventListener = /**
       * Return true if this object has event listener for event name
       * @param eventName {string} Event name
       * @return {boolean}
       */
    function () {
        return;
    };
    /**
     * Clears all stored values
     */
    /**
       * Clears all stored values
       */
    BaseClass.prototype.empty = /**
       * Clears all stored values
       */
    function () {
    };
    /**
     * Dispatch event.
     * @param eventName {string} Event name
     * @param parameters {any} [options] The data you want to pass to event listerners.
     */
    /**
       * Dispatch event.
       * @param eventName {string} Event name
       * @param parameters {any} [options] The data you want to pass to event listerners.
       */
    BaseClass.prototype.trigger = /**
       * Dispatch event.
       * @param eventName {string} Event name
       * @param parameters {any} [options] The data you want to pass to event listerners.
       */
    function (eventName) {
        var parameters = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            parameters[_i - 1] = arguments[_i];
        }
    };
    /**
     * Executes off() and empty()
     */
    /**
       * Executes off() and empty()
       */
    BaseClass.prototype.destroy = /**
       * Executes off() and empty()
       */
    function () {
        if (this._objectInstance.type === 'Map') {
            var map = this._objectInstance.getMap();
            if (map) {
                delete this._objectInstance.getMap().get('_overlays')[this._objectInstance.getId()];
            }
        }
        this._objectInstance.remove();
    };
    /**
     * Remove event listener(s)
     * The `removeEventListener()` has three usages:
     *  - removeEventListener("eventName", listenerFunction);
     *     This removes one particular event listener
     *  - removeEventListener("eventName");
     *     This removes the event listeners that added for the event name.
     *  - removeEventListener();
     *     This removes all listeners.
     *
     * @param eventName {string} [options] Event name
     * @param listener {Function} [options] Event listener
     */
    /**
       * Remove event listener(s)
       * The `removeEventListener()` has three usages:
       *  - removeEventListener("eventName", listenerFunction);
       *     This removes one particular event listener
       *  - removeEventListener("eventName");
       *     This removes the event listeners that added for the event name.
       *  - removeEventListener();
       *     This removes all listeners.
       *
       * @param eventName {string} [options] Event name
       * @param listener {Function} [options] Event listener
       */
    BaseClass.prototype.removeEventListener = /**
       * Remove event listener(s)
       * The `removeEventListener()` has three usages:
       *  - removeEventListener("eventName", listenerFunction);
       *     This removes one particular event listener
       *  - removeEventListener("eventName");
       *     This removes the event listeners that added for the event name.
       *  - removeEventListener();
       *     This removes all listeners.
       *
       * @param eventName {string} [options] Event name
       * @param listener {Function} [options] Event listener
       */
    function (eventName, listener) { };
    /**
     * Alias of `removeEventListener`
     *
     * @param eventName {string} [options] Event name
     * @param listener {Function} [options] Event listener
     */
    /**
       * Alias of `removeEventListener`
       *
       * @param eventName {string} [options] Event name
       * @param listener {Function} [options] Event listener
       */
    BaseClass.prototype.off = /**
       * Alias of `removeEventListener`
       *
       * @param eventName {string} [options] Event name
       * @param listener {Function} [options] Event listener
       */
    function (eventName, listener) { };
    __decorate([
        InstanceCheck({ observable: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", Observable)
    ], BaseClass.prototype, "addEventListener", null);
    __decorate([
        InstanceCheck(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", Promise)
    ], BaseClass.prototype, "addEventListenerOnce", null);
    __decorate([
        InstanceCheck(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", Promise)
    ], BaseClass.prototype, "addListenerOnce", null);
    __decorate([
        CordovaInstance({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", Object)
    ], BaseClass.prototype, "get", null);
    __decorate([
        CordovaInstance({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, Object, Boolean]),
        __metadata("design:returntype", void 0)
    ], BaseClass.prototype, "set", null);
    __decorate([
        CordovaInstance({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, Object, String, Boolean]),
        __metadata("design:returntype", void 0)
    ], BaseClass.prototype, "bindTo", null);
    __decorate([
        InstanceCheck({ observable: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", Observable)
    ], BaseClass.prototype, "on", null);
    __decorate([
        InstanceCheck(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", Promise)
    ], BaseClass.prototype, "one", null);
    __decorate([
        CordovaInstance({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Boolean)
    ], BaseClass.prototype, "hasEventListener", null);
    __decorate([
        CordovaInstance({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], BaseClass.prototype, "empty", null);
    __decorate([
        CordovaInstance({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, Object]),
        __metadata("design:returntype", void 0)
    ], BaseClass.prototype, "trigger", null);
    __decorate([
        CordovaInstance({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], BaseClass.prototype, "destroy", null);
    __decorate([
        CordovaInstance({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, Function]),
        __metadata("design:returntype", void 0)
    ], BaseClass.prototype, "removeEventListener", null);
    __decorate([
        CordovaInstance({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, Function]),
        __metadata("design:returntype", void 0)
    ], BaseClass.prototype, "off", null);
    /**
     * @hidden
     * https://github.com/mapsplugin/cordova-plugin-googlemaps-doc/blob/master/v2.0.0/class/BaseClass/README.md
     */
    BaseClass = __decorate([
        Plugin({
            plugin: 'cordova-plugin-googlemaps',
            pluginName: 'GoogleMaps',
            pluginRef: 'plugin.google.maps.BaseClass',
            repo: ''
        }),
        __metadata("design:paramtypes", [Object])
    ], BaseClass);
    return BaseClass;
}());
export { BaseClass };
/**
 * @hidden
 * https://github.com/mapsplugin/cordova-plugin-googlemaps-doc/blob/master/v2.0.0/class/BaseArrayClass/README.md
 */
var BaseArrayClass = (function (_super) {
    __extends(BaseArrayClass, _super);
    function BaseArrayClass(initialData) {
        var _this = this;
        if (initialData instanceof GoogleMaps.getPlugin().BaseArrayClass) {
            _this = _super.call(this, initialData) || this;
        }
        else if (Array.isArray(initialData)) {
            _this = _super.call(this, new (GoogleMaps.getPlugin().BaseArrayClass)(initialData)) || this;
        }
        else {
            _this = _super.call(this, new (GoogleMaps.getPlugin().BaseArrayClass)([])) || this;
        }
        return _this;
    }
    /**
     * Removes all elements from the array.
     * @param noNotify? {boolean} [options] Set true to prevent remove_at events.
     */
    /**
       * Removes all elements from the array.
       * @param noNotify? {boolean} [options] Set true to prevent remove_at events.
       */
    BaseArrayClass.prototype.empty = /**
       * Removes all elements from the array.
       * @param noNotify? {boolean} [options] Set true to prevent remove_at events.
       */
    function (noNotify) {
    };
    /**
     * Iterate over each element, calling the provided callback.
     * @param fn {Function}
     */
    /**
       * Iterate over each element, calling the provided callback.
       * @param fn {Function}
       */
    BaseArrayClass.prototype.forEach = /**
       * Iterate over each element, calling the provided callback.
       * @param fn {Function}
       */
    function (fn) {
    };
    /**
     * Iterate over each element, calling the provided callback.
     * @param fn {Function}
     * @return {Promise<void>}
     */
    /**
       * Iterate over each element, calling the provided callback.
       * @param fn {Function}
       * @return {Promise<void>}
       */
    BaseArrayClass.prototype.forEachAsync = /**
       * Iterate over each element, calling the provided callback.
       * @param fn {Function}
       * @return {Promise<void>}
       */
    function (fn) {
        var _this = this;
        return new Promise(function (resolve) {
            _this._objectInstance.forEach(fn, resolve);
        });
    };
    /**
     * Iterate over each element, then Returns a new value.
     * Then you can get the results of each callback.
     * @param fn {Function}
     * @return {Object[]} returns a new array with the results
     */
    /**
       * Iterate over each element, then Returns a new value.
       * Then you can get the results of each callback.
       * @param fn {Function}
       * @return {Object[]} returns a new array with the results
       */
    BaseArrayClass.prototype.map = /**
       * Iterate over each element, then Returns a new value.
       * Then you can get the results of each callback.
       * @param fn {Function}
       * @return {Object[]} returns a new array with the results
       */
    function (fn) {
        return;
    };
    /**
     * Iterate over each element, calling the provided callback.
     * Then you can get the results of each callback.
     * @param fn {Function}
     * @param callback {Function}
     * @return {Promise<any>} returns a new array with the results
     */
    /**
       * Iterate over each element, calling the provided callback.
       * Then you can get the results of each callback.
       * @param fn {Function}
       * @param callback {Function}
       * @return {Promise<any>} returns a new array with the results
       */
    BaseArrayClass.prototype.mapAsync = /**
       * Iterate over each element, calling the provided callback.
       * Then you can get the results of each callback.
       * @param fn {Function}
       * @param callback {Function}
       * @return {Promise<any>} returns a new array with the results
       */
    function (fn) {
        var _this = this;
        return new Promise(function (resolve) {
            _this._objectInstance.map(fn, resolve);
        });
    };
    /**
     * Same as `mapAsync`, but keep the execution order
     * @param fn {Function}
     * @param callback {Function}
     * @return {Promise<any>} returns a new array with the results
     */
    /**
       * Same as `mapAsync`, but keep the execution order
       * @param fn {Function}
       * @param callback {Function}
       * @return {Promise<any>} returns a new array with the results
       */
    BaseArrayClass.prototype.mapSeries = /**
       * Same as `mapAsync`, but keep the execution order
       * @param fn {Function}
       * @param callback {Function}
       * @return {Promise<any>} returns a new array with the results
       */
    function (fn) {
        var _this = this;
        return new Promise(function (resolve) {
            _this._objectInstance.mapSeries(fn, resolve);
        });
    };
    /**
     * The filter() method creates a new array with all elements that pass the test implemented by the provided function.
     * @param fn {Function}
     * @return {T[]} returns a new filtered array
     */
    /**
       * The filter() method creates a new array with all elements that pass the test implemented by the provided function.
       * @param fn {Function}
       * @return {T[]} returns a new filtered array
       */
    BaseArrayClass.prototype.filter = /**
       * The filter() method creates a new array with all elements that pass the test implemented by the provided function.
       * @param fn {Function}
       * @return {T[]} returns a new filtered array
       */
    function (fn) {
        return;
    };
    /**
     * The filterAsync() method creates a new array with all elements that pass the test implemented by the provided function.
     * @param fn {Function}
     * @param callback {Function}
     * @return {Promise<T[]>} returns a new filtered array
     */
    /**
       * The filterAsync() method creates a new array with all elements that pass the test implemented by the provided function.
       * @param fn {Function}
       * @param callback {Function}
       * @return {Promise<T[]>} returns a new filtered array
       */
    BaseArrayClass.prototype.filterAsync = /**
       * The filterAsync() method creates a new array with all elements that pass the test implemented by the provided function.
       * @param fn {Function}
       * @param callback {Function}
       * @return {Promise<T[]>} returns a new filtered array
       */
    function (fn) {
        var _this = this;
        return new Promise(function (resolve) {
            _this._objectInstance.filter(fn, resolve);
        });
    };
    /**
     * Returns a reference to the underlying Array.
     * @return {Object[]}
     */
    /**
       * Returns a reference to the underlying Array.
       * @return {Object[]}
       */
    BaseArrayClass.prototype.getArray = /**
       * Returns a reference to the underlying Array.
       * @return {Object[]}
       */
    function () {
        return;
    };
    /**
     * Returns the element at the specified index.
     * @param index {number}
     * @return {Object}
     */
    /**
       * Returns the element at the specified index.
       * @param index {number}
       * @return {Object}
       */
    BaseArrayClass.prototype.getAt = /**
       * Returns the element at the specified index.
       * @param index {number}
       * @return {Object}
       */
    function (index) {
    };
    /**
     * Returns the number of the elements.
     * @return {number}
     */
    /**
       * Returns the number of the elements.
       * @return {number}
       */
    BaseArrayClass.prototype.getLength = /**
       * Returns the number of the elements.
       * @return {number}
       */
    function () {
        return;
    };
    /**
     * The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.
     * @param element {Object}
     * @return {number}
     */
    /**
       * The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.
       * @param element {Object}
       * @return {number}
       */
    BaseArrayClass.prototype.indexOf = /**
       * The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.
       * @param element {Object}
       * @return {number}
       */
    function (element) {
        return;
    };
    /**
     * The reverse() method reverses an array in place.
     */
    /**
       * The reverse() method reverses an array in place.
       */
    BaseArrayClass.prototype.reverse = /**
       * The reverse() method reverses an array in place.
       */
    function () {
    };
    /**
     * The sort() method sorts the elements of an array in place and returns the array.
     */
    /**
       * The sort() method sorts the elements of an array in place and returns the array.
       */
    BaseArrayClass.prototype.sort = /**
       * The sort() method sorts the elements of an array in place and returns the array.
       */
    function () {
    };
    /**
     * Inserts an element at the specified index.
     * @param index {number}
     * @param element {Object}
     * @param noNotify? {boolean} [options] Set true to prevent insert_at event.
     * @return {Object}
     */
    /**
       * Inserts an element at the specified index.
       * @param index {number}
       * @param element {Object}
       * @param noNotify? {boolean} [options] Set true to prevent insert_at event.
       * @return {Object}
       */
    BaseArrayClass.prototype.insertAt = /**
       * Inserts an element at the specified index.
       * @param index {number}
       * @param element {Object}
       * @param noNotify? {boolean} [options] Set true to prevent insert_at event.
       * @return {Object}
       */
    function (index, element, noNotify) {
    };
    /**
     * Removes the last element of the array and returns that element.
     * @param noNotify? {boolean} [options] Set true to prevent remove_at event.
     * @return {Object}
     */
    /**
       * Removes the last element of the array and returns that element.
       * @param noNotify? {boolean} [options] Set true to prevent remove_at event.
       * @return {Object}
       */
    BaseArrayClass.prototype.pop = /**
       * Removes the last element of the array and returns that element.
       * @param noNotify? {boolean} [options] Set true to prevent remove_at event.
       * @return {Object}
       */
    function (noNotify) {
        return;
    };
    /**
     * Adds one element to the end of the array and returns the new length of the array.
     * @param element {object}
     * @param noNotify? {boolean} Set true to prevent insert_at events.
     */
    /**
       * Adds one element to the end of the array and returns the new length of the array.
       * @param element {object}
       * @param noNotify? {boolean} Set true to prevent insert_at events.
       */
    BaseArrayClass.prototype.push = /**
       * Adds one element to the end of the array and returns the new length of the array.
       * @param element {object}
       * @param noNotify? {boolean} Set true to prevent insert_at events.
       */
    function (element, noNotify) {
    };
    /**
     * Removes an element from the specified index.
     * @param index {number}
     * @param noNotify? {boolean} [options] Set true to prevent remove_at event.
     */
    /**
       * Removes an element from the specified index.
       * @param index {number}
       * @param noNotify? {boolean} [options] Set true to prevent remove_at event.
       */
    BaseArrayClass.prototype.removeAt = /**
       * Removes an element from the specified index.
       * @param index {number}
       * @param noNotify? {boolean} [options] Set true to prevent remove_at event.
       */
    function (index, noNotify) { return; };
    /**
     * Sets an element at the specified index.
     * @param index {number}
     * @param element {object}
     * @param noNotify? {boolean} [options] Set true to prevent set_at event.
     */
    /**
       * Sets an element at the specified index.
       * @param index {number}
       * @param element {object}
       * @param noNotify? {boolean} [options] Set true to prevent set_at event.
       */
    BaseArrayClass.prototype.setAt = /**
       * Sets an element at the specified index.
       * @param index {number}
       * @param element {object}
       * @param noNotify? {boolean} [options] Set true to prevent set_at event.
       */
    function (index, element, noNotify) {
    };
    __decorate([
        CordovaInstance({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Boolean]),
        __metadata("design:returntype", void 0)
    ], BaseArrayClass.prototype, "empty", null);
    __decorate([
        CordovaInstance({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Function]),
        __metadata("design:returntype", void 0)
    ], BaseArrayClass.prototype, "forEach", null);
    __decorate([
        CordovaInstance({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Function]),
        __metadata("design:returntype", Array)
    ], BaseArrayClass.prototype, "map", null);
    __decorate([
        CordovaInstance({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Function]),
        __metadata("design:returntype", Array)
    ], BaseArrayClass.prototype, "filter", null);
    __decorate([
        CordovaInstance({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Array)
    ], BaseArrayClass.prototype, "getArray", null);
    __decorate([
        CordovaInstance({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", Object)
    ], BaseArrayClass.prototype, "getAt", null);
    __decorate([
        CordovaInstance({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Number)
    ], BaseArrayClass.prototype, "getLength", null);
    __decorate([
        CordovaInstance({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Number)
    ], BaseArrayClass.prototype, "indexOf", null);
    __decorate([
        CordovaInstance({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], BaseArrayClass.prototype, "reverse", null);
    __decorate([
        CordovaInstance({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], BaseArrayClass.prototype, "sort", null);
    __decorate([
        CordovaInstance({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number, Object, Boolean]),
        __metadata("design:returntype", void 0)
    ], BaseArrayClass.prototype, "insertAt", null);
    __decorate([
        CordovaInstance({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Boolean]),
        __metadata("design:returntype", Object)
    ], BaseArrayClass.prototype, "pop", null);
    __decorate([
        CordovaInstance({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Boolean]),
        __metadata("design:returntype", void 0)
    ], BaseArrayClass.prototype, "push", null);
    __decorate([
        CordovaInstance({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number, Boolean]),
        __metadata("design:returntype", Object)
    ], BaseArrayClass.prototype, "removeAt", null);
    __decorate([
        CordovaInstance({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number, Object, Boolean]),
        __metadata("design:returntype", void 0)
    ], BaseArrayClass.prototype, "setAt", null);
    /**
     * @hidden
     * https://github.com/mapsplugin/cordova-plugin-googlemaps-doc/blob/master/v2.0.0/class/BaseArrayClass/README.md
     */
    BaseArrayClass = __decorate([
        Plugin({
            pluginName: 'BaseArrayClass',
            plugin: 'cordova-plugin-googlemaps',
            pluginRef: 'plugin.google.maps.BaseArrayClass'
        }),
        __metadata("design:paramtypes", [Object])
    ], BaseArrayClass);
    return BaseArrayClass;
}(BaseClass));
export { BaseArrayClass };
/**
 * @hidden
 * https://github.com/mapsplugin/cordova-plugin-googlemaps-doc/blob/master/v2.0.0/class/Circle/README.md
 */
var Circle = (function (_super) {
    __extends(Circle, _super);
    function Circle(_map, _objectInstance) {
        var _this = _super.call(this, _objectInstance) || this;
        _this._map = _map;
        return _this;
    }
    /**
     * Returns the ID of instance.
     * @return {string}
     */
    /**
       * Returns the ID of instance.
       * @return {string}
       */
    Circle.prototype.getId = /**
       * Returns the ID of instance.
       * @return {string}
       */
    function () {
        return;
    };
    /**
     * Returns the map instance.
     * @return {GoogleMap}
     */
    /**
       * Returns the map instance.
       * @return {GoogleMap}
       */
    Circle.prototype.getMap = /**
       * Returns the map instance.
       * @return {GoogleMap}
       */
    function () {
        return this._map;
    };
    /**
     * Changes the center position.
     * @param latLng {ILatLng}
     */
    /**
       * Changes the center position.
       * @param latLng {ILatLng}
       */
    Circle.prototype.setCenter = /**
       * Changes the center position.
       * @param latLng {ILatLng}
       */
    function (latLng) {
    };
    /**
     * Returns the current center position
     * @return {ILatLng}
     */
    /**
       * Returns the current center position
       * @return {ILatLng}
       */
    Circle.prototype.getCenter = /**
       * Returns the current center position
       * @return {ILatLng}
       */
    function () {
        return;
    };
    /**
     * Returns the current circle radius.
     * @return {number}
     */
    /**
       * Returns the current circle radius.
       * @return {number}
       */
    Circle.prototype.getRadius = /**
       * Returns the current circle radius.
       * @return {number}
       */
    function () {
        return;
    };
    /**
     * Changes the circle radius.
     * @param radius {number}
     */
    /**
       * Changes the circle radius.
       * @param radius {number}
       */
    Circle.prototype.setRadius = /**
       * Changes the circle radius.
       * @param radius {number}
       */
    function (radius) {
    };
    /**
     * Changes the filling color (inner color).
     * @param color {string}
     */
    /**
       * Changes the filling color (inner color).
       * @param color {string}
       */
    Circle.prototype.setFillColor = /**
       * Changes the filling color (inner color).
       * @param color {string}
       */
    function (color) {
    };
    /**
     * Returns the current circle filling color (inner color).
     * @return {string}
     */
    /**
       * Returns the current circle filling color (inner color).
       * @return {string}
       */
    Circle.prototype.getFillColor = /**
       * Returns the current circle filling color (inner color).
       * @return {string}
       */
    function () {
        return;
    };
    /**
     * Changes the stroke width.
     * @param strokeWidth {number}
     */
    /**
       * Changes the stroke width.
       * @param strokeWidth {number}
       */
    Circle.prototype.setStrokeWidth = /**
       * Changes the stroke width.
       * @param strokeWidth {number}
       */
    function (strokeWidth) {
    };
    /**
     * Returns the current circle stroke width (unit: pixel).
     * @return {number}
     */
    /**
       * Returns the current circle stroke width (unit: pixel).
       * @return {number}
       */
    Circle.prototype.getStrokeWidth = /**
       * Returns the current circle stroke width (unit: pixel).
       * @return {number}
       */
    function () {
        return;
    };
    /**
     * Changes the stroke color (outter color).
     * @param strokeColor {string}
     */
    /**
       * Changes the stroke color (outter color).
       * @param strokeColor {string}
       */
    Circle.prototype.setStrokeColor = /**
       * Changes the stroke color (outter color).
       * @param strokeColor {string}
       */
    function (strokeColor) {
    };
    /**
     * Returns the current circle stroke color (outer color).
     * @return {string}
     */
    /**
       * Returns the current circle stroke color (outer color).
       * @return {string}
       */
    Circle.prototype.getStrokeColor = /**
       * Returns the current circle stroke color (outer color).
       * @return {string}
       */
    function () {
        return;
    };
    /**
     * Changes click-ability of the circle.
     * @param clickable {boolean}
     */
    /**
       * Changes click-ability of the circle.
       * @param clickable {boolean}
       */
    Circle.prototype.setClickable = /**
       * Changes click-ability of the circle.
       * @param clickable {boolean}
       */
    function (clickable) {
    };
    /**
     * Returns true if the circle is clickable.
     * @return {boolean}
     */
    /**
       * Returns true if the circle is clickable.
       * @return {boolean}
       */
    Circle.prototype.getClickable = /**
       * Returns true if the circle is clickable.
       * @return {boolean}
       */
    function () {
        return;
    };
    /**
     * Changes the circle zIndex order.
     * @param zIndex {number}
     */
    /**
       * Changes the circle zIndex order.
       * @param zIndex {number}
       */
    Circle.prototype.setZIndex = /**
       * Changes the circle zIndex order.
       * @param zIndex {number}
       */
    function (zIndex) {
    };
    /**
     * Returns the current circle zIndex.
     * @return {number}
     */
    /**
       * Returns the current circle zIndex.
       * @return {number}
       */
    Circle.prototype.getZIndex = /**
       * Returns the current circle zIndex.
       * @return {number}
       */
    function () {
        return;
    };
    /**
     * Remove the circle.
     */
    /**
       * Remove the circle.
       */
    Circle.prototype.remove = /**
       * Remove the circle.
       */
    function () {
        delete this._objectInstance.getMap().get('_overlays')[this.getId()];
        this._objectInstance.remove();
        this.destroy();
    };
    /**
     * Returns the latLngBounds (rectangle) that contains the circle.
     * @return {LatLngBounds}
     */
    /**
       * Returns the latLngBounds (rectangle) that contains the circle.
       * @return {LatLngBounds}
       */
    Circle.prototype.getBounds = /**
       * Returns the latLngBounds (rectangle) that contains the circle.
       * @return {LatLngBounds}
       */
    function () {
        return;
    };
    /**
     * Set circle visibility
     * @param visible {boolean}
     */
    /**
       * Set circle visibility
       * @param visible {boolean}
       */
    Circle.prototype.setVisible = /**
       * Set circle visibility
       * @param visible {boolean}
       */
    function (visible) {
    };
    /**
     * Returns true if the circle is visible.
     * @return {boolean}
     */
    /**
       * Returns true if the circle is visible.
       * @return {boolean}
       */
    Circle.prototype.getVisible = /**
       * Returns true if the circle is visible.
       * @return {boolean}
       */
    function () {
        return;
    };
    __decorate([
        CordovaInstance({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", String)
    ], Circle.prototype, "getId", null);
    __decorate([
        CordovaInstance({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], Circle.prototype, "setCenter", null);
    __decorate([
        CordovaInstance({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Object)
    ], Circle.prototype, "getCenter", null);
    __decorate([
        CordovaInstance({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Number)
    ], Circle.prototype, "getRadius", null);
    __decorate([
        CordovaInstance({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", void 0)
    ], Circle.prototype, "setRadius", null);
    __decorate([
        CordovaInstance({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", void 0)
    ], Circle.prototype, "setFillColor", null);
    __decorate([
        CordovaInstance({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", String)
    ], Circle.prototype, "getFillColor", null);
    __decorate([
        CordovaInstance({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", void 0)
    ], Circle.prototype, "setStrokeWidth", null);
    __decorate([
        CordovaInstance({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Number)
    ], Circle.prototype, "getStrokeWidth", null);
    __decorate([
        CordovaInstance({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", void 0)
    ], Circle.prototype, "setStrokeColor", null);
    __decorate([
        CordovaInstance({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", String)
    ], Circle.prototype, "getStrokeColor", null);
    __decorate([
        CordovaInstance({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Boolean]),
        __metadata("design:returntype", void 0)
    ], Circle.prototype, "setClickable", null);
    __decorate([
        CordovaInstance({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Boolean)
    ], Circle.prototype, "getClickable", null);
    __decorate([
        CordovaInstance({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", void 0)
    ], Circle.prototype, "setZIndex", null);
    __decorate([
        CordovaInstance({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Number)
    ], Circle.prototype, "getZIndex", null);
    __decorate([
        CordovaInstance(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], Circle.prototype, "remove", null);
    __decorate([
        CordovaInstance({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", LatLngBounds)
    ], Circle.prototype, "getBounds", null);
    __decorate([
        CordovaInstance({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Boolean]),
        __metadata("design:returntype", void 0)
    ], Circle.prototype, "setVisible", null);
    __decorate([
        CordovaInstance({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Boolean)
    ], Circle.prototype, "getVisible", null);
    return Circle;
}(BaseClass));
export { Circle };
/**
 * @hidden
 */
var Environment = (function () {
    function Environment() {
    }
    Environment_1 = Environment;
    /**
     * Set environment variables.
     */
    /**
       * Set environment variables.
       */
    Environment.setEnv = /**
       * Set environment variables.
       */
    function (envOptions) {
        if (checkAvailability(GoogleMaps.getPluginRef(), null, GoogleMaps.getPluginName()) === false) {
            throw new Error('cordova-plugin-googlemaps is not ready. Please use platform.ready() before accessing this method.');
        }
        GoogleMaps.getPlugin().environment.setEnv(envOptions);
    };
    /**
     * Get the open source software license information for Google Maps SDK for iOS.
     * @return {Promise<any>}
     */
    /**
       * Get the open source software license information for Google Maps SDK for iOS.
       * @return {Promise<any>}
       */
    Environment.getLicenseInfo = /**
       * Get the open source software license information for Google Maps SDK for iOS.
       * @return {Promise<any>}
       */
    function () {
        if (checkAvailability(GoogleMaps.getPluginRef(), null, GoogleMaps.getPluginName()) === false) {
            throw new Error('cordova-plugin-googlemaps is not ready. Please use platform.ready() before accessing this method.');
        }
        return new Promise(function (resolve) {
            GoogleMaps.getPlugin().environment.getLicenseInfo(function (text) { return resolve(text); });
        });
    };
    /**
     * Specifies the background color of the app.
     * @param color
     */
    /**
       * Specifies the background color of the app.
       * @param color
       */
    Environment.setBackgroundColor = /**
       * Specifies the background color of the app.
       * @param color
       */
    function (color) {
        if (checkAvailability(GoogleMaps.getPluginRef(), null, GoogleMaps.getPluginName()) === false) {
            throw new Error('cordova-plugin-googlemaps is not ready. Please use platform.ready() before accessing this method.');
        }
        GoogleMaps.getPlugin().environment.setBackgroundColor(color);
    };
    /**
     * @deprecation This method is static. Please use Environment.getLicenseInfo()
     * @hidden
     */
    /**
       * @deprecation This method is static. Please use Environment.getLicenseInfo()
       * @hidden
       */
    Environment.prototype.getLicenseInfo = /**
       * @deprecation This method is static. Please use Environment.getLicenseInfo()
       * @hidden
       */
    function () {
        console.error('GoogleMaps', '[deprecated] This method is static. Please use Environment.getLicenseInfo()');
        return Environment_1.getLicenseInfo();
    };
    /**
     * @deprecation This method is static. Please use Environment.setBackgroundColor()
     * @hidden
     */
    /**
       * @deprecation This method is static. Please use Environment.setBackgroundColor()
       * @hidden
       */
    Environment.prototype.setBackgroundColor = /**
       * @deprecation This method is static. Please use Environment.setBackgroundColor()
       * @hidden
       */
    function (color) {
        console.error('GoogleMaps', '[deprecated] This method is static. Please use Environment.setBackgroundColor()');
        Environment_1.setBackgroundColor(color);
    };
    /**
     * @hidden
     */
    Environment = Environment_1 = __decorate([
        Plugin({
            plugin: 'cordova-plugin-googlemaps',
            pluginName: 'GoogleMaps',
            pluginRef: 'plugin.google.maps.environment',
            repo: ''
        })
    ], Environment);
    return Environment;
    var Environment_1;
}());
export { Environment };
/**
 * @hidden
 */
var Geocoder = (function () {
    function Geocoder() {
    }
    Geocoder_1 = Geocoder;
    /**
     * @deprecation This method is static. Please use Geocoder.geocode()
     * @hidden
     */
    /**
       * @deprecation This method is static. Please use Geocoder.geocode()
       * @hidden
       */
    Geocoder.prototype.geocode = /**
       * @deprecation This method is static. Please use Geocoder.geocode()
       * @hidden
       */
    function (request) {
        console.error('GoogleMaps', '[deprecated] This method is static. Please use Geocoder.geocode()');
        return Geocoder_1.geocode(request);
    };
    /**
     * Converts position to address and vice versa
     * @param {GeocoderRequest} request Request object with either an address or a position
     * @return {Promise<GeocoderResult[] | BaseArrayClass<GeocoderResult>>}
     */
    /**
       * Converts position to address and vice versa
       * @param {GeocoderRequest} request Request object with either an address or a position
       * @return {Promise<GeocoderResult[] | BaseArrayClass<GeocoderResult>>}
       */
    Geocoder.geocode = /**
       * Converts position to address and vice versa
       * @param {GeocoderRequest} request Request object with either an address or a position
       * @return {Promise<GeocoderResult[] | BaseArrayClass<GeocoderResult>>}
       */
    function (request) {
        if (checkAvailability(GoogleMaps.getPluginRef(), null, GoogleMaps.getPluginName()) === false) {
            throw new Error('cordova-plugin-googlemaps is not ready. Please use platform.ready() before accessing this method.');
        }
        if (request.address instanceof Array || Array.isArray(request.address) ||
            request.position instanceof Array || Array.isArray(request.position)) {
            // -------------------------
            // Geocoder.geocode({
            //   address: [
            //    "Kyoto, Japan",
            //    "Tokyo, Japan"
            //   ]
            // })
            // -------------------------
            return new Promise(function (resolve, reject) {
                GoogleMaps.getPlugin().Geocoder.geocode(request, function (mvcArray) {
                    if (mvcArray) {
                        resolve(new BaseArrayClass(mvcArray));
                    }
                    else {
                        reject();
                    }
                });
            });
        }
        else {
            // -------------------------
            // Geocoder.geocode({
            //   address: "Kyoto, Japan"
            // })
            // -------------------------
            return new Promise(function (resolve, reject) {
                GoogleMaps.getPlugin().Geocoder.geocode(request, function (results) {
                    if (results) {
                        resolve(results);
                    }
                    else {
                        reject();
                    }
                });
            });
        }
    };
    /**
     * @hidden
     */
    Geocoder = Geocoder_1 = __decorate([
        Plugin({
            pluginName: 'GoogleMaps',
            pluginRef: 'plugin.google.maps.Geocoder',
            plugin: 'cordova-plugin-googlemaps',
            repo: ''
        })
    ], Geocoder);
    return Geocoder;
    var Geocoder_1;
}());
export { Geocoder };
/**
 * @hidden
 */
var LocationService = (function () {
    function LocationService() {
    }
    /**
     * Get the current device location without map
     * @return {Promise<MyLocation>}
     */
    /**
       * Get the current device location without map
       * @return {Promise<MyLocation>}
       */
    LocationService.getMyLocation = /**
       * Get the current device location without map
       * @return {Promise<MyLocation>}
       */
    function (options) {
        if (checkAvailability(GoogleMaps.getPluginRef(), null, GoogleMaps.getPluginName()) === false) {
            throw new Error('cordova-plugin-googlemaps is not ready. Please use platform.ready() before accessing this method.');
        }
        return new Promise(function (resolve, reject) {
            GoogleMaps.getPlugin().LocationService.getMyLocation(options, resolve, reject);
        });
    };
    /**
     * Return true if the application has geolocation permission
     * @return {Promise<boolean>}
     */
    /**
       * Return true if the application has geolocation permission
       * @return {Promise<boolean>}
       */
    LocationService.hasPermission = /**
       * Return true if the application has geolocation permission
       * @return {Promise<boolean>}
       */
    function () {
        if (checkAvailability(GoogleMaps.getPluginRef(), null, GoogleMaps.getPluginName()) === false) {
            throw new Error('cordova-plugin-googlemaps is not ready. Please use platform.ready() before accessing this method.');
        }
        return new Promise(function (resolve, reject) {
            GoogleMaps.getPlugin().LocationService.hasPermission(resolve, reject);
        });
    };
    /**
     * @hidden
     */
    LocationService = __decorate([
        Plugin({
            pluginName: 'GoogleMaps',
            pluginRef: 'plugin.google.maps.LocationService',
            plugin: 'cordova-plugin-googlemaps',
            repo: ''
        })
    ], LocationService);
    return LocationService;
}());
export { LocationService };
/**
 * @hidden
 */
var Encoding = (function () {
    function Encoding() {
    }
    Encoding_1 = Encoding;
    /**
     * Decodes an encoded path string into a sequence of LatLngs.
     * @param encoded {string} an encoded path string
     * @param precision? {number} default: 5
     * @return {LatLng}
     */
    /**
       * Decodes an encoded path string into a sequence of LatLngs.
       * @param encoded {string} an encoded path string
       * @param precision? {number} default: 5
       * @return {LatLng}
       */
    Encoding.decodePath = /**
       * Decodes an encoded path string into a sequence of LatLngs.
       * @param encoded {string} an encoded path string
       * @param precision? {number} default: 5
       * @return {LatLng}
       */
    function (encoded, precision) {
        if (checkAvailability(GoogleMaps.getPluginRef(), null, GoogleMaps.getPluginName()) === false) {
            throw new Error('cordova-plugin-googlemaps is not ready. Please use platform.ready() before accessing this method.');
        }
        return GoogleMaps.getPlugin().encoding.decodePath(encoded, precision);
    };
    /**
     * Encodes a sequence of LatLngs into an encoded path string.
     * @param path {ILatLng[] | BaseArrayClass<ILatLng>} a sequence of LatLngs
     * @return {string}
     */
    /**
       * Encodes a sequence of LatLngs into an encoded path string.
       * @param path {ILatLng[] | BaseArrayClass<ILatLng>} a sequence of LatLngs
       * @return {string}
       */
    Encoding.encodePath = /**
       * Encodes a sequence of LatLngs into an encoded path string.
       * @param path {ILatLng[] | BaseArrayClass<ILatLng>} a sequence of LatLngs
       * @return {string}
       */
    function (path) {
        if (checkAvailability(GoogleMaps.getPluginRef(), null, GoogleMaps.getPluginName()) === false) {
            throw new Error('cordova-plugin-googlemaps is not ready. Please use platform.ready() before accessing this method.');
        }
        return GoogleMaps.getPlugin().encoding.encodePath(path);
    };
    /**
     * @deprecation This method is static. Please use Encoding.decodePath()
     * @hidden
     */
    /**
       * @deprecation This method is static. Please use Encoding.decodePath()
       * @hidden
       */
    Encoding.prototype.decodePath = /**
       * @deprecation This method is static. Please use Encoding.decodePath()
       * @hidden
       */
    function (encoded, precision) {
        console.error('GoogleMaps', '[deprecated] This method is static. Please use Encoding.decodePath()');
        return Encoding_1.decodePath(encoded, precision);
    };
    /**
     * @deprecation This method is static. Please use Encoding.encodePath()
     * @hidden
     */
    /**
       * @deprecation This method is static. Please use Encoding.encodePath()
       * @hidden
       */
    Encoding.prototype.encodePath = /**
       * @deprecation This method is static. Please use Encoding.encodePath()
       * @hidden
       */
    function (path) {
        console.error('GoogleMaps', '[deprecated] This method is static. Please use Encoding.encodePath()');
        return Encoding_1.encodePath(path);
    };
    /**
     * @hidden
     */
    Encoding = Encoding_1 = __decorate([
        Plugin({
            pluginName: 'GoogleMaps',
            pluginRef: 'plugin.google.maps.geometry.encoding',
            plugin: 'cordova-plugin-googlemaps',
            repo: ''
        })
    ], Encoding);
    return Encoding;
    var Encoding_1;
}());
export { Encoding };
/**
 * @hidden
 */
var Poly = (function () {
    function Poly() {
    }
    /**
     * Returns true if the specified location is in the polygon path
     * @param location {ILatLng}
     * @param path {ILatLng[]}
     * @return {boolean}
     */
    /**
       * Returns true if the specified location is in the polygon path
       * @param location {ILatLng}
       * @param path {ILatLng[]}
       * @return {boolean}
       */
    Poly.containsLocation = /**
       * Returns true if the specified location is in the polygon path
       * @param location {ILatLng}
       * @param path {ILatLng[]}
       * @return {boolean}
       */
    function (location, path) {
        if (checkAvailability(GoogleMaps.getPluginRef(), null, GoogleMaps.getPluginName()) === false) {
            throw new Error('cordova-plugin-googlemaps is not ready. Please use platform.ready() before accessing this method.');
        }
        return GoogleMaps.getPlugin().geometry.poly.containsLocation(location, path);
    };
    /**
     * Returns true if the specified location is on the polyline path
     * @param location {ILatLng}
     * @param path {ILatLng[]}
     * @return {boolean}
     */
    /**
       * Returns true if the specified location is on the polyline path
       * @param location {ILatLng}
       * @param path {ILatLng[]}
       * @return {boolean}
       */
    Poly.isLocationOnEdge = /**
       * Returns true if the specified location is on the polyline path
       * @param location {ILatLng}
       * @param path {ILatLng[]}
       * @return {boolean}
       */
    function (location, path) {
        if (checkAvailability(GoogleMaps.getPluginRef(), null, GoogleMaps.getPluginName()) === false) {
            throw new Error('cordova-plugin-googlemaps is not ready. Please use platform.ready() before accessing this method.');
        }
        return GoogleMaps.getPlugin().geometry.poly.isLocationOnEdge(location, path);
    };
    /**
     * @hidden
     */
    Poly = __decorate([
        Plugin({
            pluginName: 'GoogleMaps',
            pluginRef: 'plugin.google.maps.geometry.poly',
            plugin: 'cordova-plugin-googlemaps',
            repo: ''
        })
    ], Poly);
    return Poly;
}());
export { Poly };
/**
 * @hidden
 */
var Spherical = (function () {
    function Spherical() {
    }
    Spherical_1 = Spherical;
    /**
     * Returns the distance, in meters, between two LatLngs.
     * @param locationA {ILatLng}
     * @param locationB {ILatLng}
     * @return {number}
     */
    /**
       * Returns the distance, in meters, between two LatLngs.
       * @param locationA {ILatLng}
       * @param locationB {ILatLng}
       * @return {number}
       */
    Spherical.computeDistanceBetween = /**
       * Returns the distance, in meters, between two LatLngs.
       * @param locationA {ILatLng}
       * @param locationB {ILatLng}
       * @return {number}
       */
    function (from, to) {
        if (checkAvailability(GoogleMaps.getPluginRef(), null, GoogleMaps.getPluginName()) === false) {
            throw new Error('cordova-plugin-googlemaps is not ready. Please use platform.ready() before accessing this method.');
        }
        return GoogleMaps.getPlugin().geometry.spherical.computeDistanceBetween(from, to);
    };
    /**
     * Returns the LatLng resulting from moving a distance from an origin in the specified heading (expressed in degrees clockwise from north)
     * @param from {ILatLng}
     * @param distance {number}
     * @param heading {number}
     * @return {LatLng}
     */
    /**
       * Returns the LatLng resulting from moving a distance from an origin in the specified heading (expressed in degrees clockwise from north)
       * @param from {ILatLng}
       * @param distance {number}
       * @param heading {number}
       * @return {LatLng}
       */
    Spherical.computeOffset = /**
       * Returns the LatLng resulting from moving a distance from an origin in the specified heading (expressed in degrees clockwise from north)
       * @param from {ILatLng}
       * @param distance {number}
       * @param heading {number}
       * @return {LatLng}
       */
    function (from, distance, heading) {
        if (checkAvailability(GoogleMaps.getPluginRef(), null, GoogleMaps.getPluginName()) === false) {
            throw new Error('cordova-plugin-googlemaps is not ready. Please use platform.ready() before accessing this method.');
        }
        return GoogleMaps.getPlugin().geometry.spherical.computeOffset(from, distance, heading);
    };
    /**
     * Returns the location of origin when provided with a LatLng destination, meters travelled and original heading. Headings are expressed in degrees clockwise from North. This function returns null when no solution is available.
     * @param to {ILatLng} The destination LatLng.
     * @param distance {number} The distance travelled, in meters.
     * @param heading {number} The heading in degrees clockwise from north.
     * @return {LatLng}
     */
    /**
       * Returns the location of origin when provided with a LatLng destination, meters travelled and original heading. Headings are expressed in degrees clockwise from North. This function returns null when no solution is available.
       * @param to {ILatLng} The destination LatLng.
       * @param distance {number} The distance travelled, in meters.
       * @param heading {number} The heading in degrees clockwise from north.
       * @return {LatLng}
       */
    Spherical.computeOffsetOrigin = /**
       * Returns the location of origin when provided with a LatLng destination, meters travelled and original heading. Headings are expressed in degrees clockwise from North. This function returns null when no solution is available.
       * @param to {ILatLng} The destination LatLng.
       * @param distance {number} The distance travelled, in meters.
       * @param heading {number} The heading in degrees clockwise from north.
       * @return {LatLng}
       */
    function (to, distance, heading) {
        if (checkAvailability(GoogleMaps.getPluginRef(), null, GoogleMaps.getPluginName()) === false) {
            throw new Error('cordova-plugin-googlemaps is not ready. Please use platform.ready() before accessing this method.');
        }
        return GoogleMaps.getPlugin().geometry.spherical.computeOffsetOrigin(to, distance, heading);
    };
    /**
     * Returns the length of the given path.
     * @param path {ILatLng[] | BaseArrayClass<ILatLng>}
     * @return {number}
     */
    /**
       * Returns the length of the given path.
       * @param path {ILatLng[] | BaseArrayClass<ILatLng>}
       * @return {number}
       */
    Spherical.computeLength = /**
       * Returns the length of the given path.
       * @param path {ILatLng[] | BaseArrayClass<ILatLng>}
       * @return {number}
       */
    function (path) {
        if (checkAvailability(GoogleMaps.getPluginRef(), null, GoogleMaps.getPluginName()) === false) {
            throw new Error('cordova-plugin-googlemaps is not ready. Please use platform.ready() before accessing this method.');
        }
        return GoogleMaps.getPlugin().geometry.spherical.computeLength(path);
    };
    /**
     * Returns the area of a closed path. The computed area uses the same units as the radius.
     * @param path {ILatLng[] | BaseArrayClass<ILatLng>}.
     * @return {number}
     */
    /**
       * Returns the area of a closed path. The computed area uses the same units as the radius.
       * @param path {ILatLng[] | BaseArrayClass<ILatLng>}.
       * @return {number}
       */
    Spherical.computeArea = /**
       * Returns the area of a closed path. The computed area uses the same units as the radius.
       * @param path {ILatLng[] | BaseArrayClass<ILatLng>}.
       * @return {number}
       */
    function (path) {
        if (checkAvailability(GoogleMaps.getPluginRef(), null, GoogleMaps.getPluginName()) === false) {
            throw new Error('cordova-plugin-googlemaps is not ready. Please use platform.ready() before accessing this method.');
        }
        return GoogleMaps.getPlugin().geometry.spherical.computeLength(path);
    };
    /**
     * Returns the signed area of a closed path. The signed area may be used to determine the orientation of the path.
     * @param path {ILatLng[] | BaseArrayClass<ILatLng>}.
     * @return {number}
     */
    /**
       * Returns the signed area of a closed path. The signed area may be used to determine the orientation of the path.
       * @param path {ILatLng[] | BaseArrayClass<ILatLng>}.
       * @return {number}
       */
    Spherical.computeSignedArea = /**
       * Returns the signed area of a closed path. The signed area may be used to determine the orientation of the path.
       * @param path {ILatLng[] | BaseArrayClass<ILatLng>}.
       * @return {number}
       */
    function (path) {
        if (checkAvailability(GoogleMaps.getPluginRef(), null, GoogleMaps.getPluginName()) === false) {
            throw new Error('cordova-plugin-googlemaps is not ready. Please use platform.ready() before accessing this method.');
        }
        return GoogleMaps.getPlugin().geometry.spherical.computeSignedArea(path);
    };
    /**
     * Returns the heading from one LatLng to another LatLng. Headings are expressed in degrees clockwise from North within the range (-180,180).
     * @param from {ILatLng}
     * @param to {ILatLng}
     * @return {number}
     */
    /**
       * Returns the heading from one LatLng to another LatLng. Headings are expressed in degrees clockwise from North within the range (-180,180).
       * @param from {ILatLng}
       * @param to {ILatLng}
       * @return {number}
       */
    Spherical.computeHeading = /**
       * Returns the heading from one LatLng to another LatLng. Headings are expressed in degrees clockwise from North within the range (-180,180).
       * @param from {ILatLng}
       * @param to {ILatLng}
       * @return {number}
       */
    function (from, to) {
        if (checkAvailability(GoogleMaps.getPluginRef(), null, GoogleMaps.getPluginName()) === false) {
            throw new Error('cordova-plugin-googlemaps is not ready. Please use platform.ready() before accessing this method.');
        }
        return GoogleMaps.getPlugin().geometry.spherical.computeHeading(from, to);
    };
    /**
     * Returns the LatLng which lies the given fraction of the way between the origin LatLng and the destination LatLng.
     * @param from {ILatLng}     The LatLng from which to start.
     * @param to {ILatLng}       The LatLng toward which to travel.
     * @param fraction {number}  A fraction of the distance to travel from 0.0 to 1.0 .
     * @return {LatLng}
     */
    /**
       * Returns the LatLng which lies the given fraction of the way between the origin LatLng and the destination LatLng.
       * @param from {ILatLng}     The LatLng from which to start.
       * @param to {ILatLng}       The LatLng toward which to travel.
       * @param fraction {number}  A fraction of the distance to travel from 0.0 to 1.0 .
       * @return {LatLng}
       */
    Spherical.interpolate = /**
       * Returns the LatLng which lies the given fraction of the way between the origin LatLng and the destination LatLng.
       * @param from {ILatLng}     The LatLng from which to start.
       * @param to {ILatLng}       The LatLng toward which to travel.
       * @param fraction {number}  A fraction of the distance to travel from 0.0 to 1.0 .
       * @return {LatLng}
       */
    function (from, to, fraction) {
        if (checkAvailability(GoogleMaps.getPluginRef(), null, GoogleMaps.getPluginName()) === false) {
            throw new Error('cordova-plugin-googlemaps is not ready. Please use platform.ready() before accessing this method.');
        }
        return GoogleMaps.getPlugin().geometry.spherical.interpolate(from, to, fraction);
    };
    /**
     * @deprecation This method is static. Please use Spherical.computeDistanceBetween()
     * @hidden
     */
    /**
       * @deprecation This method is static. Please use Spherical.computeDistanceBetween()
       * @hidden
       */
    Spherical.prototype.computeDistanceBetween = /**
       * @deprecation This method is static. Please use Spherical.computeDistanceBetween()
       * @hidden
       */
    function (from, to) {
        console.error('GoogleMaps', '[deprecated] This method is static. Please use Spherical.computeDistanceBetween()');
        return Spherical_1.computeDistanceBetween(from, to);
    };
    /**
     * @deprecation This method is static. Please use Spherical.computeOffset()
     * @hidden
     */
    /**
       * @deprecation This method is static. Please use Spherical.computeOffset()
       * @hidden
       */
    Spherical.prototype.computeOffset = /**
       * @deprecation This method is static. Please use Spherical.computeOffset()
       * @hidden
       */
    function (from, distance, heading) {
        console.error('GoogleMaps', '[deprecated] This method is static. Please use Spherical.computeOffset()');
        return Spherical_1.computeOffset(from, distance, heading);
    };
    /**
     * @deprecation This method is static. Please use Spherical.computeOffsetOrigin()
     * @hidden
     */
    /**
       * @deprecation This method is static. Please use Spherical.computeOffsetOrigin()
       * @hidden
       */
    Spherical.prototype.computeOffsetOrigin = /**
       * @deprecation This method is static. Please use Spherical.computeOffsetOrigin()
       * @hidden
       */
    function (to, distance, heading) {
        console.error('GoogleMaps', '[deprecated] This method is static. Please use Spherical.computeOffsetOrigin()');
        return Spherical_1.computeOffsetOrigin(to, distance, heading);
    };
    /**
     * @deprecation This method is static. Please use Spherical.computeLength()
     * @hidden
     */
    /**
       * @deprecation This method is static. Please use Spherical.computeLength()
       * @hidden
       */
    Spherical.prototype.computeLength = /**
       * @deprecation This method is static. Please use Spherical.computeLength()
       * @hidden
       */
    function (path) {
        console.error('GoogleMaps', '[deprecated] This method is static. Please use Spherical.computeLength()');
        return Spherical_1.computeLength(path);
    };
    /**
     * @deprecation This method is static. Please use Spherical.computeArea()
     * @hidden
     */
    /**
       * @deprecation This method is static. Please use Spherical.computeArea()
       * @hidden
       */
    Spherical.prototype.computeArea = /**
       * @deprecation This method is static. Please use Spherical.computeArea()
       * @hidden
       */
    function (path) {
        console.error('GoogleMaps', '[deprecated] This method is static. Please use Spherical.computeArea()');
        return Spherical_1.computeArea(path);
    };
    /**
     * @deprecation This method is static. Please use Spherical.computeSignedArea()
     * @hidden
     */
    /**
       * @deprecation This method is static. Please use Spherical.computeSignedArea()
       * @hidden
       */
    Spherical.prototype.computeSignedArea = /**
       * @deprecation This method is static. Please use Spherical.computeSignedArea()
       * @hidden
       */
    function (path) {
        console.error('GoogleMaps', '[deprecated] This method is static. Please use Spherical.computeSignedArea()');
        return Spherical_1.computeSignedArea(path);
    };
    /**
     * @deprecation This method is static. Please use Spherical.computeHeading()
     * @hidden
     */
    /**
       * @deprecation This method is static. Please use Spherical.computeHeading()
       * @hidden
       */
    Spherical.prototype.computeHeading = /**
       * @deprecation This method is static. Please use Spherical.computeHeading()
       * @hidden
       */
    function (from, to) {
        console.error('GoogleMaps', '[deprecated] This method is static. Please use Spherical.computeHeading()');
        return Spherical_1.computeHeading(from, to);
    };
    /**
     * @deprecation This method is static. Please use Spherical.interpolate()
     * @hidden
     */
    /**
       * @deprecation This method is static. Please use Spherical.interpolate()
       * @hidden
       */
    Spherical.prototype.interpolate = /**
       * @deprecation This method is static. Please use Spherical.interpolate()
       * @hidden
       */
    function (from, to, fraction) {
        console.error('GoogleMaps', '[deprecated] This method is static. Please use Spherical.interpolate()');
        return Spherical_1.interpolate(from, to, fraction);
    };
    /**
     * @hidden
     */
    Spherical = Spherical_1 = __decorate([
        Plugin({
            pluginName: 'GoogleMaps',
            pluginRef: 'plugin.google.maps.geometry.spherical',
            plugin: 'cordova-plugin-googlemaps',
            repo: ''
        })
    ], Spherical);
    return Spherical;
    var Spherical_1;
}());
export { Spherical };
/**
 * @hidden
 */
var StreetViewPanorama = (function (_super) {
    __extends(StreetViewPanorama, _super);
    function StreetViewPanorama(element, options) {
        var _this = this;
        if (checkAvailability(GoogleMaps.getPluginRef(), null, GoogleMaps.getPluginName()) === true) {
            // -------------------
            // Create a panorama
            // -------------------
            if (element instanceof HTMLElement) {
                if (element.offsetWidth >= 100 && element.offsetHeight >= 100) {
                    _this = _super.call(this, GoogleMaps.getPlugin().StreetView.getPanorama(element, options)) || this;
                }
                else {
                    throw new Error(element.tagName + ' is too small. Must be bigger than 100x100.');
                }
            }
            else if (typeof element === 'string') {
                _this = _super.call(this, GoogleMaps.getPlugin().StreetView.getPanorama(new Promise(function (resolve, reject) {
                    var count;
                    var i;
                    count = 0;
                    var timer = setInterval(function () {
                        var targets;
                        for (i = 0; i < TARGET_ELEMENT_FINDING_QUERYS.length; i++) {
                            targets = Array.from(document.querySelectorAll(TARGET_ELEMENT_FINDING_QUERYS[i] + element));
                            if (targets.length > 0) {
                                targets = targets.filter(function (target) {
                                    return !target.hasAttribute('__pluginmapid');
                                });
                            }
                            if (targets.length === 1 && targets[0] && targets[0].offsetWidth >= 100 && targets[0].offsetHeight >= 100) {
                                clearInterval(timer);
                                resolve([targets[0], options]);
                                return;
                            }
                        }
                        if (count++ < 20) {
                            return;
                        }
                        clearInterval(timer);
                        _this._objectInstance.remove();
                        if (targets.length > 0 && targets[0] && targets[0].offsetWidth < 100 || targets[0].offsetHeight < 100) {
                            reject(new Error(targets[0].tagName + '[#' + element + '] is too small. Must be bigger than 100x100.'));
                        }
                        else {
                            reject(new Error('Can not find the element [#' + element + ']'));
                        }
                    }, 100);
                }), options)) || this;
            }
        }
        else {
            var errorMessage = [
                '[GoogleMaps]'
            ];
            if (!window.cordova) {
                errorMessage.push('You need to execute "$> ionic cordova run browser".');
                errorMessage.push('"$> ionic serve" is not supported.');
            }
            else {
                errorMessage.push('cordova-plugin-googlemaps is not installed or not ready yet.');
            }
            if (element instanceof HTMLElement) {
                displayErrorMessage(element, errorMessage.join('<br />'));
            }
            else if (typeof element === 'string') {
                var targets = Array.from(document.querySelectorAll('#' + element));
                if (targets.length > 0) {
                    targets = targets.filter(function (target) {
                        return !target.hasAttribute('__pluginmapid');
                    });
                }
                if (targets.length === 1 && targets[0]) {
                    displayErrorMessage(targets[0], errorMessage.join('<br />'));
                }
            }
            throw new Error(errorMessage.join(''));
        }
        return _this;
    }
    /**
     * Sets the point of view for the Street View panorama.
     */
    /**
       * Sets the point of view for the Street View panorama.
       */
    StreetViewPanorama.prototype.setPov = /**
       * Sets the point of view for the Street View panorama.
       */
    function (pov) { };
    /**
     * Sets the StreetViewPanorama to a given location.
     */
    /**
       * Sets the StreetViewPanorama to a given location.
       */
    StreetViewPanorama.prototype.setPosition = /**
       * Sets the StreetViewPanorama to a given location.
       */
    function (cameraPosition) { };
    /**
     * Toggles the ability for users to use pan around on the panorama using gestures.
     * @param gestureEnable {boolean}
     */
    /**
       * Toggles the ability for users to use pan around on the panorama using gestures.
       * @param gestureEnable {boolean}
       */
    StreetViewPanorama.prototype.setPanningGesturesEnabled = /**
       * Toggles the ability for users to use pan around on the panorama using gestures.
       * @param gestureEnable {boolean}
       */
    function (gestureEnable) { };
    /**
     * Return true if the panning gesture is enabled.
     * @return {boolean}
     */
    /**
       * Return true if the panning gesture is enabled.
       * @return {boolean}
       */
    StreetViewPanorama.prototype.getPanningGesturesEnabled = /**
       * Return true if the panning gesture is enabled.
       * @return {boolean}
       */
    function () { return; };
    /**
     * Toggles the ability for users to zoom on the panorama using gestures.
     * @param gestureEnable {boolean}
     */
    /**
       * Toggles the ability for users to zoom on the panorama using gestures.
       * @param gestureEnable {boolean}
       */
    StreetViewPanorama.prototype.setZoomGesturesEnabled = /**
       * Toggles the ability for users to zoom on the panorama using gestures.
       * @param gestureEnable {boolean}
       */
    function (gestureEnable) { };
    /**
     * Return true if the zooming gesture is enabled.
     * @return {boolean}
     */
    /**
       * Return true if the zooming gesture is enabled.
       * @return {boolean}
       */
    StreetViewPanorama.prototype.getZoomGesturesEnabled = /**
       * Return true if the zooming gesture is enabled.
       * @return {boolean}
       */
    function () { return; };
    /**
     * Toggles the ability for users to see street names on the panorama.
     * @param gestureEnable {boolean}
     */
    /**
       * Toggles the ability for users to see street names on the panorama.
       * @param gestureEnable {boolean}
       */
    StreetViewPanorama.prototype.setStreetNamesEnabled = /**
       * Toggles the ability for users to see street names on the panorama.
       * @param gestureEnable {boolean}
       */
    function (gestureEnable) { };
    /**
     * Return true if the street names control is enabled.
     * @return {boolean}
     */
    /**
       * Return true if the street names control is enabled.
       * @return {boolean}
       */
    StreetViewPanorama.prototype.getStreetNamesEnabled = /**
       * Return true if the street names control is enabled.
       * @return {boolean}
       */
    function () { return; };
    /**
     * Toggles the ability for users to move between panoramas.
     * @param gestureEnable {boolean}
     */
    /**
       * Toggles the ability for users to move between panoramas.
       * @param gestureEnable {boolean}
       */
    StreetViewPanorama.prototype.setNavigationEnabled = /**
       * Toggles the ability for users to move between panoramas.
       * @param gestureEnable {boolean}
       */
    function (gestureEnable) { };
    /**
     * Return true if the navigation control is enabled.
     * @return {boolean}
     */
    /**
       * Return true if the navigation control is enabled.
       * @return {boolean}
       */
    StreetViewPanorama.prototype.getNavigationEnabled = /**
       * Return true if the navigation control is enabled.
       * @return {boolean}
       */
    function () { return; };
    /**
     * Return the navigation links (StreetViewLocation.links)
     * @return {StreetViewNavigationLink[]}
     */
    /**
       * Return the navigation links (StreetViewLocation.links)
       * @return {StreetViewNavigationLink[]}
       */
    StreetViewPanorama.prototype.getLinks = /**
       * Return the navigation links (StreetViewLocation.links)
       * @return {StreetViewNavigationLink[]}
       */
    function () { return; };
    /**
     * Return the current location
     * @return {StreetViewLocation}
     */
    /**
       * Return the current location
       * @return {StreetViewLocation}
       */
    StreetViewPanorama.prototype.getLocation = /**
       * Return the current location
       * @return {StreetViewLocation}
       */
    function () { return; };
    /**
     * Return the current panorama id
     * @return {string}
     */
    /**
       * Return the current panorama id
       * @return {string}
       */
    StreetViewPanorama.prototype.getPanoId = /**
       * Return the current panorama id
       * @return {string}
       */
    function () { return; };
    /**
     * Return the current position (StreetViewLocation.latLng)
     * @return {string}
     */
    /**
       * Return the current position (StreetViewLocation.latLng)
       * @return {string}
       */
    StreetViewPanorama.prototype.getPosition = /**
       * Return the current position (StreetViewLocation.latLng)
       * @return {string}
       */
    function () { return; };
    /**
     * Destroy a panorama completely
     * @return {Promise<any>}
     */
    /**
       * Destroy a panorama completely
       * @return {Promise<any>}
       */
    StreetViewPanorama.prototype.remove = /**
       * Destroy a panorama completely
       * @return {Promise<any>}
       */
    function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this._objectInstance.remove(function () { return resolve(); });
        });
    };
    __decorate([
        CordovaInstance(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], StreetViewPanorama.prototype, "setPov", null);
    __decorate([
        CordovaInstance(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], StreetViewPanorama.prototype, "setPosition", null);
    __decorate([
        CordovaInstance({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Boolean]),
        __metadata("design:returntype", void 0)
    ], StreetViewPanorama.prototype, "setPanningGesturesEnabled", null);
    __decorate([
        CordovaInstance({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Boolean)
    ], StreetViewPanorama.prototype, "getPanningGesturesEnabled", null);
    __decorate([
        CordovaInstance({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Boolean]),
        __metadata("design:returntype", void 0)
    ], StreetViewPanorama.prototype, "setZoomGesturesEnabled", null);
    __decorate([
        CordovaInstance({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Boolean)
    ], StreetViewPanorama.prototype, "getZoomGesturesEnabled", null);
    __decorate([
        CordovaInstance({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Boolean]),
        __metadata("design:returntype", void 0)
    ], StreetViewPanorama.prototype, "setStreetNamesEnabled", null);
    __decorate([
        CordovaInstance({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Boolean)
    ], StreetViewPanorama.prototype, "getStreetNamesEnabled", null);
    __decorate([
        CordovaInstance({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Boolean]),
        __metadata("design:returntype", void 0)
    ], StreetViewPanorama.prototype, "setNavigationEnabled", null);
    __decorate([
        CordovaInstance({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Boolean)
    ], StreetViewPanorama.prototype, "getNavigationEnabled", null);
    __decorate([
        CordovaInstance({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Array)
    ], StreetViewPanorama.prototype, "getLinks", null);
    __decorate([
        CordovaInstance({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Object)
    ], StreetViewPanorama.prototype, "getLocation", null);
    __decorate([
        CordovaInstance({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", String)
    ], StreetViewPanorama.prototype, "getPanoId", null);
    __decorate([
        CordovaInstance({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Object)
    ], StreetViewPanorama.prototype, "getPosition", null);
    __decorate([
        CordovaInstance(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], StreetViewPanorama.prototype, "remove", null);
    /**
     * @hidden
     */
    StreetViewPanorama = __decorate([
        Plugin({
            pluginName: 'StreetViewPanorama',
            plugin: 'cordova-plugin-googlemaps'
        }),
        __metadata("design:paramtypes", [Object, Object])
    ], StreetViewPanorama);
    return StreetViewPanorama;
}(BaseClass));
export { StreetViewPanorama };
/**
 * @hidden
 */
var GoogleMap = (function (_super) {
    __extends(GoogleMap, _super);
    function GoogleMap(element, options) {
        var _this = this;
        if (checkAvailability(GoogleMaps.getPluginRef(), null, GoogleMaps.getPluginName()) === true) {
            // ---------------
            // Create a map
            // ---------------
            if (element instanceof HTMLElement) {
                if (!element.offsetParent) {
                    throw new Error('Element must be under <body>');
                }
                if (element.offsetWidth >= 100 && element.offsetHeight >= 100) {
                    _this = _super.call(this, GoogleMaps.getPlugin().Map.getMap(element, options)) || this;
                }
                else {
                    throw new Error(element.tagName + ' is too small. Must be bigger than 100x100.');
                }
            }
            else if (typeof element === 'string') {
                _this = _super.call(this, GoogleMaps.getPlugin().Map.getMap(new Promise(function (resolve, reject) {
                    var count;
                    var i;
                    count = 0;
                    var timer = setInterval(function () {
                        var targets;
                        for (i = 0; i < TARGET_ELEMENT_FINDING_QUERYS.length; i++) {
                            targets = Array.from(document.querySelectorAll(TARGET_ELEMENT_FINDING_QUERYS[i] + element));
                            if (targets.length > 0) {
                                targets = targets.filter(function (target) {
                                    return !target.hasAttribute('__pluginmapid');
                                });
                            }
                            if (targets.length === 1 && targets[0] && targets[0].offsetWidth >= 100 && targets[0].offsetHeight >= 100) {
                                clearInterval(timer);
                                resolve([targets[0], options]);
                                return;
                            }
                        }
                        if (count++ < 20) {
                            return;
                        }
                        clearInterval(timer);
                        _this._objectInstance.remove();
                        if (targets.length > 0 && targets[0] && targets[0].offsetWidth < 100 || targets[0].offsetHeight < 100) {
                            reject(new Error(targets[0].tagName + '[#' + element + '] is too small. Must be bigger than 100x100.'));
                        }
                        else {
                            reject(new Error('Can not find the element [#' + element + ']'));
                        }
                    }, 100);
                }), options)) || this;
            }
            else if (element === null && options) {
                _this = _super.call(this, GoogleMaps.getPlugin().Map.getMap(null, options)) || this;
            }
        }
        else {
            var errorMessage = [
                '[GoogleMaps]'
            ];
            if (!window.cordova) {
                errorMessage.push('You need to execute "$> ionic cordova run browser".');
                errorMessage.push('"$> ionic serve" is not supported.');
            }
            else {
                errorMessage.push('cordova-plugin-googlemaps is not installed or not ready yet.');
            }
            console.error(errorMessage.join(''));
            if (element instanceof HTMLElement) {
                displayErrorMessage(element, errorMessage.join('<br />'));
            }
            else if (typeof element === 'string') {
                var targets = Array.from(document.querySelectorAll('#' + element));
                if (targets.length > 0) {
                    targets = targets.filter(function (target) {
                        return !target.hasAttribute('__pluginmapid');
                    });
                }
                if (targets.length === 1 && targets[0]) {
                    displayErrorMessage(targets[0], errorMessage.join('<br />'));
                }
            }
        }
        return _this;
    }
    /**
     * Changes the map div
     * @param domNode {HTMLElement | string} [options] If you want to display the map in an html element, you need to specify an element or id. If omit this argument, the map is detached from webview.
     */
    /**
       * Changes the map div
       * @param domNode {HTMLElement | string} [options] If you want to display the map in an html element, you need to specify an element or id. If omit this argument, the map is detached from webview.
       */
    GoogleMap.prototype.setDiv = /**
       * Changes the map div
       * @param domNode {HTMLElement | string} [options] If you want to display the map in an html element, you need to specify an element or id. If omit this argument, the map is detached from webview.
       */
    function (domNode) {
        var _this = this;
        if (!domNode) {
            this._objectInstance.setDiv();
            return;
        }
        if (typeof domNode === 'string') {
            (new Promise(function (resolve, reject) {
                var i, targets;
                for (i = 0; i < TARGET_ELEMENT_FINDING_QUERYS.length; i++) {
                    targets = Array.from(document.querySelectorAll(TARGET_ELEMENT_FINDING_QUERYS[i] + domNode));
                    if (targets.length > 0) {
                        targets = targets.filter(function (target) {
                            return !target.hasAttribute('__pluginmapid');
                        });
                    }
                    if (targets.length === 1 && targets[0] && targets[0].offsetWidth >= 100 && targets[0].offsetHeight >= 100) {
                        resolve(targets[0]);
                        return;
                    }
                }
                reject('Can not find [#' + domNode + '] element');
            }))
                .then(function (element) {
                _this._objectInstance.setDiv(element);
            });
        }
        else {
            if (domNode instanceof HTMLElement &&
                !domNode.offsetParent &&
                domNode.offsetWidth >= 100 && domNode.offsetHeight >= 100) {
                this._objectInstance.setDiv(domNode);
            }
            else {
                throw new Error(domNode.tagName + ' is too small. Must be bigger than 100x100.');
            }
        }
    };
    /**
     * Returns the map HTML element
     * @return {HTMLElement}
     */
    /**
       * Returns the map HTML element
       * @return {HTMLElement}
       */
    GoogleMap.prototype.getDiv = /**
       * Returns the map HTML element
       * @return {HTMLElement}
       */
    function () {
        return;
    };
    /**
     * Changes the map type id
     * @param mapTypeId {string}
     */
    /**
       * Changes the map type id
       * @param mapTypeId {string}
       */
    GoogleMap.prototype.setMapTypeId = /**
       * Changes the map type id
       * @param mapTypeId {string}
       */
    function (mapTypeId) {
    };
    /**
     * Moves the camera with animation
     * @return {Promise<any>}
     */
    /**
       * Moves the camera with animation
       * @return {Promise<any>}
       */
    GoogleMap.prototype.animateCamera = /**
       * Moves the camera with animation
       * @return {Promise<any>}
       */
    function (cameraPosition) {
        return;
    };
    /**
     * Zooming in the camera with animation
     * @return {Promise<any>}
     */
    /**
       * Zooming in the camera with animation
       * @return {Promise<any>}
       */
    GoogleMap.prototype.animateCameraZoomIn = /**
       * Zooming in the camera with animation
       * @return {Promise<any>}
       */
    function () {
        return;
    };
    /**
     * Zooming out the camera with animation
     * @return {Promise<any>}
     */
    /**
       * Zooming out the camera with animation
       * @return {Promise<any>}
       */
    GoogleMap.prototype.animateCameraZoomOut = /**
       * Zooming out the camera with animation
       * @return {Promise<any>}
       */
    function () {
        return;
    };
    /**
     * Moves the camera without animation
     * @return {Promise<any>}
     */
    /**
       * Moves the camera without animation
       * @return {Promise<any>}
       */
    GoogleMap.prototype.moveCamera = /**
       * Moves the camera without animation
       * @return {Promise<any>}
       */
    function (cameraPosition) {
        return;
    };
    /**
     * Zooming in the camera without animation
     * @return {Promise<any>}
     */
    /**
       * Zooming in the camera without animation
       * @return {Promise<any>}
       */
    GoogleMap.prototype.moveCameraZoomIn = /**
       * Zooming in the camera without animation
       * @return {Promise<any>}
       */
    function () {
        return;
    };
    /**
     * Zooming out the camera without animation
     * @return {Promise<any>}
     */
    /**
       * Zooming out the camera without animation
       * @return {Promise<any>}
       */
    GoogleMap.prototype.moveCameraZoomOut = /**
       * Zooming out the camera without animation
       * @return {Promise<any>}
       */
    function () {
        return;
    };
    /**
     * Get the position of the camera.
     * @return {CameraPosition}
     */
    /**
       * Get the position of the camera.
       * @return {CameraPosition}
       */
    GoogleMap.prototype.getCameraPosition = /**
       * Get the position of the camera.
       * @return {CameraPosition}
       */
    function () {
        return;
    };
    /**
     * Get the current camera target position
     * @return {ILatLng}
     */
    /**
       * Get the current camera target position
       * @return {ILatLng}
       */
    GoogleMap.prototype.getCameraTarget = /**
       * Get the current camera target position
       * @return {ILatLng}
       */
    function () {
        return;
    };
    /**
     * Get the current camera zoom level
     * @return {number}
     */
    /**
       * Get the current camera zoom level
       * @return {number}
       */
    GoogleMap.prototype.getCameraZoom = /**
       * Get the current camera zoom level
       * @return {number}
       */
    function () {
        return;
    };
    /**
     * Get the current camera bearing
     * @return {number}
     */
    /**
       * Get the current camera bearing
       * @return {number}
       */
    GoogleMap.prototype.getCameraBearing = /**
       * Get the current camera bearing
       * @return {number}
       */
    function () {
        return;
    };
    /**
     * Get the current camera tilt (view angle)
     * @return {number}
     */
    /**
       * Get the current camera tilt (view angle)
       * @return {number}
       */
    GoogleMap.prototype.getCameraTilt = /**
       * Get the current camera tilt (view angle)
       * @return {number}
       */
    function () {
        return;
    };
    /**
     * Set the center position of the camera view
     * @param latLng {ILatLng | ILatLng[]}
     */
    /**
       * Set the center position of the camera view
       * @param latLng {ILatLng | ILatLng[]}
       */
    GoogleMap.prototype.setCameraTarget = /**
       * Set the center position of the camera view
       * @param latLng {ILatLng | ILatLng[]}
       */
    function (latLng) {
    };
    /**
     * Set zoom level of the camera
     * @param zoomLevel {number} Zoom level
     */
    /**
       * Set zoom level of the camera
       * @param zoomLevel {number} Zoom level
       */
    GoogleMap.prototype.setCameraZoom = /**
       * Set zoom level of the camera
       * @param zoomLevel {number} Zoom level
       */
    function (zoomLevel) {
    };
    /**
     * Set the camera view angle
     * @param tiltAngle {number} Tilt angle
     */
    /**
       * Set the camera view angle
       * @param tiltAngle {number} Tilt angle
       */
    GoogleMap.prototype.setCameraTilt = /**
       * Set the camera view angle
       * @param tiltAngle {number} Tilt angle
       */
    function (tiltAngle) { };
    /**
     * Set camera bearing
     * @param bearing {any}
     */
    /**
       * Set camera bearing
       * @param bearing {any}
       */
    GoogleMap.prototype.setCameraBearing = /**
       * Set camera bearing
       * @param bearing {any}
       */
    function (bearing) {
    };
    /**
     * Changes the center of the map by the given distance in pixels
     * @param x {number}
     * @param y {number}
     */
    /**
       * Changes the center of the map by the given distance in pixels
       * @param x {number}
       * @param y {number}
       */
    GoogleMap.prototype.panBy = /**
       * Changes the center of the map by the given distance in pixels
       * @param x {number}
       * @param y {number}
       */
    function (x, y) { };
    /**
     * Get the current visible region (southWest and northEast)
     * @return {VisibleRegion}
     */
    /**
       * Get the current visible region (southWest and northEast)
       * @return {VisibleRegion}
       */
    GoogleMap.prototype.getVisibleRegion = /**
       * Get the current visible region (southWest and northEast)
       * @return {VisibleRegion}
       */
    function () {
        return;
    };
    /**
     * Get the current device location
     * @return {Promise<MyLocation>}
     */
    /**
       * Get the current device location
       * @return {Promise<MyLocation>}
       */
    GoogleMap.prototype.getMyLocation = /**
       * Get the current device location
       * @return {Promise<MyLocation>}
       */
    function (options) {
        return new Promise(function (resolve, reject) {
            GoogleMaps.getPlugin().LocationService.getMyLocation(options, resolve, reject);
        });
    };
    /**
     * Set false to ignore all clicks on the map
     * @param isClickable {boolean}
     */
    /**
       * Set false to ignore all clicks on the map
       * @param isClickable {boolean}
       */
    GoogleMap.prototype.setClickable = /**
       * Set false to ignore all clicks on the map
       * @param isClickable {boolean}
       */
    function (isClickable) {
    };
    /**
     * Destroy a map completely
     * @return {Promise<any>}
     */
    /**
       * Destroy a map completely
       * @return {Promise<any>}
       */
    GoogleMap.prototype.remove = /**
       * Destroy a map completely
       * @return {Promise<any>}
       */
    function () {
        var _this = this;
        if (this.get('_overlays')) {
            Object.keys(this.get('_overlays')).forEach(function (overlayId) {
                _this.get('_overlays')[overlayId] = null;
                delete _this.get('_overlays')[overlayId];
            });
        }
        return new Promise(function (resolve) {
            _this._objectInstance.remove(function () { return resolve(); });
        });
    };
    /**
     * Remove all overlays, such as marker
     * @return {Promise<any>}
     */
    /**
       * Remove all overlays, such as marker
       * @return {Promise<any>}
       */
    GoogleMap.prototype.clear = /**
       * Remove all overlays, such as marker
       * @return {Promise<any>}
       */
    function () {
        var _this = this;
        if (this.get('_overlays')) {
            Object.keys(this.get('_overlays')).forEach(function (overlayId) {
                _this.get('_overlays')[overlayId] = null;
                delete _this.get('_overlays')[overlayId];
            });
        }
        return new Promise(function (resolve) {
            _this._objectInstance.clear(function () { return resolve(); });
        });
    };
    /**
     * Convert the unit from LatLng to the pixels from the left/top of the map div
     * @return {Promise<any>}
     */
    /**
       * Convert the unit from LatLng to the pixels from the left/top of the map div
       * @return {Promise<any>}
       */
    GoogleMap.prototype.fromLatLngToPoint = /**
       * Convert the unit from LatLng to the pixels from the left/top of the map div
       * @return {Promise<any>}
       */
    function (latLng) {
        return;
    };
    /**
     * Convert the unit from the pixels from the left/top to the LatLng
     * @return {Promise<LatLng>}
     */
    /**
       * Convert the unit from the pixels from the left/top to the LatLng
       * @return {Promise<LatLng>}
       */
    GoogleMap.prototype.fromPointToLatLng = /**
       * Convert the unit from the pixels from the left/top to the LatLng
       * @return {Promise<LatLng>}
       */
    function (point) { return; };
    /**
     * Set true if you want to show the MyLocation control (blue dot)
     * @param enabled {boolean}
     */
    /**
       * Set true if you want to show the MyLocation control (blue dot)
       * @param enabled {boolean}
       */
    GoogleMap.prototype.setMyLocationEnabled = /**
       * Set true if you want to show the MyLocation control (blue dot)
       * @param enabled {boolean}
       */
    function (enabled) {
    };
    /**
     * Set true if you want to show the MyLocation button
     * @param enabled {boolean}
     */
    /**
       * Set true if you want to show the MyLocation button
       * @param enabled {boolean}
       */
    GoogleMap.prototype.setMyLocationButtonEnabled = /**
       * Set true if you want to show the MyLocation button
       * @param enabled {boolean}
       */
    function (enabled) { };
    /**
     * Get the currently focused building
     * @return {Promise<any>}
     */
    /**
       * Get the currently focused building
       * @return {Promise<any>}
       */
    GoogleMap.prototype.getFocusedBuilding = /**
       * Get the currently focused building
       * @return {Promise<any>}
       */
    function () {
        return;
    };
    /**
     * Set true if you want to show the indoor map
     * @param enabled {boolean}
     */
    /**
       * Set true if you want to show the indoor map
       * @param enabled {boolean}
       */
    GoogleMap.prototype.setIndoorEnabled = /**
       * Set true if you want to show the indoor map
       * @param enabled {boolean}
       */
    function (enabled) {
    };
    /**
     * Set true if you want to show the traffic layer
     * @param enabled {boolean}
     */
    /**
       * Set true if you want to show the traffic layer
       * @param enabled {boolean}
       */
    GoogleMap.prototype.setTrafficEnabled = /**
       * Set true if you want to show the traffic layer
       * @param enabled {boolean}
       */
    function (enabled) {
    };
    /**
     * Set true if you want to show the compass button
     * @param enabled {boolean}
     */
    /**
       * Set true if you want to show the compass button
       * @param enabled {boolean}
       */
    GoogleMap.prototype.setCompassEnabled = /**
       * Set true if you want to show the compass button
       * @param enabled {boolean}
       */
    function (enabled) {
    };
    /**
     * Sets the preference for whether all gestures should be enabled or disabled
     * @param enabled {boolean}
     */
    /**
       * Sets the preference for whether all gestures should be enabled or disabled
       * @param enabled {boolean}
       */
    GoogleMap.prototype.setAllGesturesEnabled = /**
       * Sets the preference for whether all gestures should be enabled or disabled
       * @param enabled {boolean}
       */
    function (enabled) {
    };
    /**
     * Set visibility of the map
     * @param visible {boolean}
     */
    /**
       * Set visibility of the map
       * @param visible {boolean}
       */
    GoogleMap.prototype.setVisible = /**
       * Set visibility of the map
       * @param visible {boolean}
       */
    function (visible) {
    };
    /**
     * Adjust the map padding (same as CSS padding rule)
     * @param top {number}
     * @param right {number}
     * @param left {number}
     * @param bottom {number}
     */
    /**
       * Adjust the map padding (same as CSS padding rule)
       * @param top {number}
       * @param right {number}
       * @param left {number}
       * @param bottom {number}
       */
    GoogleMap.prototype.setPadding = /**
       * Adjust the map padding (same as CSS padding rule)
       * @param top {number}
       * @param right {number}
       * @param left {number}
       * @param bottom {number}
       */
    function (top, right, bottom, left) { };
    /**
     * Set options
     * @param options
     */
    /**
       * Set options
       * @param options
       */
    GoogleMap.prototype.setOptions = /**
       * Set options
       * @param options
       */
    function (options) {
    };
    /**
     * Adds a marker
     * @param options {MarkerOptions} options
     * @return {Promise<Marker>}
     */
    /**
       * Adds a marker
       * @param options {MarkerOptions} options
       * @return {Promise<Marker>}
       */
    GoogleMap.prototype.addMarker = /**
       * Adds a marker
       * @param options {MarkerOptions} options
       * @return {Promise<Marker>}
       */
    function (options) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this._objectInstance.addMarker(options, function (marker) {
                if (marker) {
                    var overlayId_1 = marker.getId();
                    var overlay_1 = new Marker(_this, marker);
                    _this.get('_overlays')[overlayId_1] = overlay_1;
                    marker.one(overlayId_1 + '_remove', function () {
                        if (_this.get('_overlays')) {
                            _this.get('_overlays')[overlayId_1] = null;
                            overlay_1.destroy();
                        }
                    });
                    resolve(overlay_1);
                }
                else {
                    reject();
                }
            });
        });
    };
    /**
     * Adds a marker in synchronous
     * @param options {MarkerOptions} options
     * @Returns {Marker}
     */
    /**
       * Adds a marker in synchronous
       * @param options {MarkerOptions} options
       * @Returns {Marker}
       */
    GoogleMap.prototype.addMarkerSync = /**
       * Adds a marker in synchronous
       * @param options {MarkerOptions} options
       * @Returns {Marker}
       */
    function (options) {
        var _this = this;
        var marker = this._objectInstance.addMarker(options);
        var overlayId = marker.getId();
        var overlay = new Marker(this, marker);
        this.get('_overlays')[overlayId] = overlay;
        marker.one(overlayId + '_remove', function () {
            if (_this.get('_overlays')) {
                _this.get('_overlays')[overlayId] = null;
                overlay.destroy();
            }
        });
        return overlay;
    };
    /**
     * Adds a marker cluster
     * @param options {MarkerClusterOptions} options
     * @return {Promise<MarkerCluster>}
     */
    /**
       * Adds a marker cluster
       * @param options {MarkerClusterOptions} options
       * @return {Promise<MarkerCluster>}
       */
    GoogleMap.prototype.addMarkerCluster = /**
       * Adds a marker cluster
       * @param options {MarkerClusterOptions} options
       * @return {Promise<MarkerCluster>}
       */
    function (options) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this._objectInstance.addMarkerCluster(options, function (markerCluster) {
                if (markerCluster) {
                    var overlayId_2 = markerCluster.getId();
                    var overlay_2 = new MarkerCluster(_this, markerCluster);
                    _this.get('_overlays')[overlayId_2] = overlay_2;
                    markerCluster.one('remove', function () {
                        if (_this.get('_overlays')) {
                            _this.get('_overlays')[overlayId_2] = null;
                            overlay_2.destroy();
                        }
                    });
                    markerCluster.set('_overlays', new BaseArrayClass());
                    resolve(overlay_2);
                }
                else {
                    reject();
                }
            });
        });
    };
    /**
     * Adds a marker cluster in synchronous
     * @param options {MarkerClusterOptions} options
     * @Returns {MarkerCluster}
     */
    /**
       * Adds a marker cluster in synchronous
       * @param options {MarkerClusterOptions} options
       * @Returns {MarkerCluster}
       */
    GoogleMap.prototype.addMarkerClusterSync = /**
       * Adds a marker cluster in synchronous
       * @param options {MarkerClusterOptions} options
       * @Returns {MarkerCluster}
       */
    function (options) {
        var _this = this;
        var markerCluster = this._objectInstance.addMarkerCluster(options);
        var overlayId = markerCluster.getId();
        var overlay = new MarkerCluster(this, markerCluster);
        this.get('_overlays')[overlayId] = overlay;
        markerCluster.one(overlayId + '_remove', function () {
            if (_this.get('_overlays')) {
                _this.get('_overlays')[overlayId] = null;
                overlay.destroy();
            }
        });
        markerCluster.set('_overlays', new BaseArrayClass());
        return overlay;
    };
    /**
     * Adds a circle
     * @param options {CircleOptions} options
     * @return {Promise<Circle>}
     */
    /**
       * Adds a circle
       * @param options {CircleOptions} options
       * @return {Promise<Circle>}
       */
    GoogleMap.prototype.addCircle = /**
       * Adds a circle
       * @param options {CircleOptions} options
       * @return {Promise<Circle>}
       */
    function (options) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this._objectInstance.addCircle(options, function (circle) {
                if (circle) {
                    var overlayId_3 = circle.getId();
                    var overlay_3 = new Circle(_this, circle);
                    _this.get('_overlays')[overlayId_3] = overlay_3;
                    circle.one(overlayId_3 + '_remove', function () {
                        if (_this.get('_overlays')) {
                            _this.get('_overlays')[overlayId_3] = null;
                            overlay_3.destroy();
                        }
                    });
                    resolve(overlay_3);
                }
                else {
                    reject();
                }
            });
        });
    };
    /**
     * Adds a circle in synchronous
     * @param options {CircleOptions} options
     * @return {Circle}
     */
    /**
       * Adds a circle in synchronous
       * @param options {CircleOptions} options
       * @return {Circle}
       */
    GoogleMap.prototype.addCircleSync = /**
       * Adds a circle in synchronous
       * @param options {CircleOptions} options
       * @return {Circle}
       */
    function (options) {
        var _this = this;
        var circle = this._objectInstance.addCircle(options);
        var overlayId = circle.getId();
        var overlay = new Circle(this, circle);
        this.get('_overlays')[overlayId] = overlay;
        circle.one(overlayId + '_remove', function () {
            if (_this.get('_overlays')) {
                _this.get('_overlays')[overlayId] = null;
                overlay.destroy();
            }
        });
        return overlay;
    };
    /**
     * Adds a polygon
     * @param options {PolygonOptions} options
     * @return {Promise<Polygon>}
     */
    /**
       * Adds a polygon
       * @param options {PolygonOptions} options
       * @return {Promise<Polygon>}
       */
    GoogleMap.prototype.addPolygon = /**
       * Adds a polygon
       * @param options {PolygonOptions} options
       * @return {Promise<Polygon>}
       */
    function (options) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this._objectInstance.addPolygon(options, function (polygon) {
                if (polygon) {
                    var overlayId_4 = polygon.getId();
                    var overlay_4 = new Polygon(_this, polygon);
                    _this.get('_overlays')[overlayId_4] = overlay_4;
                    polygon.one(overlayId_4 + '_remove', function () {
                        if (_this.get('_overlays')) {
                            _this.get('_overlays')[overlayId_4] = null;
                            overlay_4.destroy();
                        }
                    });
                    resolve(overlay_4);
                }
                else {
                    reject();
                }
            });
        });
    };
    /**
     * Adds a polygon in synchronous
     * @param options {PolygonOptions} options
     * @return {Polygon}
     */
    /**
       * Adds a polygon in synchronous
       * @param options {PolygonOptions} options
       * @return {Polygon}
       */
    GoogleMap.prototype.addPolygonSync = /**
       * Adds a polygon in synchronous
       * @param options {PolygonOptions} options
       * @return {Polygon}
       */
    function (options) {
        var _this = this;
        var polygon = this._objectInstance.addPolygon(options);
        var overlayId = polygon.getId();
        var overlay = new Polygon(this, polygon);
        this.get('_overlays')[overlayId] = overlay;
        polygon.one(overlayId + '_remove', function () {
            if (_this.get('_overlays')) {
                _this.get('_overlays')[overlayId] = null;
                overlay.destroy();
            }
        });
        return overlay;
    };
    /**
     * Adds a polyline
     * @param options {PolylineOptions} options
     * @return {Promise<Polyline>}
     */
    /**
       * Adds a polyline
       * @param options {PolylineOptions} options
       * @return {Promise<Polyline>}
       */
    GoogleMap.prototype.addPolyline = /**
       * Adds a polyline
       * @param options {PolylineOptions} options
       * @return {Promise<Polyline>}
       */
    function (options) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this._objectInstance.addPolyline(options, function (polyline) {
                if (polyline) {
                    var overlayId_5 = polyline.getId();
                    var overlay_5 = new Polyline(_this, polyline);
                    _this.get('_overlays')[overlayId_5] = overlay_5;
                    polyline.one(overlayId_5 + '_remove', function () {
                        if (_this.get('_overlays')) {
                            _this.get('_overlays')[overlayId_5] = null;
                            overlay_5.destroy();
                        }
                    });
                    resolve(overlay_5);
                }
                else {
                    reject();
                }
            });
        });
    };
    /**
     * Adds a polyline in synchronous
     * @param options {PolylineOptions} options
     * @return {Polyline}
     */
    /**
       * Adds a polyline in synchronous
       * @param options {PolylineOptions} options
       * @return {Polyline}
       */
    GoogleMap.prototype.addPolylineSync = /**
       * Adds a polyline in synchronous
       * @param options {PolylineOptions} options
       * @return {Polyline}
       */
    function (options) {
        var _this = this;
        var polyline = this._objectInstance.addPolyline(options);
        var overlayId = polyline.getId();
        var overlay = new Polyline(this, polyline);
        this.get('_overlays')[overlayId] = overlay;
        polyline.one(overlayId + '_remove', function () {
            if (_this.get('_overlays')) {
                _this.get('_overlays')[overlayId] = null;
                overlay.destroy();
            }
        });
        return overlay;
    };
    /**
     * Adds a tile overlay
     * @param options {TileOverlayOptions} options
     * @return {Promise<TileOverlay>}
     */
    /**
       * Adds a tile overlay
       * @param options {TileOverlayOptions} options
       * @return {Promise<TileOverlay>}
       */
    GoogleMap.prototype.addTileOverlay = /**
       * Adds a tile overlay
       * @param options {TileOverlayOptions} options
       * @return {Promise<TileOverlay>}
       */
    function (options) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this._objectInstance.addTileOverlay(options, function (tileOverlay) {
                if (tileOverlay) {
                    var overlayId_6 = tileOverlay.getId();
                    var overlay_6 = new TileOverlay(_this, tileOverlay);
                    _this.get('_overlays')[overlayId_6] = overlay_6;
                    tileOverlay.one(overlayId_6 + '_remove', function () {
                        if (_this.get('_overlays')) {
                            _this.get('_overlays')[overlayId_6] = null;
                            overlay_6.destroy();
                        }
                    });
                    resolve(overlay_6);
                }
                else {
                    reject();
                }
            });
        });
    };
    /**
     * Adds a tile overlay in synchronous
     * @param options {TileOverlayOptions} options
     * @return {TileOverlay}
     */
    /**
       * Adds a tile overlay in synchronous
       * @param options {TileOverlayOptions} options
       * @return {TileOverlay}
       */
    GoogleMap.prototype.addTileOverlaySync = /**
       * Adds a tile overlay in synchronous
       * @param options {TileOverlayOptions} options
       * @return {TileOverlay}
       */
    function (options) {
        var _this = this;
        var tileOverlay = this._objectInstance.addTileOverlay(options);
        var overlayId = tileOverlay.getId();
        var overlay = new TileOverlay(this, tileOverlay);
        this.get('_overlays')[overlayId] = overlay;
        tileOverlay.one(overlayId + '_remove', function () {
            if (_this.get('_overlays')) {
                _this.get('_overlays')[overlayId] = null;
                overlay.destroy();
            }
        });
        return overlay;
    };
    /**
     * Adds a ground overlay
     * @param options {GroundOverlayOptions} options
     * @return {Promise<GroundOverlay>}
     */
    /**
       * Adds a ground overlay
       * @param options {GroundOverlayOptions} options
       * @return {Promise<GroundOverlay>}
       */
    GoogleMap.prototype.addGroundOverlay = /**
       * Adds a ground overlay
       * @param options {GroundOverlayOptions} options
       * @return {Promise<GroundOverlay>}
       */
    function (options) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this._objectInstance.addGroundOverlay(options, function (groundOverlay) {
                if (groundOverlay) {
                    var overlayId_7 = groundOverlay.getId();
                    var overlay_7 = new GroundOverlay(_this, groundOverlay);
                    _this.get('_overlays')[overlayId_7] = overlay_7;
                    groundOverlay.one(overlayId_7 + '_remove', function () {
                        if (_this.get('_overlays')) {
                            _this.get('_overlays')[overlayId_7] = null;
                            overlay_7.destroy();
                        }
                    });
                    resolve(overlay_7);
                }
                else {
                    reject();
                }
            });
        });
    };
    /**
     * Adds a ground overlay in synchronous
     * @param options {GroundOverlayOptions} options
     * @return {GroundOverlay}
     */
    /**
       * Adds a ground overlay in synchronous
       * @param options {GroundOverlayOptions} options
       * @return {GroundOverlay}
       */
    GoogleMap.prototype.addGroundOverlaySync = /**
       * Adds a ground overlay in synchronous
       * @param options {GroundOverlayOptions} options
       * @return {GroundOverlay}
       */
    function (options) {
        var _this = this;
        var groundOverlay = this._objectInstance.addGroundOverlay(options);
        var overlayId = groundOverlay.getId();
        var overlay = new GroundOverlay(this, groundOverlay);
        this.get('_overlays')[overlayId] = overlay;
        groundOverlay.one(overlayId + '_remove', function () {
            if (_this.get('_overlays')) {
                _this.get('_overlays')[overlayId] = null;
                overlay.destroy();
            }
        });
        return overlay;
    };
    /**
     * Adds a kml overlay
     * @param options {KmlOverlayOptions} options
     * @return {Promise<KmlOverlay>}
     */
    /**
       * Adds a kml overlay
       * @param options {KmlOverlayOptions} options
       * @return {Promise<KmlOverlay>}
       */
    GoogleMap.prototype.addKmlOverlay = /**
       * Adds a kml overlay
       * @param options {KmlOverlayOptions} options
       * @return {Promise<KmlOverlay>}
       */
    function (options) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this._objectInstance.addKmlOverlay(options, function (kmlOverlay) {
                if (kmlOverlay) {
                    var overlayId_8 = kmlOverlay.getId();
                    var overlay_8 = new KmlOverlay(_this, kmlOverlay);
                    _this.get('_overlays')[overlayId_8] = overlay_8;
                    kmlOverlay.one(overlayId_8 + '_remove', function () {
                        if (_this.get('_overlays')) {
                            _this.get('_overlays')[overlayId_8] = null;
                            overlay_8.destroy();
                        }
                    });
                    resolve(overlay_8);
                }
                else {
                    reject();
                }
            });
        });
    };
    /**
     * Returns the base64 encoded screen capture of the map.
     * @param options {ToDataUrlOptions} [options] options
     * @return {Promise<string>}
     */
    /**
       * Returns the base64 encoded screen capture of the map.
       * @param options {ToDataUrlOptions} [options] options
       * @return {Promise<string>}
       */
    GoogleMap.prototype.toDataURL = /**
       * Returns the base64 encoded screen capture of the map.
       * @param options {ToDataUrlOptions} [options] options
       * @return {Promise<string>}
       */
    function (options) { return; };
    __decorate([
        InstanceCheck(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], GoogleMap.prototype, "setDiv", null);
    __decorate([
        CordovaInstance({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", HTMLElement)
    ], GoogleMap.prototype, "getDiv", null);
    __decorate([
        CordovaInstance({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", void 0)
    ], GoogleMap.prototype, "setMapTypeId", null);
    __decorate([
        CordovaInstance(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], GoogleMap.prototype, "animateCamera", null);
    __decorate([
        CordovaInstance(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], GoogleMap.prototype, "animateCameraZoomIn", null);
    __decorate([
        CordovaInstance(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], GoogleMap.prototype, "animateCameraZoomOut", null);
    __decorate([
        CordovaInstance(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], GoogleMap.prototype, "moveCamera", null);
    __decorate([
        CordovaInstance(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], GoogleMap.prototype, "moveCameraZoomIn", null);
    __decorate([
        CordovaInstance(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], GoogleMap.prototype, "moveCameraZoomOut", null);
    __decorate([
        CordovaInstance({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Object)
    ], GoogleMap.prototype, "getCameraPosition", null);
    __decorate([
        CordovaInstance({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Object)
    ], GoogleMap.prototype, "getCameraTarget", null);
    __decorate([
        CordovaInstance({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Number)
    ], GoogleMap.prototype, "getCameraZoom", null);
    __decorate([
        CordovaInstance({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Number)
    ], GoogleMap.prototype, "getCameraBearing", null);
    __decorate([
        CordovaInstance({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Number)
    ], GoogleMap.prototype, "getCameraTilt", null);
    __decorate([
        CordovaInstance({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], GoogleMap.prototype, "setCameraTarget", null);
    __decorate([
        CordovaInstance({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", void 0)
    ], GoogleMap.prototype, "setCameraZoom", null);
    __decorate([
        CordovaInstance({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", void 0)
    ], GoogleMap.prototype, "setCameraTilt", null);
    __decorate([
        CordovaInstance({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], GoogleMap.prototype, "setCameraBearing", null);
    __decorate([
        CordovaInstance({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number, Number]),
        __metadata("design:returntype", void 0)
    ], GoogleMap.prototype, "panBy", null);
    __decorate([
        CordovaInstance({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", VisibleRegion)
    ], GoogleMap.prototype, "getVisibleRegion", null);
    __decorate([
        CordovaInstance(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], GoogleMap.prototype, "getMyLocation", null);
    __decorate([
        CordovaInstance({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Boolean]),
        __metadata("design:returntype", void 0)
    ], GoogleMap.prototype, "setClickable", null);
    __decorate([
        CordovaInstance(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], GoogleMap.prototype, "remove", null);
    __decorate([
        InstanceCheck(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], GoogleMap.prototype, "clear", null);
    __decorate([
        CordovaInstance(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], GoogleMap.prototype, "fromLatLngToPoint", null);
    __decorate([
        CordovaInstance(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Array]),
        __metadata("design:returntype", Promise)
    ], GoogleMap.prototype, "fromPointToLatLng", null);
    __decorate([
        CordovaInstance({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Boolean]),
        __metadata("design:returntype", void 0)
    ], GoogleMap.prototype, "setMyLocationEnabled", null);
    __decorate([
        CordovaInstance({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Boolean]),
        __metadata("design:returntype", void 0)
    ], GoogleMap.prototype, "setMyLocationButtonEnabled", null);
    __decorate([
        CordovaInstance(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], GoogleMap.prototype, "getFocusedBuilding", null);
    __decorate([
        CordovaInstance({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Boolean]),
        __metadata("design:returntype", void 0)
    ], GoogleMap.prototype, "setIndoorEnabled", null);
    __decorate([
        CordovaInstance({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Boolean]),
        __metadata("design:returntype", void 0)
    ], GoogleMap.prototype, "setTrafficEnabled", null);
    __decorate([
        CordovaInstance({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Boolean]),
        __metadata("design:returntype", void 0)
    ], GoogleMap.prototype, "setCompassEnabled", null);
    __decorate([
        CordovaInstance({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Boolean]),
        __metadata("design:returntype", void 0)
    ], GoogleMap.prototype, "setAllGesturesEnabled", null);
    __decorate([
        CordovaInstance({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Boolean]),
        __metadata("design:returntype", void 0)
    ], GoogleMap.prototype, "setVisible", null);
    __decorate([
        CordovaInstance({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number, Number, Number, Number]),
        __metadata("design:returntype", void 0)
    ], GoogleMap.prototype, "setPadding", null);
    __decorate([
        CordovaInstance({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], GoogleMap.prototype, "setOptions", null);
    __decorate([
        InstanceCheck(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], GoogleMap.prototype, "addMarker", null);
    __decorate([
        InstanceCheck(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Marker)
    ], GoogleMap.prototype, "addMarkerSync", null);
    __decorate([
        InstanceCheck(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], GoogleMap.prototype, "addMarkerCluster", null);
    __decorate([
        InstanceCheck(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", MarkerCluster)
    ], GoogleMap.prototype, "addMarkerClusterSync", null);
    __decorate([
        InstanceCheck(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], GoogleMap.prototype, "addCircle", null);
    __decorate([
        InstanceCheck(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Circle)
    ], GoogleMap.prototype, "addCircleSync", null);
    __decorate([
        InstanceCheck(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], GoogleMap.prototype, "addPolygon", null);
    __decorate([
        InstanceCheck(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Polygon)
    ], GoogleMap.prototype, "addPolygonSync", null);
    __decorate([
        InstanceCheck(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], GoogleMap.prototype, "addPolyline", null);
    __decorate([
        InstanceCheck(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Polyline)
    ], GoogleMap.prototype, "addPolylineSync", null);
    __decorate([
        InstanceCheck(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], GoogleMap.prototype, "addTileOverlay", null);
    __decorate([
        InstanceCheck(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", TileOverlay)
    ], GoogleMap.prototype, "addTileOverlaySync", null);
    __decorate([
        InstanceCheck(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], GoogleMap.prototype, "addGroundOverlay", null);
    __decorate([
        InstanceCheck(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", GroundOverlay)
    ], GoogleMap.prototype, "addGroundOverlaySync", null);
    __decorate([
        InstanceCheck(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], GoogleMap.prototype, "addKmlOverlay", null);
    __decorate([
        CordovaInstance(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], GoogleMap.prototype, "toDataURL", null);
    /**
     * @hidden
     */
    GoogleMap = __decorate([
        Plugin({
            pluginName: 'GoogleMaps',
            plugin: 'cordova-plugin-googlemaps'
        }),
        __metadata("design:paramtypes", [Object, Object])
    ], GoogleMap);
    return GoogleMap;
}(BaseClass));
export { GoogleMap };
/**
 * @hidden
 */
var GroundOverlay = (function (_super) {
    __extends(GroundOverlay, _super);
    function GroundOverlay(_map, _objectInstance) {
        var _this = _super.call(this, _objectInstance) || this;
        _this._map = _map;
        return _this;
    }
    /**
     * Returns the ID of instance.
     * @return {string}
     */
    /**
       * Returns the ID of instance.
       * @return {string}
       */
    GroundOverlay.prototype.getId = /**
       * Returns the ID of instance.
       * @return {string}
       */
    function () {
        return;
    };
    /**
     * Returns the map instance.
     * @return {GoogleMap}
     */
    /**
       * Returns the map instance.
       * @return {GoogleMap}
       */
    GroundOverlay.prototype.getMap = /**
       * Returns the map instance.
       * @return {GoogleMap}
       */
    function () {
        return this._map;
    };
    /**
     * Changes the bounds of the GroundOverlay
     * @param bounds { ILatLng[]}
     */
    /**
       * Changes the bounds of the GroundOverlay
       * @param bounds { ILatLng[]}
       */
    GroundOverlay.prototype.setBounds = /**
       * Changes the bounds of the GroundOverlay
       * @param bounds { ILatLng[]}
       */
    function (bounds) {
    };
    /**
     * Changes the bearing of the ground overlay
     * @param bearing {number}
     */
    /**
       * Changes the bearing of the ground overlay
       * @param bearing {number}
       */
    GroundOverlay.prototype.setBearing = /**
       * Changes the bearing of the ground overlay
       * @param bearing {number}
       */
    function (bearing) {
    };
    /**
     * Returns the current bearing value
     */
    /**
       * Returns the current bearing value
       */
    GroundOverlay.prototype.getBearing = /**
       * Returns the current bearing value
       */
    function () {
        return;
    };
    /**
     * Changes the image of the ground overlay
     * @param imageUrl {string} URL of image
     */
    /**
       * Changes the image of the ground overlay
       * @param imageUrl {string} URL of image
       */
    GroundOverlay.prototype.setImage = /**
       * Changes the image of the ground overlay
       * @param imageUrl {string} URL of image
       */
    function (imageUrl) { };
    /**
     * Changes the opacity of the ground overlay from 0.0 to 1.0
     * @param opacity {number}
     */
    /**
       * Changes the opacity of the ground overlay from 0.0 to 1.0
       * @param opacity {number}
       */
    GroundOverlay.prototype.setOpacity = /**
       * Changes the opacity of the ground overlay from 0.0 to 1.0
       * @param opacity {number}
       */
    function (opacity) {
    };
    /**
     * Returns the current opacity
     * @return {number}
     */
    /**
       * Returns the current opacity
       * @return {number}
       */
    GroundOverlay.prototype.getOpacity = /**
       * Returns the current opacity
       * @return {number}
       */
    function () {
        return;
    };
    /**
     * Changes click-ability of the ground overlay
     * @param clickable {boolean}
     */
    /**
       * Changes click-ability of the ground overlay
       * @param clickable {boolean}
       */
    GroundOverlay.prototype.setClickable = /**
       * Changes click-ability of the ground overlay
       * @param clickable {boolean}
       */
    function (clickable) {
    };
    /**
     * Returns true if the ground overlay is clickable
     * @return {boolean}
     */
    /**
       * Returns true if the ground overlay is clickable
       * @return {boolean}
       */
    GroundOverlay.prototype.getClickable = /**
       * Returns true if the ground overlay is clickable
       * @return {boolean}
       */
    function () {
        return;
    };
    /**
     * Changes visibility of the ground overlay
     * @param visible {boolean}
     */
    /**
       * Changes visibility of the ground overlay
       * @param visible {boolean}
       */
    GroundOverlay.prototype.setVisible = /**
       * Changes visibility of the ground overlay
       * @param visible {boolean}
       */
    function (visible) {
    };
    /**
     * Returns true if the ground overlay is visible
     * @return {boolean}
     */
    /**
       * Returns true if the ground overlay is visible
       * @return {boolean}
       */
    GroundOverlay.prototype.getVisible = /**
       * Returns true if the ground overlay is visible
       * @return {boolean}
       */
    function () {
        return;
    };
    /**
     * Changes the ground overlay zIndex order
     * @param index {number}
     */
    /**
       * Changes the ground overlay zIndex order
       * @param index {number}
       */
    GroundOverlay.prototype.setZIndex = /**
       * Changes the ground overlay zIndex order
       * @param index {number}
       */
    function (index) {
    };
    /**
     * Returns the current ground overlay zIndex
     * @return {number}
     */
    /**
       * Returns the current ground overlay zIndex
       * @return {number}
       */
    GroundOverlay.prototype.getZIndex = /**
       * Returns the current ground overlay zIndex
       * @return {number}
       */
    function () {
        return;
    };
    /**
     * Remove the ground overlay
     */
    /**
       * Remove the ground overlay
       */
    GroundOverlay.prototype.remove = /**
       * Remove the ground overlay
       */
    function () {
        delete this._objectInstance.getMap().get('_overlays')[this.getId()];
        this._objectInstance.remove();
        this.destroy();
    };
    __decorate([
        CordovaInstance({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", String)
    ], GroundOverlay.prototype, "getId", null);
    __decorate([
        CordovaInstance({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Array]),
        __metadata("design:returntype", void 0)
    ], GroundOverlay.prototype, "setBounds", null);
    __decorate([
        CordovaInstance({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", void 0)
    ], GroundOverlay.prototype, "setBearing", null);
    __decorate([
        CordovaInstance({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Number)
    ], GroundOverlay.prototype, "getBearing", null);
    __decorate([
        CordovaInstance({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", void 0)
    ], GroundOverlay.prototype, "setImage", null);
    __decorate([
        CordovaInstance({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", void 0)
    ], GroundOverlay.prototype, "setOpacity", null);
    __decorate([
        CordovaInstance({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Number)
    ], GroundOverlay.prototype, "getOpacity", null);
    __decorate([
        CordovaInstance({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Boolean]),
        __metadata("design:returntype", void 0)
    ], GroundOverlay.prototype, "setClickable", null);
    __decorate([
        CordovaInstance({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Boolean)
    ], GroundOverlay.prototype, "getClickable", null);
    __decorate([
        CordovaInstance({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Boolean]),
        __metadata("design:returntype", void 0)
    ], GroundOverlay.prototype, "setVisible", null);
    __decorate([
        CordovaInstance({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Boolean)
    ], GroundOverlay.prototype, "getVisible", null);
    __decorate([
        CordovaInstance({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", void 0)
    ], GroundOverlay.prototype, "setZIndex", null);
    __decorate([
        CordovaInstance({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Number)
    ], GroundOverlay.prototype, "getZIndex", null);
    __decorate([
        CordovaInstance(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], GroundOverlay.prototype, "remove", null);
    return GroundOverlay;
}(BaseClass));
export { GroundOverlay };
/**
 * @hidden
 */
var HtmlInfoWindow = (function (_super) {
    __extends(HtmlInfoWindow, _super);
    function HtmlInfoWindow() {
        return _super.call(this, new (GoogleMaps.getPlugin().HtmlInfoWindow)()) || this;
    }
    /**
     * Changes the backgroundColor
     * @param color {string}
     */
    /**
       * Changes the backgroundColor
       * @param color {string}
       */
    HtmlInfoWindow.prototype.setBackgroundColor = /**
       * Changes the backgroundColor
       * @param color {string}
       */
    function (color) {
    };
    /**
     * Set your HTML contents.
     * @param content {any} String containing text or HTML element
     * @param cssOptions? {any} CSS styles for the container element of HTMLInfoWindow
     */
    /**
       * Set your HTML contents.
       * @param content {any} String containing text or HTML element
       * @param cssOptions? {any} CSS styles for the container element of HTMLInfoWindow
       */
    HtmlInfoWindow.prototype.setContent = /**
       * Set your HTML contents.
       * @param content {any} String containing text or HTML element
       * @param cssOptions? {any} CSS styles for the container element of HTMLInfoWindow
       */
    function (content, cssOptions) {
    };
    /**
     * Open the htmlInfoWindow
     * @param marker {Marker}
     */
    /**
       * Open the htmlInfoWindow
       * @param marker {Marker}
       */
    HtmlInfoWindow.prototype.open = /**
       * Open the htmlInfoWindow
       * @param marker {Marker}
       */
    function (marker) {
    };
    /**
     * Close the htmlInfoWindow
     */
    /**
       * Close the htmlInfoWindow
       */
    HtmlInfoWindow.prototype.close = /**
       * Close the htmlInfoWindow
       */
    function () {
    };
    __decorate([
        CordovaInstance(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", void 0)
    ], HtmlInfoWindow.prototype, "setBackgroundColor", null);
    __decorate([
        CordovaInstance(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", void 0)
    ], HtmlInfoWindow.prototype, "setContent", null);
    __decorate([
        CordovaInstance(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Object)
    ], HtmlInfoWindow.prototype, "open", null);
    __decorate([
        CordovaInstance(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], HtmlInfoWindow.prototype, "close", null);
    /**
     * @hidden
     */
    HtmlInfoWindow = __decorate([
        Plugin({
            plugin: 'cordova-plugin-googlemaps',
            pluginName: 'GoogleMaps',
            pluginRef: 'plugin.google.maps.HtmlInfoWindow',
            repo: ''
        }),
        __metadata("design:paramtypes", [])
    ], HtmlInfoWindow);
    return HtmlInfoWindow;
}(BaseClass));
export { HtmlInfoWindow };
/**
 * @hidden
 */
var Marker = (function (_super) {
    __extends(Marker, _super);
    function Marker(_map, _objectInstance) {
        var _this = _super.call(this, _objectInstance) || this;
        _this._map = _map;
        return _this;
    }
    /**
     * Returns the ID of instance.
     * @return {string}
     */
    /**
       * Returns the ID of instance.
       * @return {string}
       */
    Marker.prototype.getId = /**
       * Returns the ID of instance.
       * @return {string}
       */
    function () {
        return;
    };
    /**
     * Returns the map instance.
     * @return {GoogleMap}
     */
    /**
       * Returns the map instance.
       * @return {GoogleMap}
       */
    Marker.prototype.getMap = /**
       * Returns the map instance.
       * @return {GoogleMap}
       */
    function () {
        return this._map;
    };
    /**
     * Set the marker position.
     * @param latLng {ILatLng}
     */
    /**
       * Set the marker position.
       * @param latLng {ILatLng}
       */
    Marker.prototype.setPosition = /**
       * Set the marker position.
       * @param latLng {ILatLng}
       */
    function (latLng) {
        return;
    };
    /**
     * Returns the marker position.
     * @return {ILatLng}
     */
    /**
       * Returns the marker position.
       * @return {ILatLng}
       */
    Marker.prototype.getPosition = /**
       * Returns the marker position.
       * @return {ILatLng}
       */
    function () {
        return;
    };
    /**
     * Show the normal infoWindow of the marker.
     */
    /**
       * Show the normal infoWindow of the marker.
       */
    Marker.prototype.showInfoWindow = /**
       * Show the normal infoWindow of the marker.
       */
    function () {
    };
    /**
     * Hide the normal infoWindow of the marker.
     */
    /**
       * Hide the normal infoWindow of the marker.
       */
    Marker.prototype.hideInfoWindow = /**
       * Hide the normal infoWindow of the marker.
       */
    function () {
    };
    /**
     * Specify the animation either `DROP` or `BOUNCE`
     * @param animation {string}
     */
    /**
       * Specify the animation either `DROP` or `BOUNCE`
       * @param animation {string}
       */
    Marker.prototype.setAnimation = /**
       * Specify the animation either `DROP` or `BOUNCE`
       * @param animation {string}
       */
    function (animation) {
    };
    /**
     * Set true if you **do not want** to move the map when you click on the marker.
     * @param disableAutoPan {boolean}
     */
    /**
       * Set true if you **do not want** to move the map when you click on the marker.
       * @param disableAutoPan {boolean}
       */
    Marker.prototype.setDisableAutoPan = /**
       * Set true if you **do not want** to move the map when you click on the marker.
       * @param disableAutoPan {boolean}
       */
    function (disableAutoPan) {
    };
    /**
     * Set false if you want to hide the marker.
     * @param visible
     */
    /**
       * Set false if you want to hide the marker.
       * @param visible
       */
    Marker.prototype.setVisible = /**
       * Set false if you want to hide the marker.
       * @param visible
       */
    function (visible) {
    };
    /**
     * Returns true if the marker is visible
     */
    /**
       * Returns true if the marker is visible
       */
    Marker.prototype.isVisible = /**
       * Returns true if the marker is visible
       */
    function () {
        return;
    };
    /**
     * Changes title of the normal infoWindow.
     * @param title {string}
     */
    /**
       * Changes title of the normal infoWindow.
       * @param title {string}
       */
    Marker.prototype.setTitle = /**
       * Changes title of the normal infoWindow.
       * @param title {string}
       */
    function (title) {
    };
    /**
     * Returns the title strings.
     * @return {string}
     */
    /**
       * Returns the title strings.
       * @return {string}
       */
    Marker.prototype.getTitle = /**
       * Returns the title strings.
       * @return {string}
       */
    function () {
        return;
    };
    /**
     * Changes snippet of the normal infoWindow.
     * @param snippet {string}
     */
    /**
       * Changes snippet of the normal infoWindow.
       * @param snippet {string}
       */
    Marker.prototype.setSnippet = /**
       * Changes snippet of the normal infoWindow.
       * @param snippet {string}
       */
    function (snippet) {
    };
    /**
     * Returns the snippet strings.
     * @return {string}
     */
    /**
       * Returns the snippet strings.
       * @return {string}
       */
    Marker.prototype.getSnippet = /**
       * Returns the snippet strings.
       * @return {string}
       */
    function () {
        return;
    };
    /**
     * Changes the marker opacity from 0.0 to 1.0.
     * @param alpha {number} Opacity
     */
    /**
       * Changes the marker opacity from 0.0 to 1.0.
       * @param alpha {number} Opacity
       */
    Marker.prototype.setOpacity = /**
       * Changes the marker opacity from 0.0 to 1.0.
       * @param alpha {number} Opacity
       */
    function (alpha) {
    };
    /**
     * Returns the marker opacity.
     * @return {number} Opacity
     */
    /**
       * Returns the marker opacity.
       * @return {number} Opacity
       */
    Marker.prototype.getOpacity = /**
       * Returns the marker opacity.
       * @return {number} Opacity
       */
    function () {
        return;
    };
    /**
     * Remove the marker.
     */
    /**
       * Remove the marker.
       */
    Marker.prototype.remove = /**
       * Remove the marker.
       */
    function () {
        delete this._objectInstance.getMap().get('_overlays')[this.getId()];
        this._objectInstance.remove();
        this.destroy();
    };
    /**
     * Changes the info window anchor. This defaults to 50% from the left of the image and at the bottom of the image.
     * @param x {number} Distance from left of the icon image in pixels.
     * @param y {number} Distance from top of the icon image in pixels.
     */
    /**
       * Changes the info window anchor. This defaults to 50% from the left of the image and at the bottom of the image.
       * @param x {number} Distance from left of the icon image in pixels.
       * @param y {number} Distance from top of the icon image in pixels.
       */
    Marker.prototype.setIconAnchor = /**
       * Changes the info window anchor. This defaults to 50% from the left of the image and at the bottom of the image.
       * @param x {number} Distance from left of the icon image in pixels.
       * @param y {number} Distance from top of the icon image in pixels.
       */
    function (x, y) {
    };
    /**
     * Changes the info window anchor. This defaults to 50% from the left of the image and at the top of the image.
     * @param x {number} Distance from left of the icon image in pixels.
     * @param y {number} Distance from top of the icon image in pixels.
     */
    /**
       * Changes the info window anchor. This defaults to 50% from the left of the image and at the top of the image.
       * @param x {number} Distance from left of the icon image in pixels.
       * @param y {number} Distance from top of the icon image in pixels.
       */
    Marker.prototype.setInfoWindowAnchor = /**
       * Changes the info window anchor. This defaults to 50% from the left of the image and at the top of the image.
       * @param x {number} Distance from left of the icon image in pixels.
       * @param y {number} Distance from top of the icon image in pixels.
       */
    function (x, y) {
    };
    /**
     * Returns true if the infoWindow is shown on the marker
     * @return {boolean}
     */
    /**
       * Returns true if the infoWindow is shown on the marker
       * @return {boolean}
       */
    Marker.prototype.isInfoWindowShown = /**
       * Returns true if the infoWindow is shown on the marker
       * @return {boolean}
       */
    function () {
        return;
    };
    /**
     * Higher zIndex value overlays will be drawn on top of lower zIndex value tile layers and overlays.
     * @param y {number} z-index
     */
    /**
       * Higher zIndex value overlays will be drawn on top of lower zIndex value tile layers and overlays.
       * @param y {number} z-index
       */
    Marker.prototype.setZIndex = /**
       * Higher zIndex value overlays will be drawn on top of lower zIndex value tile layers and overlays.
       * @param y {number} z-index
       */
    function (zIndex) {
    };
    /**
     * Get z-index
     * @return {number}
     */
    /**
       * Get z-index
       * @return {number}
       */
    Marker.prototype.getZIndex = /**
       * Get z-index
       * @return {number}
       */
    function () {
        return;
    };
    /**
     * Set true if you allow all users to drag the marker.
     * @param draggable {boolean}
     */
    /**
       * Set true if you allow all users to drag the marker.
       * @param draggable {boolean}
       */
    Marker.prototype.setDraggable = /**
       * Set true if you allow all users to drag the marker.
       * @param draggable {boolean}
       */
    function (draggable) {
    };
    /**
     * Returns true if the marker drag is enabled.
     * @return {boolean}
     */
    /**
       * Returns true if the marker drag is enabled.
       * @return {boolean}
       */
    Marker.prototype.isDraggable = /**
       * Returns true if the marker drag is enabled.
       * @return {boolean}
       */
    function () {
        return;
    };
    /**
     * Set true if you want to be flat marker.
     * @param flat {boolean}
     */
    /**
       * Set true if you want to be flat marker.
       * @param flat {boolean}
       */
    Marker.prototype.setFlat = /**
       * Set true if you want to be flat marker.
       * @param flat {boolean}
       */
    function (flat) {
        return;
    };
    /**
     * Changes icon url and/or size
     * @param icon
     */
    /**
       * Changes icon url and/or size
       * @param icon
       */
    Marker.prototype.setIcon = /**
       * Changes icon url and/or size
       * @param icon
       */
    function (icon) {
        return;
    };
    /**
     * Set the marker rotation angle.
     * @param rotation {number}
     */
    /**
       * Set the marker rotation angle.
       * @param rotation {number}
       */
    Marker.prototype.setRotation = /**
       * Set the marker rotation angle.
       * @param rotation {number}
       */
    function (rotation) {
    };
    /**
     * Returns the marker rotation angle.
     * @return {number}
     */
    /**
       * Returns the marker rotation angle.
       * @return {number}
       */
    Marker.prototype.getRotation = /**
       * Returns the marker rotation angle.
       * @return {number}
       */
    function () {
        return;
    };
    __decorate([
        CordovaInstance({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", String)
    ], Marker.prototype, "getId", null);
    __decorate([
        CordovaInstance({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], Marker.prototype, "setPosition", null);
    __decorate([
        CordovaInstance({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Object)
    ], Marker.prototype, "getPosition", null);
    __decorate([
        CordovaInstance({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], Marker.prototype, "showInfoWindow", null);
    __decorate([
        CordovaInstance({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], Marker.prototype, "hideInfoWindow", null);
    __decorate([
        CordovaInstance({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", void 0)
    ], Marker.prototype, "setAnimation", null);
    __decorate([
        CordovaInstance({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Boolean]),
        __metadata("design:returntype", void 0)
    ], Marker.prototype, "setDisableAutoPan", null);
    __decorate([
        CordovaInstance({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Boolean]),
        __metadata("design:returntype", void 0)
    ], Marker.prototype, "setVisible", null);
    __decorate([
        CordovaInstance({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Boolean)
    ], Marker.prototype, "isVisible", null);
    __decorate([
        CordovaInstance({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", void 0)
    ], Marker.prototype, "setTitle", null);
    __decorate([
        CordovaInstance({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", String)
    ], Marker.prototype, "getTitle", null);
    __decorate([
        CordovaInstance({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", void 0)
    ], Marker.prototype, "setSnippet", null);
    __decorate([
        CordovaInstance({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", String)
    ], Marker.prototype, "getSnippet", null);
    __decorate([
        CordovaInstance({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", void 0)
    ], Marker.prototype, "setOpacity", null);
    __decorate([
        CordovaInstance({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Number)
    ], Marker.prototype, "getOpacity", null);
    __decorate([
        CordovaInstance(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], Marker.prototype, "remove", null);
    __decorate([
        CordovaInstance({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number, Number]),
        __metadata("design:returntype", void 0)
    ], Marker.prototype, "setIconAnchor", null);
    __decorate([
        CordovaInstance({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number, Number]),
        __metadata("design:returntype", void 0)
    ], Marker.prototype, "setInfoWindowAnchor", null);
    __decorate([
        CordovaInstance({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Boolean)
    ], Marker.prototype, "isInfoWindowShown", null);
    __decorate([
        CordovaInstance({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", void 0)
    ], Marker.prototype, "setZIndex", null);
    __decorate([
        CordovaInstance({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Number)
    ], Marker.prototype, "getZIndex", null);
    __decorate([
        CordovaInstance({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Boolean]),
        __metadata("design:returntype", void 0)
    ], Marker.prototype, "setDraggable", null);
    __decorate([
        CordovaInstance({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Boolean)
    ], Marker.prototype, "isDraggable", null);
    __decorate([
        CordovaInstance({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Boolean]),
        __metadata("design:returntype", void 0)
    ], Marker.prototype, "setFlat", null);
    __decorate([
        CordovaInstance({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], Marker.prototype, "setIcon", null);
    __decorate([
        CordovaInstance({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", void 0)
    ], Marker.prototype, "setRotation", null);
    __decorate([
        CordovaInstance({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Number)
    ], Marker.prototype, "getRotation", null);
    return Marker;
}(BaseClass));
export { Marker };
/**
 * @hidden
 */
var MarkerCluster = (function (_super) {
    __extends(MarkerCluster, _super);
    function MarkerCluster(_map, _objectInstance) {
        var _this = _super.call(this, _objectInstance) || this;
        _this._map = _map;
        return _this;
    }
    /**
     * Returns the ID of instance.
     * @return {string}
     */
    /**
       * Returns the ID of instance.
       * @return {string}
       */
    MarkerCluster.prototype.getId = /**
       * Returns the ID of instance.
       * @return {string}
       */
    function () {
        return;
    };
    /**
     * Add one marker location
     * @param marker {MarkerOptions} one location
     * @param skipRedraw? {boolean} marker cluster does not redraw the marker cluster if true.
     */
    /**
       * Add one marker location
       * @param marker {MarkerOptions} one location
       * @param skipRedraw? {boolean} marker cluster does not redraw the marker cluster if true.
       */
    MarkerCluster.prototype.addMarker = /**
       * Add one marker location
       * @param marker {MarkerOptions} one location
       * @param skipRedraw? {boolean} marker cluster does not redraw the marker cluster if true.
       */
    function (marker) {
    };
    /**
     * Add marker locations
     * @param markers {MarkerOptions[]} multiple location
     */
    /**
       * Add marker locations
       * @param markers {MarkerOptions[]} multiple location
       */
    MarkerCluster.prototype.addMarkers = /**
       * Add marker locations
       * @param markers {MarkerOptions[]} multiple location
       */
    function (markers) {
    };
    /**
     * Remove the marker cluster
     */
    /**
       * Remove the marker cluster
       */
    MarkerCluster.prototype.remove = /**
       * Remove the marker cluster
       */
    function () {
        this._objectInstance.set('_overlays', undefined);
        delete this._objectInstance.getMap().get('_overlays')[this.getId()];
        this._objectInstance.remove();
        this.destroy();
    };
    /**
     * Returns the map instance.
     * @return {GoogleMap}
     */
    /**
       * Returns the map instance.
       * @return {GoogleMap}
       */
    MarkerCluster.prototype.getMap = /**
       * Returns the map instance.
       * @return {GoogleMap}
       */
    function () {
        return this._map;
    };
    __decorate([
        CordovaInstance({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", String)
    ], MarkerCluster.prototype, "getId", null);
    __decorate([
        CordovaInstance({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], MarkerCluster.prototype, "addMarker", null);
    __decorate([
        CordovaInstance({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Array]),
        __metadata("design:returntype", void 0)
    ], MarkerCluster.prototype, "addMarkers", null);
    __decorate([
        CordovaInstance(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], MarkerCluster.prototype, "remove", null);
    return MarkerCluster;
}(BaseClass));
export { MarkerCluster };
/**
 * @hidden
 */
var Polygon = (function (_super) {
    __extends(Polygon, _super);
    function Polygon(_map, _objectInstance) {
        var _this = _super.call(this, _objectInstance) || this;
        _this._map = _map;
        return _this;
    }
    /**
     * Returns the ID of instance.
     * @return {string}
     */
    /**
       * Returns the ID of instance.
       * @return {string}
       */
    Polygon.prototype.getId = /**
       * Returns the ID of instance.
       * @return {string}
       */
    function () {
        return;
    };
    /**
     * Returns the map instance.
     * @return {GoogleMap}
     */
    /**
       * Returns the map instance.
       * @return {GoogleMap}
       */
    Polygon.prototype.getMap = /**
       * Returns the map instance.
       * @return {GoogleMap}
       */
    function () {
        return this._map;
    };
    /**
     * Changes the polygon points.
     * @param points {ILatLng[]}
     */
    /**
       * Changes the polygon points.
       * @param points {ILatLng[]}
       */
    Polygon.prototype.setPoints = /**
       * Changes the polygon points.
       * @param points {ILatLng[]}
       */
    function (points) {
    };
    /**
     * Returns an instance of the BaseArrayClass.
     * You can modify the points.
     * @return {BaseArrayClass<ILatLng>}
     */
    /**
       * Returns an instance of the BaseArrayClass.
       * You can modify the points.
       * @return {BaseArrayClass<ILatLng>}
       */
    Polygon.prototype.getPoints = /**
       * Returns an instance of the BaseArrayClass.
       * You can modify the points.
       * @return {BaseArrayClass<ILatLng>}
       */
    function () {
        return new BaseArrayClass(this._objectInstance.getPoints());
    };
    /**
     * Changes the polygon holes.
     * @param holes {ILatLng[][]}
     */
    /**
       * Changes the polygon holes.
       * @param holes {ILatLng[][]}
       */
    Polygon.prototype.setHoles = /**
       * Changes the polygon holes.
       * @param holes {ILatLng[][]}
       */
    function (holes) {
    };
    /**
     * Returns an instance of the BaseArrayClass.
     * You can modify the holes.
     * @return {BaseArrayClass<ILatLng[]>}
     */
    /**
       * Returns an instance of the BaseArrayClass.
       * You can modify the holes.
       * @return {BaseArrayClass<ILatLng[]>}
       */
    Polygon.prototype.getHoles = /**
       * Returns an instance of the BaseArrayClass.
       * You can modify the holes.
       * @return {BaseArrayClass<ILatLng[]>}
       */
    function () {
        var holes = this._objectInstance.getPoints();
        var results = new BaseArrayClass();
        holes.forEach(function (hole) {
            results.push(hole);
        });
        return results;
    };
    /**
     * Changes the filling color (inner color)
     * @param fillColor {string}
     */
    /**
       * Changes the filling color (inner color)
       * @param fillColor {string}
       */
    Polygon.prototype.setFillColor = /**
       * Changes the filling color (inner color)
       * @param fillColor {string}
       */
    function (fillColor) {
    };
    /**
     * Returns the current polygon filling color (inner color).
     * @return {string}
     */
    /**
       * Returns the current polygon filling color (inner color).
       * @return {string}
       */
    Polygon.prototype.getFillColor = /**
       * Returns the current polygon filling color (inner color).
       * @return {string}
       */
    function () {
        return;
    };
    /**
     * Changes the stroke color (outer color)
     * @param strokeColor {string}
     */
    /**
       * Changes the stroke color (outer color)
       * @param strokeColor {string}
       */
    Polygon.prototype.setStrokeColor = /**
       * Changes the stroke color (outer color)
       * @param strokeColor {string}
       */
    function (strokeColor) {
    };
    /**
     * Returns the current polygon stroke color (outer color)
     * @return {string}
     */
    /**
       * Returns the current polygon stroke color (outer color)
       * @return {string}
       */
    Polygon.prototype.getStrokeColor = /**
       * Returns the current polygon stroke color (outer color)
       * @return {string}
       */
    function () {
        return;
    };
    /**
     * Changes click-ability of the polygon
     * @param clickable {boolean}
     */
    /**
       * Changes click-ability of the polygon
       * @param clickable {boolean}
       */
    Polygon.prototype.setClickable = /**
       * Changes click-ability of the polygon
       * @param clickable {boolean}
       */
    function (clickable) {
    };
    /**
     * Returns true if the polygon is clickable
     */
    /**
       * Returns true if the polygon is clickable
       */
    Polygon.prototype.getClickable = /**
       * Returns true if the polygon is clickable
       */
    function () {
        return;
    };
    /**
     * Changes visibility of the polygon
     * @param visible {boolean}
     */
    /**
       * Changes visibility of the polygon
       * @param visible {boolean}
       */
    Polygon.prototype.setVisible = /**
       * Changes visibility of the polygon
       * @param visible {boolean}
       */
    function (visible) {
    };
    /**
     * Returns true if the polygon is visible
     * @return {boolean}
     */
    /**
       * Returns true if the polygon is visible
       * @return {boolean}
       */
    Polygon.prototype.getVisible = /**
       * Returns true if the polygon is visible
       * @return {boolean}
       */
    function () {
        return;
    };
    /**
     * Changes the polygon zIndex order.
     * @param zIndex {number}
     */
    /**
       * Changes the polygon zIndex order.
       * @param zIndex {number}
       */
    Polygon.prototype.setZIndex = /**
       * Changes the polygon zIndex order.
       * @param zIndex {number}
       */
    function (zIndex) {
    };
    /**
     * Returns the current polygon zIndex
     * @return {number}
     */
    /**
       * Returns the current polygon zIndex
       * @return {number}
       */
    Polygon.prototype.getZIndex = /**
       * Returns the current polygon zIndex
       * @return {number}
       */
    function () {
        return;
    };
    /**
     * Remove the polygon.
     */
    /**
       * Remove the polygon.
       */
    Polygon.prototype.remove = /**
       * Remove the polygon.
       */
    function () {
        delete this._objectInstance.getMap().get('_overlays')[this.getId()];
        this._objectInstance.remove();
        this.destroy();
    };
    /**
     * Changes the polygon stroke width
     */
    /**
       * Changes the polygon stroke width
       */
    Polygon.prototype.setStrokeWidth = /**
       * Changes the polygon stroke width
       */
    function (strokeWidth) {
    };
    /**
     * Returns the polygon stroke width
     */
    /**
       * Returns the polygon stroke width
       */
    Polygon.prototype.getStrokeWidth = /**
       * Returns the polygon stroke width
       */
    function () {
        return;
    };
    /**
     * When true, edges of the polygon are interpreted as geodesic and will follow the curvature of the Earth.
     * @param geodesic {boolean}
     */
    /**
       * When true, edges of the polygon are interpreted as geodesic and will follow the curvature of the Earth.
       * @param geodesic {boolean}
       */
    Polygon.prototype.setGeodesic = /**
       * When true, edges of the polygon are interpreted as geodesic and will follow the curvature of the Earth.
       * @param geodesic {boolean}
       */
    function (geodesic) {
    };
    /**
     * Returns true if the polygon is geodesic.
     * @return {boolean}
     */
    /**
       * Returns true if the polygon is geodesic.
       * @return {boolean}
       */
    Polygon.prototype.getGeodesic = /**
       * Returns true if the polygon is geodesic.
       * @return {boolean}
       */
    function () {
        return;
    };
    __decorate([
        CordovaInstance({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", String)
    ], Polygon.prototype, "getId", null);
    __decorate([
        CordovaInstance({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Array]),
        __metadata("design:returntype", void 0)
    ], Polygon.prototype, "setPoints", null);
    __decorate([
        CordovaInstance({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Array]),
        __metadata("design:returntype", void 0)
    ], Polygon.prototype, "setHoles", null);
    __decorate([
        CordovaInstance({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", void 0)
    ], Polygon.prototype, "setFillColor", null);
    __decorate([
        CordovaInstance({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", String)
    ], Polygon.prototype, "getFillColor", null);
    __decorate([
        CordovaInstance({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", void 0)
    ], Polygon.prototype, "setStrokeColor", null);
    __decorate([
        CordovaInstance({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", String)
    ], Polygon.prototype, "getStrokeColor", null);
    __decorate([
        CordovaInstance({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Boolean]),
        __metadata("design:returntype", void 0)
    ], Polygon.prototype, "setClickable", null);
    __decorate([
        CordovaInstance({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Boolean)
    ], Polygon.prototype, "getClickable", null);
    __decorate([
        CordovaInstance({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Boolean]),
        __metadata("design:returntype", void 0)
    ], Polygon.prototype, "setVisible", null);
    __decorate([
        CordovaInstance({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Boolean)
    ], Polygon.prototype, "getVisible", null);
    __decorate([
        CordovaInstance({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", void 0)
    ], Polygon.prototype, "setZIndex", null);
    __decorate([
        CordovaInstance({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Number)
    ], Polygon.prototype, "getZIndex", null);
    __decorate([
        CordovaInstance(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], Polygon.prototype, "remove", null);
    __decorate([
        CordovaInstance({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", void 0)
    ], Polygon.prototype, "setStrokeWidth", null);
    __decorate([
        CordovaInstance({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Number)
    ], Polygon.prototype, "getStrokeWidth", null);
    __decorate([
        CordovaInstance({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Boolean]),
        __metadata("design:returntype", void 0)
    ], Polygon.prototype, "setGeodesic", null);
    __decorate([
        CordovaInstance({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Boolean)
    ], Polygon.prototype, "getGeodesic", null);
    return Polygon;
}(BaseClass));
export { Polygon };
/**
 * @hidden
 */
var Polyline = (function (_super) {
    __extends(Polyline, _super);
    function Polyline(_map, _objectInstance) {
        var _this = _super.call(this, _objectInstance) || this;
        _this._map = _map;
        return _this;
    }
    /**
     * Returns the ID of instance.
     * @return {string}
     */
    /**
       * Returns the ID of instance.
       * @return {string}
       */
    Polyline.prototype.getId = /**
       * Returns the ID of instance.
       * @return {string}
       */
    function () {
        return;
    };
    /**
     * Returns the map instance.
     * @return {GoogleMap}
     */
    /**
       * Returns the map instance.
       * @return {GoogleMap}
       */
    Polyline.prototype.getMap = /**
       * Returns the map instance.
       * @return {GoogleMap}
       */
    function () {
        return this._map;
    };
    /**
     * Changes the polyline points.
     * @param points {ILatLng[]}
     */
    /**
       * Changes the polyline points.
       * @param points {ILatLng[]}
       */
    Polyline.prototype.setPoints = /**
       * Changes the polyline points.
       * @param points {ILatLng[]}
       */
    function (points) {
    };
    /**
     * Returns an instance of the BaseArrayClass
     * You can modify the points.
     * @return {BaseArrayClass<ILatLng>}
     */
    /**
       * Returns an instance of the BaseArrayClass
       * You can modify the points.
       * @return {BaseArrayClass<ILatLng>}
       */
    Polyline.prototype.getPoints = /**
       * Returns an instance of the BaseArrayClass
       * You can modify the points.
       * @return {BaseArrayClass<ILatLng>}
       */
    function () {
        return new BaseArrayClass(this._objectInstance.getPoints());
    };
    /**
     * When true, edges of the polyline are interpreted as geodesic and will follow the curvature of the Earth.
     * @param geoDesic {boolean}
     */
    /**
       * When true, edges of the polyline are interpreted as geodesic and will follow the curvature of the Earth.
       * @param geoDesic {boolean}
       */
    Polyline.prototype.setGeoDesic = /**
       * When true, edges of the polyline are interpreted as geodesic and will follow the curvature of the Earth.
       * @param geoDesic {boolean}
       */
    function (geoDesic) {
    };
    /**
     * Returns true if the polyline is geodesic
     */
    /**
       * Returns true if the polyline is geodesic
       */
    Polyline.prototype.getGeodesic = /**
       * Returns true if the polyline is geodesic
       */
    function () {
        return;
    };
    /**
     * Changes visibility of the polyline
     * @param visible {boolean}
     */
    /**
       * Changes visibility of the polyline
       * @param visible {boolean}
       */
    Polyline.prototype.setVisible = /**
       * Changes visibility of the polyline
       * @param visible {boolean}
       */
    function (visible) {
    };
    /**
     * Returns true if the polyline is visible
     * @return {boolean}
     */
    /**
       * Returns true if the polyline is visible
       * @return {boolean}
       */
    Polyline.prototype.getVisible = /**
       * Returns true if the polyline is visible
       * @return {boolean}
       */
    function () {
        return;
    };
    /**
     * Changes click-ability of the polyline
     * @param clickable {boolean}
     */
    /**
       * Changes click-ability of the polyline
       * @param clickable {boolean}
       */
    Polyline.prototype.setClickable = /**
       * Changes click-ability of the polyline
       * @param clickable {boolean}
       */
    function (clickable) {
    };
    /**
     * Returns true if the polyline is clickable
     * @return {boolean}
     */
    /**
       * Returns true if the polyline is clickable
       * @return {boolean}
       */
    Polyline.prototype.getClickable = /**
       * Returns true if the polyline is clickable
       * @return {boolean}
       */
    function () {
        return;
    };
    /**
     * Changes the polyline color
     * @param strokeColor {string}
     */
    /**
       * Changes the polyline color
       * @param strokeColor {string}
       */
    Polyline.prototype.setStrokeColor = /**
       * Changes the polyline color
       * @param strokeColor {string}
       */
    function (strokeColor) {
    };
    /**
     * Returns the current polyline color
     * @return {string}
     */
    /**
       * Returns the current polyline color
       * @return {string}
       */
    Polyline.prototype.getStrokeColor = /**
       * Returns the current polyline color
       * @return {string}
       */
    function () {
        return;
    };
    /**
     * Changes the polyline stroke width
     * @param strokeWidth {number}
     */
    /**
       * Changes the polyline stroke width
       * @param strokeWidth {number}
       */
    Polyline.prototype.setStrokeWidth = /**
       * Changes the polyline stroke width
       * @param strokeWidth {number}
       */
    function (strokeWidth) {
    };
    /**
     * Returns the current stroke width (unit: pixel).
     * @return {number}
     */
    /**
       * Returns the current stroke width (unit: pixel).
       * @return {number}
       */
    Polyline.prototype.getStrokeWidth = /**
       * Returns the current stroke width (unit: pixel).
       * @return {number}
       */
    function () {
        return;
    };
    /**
     * Changes the polyline zIndex order.
     * @param index {number}
     */
    /**
       * Changes the polyline zIndex order.
       * @param index {number}
       */
    Polyline.prototype.setZIndex = /**
       * Changes the polyline zIndex order.
       * @param index {number}
       */
    function (index) {
    };
    /**
     * Returns the current polyline zIndex
     * @return {number}
     */
    /**
       * Returns the current polyline zIndex
       * @return {number}
       */
    Polyline.prototype.getZIndex = /**
       * Returns the current polyline zIndex
       * @return {number}
       */
    function () {
        return;
    };
    /**
     * Remove the polyline
     */
    /**
       * Remove the polyline
       */
    Polyline.prototype.remove = /**
       * Remove the polyline
       */
    function () {
        delete this._objectInstance.getMap().get('_overlays')[this.getId()];
        this._objectInstance.remove();
        this.destroy();
    };
    __decorate([
        CordovaInstance({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", String)
    ], Polyline.prototype, "getId", null);
    __decorate([
        CordovaInstance({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Array]),
        __metadata("design:returntype", void 0)
    ], Polyline.prototype, "setPoints", null);
    __decorate([
        CordovaInstance({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Boolean]),
        __metadata("design:returntype", void 0)
    ], Polyline.prototype, "setGeoDesic", null);
    __decorate([
        CordovaInstance({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Boolean)
    ], Polyline.prototype, "getGeodesic", null);
    __decorate([
        CordovaInstance({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Boolean]),
        __metadata("design:returntype", void 0)
    ], Polyline.prototype, "setVisible", null);
    __decorate([
        CordovaInstance({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Boolean)
    ], Polyline.prototype, "getVisible", null);
    __decorate([
        CordovaInstance({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Boolean]),
        __metadata("design:returntype", void 0)
    ], Polyline.prototype, "setClickable", null);
    __decorate([
        CordovaInstance({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Boolean)
    ], Polyline.prototype, "getClickable", null);
    __decorate([
        CordovaInstance({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", void 0)
    ], Polyline.prototype, "setStrokeColor", null);
    __decorate([
        CordovaInstance({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", String)
    ], Polyline.prototype, "getStrokeColor", null);
    __decorate([
        CordovaInstance({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", void 0)
    ], Polyline.prototype, "setStrokeWidth", null);
    __decorate([
        CordovaInstance({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Number)
    ], Polyline.prototype, "getStrokeWidth", null);
    __decorate([
        CordovaInstance({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", void 0)
    ], Polyline.prototype, "setZIndex", null);
    __decorate([
        CordovaInstance({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Number)
    ], Polyline.prototype, "getZIndex", null);
    __decorate([
        CordovaInstance(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], Polyline.prototype, "remove", null);
    return Polyline;
}(BaseClass));
export { Polyline };
/**
 * @hidden
 */
var TileOverlay = (function (_super) {
    __extends(TileOverlay, _super);
    function TileOverlay(_map, _objectInstance) {
        var _this = _super.call(this, _objectInstance) || this;
        _this._map = _map;
        return _this;
    }
    /**
     * Returns the ID of instance.
     * @return {string}
     */
    /**
       * Returns the ID of instance.
       * @return {string}
       */
    TileOverlay.prototype.getId = /**
       * Returns the ID of instance.
       * @return {string}
       */
    function () {
        return;
    };
    /**
     * Returns the map instance.
     * @return {GoogleMap}
     */
    /**
       * Returns the map instance.
       * @return {GoogleMap}
       */
    TileOverlay.prototype.getMap = /**
       * Returns the map instance.
       * @return {GoogleMap}
       */
    function () {
        return this._map;
    };
    /**
     * Set whether the tiles should fade in.
     * @param fadeIn {boolean}
     */
    /**
       * Set whether the tiles should fade in.
       * @param fadeIn {boolean}
       */
    TileOverlay.prototype.setFadeIn = /**
       * Set whether the tiles should fade in.
       * @param fadeIn {boolean}
       */
    function (fadeIn) {
    };
    /**
     * Get whether the tiles should fade in
     * @return {boolean}
     */
    /**
       * Get whether the tiles should fade in
       * @return {boolean}
       */
    TileOverlay.prototype.getFadeIn = /**
       * Get whether the tiles should fade in
       * @return {boolean}
       */
    function () {
        return;
    };
    /**
     * Set the zIndex of the tile overlay
     * @param zIndex {number}
     */
    /**
       * Set the zIndex of the tile overlay
       * @param zIndex {number}
       */
    TileOverlay.prototype.setZIndex = /**
       * Set the zIndex of the tile overlay
       * @param zIndex {number}
       */
    function (zIndex) {
    };
    /**
     * Returns the zIndex of the tile overlay
     * @return {number}
     */
    /**
       * Returns the zIndex of the tile overlay
       * @return {number}
       */
    TileOverlay.prototype.getZIndex = /**
       * Returns the zIndex of the tile overlay
       * @return {number}
       */
    function () {
        return;
    };
    /**
     * Set the opacity of the tile overlay
     * @param opacity {number}
     */
    /**
       * Set the opacity of the tile overlay
       * @param opacity {number}
       */
    TileOverlay.prototype.setOpacity = /**
       * Set the opacity of the tile overlay
       * @param opacity {number}
       */
    function (opacity) {
    };
    /**
     * Returns the opacity of the tile overlay
     * @return {number}
     */
    /**
       * Returns the opacity of the tile overlay
       * @return {number}
       */
    TileOverlay.prototype.getOpacity = /**
       * Returns the opacity of the tile overlay
       * @return {number}
       */
    function () {
        return;
    };
    /**
     * Set false if you want to hide
     * @param visible {boolean}
     */
    /**
       * Set false if you want to hide
       * @param visible {boolean}
       */
    TileOverlay.prototype.setVisible = /**
       * Set false if you want to hide
       * @param visible {boolean}
       */
    function (visible) {
    };
    /**
     * Returns true if the tile overlay is visible
     * @return {boolean}
     */
    /**
       * Returns true if the tile overlay is visible
       * @return {boolean}
       */
    TileOverlay.prototype.getVisible = /**
       * Returns true if the tile overlay is visible
       * @return {boolean}
       */
    function () {
        return;
    };
    /**
     * Get tile size
     */
    /**
       * Get tile size
       */
    TileOverlay.prototype.getTileSize = /**
       * Get tile size
       */
    function () {
        return;
    };
    /**
     * Remove the tile overlay
     */
    /**
       * Remove the tile overlay
       */
    TileOverlay.prototype.remove = /**
       * Remove the tile overlay
       */
    function () {
        delete this._objectInstance.getMap().get('_overlays')[this.getId()];
        this._objectInstance.remove();
        this.destroy();
    };
    __decorate([
        CordovaInstance({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", String)
    ], TileOverlay.prototype, "getId", null);
    __decorate([
        CordovaInstance({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Boolean]),
        __metadata("design:returntype", void 0)
    ], TileOverlay.prototype, "setFadeIn", null);
    __decorate([
        CordovaInstance({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Boolean)
    ], TileOverlay.prototype, "getFadeIn", null);
    __decorate([
        CordovaInstance({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", void 0)
    ], TileOverlay.prototype, "setZIndex", null);
    __decorate([
        CordovaInstance({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Number)
    ], TileOverlay.prototype, "getZIndex", null);
    __decorate([
        CordovaInstance({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", void 0)
    ], TileOverlay.prototype, "setOpacity", null);
    __decorate([
        CordovaInstance({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Number)
    ], TileOverlay.prototype, "getOpacity", null);
    __decorate([
        CordovaInstance({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Boolean]),
        __metadata("design:returntype", void 0)
    ], TileOverlay.prototype, "setVisible", null);
    __decorate([
        CordovaInstance({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Boolean)
    ], TileOverlay.prototype, "getVisible", null);
    __decorate([
        CordovaInstance({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Object)
    ], TileOverlay.prototype, "getTileSize", null);
    __decorate([
        CordovaInstance(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], TileOverlay.prototype, "remove", null);
    return TileOverlay;
}(BaseClass));
export { TileOverlay };
/**
 * @hidden
 */
var KmlOverlay = (function (_super) {
    __extends(KmlOverlay, _super);
    function KmlOverlay(_map, _objectInstance) {
        var _this = _super.call(this, _objectInstance) || this;
        _this._map = _map;
        Object.defineProperty(self, 'camera', {
            value: _this._objectInstance.camera,
            writable: false
        });
        Object.defineProperty(self, 'kmlData', {
            value: _this._objectInstance.kmlData,
            writable: false
        });
        return _this;
    }
    /**
     * Returns the viewport to contains all overlays
     */
    /**
       * Returns the viewport to contains all overlays
       */
    KmlOverlay.prototype.getDefaultViewport = /**
       * Returns the viewport to contains all overlays
       */
    function () { return; };
    /**
     * Returns the ID of instance.
     * @return {string}
     */
    /**
       * Returns the ID of instance.
       * @return {string}
       */
    KmlOverlay.prototype.getId = /**
       * Returns the ID of instance.
       * @return {string}
       */
    function () { return; };
    /**
     * Returns the map instance.
     * @return {GoogleMap}
     */
    /**
       * Returns the map instance.
       * @return {GoogleMap}
       */
    KmlOverlay.prototype.getMap = /**
       * Returns the map instance.
       * @return {GoogleMap}
       */
    function () { return this._map; };
    /**
     * Changes visibility of the kml overlay
     * @param visible {boolean}
     */
    /**
       * Changes visibility of the kml overlay
       * @param visible {boolean}
       */
    KmlOverlay.prototype.setVisible = /**
       * Changes visibility of the kml overlay
       * @param visible {boolean}
       */
    function (visible) { };
    /**
     * Returns true if the kml overlay is visible
     * @return {boolean}
     */
    /**
       * Returns true if the kml overlay is visible
       * @return {boolean}
       */
    KmlOverlay.prototype.getVisible = /**
       * Returns true if the kml overlay is visible
       * @return {boolean}
       */
    function () { return; };
    /**
     * Changes click-ability of the KmlOverlay
     * @param clickable {boolean}
     */
    /**
       * Changes click-ability of the KmlOverlay
       * @param clickable {boolean}
       */
    KmlOverlay.prototype.setClickable = /**
       * Changes click-ability of the KmlOverlay
       * @param clickable {boolean}
       */
    function (clickable) { };
    /**
     * Returns true if the KmlOverlay is clickable
     * @return {boolean}
     */
    /**
       * Returns true if the KmlOverlay is clickable
       * @return {boolean}
       */
    KmlOverlay.prototype.getClickable = /**
       * Returns true if the KmlOverlay is clickable
       * @return {boolean}
       */
    function () { return; };
    /**
     * Remove the KmlOverlay
     */
    /**
       * Remove the KmlOverlay
       */
    KmlOverlay.prototype.remove = /**
       * Remove the KmlOverlay
       */
    function () {
        delete this._objectInstance.getMap().get('_overlays')[this.getId()];
        this._objectInstance.remove();
        this.destroy();
    };
    __decorate([
        CordovaInstance({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Object)
    ], KmlOverlay.prototype, "getDefaultViewport", null);
    __decorate([
        CordovaInstance({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", String)
    ], KmlOverlay.prototype, "getId", null);
    __decorate([
        CordovaInstance({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Boolean]),
        __metadata("design:returntype", void 0)
    ], KmlOverlay.prototype, "setVisible", null);
    __decorate([
        CordovaInstance({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Boolean)
    ], KmlOverlay.prototype, "getVisible", null);
    __decorate([
        CordovaInstance({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Boolean]),
        __metadata("design:returntype", void 0)
    ], KmlOverlay.prototype, "setClickable", null);
    __decorate([
        CordovaInstance({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Boolean)
    ], KmlOverlay.prototype, "getClickable", null);
    __decorate([
        CordovaInstance(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], KmlOverlay.prototype, "remove", null);
    return KmlOverlay;
}(BaseClass));
export { KmlOverlay };
export { ɵ0, ɵ1 };
//# sourceMappingURL=index.js.map
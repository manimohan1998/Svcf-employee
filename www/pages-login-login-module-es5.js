(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-login-login-module"], {
    /***/
    "./node_modules/@ionic-native/toast/__ivy_ngcc__/ngx/index.js":
    /*!********************************************************************!*\
      !*** ./node_modules/@ionic-native/toast/__ivy_ngcc__/ngx/index.js ***!
      \********************************************************************/

    /*! exports provided: Toast */

    /***/
    function node_modulesIonicNativeToast__ivy_ngcc__NgxIndexJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Toast", function () {
        return Toast;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _ionic_native_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic-native/core */
      "./node_modules/@ionic-native/core/__ivy_ngcc__/index.js");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");

      var Toast =
      /** @class */
      function (_super) {
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(Toast, _super);

        function Toast() {
          return _super !== null && _super.apply(this, arguments) || this;
        }

        Toast.prototype.show = function (message, duration, position) {
          return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "show", {
            "observable": true,
            "clearFunction": "hide"
          }, arguments);
        };

        Toast.prototype.hide = function () {
          return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "hide", {}, arguments);
        };

        Toast.prototype.showWithOptions = function (options) {
          return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "showWithOptions", {
            "observable": true,
            "clearFunction": "hide"
          }, arguments);
        };

        Toast.prototype.showShortTop = function (message) {
          return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "showShortTop", {
            "observable": true,
            "clearFunction": "hide"
          }, arguments);
        };

        Toast.prototype.showShortCenter = function (message) {
          return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "showShortCenter", {
            "observable": true,
            "clearFunction": "hide"
          }, arguments);
        };

        Toast.prototype.showShortBottom = function (message) {
          return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "showShortBottom", {
            "observable": true,
            "clearFunction": "hide"
          }, arguments);
        };

        Toast.prototype.showLongTop = function (message) {
          return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "showLongTop", {
            "observable": true,
            "clearFunction": "hide"
          }, arguments);
        };

        Toast.prototype.showLongCenter = function (message) {
          return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "showLongCenter", {
            "observable": true,
            "clearFunction": "hide"
          }, arguments);
        };

        Toast.prototype.showLongBottom = function (message) {
          return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "showLongBottom", {
            "observable": true,
            "clearFunction": "hide"
          }, arguments);
        };

        Toast.pluginName = "Toast";
        Toast.plugin = "cordova-plugin-x-toast";
        Toast.pluginRef = "plugins.toast";
        Toast.repo = "https://github.com/EddyVerbruggen/Toast-PhoneGap-Plugin";
        Toast.platforms = ["Android", "BlackBerry 10", "iOS", "Windows", "Windows Phone 8"];

        Toast.ɵfac = function Toast_Factory(t) {
          return ɵToast_BaseFactory(t || Toast);
        };

        Toast.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
          token: Toast,
          factory: function factory(t) {
            return Toast.ɵfac(t);
          }
        });

        var ɵToast_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](Toast);
        /*@__PURE__*/


        (function () {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](Toast, [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
          }], null, null);
        })();

        return Toast;
      }(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["IonicNativePlugin"]); //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9AaW9uaWMtbmF0aXZlL3BsdWdpbnMvdG9hc3Qvbmd4L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sOEJBQXNDLE1BQU0sb0JBQW9CLENBQUM7QUFDeEUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQzs7QUFDbEM7QUFHUSxJQWdFbUIseUJBQWlCO0FBQUM7QUFFOUI7QUFFUDtBQUFNLElBU1osb0JBQUksYUFBQyxPQUFlLEVBQUUsUUFBZ0IsRUFBRSxRQUFnQjtBQU1yRCxJQUdILG9CQUFJO0FBS2lCLElBY3JCLCtCQUFlLGFBQUMsT0FBcUI7QUFNM0IsSUFPViw0QkFBWSxhQUFDLE9BQWU7QUFNeEIsSUFPSiwrQkFBZSxhQUFDLE9BQWU7QUFNeEIsSUFPUCwrQkFBZSxhQUFDLE9BQWU7QUFNcEIsSUFPWCwyQkFBVyxhQUFDLE9BQWU7QUFNdkIsSUFPSiw4QkFBYyxhQUFDLE9BQWU7QUFNdkIsSUFPUCw4QkFBYyxhQUFDLE9BQWU7QUFJb0M7QUFBZ0M7QUFBNkM7QUFBdUM7QUFBNEU7SUEzSHZQLEtBQUssd0JBRGpCLFVBQVUsRUFBRSxRQUNBLEtBQUs7Ozs7OzBCQUFFO0FBQUMsZ0JBdEVyQjtBQUFFLEVBc0V5QixpQkFBaUI7QUFDM0MsU0FEWSxLQUFLO0FBQUkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb3Jkb3ZhLCBJb25pY05hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuZXhwb3J0IGludGVyZmFjZSBUb2FzdE9wdGlvbnMge1xuICAvKipcbiAgICogTWVzc2FnZSB0byBkaXNwbGF5XG4gICAqL1xuICBtZXNzYWdlPzogc3RyaW5nO1xuICAvKipcbiAgICogRHVyYXRpb24gaW4gbXMgdG8gc2hvd1xuICAgKi9cbiAgZHVyYXRpb24/OiBudW1iZXI7XG4gIC8qKlxuICAgKiBQb3NpdGlvblxuICAgKi9cbiAgcG9zaXRpb24/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBBZGQgbmVnYXRpdmUgdmFsdWUgdG8gbW92ZSBpdCB1cCBhIGJpdFxuICAgKi9cbiAgYWRkUGl4ZWxzWT86IG51bWJlcjtcbiAgLyoqXG4gICAqIFBhc3MgSlNPTiBvYmplY3QgdG8gYmUgc2VudCBiYWNrIGluIHN1Y2Nlc3MgY2FsbGJhY2tcbiAgICovXG4gIGRhdGE/OiBhbnk7XG4gIC8qKlxuICAgKiBTdHlsaW5nXG4gICAqL1xuICBzdHlsaW5nPzoge1xuICAgIG9wYWNpdHk/OiBudW1iZXI7XG4gICAgYmFja2dyb3VuZENvbG9yPzogc3RyaW5nO1xuICAgIHRleHRDb2xvcj86IHN0cmluZztcbiAgICBjb3JuZXJSYWRpdXM/OiBudW1iZXI7XG4gICAgaG9yaXpvbnRhbFBhZGRpbmc/OiBudW1iZXI7XG4gICAgdmVydGljYWxQYWRkaW5nPzogbnVtYmVyO1xuICB9O1xufVxuXG4vKipcbiAqIEBuYW1lIFRvYXN0XG4gKiBAZGVzY3JpcHRpb25cbiAqIFRoaXMgcGx1Z2luIGFsbG93cyB5b3UgdG8gc2hvdyBhIG5hdGl2ZSBUb2FzdCAoYSBsaXR0bGUgdGV4dCBwb3B1cCkgb24gaU9TLCBBbmRyb2lkIGFuZCBXUDguIEl0J3MgZ3JlYXQgZm9yIHNob3dpbmcgYSBub24gaW50cnVzaXZlIG5hdGl2ZSBub3RpZmljYXRpb24gd2hpY2ggaXMgZ3VhcmFudGVlZCBhbHdheXMgaW4gdGhlIHZpZXdwb3J0IG9mIHRoZSBicm93c2VyLlxuICpcbiAqIFJlcXVpcmVzIENvcmRvdmEgcGx1Z2luOiBgY29yZG92YS1wbHVnaW4teC10b2FzdGAuIEZvciBtb3JlIGluZm8sIHBsZWFzZSBzZWUgdGhlIFtUb2FzdCBwbHVnaW4gZG9jc10oaHR0cHM6Ly9naXRodWIuY29tL0VkZHlWZXJicnVnZ2VuL1RvYXN0LVBob25lR2FwLVBsdWdpbikuXG4gKlxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBUb2FzdCB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvdG9hc3Qvbmd4JztcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIHRvYXN0OiBUb2FzdCkgeyB9XG4gKlxuICogLi4uXG4gKlxuICogdGhpcy50b2FzdC5zaG93KGBJJ20gYSB0b2FzdGAsICc1MDAwJywgJ2NlbnRlcicpLnN1YnNjcmliZShcbiAqICAgdG9hc3QgPT4ge1xuICogICAgIGNvbnNvbGUubG9nKHRvYXN0KTtcbiAqICAgfVxuICogKTtcbiAqIGBgYFxuICogQGludGVyZmFjZXNcbiAqIFRvYXN0T3B0aW9uc1xuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ1RvYXN0JyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4teC10b2FzdCcsXG4gIHBsdWdpblJlZjogJ3BsdWdpbnMudG9hc3QnLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL0VkZHlWZXJicnVnZ2VuL1RvYXN0LVBob25lR2FwLVBsdWdpbicsXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ0JsYWNrQmVycnkgMTAnLCAnaU9TJywgJ1dpbmRvd3MnLCAnV2luZG93cyBQaG9uZSA4J10sXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFRvYXN0IGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xuICAvKipcbiAgICogU2hvdyBhIG5hdGl2ZSB0b2FzdCBmb3IgdGhlIGdpdmVuIGR1cmF0aW9uIGF0IHRoZSBzcGVjaWZpZWQgcG9zaXRpb24uXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBtZXNzYWdlICBUaGUgbWVzc2FnZSB0byBkaXNwbGF5LlxuICAgKiBAcGFyYW0ge3N0cmluZ30gZHVyYXRpb24gIER1cmF0aW9uIHRvIHNob3cgdGhlIHRvYXN0LCBlaXRoZXIgJ3Nob3J0JywgJ2xvbmcnIG9yIGFueSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzOiAnMTUwMCcuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwb3NpdGlvbiAgV2hlcmUgdG8gcG9zaXRpb24gdGhlIHRvYXN0LCBlaXRoZXIgJ3RvcCcsICdjZW50ZXInLCBvciAnYm90dG9tJy5cbiAgICogQHJldHVybnMge09ic2VydmFibGU8YW55Pn0gIFJldHVybnMgYW4gT2JzZXJ2YWJsZSB0aGF0IG5vdGlmaWVzIGZpcnN0IG9uIHN1Y2Nlc3MgYW5kIHRoZW4gd2hlbiB0YXBwZWQsIHJlamVjdHMgb24gZXJyb3IuXG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgb2JzZXJ2YWJsZTogdHJ1ZSxcbiAgICBjbGVhckZ1bmN0aW9uOiAnaGlkZScsXG4gIH0pXG4gIHNob3cobWVzc2FnZTogc3RyaW5nLCBkdXJhdGlvbjogc3RyaW5nLCBwb3NpdGlvbjogc3RyaW5nKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogTWFudWFsbHkgaGlkZSBhbnkgY3VycmVudGx5IHZpc2libGUgdG9hc3QuXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBQcm9taXNlIHRoYXQgcmVzb2x2ZXMgb24gc3VjY2Vzcy5cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgaGlkZSgpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTaG93IGEgbmF0aXZlIHRvYXN0IHdpdGggdGhlIGdpdmVuIG9wdGlvbnMuXG4gICAqXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zICBPcHRpb25zIGZvciBzaG93aW5nIGEgdG9hc3QuIEF2YWlsYWJsZSBvcHRpb25zOlxuICAgKiAgIG1lc3NhZ2UgIFRoZSBtZXNzYWdlIHRvIGRpc3BsYXkuXG4gICAqICAgZHVyYXRpb24gIER1cmF0aW9uIHRvIHNob3cgdGhlIHRvYXN0LCBlaXRoZXIgJ3Nob3J0JywgJ2xvbmcnIG9yIGFueSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzOiAnMTUwMCcuXG4gICAqICAgcG9zaXRpb24gIFdoZXJlIHRvIHBvc2l0aW9uIHRoZSB0b2FzdCwgZWl0aGVyICd0b3AnLCAnY2VudGVyJywgb3IgJ2JvdHRvbScuXG4gICAqICAgYWRkUGl4ZWxzWSAgT2Zmc2V0IGluIHBpeGVscyB0byBtb3ZlIHRoZSB0b2FzdCB1cCBvciBkb3duIGZyb20gaXRzIHNwZWNpZmllZCBwb3NpdGlvbi5cbiAgICpcbiAgICogQHJldHVybnMge09ic2VydmFibGU8YW55Pn0gIFJldHVybnMgYW4gT2JzZXJ2YWJsZSB0aGF0IG5vdGlmaWVzIGZpcnN0IG9uIHN1Y2Nlc3MgYW5kIHRoZW4gd2hlbiB0YXBwZWQsIHJlamVjdHMgb24gZXJyb3IuXG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgb2JzZXJ2YWJsZTogdHJ1ZSxcbiAgICBjbGVhckZ1bmN0aW9uOiAnaGlkZScsXG4gIH0pXG4gIHNob3dXaXRoT3B0aW9ucyhvcHRpb25zOiBUb2FzdE9wdGlvbnMpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTaG9ydGhhbmQgZm9yIGBzaG93KG1lc3NhZ2UsICdzaG9ydCcsICd0b3AnKWAuXG4gICAqIEBwYXJhbSBtZXNzYWdlIHtzdHJpbmd9XG4gICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlPGFueT59ICBSZXR1cm5zIGFuIE9ic2VydmFibGUgdGhhdCBub3RpZmllcyBmaXJzdCBvbiBzdWNjZXNzIGFuZCB0aGVuIHdoZW4gdGFwcGVkLCByZWplY3RzIG9uIGVycm9yLlxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIG9ic2VydmFibGU6IHRydWUsXG4gICAgY2xlYXJGdW5jdGlvbjogJ2hpZGUnLFxuICB9KVxuICBzaG93U2hvcnRUb3AobWVzc2FnZTogc3RyaW5nKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogU2hvcnRoYW5kIGZvciBgc2hvdyhtZXNzYWdlLCAnc2hvcnQnLCAnY2VudGVyJylgLlxuICAgKiBAcGFyYW0gbWVzc2FnZSB7c3RyaW5nfVxuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZTxhbnk+fSAgUmV0dXJucyBhbiBPYnNlcnZhYmxlIHRoYXQgbm90aWZpZXMgZmlyc3Qgb24gc3VjY2VzcyBhbmQgdGhlbiB3aGVuIHRhcHBlZCwgcmVqZWN0cyBvbiBlcnJvci5cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBvYnNlcnZhYmxlOiB0cnVlLFxuICAgIGNsZWFyRnVuY3Rpb246ICdoaWRlJyxcbiAgfSlcbiAgc2hvd1Nob3J0Q2VudGVyKG1lc3NhZ2U6IHN0cmluZyk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFNob3J0aGFuZCBmb3IgYHNob3cobWVzc2FnZSwgJ3Nob3J0JywgJ2JvdHRvbScpYC5cbiAgICogQHBhcmFtIG1lc3NhZ2Uge3N0cmluZ31cbiAgICogQHJldHVybnMge09ic2VydmFibGU8YW55Pn0gIFJldHVybnMgYW4gT2JzZXJ2YWJsZSB0aGF0IG5vdGlmaWVzIGZpcnN0IG9uIHN1Y2Nlc3MgYW5kIHRoZW4gd2hlbiB0YXBwZWQsIHJlamVjdHMgb24gZXJyb3IuXG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgb2JzZXJ2YWJsZTogdHJ1ZSxcbiAgICBjbGVhckZ1bmN0aW9uOiAnaGlkZScsXG4gIH0pXG4gIHNob3dTaG9ydEJvdHRvbShtZXNzYWdlOiBzdHJpbmcpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTaG9ydGhhbmQgZm9yIGBzaG93KG1lc3NhZ2UsICdsb25nJywgJ3RvcCcpYC5cbiAgICogQHBhcmFtIG1lc3NhZ2Uge3N0cmluZ31cbiAgICogQHJldHVybnMge09ic2VydmFibGU8YW55Pn0gIFJldHVybnMgYW4gT2JzZXJ2YWJsZSB0aGF0IG5vdGlmaWVzIGZpcnN0IG9uIHN1Y2Nlc3MgYW5kIHRoZW4gd2hlbiB0YXBwZWQsIHJlamVjdHMgb24gZXJyb3IuXG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgb2JzZXJ2YWJsZTogdHJ1ZSxcbiAgICBjbGVhckZ1bmN0aW9uOiAnaGlkZScsXG4gIH0pXG4gIHNob3dMb25nVG9wKG1lc3NhZ2U6IHN0cmluZyk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFNob3J0aGFuZCBmb3IgYHNob3cobWVzc2FnZSwgJ2xvbmcnLCAnY2VudGVyJylgLlxuICAgKiBAcGFyYW0gbWVzc2FnZSB7c3RyaW5nfVxuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZTxhbnk+fSAgUmV0dXJucyBhbiBPYnNlcnZhYmxlIHRoYXQgbm90aWZpZXMgZmlyc3Qgb24gc3VjY2VzcyBhbmQgdGhlbiB3aGVuIHRhcHBlZCwgcmVqZWN0cyBvbiBlcnJvci5cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBvYnNlcnZhYmxlOiB0cnVlLFxuICAgIGNsZWFyRnVuY3Rpb246ICdoaWRlJyxcbiAgfSlcbiAgc2hvd0xvbmdDZW50ZXIobWVzc2FnZTogc3RyaW5nKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogU2hvcnRoYW5kIGZvciBgc2hvdyhtZXNzYWdlLCAnbG9uZycsICdib3R0b20nKWAuXG4gICAqIEBwYXJhbSBtZXNzYWdlIHtzdHJpbmd9XG4gICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlPGFueT59ICBSZXR1cm5zIGFuIE9ic2VydmFibGUgdGhhdCBub3RpZmllcyBmaXJzdCBvbiBzdWNjZXNzIGFuZCB0aGVuIHdoZW4gdGFwcGVkLCByZWplY3RzIG9uIGVycm9yLlxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIG9ic2VydmFibGU6IHRydWUsXG4gICAgY2xlYXJGdW5jdGlvbjogJ2hpZGUnLFxuICB9KVxuICBzaG93TG9uZ0JvdHRvbShtZXNzYWdlOiBzdHJpbmcpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxufVxuIl19

      /***/

    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html":
    /*!***********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html ***!
      \***********************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesLoginLoginPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n\n<ion-app>\n  \n\n  <ion-content fullscreen class=\"svcf_page\">\n    <section class=\"logo_sec\" id=\"svcf_login\">\n      <img class=\"logo\" src=\"../../../assets/images/logo.png\" />\n      <ion-text>\n        <h4>Sign in</h4>\n      </ion-text>\n    </section>\n\n    <ion-card class=\"card_bg\">\n      <ion-card-content fullscreen>\n        <form [formGroup]=\"loginForm\" (ngSubmit)=\"login_values(loginForm.value)\" autocomplete=\"off\"\n          >\n          <ion-list>\n            <ion-item>\n              <ion-label position=\"stacked\">Username</ion-label>\n              <ion-input formControlName=\"username\" (keypress)=\"CheckSpace($event)\" type=\"text\"\n                placeholder=\"Enter username\"></ion-input>\n              <ion-icon name=\"person-outline\" slot=\"end\"></ion-icon>\n            </ion-item>\n            <ion-item>\n              <ion-label position=\"stacked\">Password</ion-label>\n              <ion-input formControlName=\"password\" (keypress)=\"CheckSpace($event)\" [type]=\"show ? 'text' : 'password'\"\n                placeholder=\"Enter password\">\n              </ion-input>\n              <div (click)=\"show=!show\" slot=\"end\" class=\"eye_icon\">\n                <ion-icon name=\"eye-off\" *ngIf=\"!show\"></ion-icon>\n                <ion-icon name=\"eye\" *ngIf=\"show\"></ion-icon>\n              </div>\n            </ion-item>\n            <section>\n              <ion-button expand=\"block\" [disabled]=\"!loginForm.valid\" type=\"submit\" class=\"btn\"> Login</ion-button>\n            </section>\n          </ion-list>\n        </form>\n      </ion-card-content>\n    </ion-card>\n\n  \n  \n  </ion-content>\n</ion-app>";
      /***/
    },

    /***/
    "./src/app/pages/login/login.module.ts":
    /*!*********************************************!*\
      !*** ./src/app/pages/login/login.module.ts ***!
      \*********************************************/

    /*! exports provided: LoginPageModule */

    /***/
    function srcAppPagesLoginLoginModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginPageModule", function () {
        return LoginPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./login.page */
      "./src/app/pages/login/login.page.ts");
      /* harmony import */


      var _ionic_native_toast_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic-native/toast/ngx */
      "./node_modules/@ionic-native/toast/__ivy_ngcc__/ngx/index.js");

      var routes = [{
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]
      }];

      var LoginPageModule = function LoginPageModule() {
        _classCallCheck(this, LoginPageModule);
      };

      LoginPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]],
        providers: [_ionic_native_toast_ngx__WEBPACK_IMPORTED_MODULE_7__["Toast"]]
      })], LoginPageModule);
      /***/
    },

    /***/
    "./src/app/pages/login/login.page.scss":
    /*!*********************************************!*\
      !*** ./src/app/pages/login/login.page.scss ***!
      \*********************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesLoginLoginPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-img {\n  width: 160px;\n  margin: 0 auto;\n}\n\n.logo {\n  margin-top: 3rem;\n}\n\n.logo p {\n  text-align: center;\n  font-size: 20px;\n  color: #706EAF;\n  font-weight: bold;\n}\n\n.logo .logo-para {\n  color: #CFCFCF;\n}\n\n.submit {\n  margin-left: 15px;\n  width: 92%;\n  margin-top: 2rem;\n  height: 40px;\n  border-radius: 40px;\n  background: #413E95;\n  color: white;\n  font-weight: bold;\n  font-size: 16px;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbG9naW4vbG9naW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLGNBQUE7QUFDSjs7QUFDQTtFQUNJLGdCQUFBO0FBRUo7O0FBREk7RUFDSSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUFHUjs7QUFESTtFQUNJLGNBQUE7QUFHUjs7QUFBQTtFQUNJLGlCQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQUdKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbG9naW4vbG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWltZ3tcclxuICAgIHdpZHRoOjE2MHB4O1xyXG4gICAgbWFyZ2luOjAgYXV0bztcclxufVxyXG4ubG9nb3tcclxuICAgIG1hcmdpbi10b3A6IDNyZW07XHJcbiAgICBwe1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgY29sb3I6IzcwNkVBRjtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIH1cclxuICAgIC5sb2dvLXBhcmF7XHJcbiAgICAgICAgY29sb3I6I0NGQ0ZDRjtcclxuICAgIH1cclxufVxyXG4uc3VibWl0e1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgICB3aWR0aDo5MiU7XHJcbiAgICBtYXJnaW4tdG9wOiAycmVtO1xyXG4gICAgaGVpZ2h0OjQwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOjQwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjNDEzRTk1O1xyXG4gICAgY29sb3I6d2hpdGU7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcbiJdfQ== */";
      /***/
    },

    /***/
    "./src/app/pages/login/login.page.ts":
    /*!*******************************************!*\
      !*** ./src/app/pages/login/login.page.ts ***!
      \*******************************************/

    /*! exports provided: LoginPage */

    /***/
    function srcAppPagesLoginLoginPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginPage", function () {
        return LoginPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _services_login_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../services/login.service */
      "./src/app/services/login.service.ts");
      /* harmony import */


      var _ionic_native_toast_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic-native/toast/ngx */
      "./node_modules/@ionic-native/toast/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

      var LoginPage = /*#__PURE__*/function () {
        function LoginPage(fb, loadingController, router, toast, loginservice) {
          _classCallCheck(this, LoginPage);

          this.fb = fb;
          this.loadingController = loadingController;
          this.router = router;
          this.toast = toast;
          this.loginservice = loginservice;
          this.submitted = false;
          this.isLoading = false;
          this.passwordType = 'password';
          this.passwordIcon = 'eye-off';
        }

        _createClass(LoginPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.loginForm = this.fb.group({
              username: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])),
              password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]))
            });
          }
        }, {
          key: "login_values",
          value: function login_values(data) {
            var _this = this;

            this.present();
            this.credentials = data;
            this.username = this.credentials['username'];
            this.password = this.credentials['password'];

            if (this.username == '' || this.username == null || this.password == '' || this.password == null) {
              this.presentToast('Please Enter Valid Credentials');
            } else {
              this.loginservice.user_authentication(this.username, this.password).subscribe(function (res) {
                console.log(res);

                _this.dismiss();

                _this.presentToast('You have Logged in successfully');

                _this.user_details = res;
                localStorage.setItem("col_id", _this.user_details[0].moneycollid);
                _this.coll_id = _this.user_details[0].moneycollid;
                _this.coll_name = _this.user_details[0].moneycollname;
                var navigationExtras = {
                  state: {
                    //user: this.coll_id,
                    user1: _this.coll_name
                  }
                };

                _this.router.navigate(['dashboard'], navigationExtras);
              }, function (error) {
                _this.dismiss();

                _this.presentToast('Something went wrong');

                alert('Something went wrong');
              });
            }
          }
        }, {
          key: "presentToast",
          value: function presentToast(message) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      this.toast.show(message, '2000', 'bottom').subscribe(function (toast) {
                        console.log(toast);
                      });

                    case 1:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "present",
          value: function present() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this2 = this;

              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      this.isLoading = true;
                      _context2.next = 3;
                      return this.loadingController.create({
                        message: 'Logging in,Please wait.....'
                      }).then(function (a) {
                        a.present().then(function () {
                          console.log('presented');

                          if (!_this2.isLoading) {
                            a.dismiss().then(function () {
                              return console.log('abort presenting');
                            });
                          }
                        });
                      });

                    case 3:
                      return _context2.abrupt("return", _context2.sent);

                    case 4:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "dismiss",
          value: function dismiss() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      this.isLoading = false;
                      _context3.next = 3;
                      return this.loadingController.dismiss().then(function () {
                        return console.log('dismissed');
                      });

                    case 3:
                      return _context3.abrupt("return", _context3.sent);

                    case 4:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "hideShowPassword",
          value: function hideShowPassword() {
            this.passwordType = this.passwordType === 'text' ? 'password' : 'text';
            this.passwordIcon = this.passwordIcon === 'eye-off' ? 'eye' : 'eye-off';
          }
        }, {
          key: "CheckSpace",
          value: function CheckSpace(event) {
            if (event.which == 32) {
              event.preventDefault();
              return false;
            }
          }
        }]);

        return LoginPage;
      }();

      LoginPage.ctorParameters = function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _ionic_native_toast_ngx__WEBPACK_IMPORTED_MODULE_5__["Toast"]
        }, {
          type: _services_login_service__WEBPACK_IMPORTED_MODULE_4__["LoginService"]
        }];
      };

      LoginPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./login.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./login.page.scss */
        "./src/app/pages/login/login.page.scss"))["default"]]
      })], LoginPage);
      /***/
    },

    /***/
    "./src/app/services/login.service.ts":
    /*!*******************************************!*\
      !*** ./src/app/services/login.service.ts ***!
      \*******************************************/

    /*! exports provided: LoginService */

    /***/
    function srcAppServicesLoginServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginService", function () {
        return LoginService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../environments/environment */
      "./src/environments/environment.ts");

      var LoginService = /*#__PURE__*/function () {
        function LoginService(http) {
          _classCallCheck(this, LoginService);

          this.http = http;
        }

        _createClass(LoginService, [{
          key: "user_authentication",
          value: function user_authentication(username, password) {
            return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].Baseurl + 'moneycollectorlogin/username?username=' + username + '&Password=' + password);
          }
        }]);

        return LoginService;
      }();

      LoginService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      };

      LoginService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], LoginService);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-login-login-module-es5.js.map
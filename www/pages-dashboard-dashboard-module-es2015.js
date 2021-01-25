(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-dashboard-dashboard-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/dashboard.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/dashboard.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"#413E95\">\n    <div class=\"flex\">\n      <ion-img src=\"assets/images/logo.jpg\"></ion-img>\n      <ion-label class=\"logout\" (click)=\"logout()\">\n        <ion-icon name=\"exit\"></ion-icon>\n        Logout\n      </ion-label>\n    </div>\n    <h3 class=\"header\">SREE VISALAM CHIT FUND LTD</h3>\n    <h3 class=\"login-name\">{{moneycoll_name}}</h3>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"dashboard-content\">\n  <ion-searchbar [(ngModel)]=\"terms\"></ion-searchbar>\n\n  <ion-list *ngFor=\"let v of details |search:terms\">\n    <ion-item (click)=\"goto(v)\">\n      <ion-label class=\"ion-text-wrap\">\n        <h3 class=\"id\">{{ v.GrpMemberID }}</h3>\n        <h3 class=\"name\"> {{ v.MemberName }}</h3>\n      </ion-label>\n      <ion-label class=\"chit\">No. of chits({{v.chitcount}})</ion-label>\n    </ion-item>\n  </ion-list>\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/dashboard/dashboard.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.module.ts ***!
  \*****************************************************/
/*! exports provided: DashboardPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardPageModule", function() { return DashboardPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _dashboard_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dashboard.page */ "./src/app/pages/dashboard/dashboard.page.ts");
/* harmony import */ var _shared_search_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/search.pipe */ "./src/app/shared/search.pipe.ts");








const routes = [
    {
        path: '',
        component: _dashboard_page__WEBPACK_IMPORTED_MODULE_6__["DashboardPage"]
    }
];
let DashboardPageModule = class DashboardPageModule {
};
DashboardPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_dashboard_page__WEBPACK_IMPORTED_MODULE_6__["DashboardPage"], _shared_search_pipe__WEBPACK_IMPORTED_MODULE_7__["SearchPipe"]]
    })
], DashboardPageModule);



/***/ }),

/***/ "./src/app/pages/dashboard/dashboard.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".chit {\n  text-align: right;\n  color: #9898A3;\n}\n\nion-img {\n  width: 80px;\n  margin-left: 12px;\n  margin-top: 15px;\n}\n\n.flex {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n}\n\n.logout {\n  padding-top: 2rem;\n  padding-right: 2rem;\n  color: #fff;\n}\n\n.header {\n  font-size: 17px;\n  color: #fff;\n  margin-left: 6px;\n  font-weight: bold;\n}\n\n.name {\n  color: #323148;\n  font-weight: bold;\n}\n\n.id {\n  color: #323148;\n}\n\nion-header ion-toolbar:first-child {\n  background: linear-gradient(to right, #222428 0%, #354466 100%) !important;\n}\n\n.login-name {\n  float: right;\n  padding-right: 15px;\n  color: white;\n}\n\nion-spinner {\n  stroke: #ff0000;\n  fill: #8b0000;\n  position: fixed;\n  z-index: 999;\n  height: 5em;\n  overflow: show;\n  margin: auto;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZGFzaGJvYXJkL2Rhc2hib2FyZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBQTtFQUNBLGNBQUE7QUFDSjs7QUFDQTtFQUNJLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FBRUo7O0FBQUk7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtBQUdSOztBQURJO0VBQ0ksaUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QUFJUjs7QUFGSTtFQUNJLGVBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQUtSOztBQUhJO0VBQ0ksY0FBQTtFQUNBLGlCQUFBO0FBTVI7O0FBSkk7RUFDSSxjQUFBO0FBT1I7O0FBTEk7RUFDQSwwRUFBQTtBQVFKOztBQU5JO0VBQ0ksWUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQVNSOztBQVBBO0VBQ0ksZUFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7QUFVSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Rhc2hib2FyZC9kYXNoYm9hcmQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNoaXR7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIGNvbG9yOiM5ODk4QTM7XHJcbn1cclxuaW9uLWltZ3tcclxuICAgIHdpZHRoOjgwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMTJweDtcclxuICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICB9XHJcbiAgICAuZmxleHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgfVxyXG4gICAgLmxvZ291dHtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMnJlbTtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAycmVtO1xyXG4gICAgICAgIGNvbG9yOiNmZmY7XHJcbiAgICB9XHJcbiAgICAuaGVhZGVye1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICBtYXJnaW4tbGVmdDogNnB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgfVxyXG4gICAgLm5hbWV7XHJcbiAgICAgICAgY29sb3I6IzMyMzE0ODtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIH1cclxuICAgIC5pZHtcclxuICAgICAgICBjb2xvcjojMzIzMTQ4O1xyXG4gICAgfVxyXG4gICAgaW9uLWhlYWRlciBpb24tdG9vbGJhcjpmaXJzdC1jaGlsZHtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzIyMjQyOCAwJSwgIzM1NDQ2NiAxMDAlKSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLmxvZ2luLW5hbWV7XHJcbiAgICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XHJcbiAgICAgICAgY29sb3I6d2hpdGU7XHJcbiAgICB9XHJcbmlvbi1zcGlubmVyICB7XHJcbiAgICBzdHJva2U6ICNmZjAwMDA7XHJcbiAgICBmaWxsOiAjOGIwMDAwO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgei1pbmRleDogOTk5O1xyXG4gICAgaGVpZ2h0OiA1ZW07XHJcbiAgICBvdmVyZmxvdzogc2hvdztcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICByaWdodDogMDtcclxuICB9Il19 */");

/***/ }),

/***/ "./src/app/pages/dashboard/dashboard.page.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.page.ts ***!
  \***************************************************/
/*! exports provided: DashboardPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardPage", function() { return DashboardPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_dashboard_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/dashboard.service */ "./src/app/services/dashboard.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");





let DashboardPage = class DashboardPage {
    constructor(router, dashboardservice, route, loadingController) {
        this.router = router;
        this.dashboardservice = dashboardservice;
        this.route = route;
        this.loadingController = loadingController;
        this.values = [];
        this.isLoading = false;
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.moneycoll_id = localStorage.getItem("col_id");
        console.log(this.moneycoll_id);
        this.present();
        this.dashboardservice.user_details(this.moneycoll_id).subscribe(res => {
            this.dismiss();
            console.log(res);
            this.details = res;
        });
    }
    goto(s) {
        this.user = s;
        console.log(this.user);
        localStorage.setItem("user2", JSON.stringify(this.user));
        this.router.navigateByUrl('payment');
    }
    logout() {
        this.router.navigateByUrl('login');
        localStorage.clear();
    }
    present() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.isLoading = true;
            return yield this.loadingController.create({
                message: 'Loading, Please wait.....'
            }).then(a => {
                a.present().then(() => {
                    if (!this.isLoading) {
                        a.dismiss().then(() => console.log('abort presenting'));
                    }
                });
            });
        });
    }
    dismiss() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.isLoading = false;
            return yield this.loadingController.dismiss().then(() => console.log('dismissed'));
        });
    }
};
DashboardPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_dashboard_service__WEBPACK_IMPORTED_MODULE_3__["DashboardService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] }
];
DashboardPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dashboard',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./dashboard.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/dashboard.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./dashboard.page.scss */ "./src/app/pages/dashboard/dashboard.page.scss")).default]
    })
], DashboardPage);



/***/ }),

/***/ "./src/app/services/dashboard.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/dashboard.service.ts ***!
  \***********************************************/
/*! exports provided: DashboardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardService", function() { return DashboardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");




let DashboardService = class DashboardService {
    constructor(http) {
        this.http = http;
    }
    user_details(mem_id) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].Baseurl + 'membertogroupmasterMid/MId?Mid=' + mem_id);
    }
};
DashboardService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
DashboardService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], DashboardService);



/***/ }),

/***/ "./src/app/shared/search.pipe.ts":
/*!***************************************!*\
  !*** ./src/app/shared/search.pipe.ts ***!
  \***************************************/
/*! exports provided: SearchPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPipe", function() { return SearchPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let SearchPipe = class SearchPipe {
    transform(items, terms) {
        if (!items)
            return [];
        if (!terms)
            return items;
        terms = terms.toLowerCase();
        return items.filter(it => {
            return it.MemberName.toLowerCase().startsWith(terms) || it.GrpMemberID.toLowerCase().startsWith(terms);
        });
    }
};
SearchPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'search'
    })
], SearchPipe);

// import { Pipe, PipeTransform } from '@angular/core';
// @Pipe({
//   name: 'search'
// })
// export class SearchPipe implements PipeTransform {
//   transform(items: any[], terms: string): any[] {
//     if (!items) return [];
//     if (!terms) return items;
//     return items.filter(item => {
//       console.log(item.MemberName)
//       return Object.keys(item).some(key => {
//         return String(item.MemberName).toLowerCase().includes(terms.toLowerCase());
//       });
//     });
//    }
// }


/***/ })

}]);
//# sourceMappingURL=pages-dashboard-dashboard-module-es2015.js.map
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-receipthistory-receipthistory-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/receipthistory/receipthistory.page.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/receipthistory/receipthistory.page.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n<ion-toolbar>\n<ion-item>\n<ion-icon name=\"arrow-back-outline\" (click)=\"previous()\"></ion-icon>\n<ion-title>Receipt History</ion-title>\n</ion-item>\n</ion-toolbar>\n</ion-header>\n<ion-content fullscreen class=\"svcf_recepit_page svcf_dashboard_page\">\n<form [formGroup]=\"receiptFormGroup\" autocomplete=\"off\" class=\"receipt_form\">\n  <mat-form-field>\n  <input matInput [matDatepicker]=\"picker\" placeholder=\"From Date\"  formControlName=\"from_date\"\n  (click)=\"picker.open()\">\n  <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n  <mat-datepicker #picker></mat-datepicker>\n  </mat-form-field>\n  <mat-form-field>\n  <input matInput [matDatepicker]=\"picker1\" placeholder=\"To Date\"  formControlName=\"to_date\"\n  (click)=\"picker.open()\">\n  <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\n  <mat-datepicker #picker1></mat-datepicker>\n  </mat-form-field>\n  <ion-button type=\"submit\" class=\"btn_right\" [disabled]=\"!receiptFormGroup.valid\" (click)=\"history()\">Submit\n  </ion-button>\n</form>\n<section class=\"payment\" *ngIf=\"length != 0\">\n  <div *ngFor=\"let p of receipt_history\" >\n    <ion-card class=\"card_bg\">\n    <ion-card-content>\n    <div class=\"ofz_img\">\n      <img src=\"../../../assets/images/img.png\">\n      <div class=\"branch_name\">\n        <p>Branch Name:<span>{{p.branchName}}</span></p>\n        <p>Form No: <span>VF1</span></p>\n      </div>\n    </div>\n    <div class=\"logo\">\n      <img src=\"../../../assets/images/logo.png\">\n    </div>\n    <div class=\"ofz_address\">\n      <h1>SREE VISALAM CHIT FUND LTD.</h1>\n      <p>Register Office: Tirunelveli - 3</p>\n      <p>(See Section 23 and Rule 25) </p>\n      <p>Receipt issued under the chit funds Act 1982</p>\n    </div>\n    <div class=\"receipt_content\">\n      <h3>\n      CD/REC.SERIES\n      </h3>\n      <div class=\"receipt_no\">\n        <p>Date/Time: <span>{{p.paidDate |date:'dd-MM-yyyy HH:mm'}}</span></p>\n        <p>Receipt No: <span>{{p.appReceiptno}}</span></p>\n      </div>\n      <table class=\"table receipt_amts\">\n        <tbody>\n          <tr>\n            <th>Customer Name</th>\n            <td>:</td>\n            <td>{{p.customerName}}</td>\n          </tr>\n          <tr>\n            <th>Branch Name</th>\n            <td>:</td>\n            <td>{{p.branchName}}</td>\n          </tr>\n          <tr>\n            <th>Chit No</th>\n            <td>:</td>\n            <td>{{p.chitNo}}</td>\n          </tr>\n          <tr>\n            <th>Chit Agreement No</th>\n            <td>:</td>\n            <td>{{p.chitAgreementno}}</td>\n          </tr>\n          <tr>\n            <th>Chit Installment No</th>\n            <td>:</td>\n            <td>{{p.currentInstno}}</td>\n          </tr>\n          <tr>\n            <th>Interest</th>\n            <td>:</td>\n            <td>{{p.interest}}</td>\n          </tr>\n        </tbody>\n      </table>\n      <div class=\"space_margin\">\n        <p class=\"grand_total\">Total:<span>Rs.{{p.total}}</span></p>\n      </div>\n      <p  class=\"sig\"><span>Note: </span> This is a computer generated Receipt hence signature is not required</p>\n    </div>\n    </ion-card-content>\n    </ion-card>\n  </div>\n</section>\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/receipthistory/receipthistory-routing.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/receipthistory/receipthistory-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: ReceipthistoryPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReceipthistoryPageRoutingModule", function() { return ReceipthistoryPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _receipthistory_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./receipthistory.page */ "./src/app/pages/receipthistory/receipthistory.page.ts");




const routes = [
    {
        path: '',
        component: _receipthistory_page__WEBPACK_IMPORTED_MODULE_3__["ReceipthistoryPage"]
    }
];
let ReceipthistoryPageRoutingModule = class ReceipthistoryPageRoutingModule {
};
ReceipthistoryPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ReceipthistoryPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/receipthistory/receipthistory.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/receipthistory/receipthistory.module.ts ***!
  \***************************************************************/
/*! exports provided: ReceipthistoryPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReceipthistoryPageModule", function() { return ReceipthistoryPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _receipthistory_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./receipthistory-routing.module */ "./src/app/pages/receipthistory/receipthistory-routing.module.ts");
/* harmony import */ var _receipthistory_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./receipthistory.page */ "./src/app/pages/receipthistory/receipthistory.page.ts");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../material/material.module */ "./src/app/material/material.module.ts");









let ReceipthistoryPageModule = class ReceipthistoryPageModule {
};
ReceipthistoryPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _material_material_module__WEBPACK_IMPORTED_MODULE_7__["MaterialModule"],
            _receipthistory_routing_module__WEBPACK_IMPORTED_MODULE_5__["ReceipthistoryPageRoutingModule"]
        ],
        declarations: [_receipthistory_page__WEBPACK_IMPORTED_MODULE_6__["ReceipthistoryPage"]]
    })
], ReceipthistoryPageModule);



/***/ }),

/***/ "./src/app/pages/receipthistory/receipthistory.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/pages/receipthistory/receipthistory.page.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".flex_arrow {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n}\n\n.logout {\n  padding-top: 2rem;\n  padding-right: 2rem;\n  color: #fff;\n}\n\n.exit {\n  color: #fff;\n  display: inline-block;\n  font-size: 22px;\n  vertical-align: middle;\n}\n\n.arrow {\n  margin-top: 1rem;\n  margin-left: 2rem;\n  background: linear-gradient(to right, #222428 0%, #354466 100%) !important;\n  border-radius: 50%;\n  color: #fff;\n  font-size: 30px;\n}\n\nion-img {\n  width: 100px;\n  padding-top: 2rem;\n}\n\n.mt-1 {\n  margin-top: 10px;\n}\n\n.print_branch {\n  display: flex;\n  justify-content: space-between;\n}\n\n.image {\n  padding-left: 8rem;\n}\n\n.sv {\n  text-align: center;\n  padding-top: 12px;\n}\n\n.regd {\n  color: #7F7F7F;\n}\n\n.sv_p {\n  font-weight: bold;\n}\n\n.buttons {\n  margin: 16px;\n}\n\n.buttons .sms {\n  margin-left: 12px;\n  background: white;\n  color: #413E95;\n  width: 25%;\n  height: 32px;\n  border-radius: 15px;\n  border: 1px solid #413E95;\n}\n\n.sig {\n  line-height: 24px;\n  color: #7F7F7F;\n  padding: 16px;\n  text-transform: inherit;\n}\n\n.text1 {\n  display: inline-block;\n  vertical-align: middle;\n  padding-left: 10px;\n  color: white;\n}\n\n.icon_tool {\n  padding-top: 1rem;\n  padding-right: 1rem;\n}\n\n.receipt {\n  padding: 40px;\n}\n\n.receipt span {\n  float: right;\n}\n\n.receipt p {\n  color: black;\n}\n\n.branch_name {\n  text-align: center;\n}\n\n.receipt_date {\n  padding: 20px;\n}\n\n.space_margin {\n  margin-top: 20px;\n}\n\np.sig span {\n  font-size: 14px;\n  color: #000;\n  font-weight: 600;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcmVjZWlwdGhpc3RvcnkvcmVjZWlwdGhpc3RvcnkucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7QUFDSjs7QUFDQTtFQUNJLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FBRUo7O0FBQUE7RUFDSSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7QUFHSjs7QUFEQTtFQUNJLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSwwRUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUFJSjs7QUFBQTtFQUNJLFlBQUE7RUFDQSxpQkFBQTtBQUdKOztBQUNBO0VBQ0ksZ0JBQUE7QUFFSjs7QUFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtBQUdBOztBQURBO0VBQ0ksa0JBQUE7QUFJSjs7QUFGQTtFQUNJLGtCQUFBO0VBQ0EsaUJBQUE7QUFLSjs7QUFIQTtFQUNJLGNBQUE7QUFNSjs7QUFKQTtFQUNJLGlCQUFBO0FBT0o7O0FBTEE7RUFDSSxZQUFBO0FBUUo7O0FBUEk7RUFDSSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtBQVNSOztBQU5BO0VBQ0ksaUJBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0FBU0o7O0FBTkE7RUFDSSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FBU0o7O0FBUEE7RUFDSSxpQkFBQTtFQUNBLG1CQUFBO0FBVUo7O0FBUkM7RUFDQSxhQUFBO0FBV0Q7O0FBVks7RUFDSSxZQUFBO0FBWVQ7O0FBVks7RUFDRyxZQUFBO0FBWVI7O0FBUkM7RUFDSSxrQkFBQTtBQVdMOztBQVRDO0VBQ0EsYUFBQTtBQVlEOztBQVZDO0VBQ0ksZ0JBQUE7QUFhTDs7QUFYQztFQUNHLGVBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUFjSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3JlY2VpcHRoaXN0b3J5L3JlY2VpcHRoaXN0b3J5LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mbGV4X2Fycm93e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuLmxvZ291dHtcclxuICAgIHBhZGRpbmctdG9wOiAycmVtO1xyXG4gICAgcGFkZGluZy1yaWdodDogMnJlbTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG59XHJcbi5leGl0e1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG59XHJcbi5hcnJvd3tcclxuICAgIG1hcmdpbi10b3A6IDFyZW07XHJcbiAgICBtYXJnaW4tbGVmdDogMnJlbTtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzIyMjQyOCAwJSwgIzM1NDQ2NiAxMDAlKSAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbn1cclxuXHJcblxyXG5pb24taW1ne1xyXG4gICAgd2lkdGg6MTAwcHg7XHJcbiAgICBwYWRkaW5nLXRvcDoycmVtO1xyXG4gICAgXHJcbn1cclxuXHJcbi5tdC0xe1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG4ucHJpbnRfYnJhbmNoe1xyXG5kaXNwbGF5OmZsZXg7XHJcbmp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG4uaW1hZ2V7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDhyZW07XHJcbn1cclxuLnN2e1xyXG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgICBwYWRkaW5nLXRvcDoxMnB4O1xyXG59XHJcbi5yZWdke1xyXG4gICAgY29sb3I6IzdGN0Y3RjtcclxufVxyXG4uc3ZfcHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbi5idXR0b25ze1xyXG4gICAgbWFyZ2luOjE2cHg7XHJcbiAgICAuc21ze1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OjEycHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICAgICAgY29sb3I6IzQxM0U5NTtcclxuICAgICAgICB3aWR0aDoyNSU7XHJcbiAgICAgICAgaGVpZ2h0OjMycHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czoxNXB4O1xyXG4gICAgICAgIGJvcmRlcjoxcHggc29saWQgIzQxM0U5NTtcclxuICAgIH1cclxufVxyXG4uc2lne1xyXG4gICAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgICBjb2xvcjogIzdGN0Y3RjtcclxuICAgIHBhZGRpbmc6IDE2cHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTppbmhlcml0XHJcblxyXG59XHJcbi50ZXh0MXtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuLmljb25fdG9vbHtcclxuICAgIHBhZGRpbmctdG9wOiAxcmVtO1xyXG4gICAgcGFkZGluZy1yaWdodDogMXJlbTtcclxuIH1cclxuIC5yZWNlaXB0e1xyXG4gcGFkZGluZzo0MHB4O1xyXG4gICAgIHNwYW57XHJcbiAgICAgICAgIGZsb2F0OiByaWdodDtcclxuICAgICB9XHJcbiAgICAgcHtcclxuICAgICAgICBjb2xvcjpibGFjaztcclxuXHJcbiAgICAgfVxyXG4gfVxyXG4gLmJyYW5jaF9uYW1le1xyXG4gICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gfVxyXG4gLnJlY2VpcHRfZGF0ZXtcclxuIHBhZGRpbmc6MjBweDtcclxuIH1cclxuIC5zcGFjZV9tYXJnaW57XHJcbiAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuIH1cclxuIHAuc2lnIHNwYW4ge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/pages/receipthistory/receipthistory.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/receipthistory/receipthistory.page.ts ***!
  \*************************************************************/
/*! exports provided: ReceipthistoryPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReceipthistoryPage", function() { return ReceipthistoryPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _services_payment_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/payment.service */ "./src/app/services/payment.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var moment_locale_pt_br__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! moment/locale/pt-br */ "./node_modules/moment/locale/pt-br.js");
/* harmony import */ var moment_locale_pt_br__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment_locale_pt_br__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");








let ReceipthistoryPage = class ReceipthistoryPage {
    constructor(fb, loadingController, paymentservice, router, route) {
        this.fb = fb;
        this.loadingController = loadingController;
        this.paymentservice = paymentservice;
        this.router = router;
        this.route = route;
        this.isLoading = false;
        this.route.queryParams.subscribe(params => {
            if (this.router.getCurrentNavigation().extras.state) {
                this.value = this.router.getCurrentNavigation().extras.state.user;
            }
        });
        this.colid = localStorage.getItem('col_id');
    }
    ngOnInit() {
        this.receiptFormGroup = this.fb.group({
            from_date: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            to_date: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
    }
    history() {
        this.present();
        this.receiptFormGroup.value["from_date"] = moment__WEBPACK_IMPORTED_MODULE_5__(this.receiptFormGroup.value.from_date.toLocaleString()).format("yyyy/MM/DD");
        this.receiptFormGroup.value["to_date"] = moment__WEBPACK_IMPORTED_MODULE_5__(this.receiptFormGroup.value.to_date.toLocaleString()).format("yyyy/MM/DD");
        this.paymentservice.receipthistory(this.colid, this.receiptFormGroup.value.from_date, this.receiptFormGroup.value.to_date).subscribe(res => {
            this.dismiss();
            this.receipt_history = res;
            this.length = this.receipt_history.length;
        });
    }
    previous() {
        this.router.navigateByUrl('dashboard');
    }
    present() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.isLoading = true;
            return yield this.loadingController.create({
                message: 'Loading,Please wait.....'
            }).then(a => {
                a.present().then(() => {
                    console.log('presented');
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
ReceipthistoryPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["LoadingController"] },
    { type: _services_payment_service__WEBPACK_IMPORTED_MODULE_3__["PaymentService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }
];
ReceipthistoryPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-receipthistory',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./receipthistory.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/receipthistory/receipthistory.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./receipthistory.page.scss */ "./src/app/pages/receipthistory/receipthistory.page.scss")).default]
    })
], ReceipthistoryPage);



/***/ })

}]);
//# sourceMappingURL=pages-receipthistory-receipthistory-module-es2015.js.map
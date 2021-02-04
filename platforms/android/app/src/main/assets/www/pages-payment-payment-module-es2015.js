(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-payment-payment-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/payment/cash/cash.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/payment/cash/cash.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content class=\"svcf_dashboard_page svcf_payment_page\">\r\n<section class=\"customer_details\">\r\n    <ion-row size=\"12\">\r\n    <ion-col class=\"customer_name\" size=\"11\">\r\n    <h2 size=\"8\">{{i_details[0].Membername}}</h2>\r\n    <h5 size=\"8\">{{today | date:'dd/MM/yyyy'}}</h5>\r\n    </ion-col>\r\n    <ion-col class=\"menu\" size=\"1\">\r\n    <ion-icon name=\"ellipsis-vertical-outline\" (click)=\"logout()\"></ion-icon>\r\n    </ion-col>\r\n    </ion-row>\r\n</section>\r\n<div class=\"payment card_bg space_padding\">\r\n    <div class=\"page_title\">\r\n        <h3>Chit Details</h3>\r\n        <ion-icon name=\"create-outline\" slot=\"end\"></ion-icon>\r\n    </div>\r\n    <form [formGroup]=\"cashForm\" novalidate>\r\n        <div [formArrayName]=\"'formArrayName'\" class=\"payment_form\">\r\n            <div *ngFor=\"let n of i_details; let i = index\">\r\n                <div [formGroupName]=\"i\">\r\n                    <ion-card>\r\n                    <ion-card-header>\r\n                    <p>Chit Value:<span>₹ {{n?.totalchitvalue}}</span></p>\r\n                    <p class=\"chit_no\">{{n?.chitgroupid}}</p>\r\n                    </ion-card-header>\r\n                    <ion-card-content>\r\n                    <ion-item>\r\n                    <ion-label position=\"stacked\">Current Due</ion-label>\r\n                    <ion-input formControlName=\"amountreceived\" type=\"number\" value=\"\"\r\n                    placeholder=\"Current Due\" required>\r\n                    </ion-input>\r\n                    </ion-item>\r\n                    <ion-item *ngIf=\"n?.isprized == 'Prized'\">\r\n                    <ion-label position=\"stacked\">Arrear Amount</ion-label>\r\n                    <ion-input formControlName=\"prizedarrear\" type=\"number\" value=\"\"\r\n                    placeholder=\"Prized Arrear\" >\r\n                    </ion-input>\r\n                    </ion-item>\r\n                    <ion-item *ngIf=\"n?.isprized == 'Non-Prized' && n?.NonPrizedArrear !=0 \">\r\n                    <ion-label position=\"stacked\">Non Prized Arrear</ion-label>\r\n                    <ion-input formControlName=\"nonprizedarrear\" type=\"number\" value=\"\"\r\n                    placeholder=\"Non Prized Arrear\" required>\r\n                    </ion-input>\r\n                    </ion-item>\r\n                    <ion-item>\r\n                    <ion-label position=\"stacked\">Interest</ion-label>\r\n                    <ion-input formControlName=\"interest\" type=\"number\" value=\"\" placeholder=\"Interest\"\r\n                    >\r\n                    </ion-input>\r\n                    </ion-item>\r\n                    <ion-item>\r\n                    <ion-label position=\"stacked\">Other Amount</ion-label>\r\n                    <ion-input formControlName=\"otheramount\" type=\"number\" value=\"\"\r\n                    placeholder=\"Otheramount\">\r\n                    </ion-input>\r\n                    </ion-item>\r\n                    <ion-item>\r\n                    <ion-label position=\"stacked\">\r\n                    Write Narrations\r\n                    </ion-label>\r\n                    <ion-input formControlName=\"narration\" type=\"text\" value=\"\"\r\n                    placeholder=\"Narration\" required>\r\n                    </ion-input>\r\n                    </ion-item>\r\n                    </ion-card-content>\r\n                    </ion-card>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <ion-button type=\"submit\" expand=\"block\"  (click)=\"submit(cashForm.value)\" class=\"btn\" [disabled]=\"!cashForm.valid\" >Submit </ion-button>\r\n    </form>\r\n</div>\r\n</ion-content>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/payment/cashpay/cashpay.page.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/payment/cashpay/cashpay.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content class=\"svcf_dashboard_page svcf_payment_page\">\r\n<section class=\"customer_details\">\r\n  <ion-row size=\"12\">\r\n  <ion-col class=\"customer_name\" size=\"11\">\r\n  <h2 size=\"8\">{{new10[0]?.Membername}}</h2>\r\n  <h5 size=\"8\">{{today | date:'dd/MM/yyyy'}}</h5>\r\n  </ion-col>\r\n  <ion-col class=\"menu\" size=\"1\">\r\n  <ion-icon name=\"ellipsis-vertical-outline\" (click)=\"logout()\"></ion-icon>\r\n  </ion-col>\r\n  </ion-row>\r\n</section>\r\n<div class=\"payment card_bg space_padding\">\r\n  <div class=\"page_title\">\r\n    <h3>Chit Details</h3>\r\n    <ion-icon name=\"create-outline\" slot=\"end\"></ion-icon>\r\n  </div>\r\n  <form [formGroup]=\"submitForm\" novalidate class=\"payment_form\">\r\n    <ion-list [formArrayName]=\"'formArrayName'\">\r\n    <div *ngFor=\"let d of result; let i = index\">\r\n      <div [formGroupName]=\"i\">\r\n        <ion-card>\r\n        <ion-card-header>\r\n        <p>Chit Value:<span>₹ {{d.totalchit}}</span></p>\r\n        <p class=\"chit_no\">{{d.chitgroupid}}</p>\r\n        </ion-card-header>\r\n        <ion-card-content>\r\n        <ion-item>\r\n        <ion-label position=\"stacked\">Current Due</ion-label>\r\n        <ion-input formControlName=\"amountreceived\" type=\"number\" value=\"\" placeholder=\"Current Due\"\r\n        readonly>\r\n        </ion-input>\r\n        </ion-item>\r\n        <ion-item *ngIf=\"d?.prizedarrear !=0 \">\r\n        <ion-label position=\"stacked\">Arrear Amount</ion-label>\r\n        <ion-input formControlName=\"prizedarrear\" type=\"number\" value=\"\" placeholder=\"Prized Arrear\" readonly>\r\n        </ion-input>\r\n        </ion-item>\r\n        <ion-item *ngIf=\"d?.nonprizedarrear !=0\">\r\n        <ion-label position=\"stacked\">Non Prized Arrear</ion-label>\r\n        <ion-input formControlName=\"nonprizedarrear\" type=\"number\" value=\"\" placeholder=\"Non Prized Arrear\"\r\n        readonly>\r\n        </ion-input>\r\n        </ion-item>\r\n        <ion-item>\r\n        <ion-label position=\"stacked\">Interest</ion-label>\r\n        <ion-input formControlName=\"interest\" type=\"number\" value=\"\" placeholder=\"interest\" readonly>\r\n        </ion-input>\r\n        </ion-item>\r\n        <ion-item>\r\n        <ion-label position=\"stacked\">Other Amount</ion-label>\r\n        <ion-input formControlName=\"otheramount\" type=\"number\" value=\"\" placeholder=\"otheramount\" readonly>\r\n        </ion-input>\r\n        </ion-item>\r\n        <ion-item>\r\n        <ion-label position=\"stacked\">\r\n        Write Narrations\r\n        </ion-label>\r\n        <ion-input formControlName=\"narration\" type=\"text\" value=\"\" placeholder=\"narration\" readonly>\r\n        </ion-input>\r\n        </ion-item>\r\n        <p class=\"total\">\r\n          Total<span>\r\n          ₹ {{d.total}}</span>\r\n        </p>\r\n        </ion-card-content>\r\n        </ion-card>\r\n      </div>\r\n    </div>\r\n    </ion-list>\r\n  </form>\r\n  <p class=\"grand_total\">Grand Total<span>₹ {{grand_total}}</span>\r\n</p>\r\n<ion-button type=\"submit\" expand=\"block\" (click)=\"submitcash(submitForm.value)\" class=\"btn\">Submit </ion-button>\r\n</div>\r\n</ion-content>\r\n<!-- <ion-content class=\"cash-content\">\r\n<form [formGroup]=\"submitForm\" novalidate>\r\n<div [formArrayName]=\"'formArrayName'\">\r\n  <div *ngFor=\"let d of result; let i = index\">\r\n    <div [formGroupName]=\"i\">\r\n      <div class=\"align\">\r\n        <input type=\"text\" formControlName=\"branchname\" readonly style=\"border:0;padding-left:15px;\">\r\n        <input type=\"text\" formControlName=\"groupno\" readonly style=\"border:0;padding-left:15px;\">\r\n        <p style=\"white-space: nowrap; font-size:14px;\">Total Chit Value:&nbsp;</p>\r\n        <input type=\"text\" formControlName=\"totalchit\" readonly style=\"border:0\">\r\n        <input type=\"text\" formControlName=\"branchid\" readonly style=\"display:none\">\r\n        <input type=\"text\" formControlName=\"memberid\" readonly style=\"display: none\">\r\n        <input type=\"text\" formControlName=\"rootid\" readonly style=\"display:none\">\r\n        <input type=\"text\" formControlName=\"headid\" readonly style=\"display: none\">\r\n        <input type=\"text\" formControlName=\"chitgroupid\" readonly style=\"display: none\">\r\n        <input type=\"text\" formControlName=\"m_id\" readonly style=\"display:none\">\r\n        <input type=\"text\" formControlName=\"agreement\" readonly style=\"display:none\">\r\n        <input type=\"text\" formControlName=\"installment\" readonly style=\"display:none\">\r\n      </div>\r\n      <mat-form-field>\r\n      <input matInput placeholder=\"Amount Received\" formControlName=\"amountreceived\" [readonly]=\"true\">\r\n      </mat-form-field>\r\n      <mat-form-field *ngIf=\"d?.prizedarrear !=0 \">\r\n      <input matInput placeholder=\"Prized Arrear\" formControlName=\"prizedarrear\" [readonly]=\"true\">\r\n      </mat-form-field>\r\n      <mat-form-field *ngIf=\"d?.nonprizedarrear !=0\">\r\n      <input matInput placeholder=\"Non Prized Arrear\" formControlName=\"nonprizedarrear\" [readonly]=\"true\">\r\n      </mat-form-field>\r\n      <mat-form-field>\r\n      <input matInput placeholder=\"Interest\" formControlName=\"interest\" [readonly]=\"true\">\r\n      </mat-form-field>\r\n      <mat-form-field>\r\n      <input matInput placeholder=\"Other Amount\" formControlName=\"otheramount\" [readonly]=\"true\">\r\n      </mat-form-field>\r\n      <mat-form-field>\r\n      <input matInput placeholder=\"Write Narrations\" formControlName=\"narration\" [readonly]=\"true\">\r\n      </mat-form-field>\r\n      <p>Total:<span>{{d.total}}</span></p>\r\n    </div>\r\n  </div>\r\n</div>\r\n</form>\r\n<p>Grand Total:<span>{{grand_total}}</span>\r\n<button class=\" next\" color=\"secondary\" type=\"submit\" (click)=\"submitcash(submitForm.value)\">Submit</button>\r\n</ion-content> -->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/payment/payment.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/payment/payment.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content class=\"svcf_dashboard_page\">\n<section class=\"customer_details\">\n  <ion-row size=\"12\">\n  <ion-col class=\"customer_name\" size=\"8\">\n  <h2 size=\"8\">{{user_details?.MemberName}}</h2>\n  <h5 size=\"8\">{{today | date: 'dd/MM/yyyy'}}</h5>\n  </ion-col>\n  <ion-col class=\"profile_img\" size=\"3\">\n  <ion-avatar><span>\n    <img src=\"../../../assets/images/user.jpg\">\n  </span></ion-avatar>\n  </ion-col>\n  <ion-col class=\"menu\" size=\"1\">\n  <ion-icon name=\"ellipsis-vertical-outline\" (click)=\"logout()\"></ion-icon>\n  </ion-col>\n  </ion-row>\n  <p  class=\"total_chits\">No. of Chits : <span>{{user_details?.chitcount}}</span></p>\n</section>\n<ion-card class=\"card_bg\" *ngFor=\"let value of newarr\">\n<div class=\"chits_item_details\">\n  <div class=\"mr-1\">\n    <ion-checkbox (ionChange)=\"updateCheckedOptions(value, $event)\"></ion-checkbox>\n  </div>\n  <table class=\"table chit_details\">\n    <tbody>\n      <tr>\n        <th>Status</th>\n        <td>\n          <p>:</p>\n        </td>\n        <td>\n          <span [ngStyle]=\"{'color':value?.status === 'R' ? 'green':'red'}\">{{value?.status}}</span>\n          \n        </td>\n      </tr>\n      <tr>\n        <th>Group No</th>\n        <td>\n          <p>:</p>\n        </td>\n        <td>\n          {{ value?.groupno }}\n        </td>\n      </tr>\n      <tr>\n        <th>Agt No</th>\n        <td>\n          <p>:</p>\n        </td>\n        <td>\n          {{value?.agreementno}}\n        </td>\n      </tr>\n      <tr>\n        <td>\n          <span class=\"branch_name\">{{value.BranchName}}</span>\n        </td>\n      </tr>\n      <tr>\n        <th>Chit No</th>\n        <td>\n          <p>:</p>\n        </td>\n        <td>\n          <span>{{value?.chitgroupid}}</span>\n        </td>\n      </tr>\n      <tr>\n        <th>Current inst no</th>\n        <td>\n          <p>:</p>\n        </td>\n        <td>\n          <span>{{value?.instno}}</span>\n        </td>\n      </tr>\n      <tr *ngIf=\"value?.NonPrizedArrear != 0 ||value?.PrizedArrear!= 0\">\n        <th>Arrear Amount</th>\n        <td>\n          <p>:</p>\n        </td>\n        <td>\n          <p *ngIf=\"value?.NonPrizedArrear != 0\"> <span>{{value?.NonPrizedArrear}}</span></p>\n          <p *ngIf=\"value?.PrizedArrear != 0\"><span>{{value?.PrizedArrear}}</span></p>\n        </td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n<div class=\"chit_status\" [ngClass]=\"value?.isprized === 'Y'?'green':'red'\">\n  <p>{{value?.isprized}}</p>\n  <!--       <p>{{value?.isprized === 'Y'?'Prized':'Non-Prized'}}</p>\n-->    </div>\n<div class=\"bottom_sec\">\n  <p size=\"6\">Current Due :₹ <span>{{value?.CurrentDueAmount}}</span></p>\n  <p size=\"6\">Chit Value : ₹ <span>{{value?.totalchitvalue}}</span></p>\n</div>\n</ion-card>\n<ion-card *ngIf=\"length1 === 0\">\n<ion-img class=\"no\" src=\"assets/images/nodata.jpeg\"></ion-img>\n</ion-card>\n<section class=\"p-24\">\n  <p style=\"margin-left:10px;\">Mode of payment</p>\n  <ion-list>\n  <ion-item>\n  <ion-label>\n  <ion-icon name=\"cash\" class=\"icon\"></ion-icon>\n  <span class=\"text\">Cash Payment</span>\n  </ion-label>\n  <ion-icon name=\"arrow-forward\" (click)=\"cash()\"></ion-icon>\n  </ion-item>\n  </ion-list>\n</section>\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/payment/cash/cash.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/payment/cash/cash.page.ts ***!
  \*************************************************/
/*! exports provided: CashPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CashPage", function() { return CashPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _services_payment_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/payment.service */ "./src/app/services/payment.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");






let CashPage = class CashPage {
    constructor(route, alertController, router, fb, paymentservice) {
        this.route = route;
        this.alertController = alertController;
        this.router = router;
        this.fb = fb;
        this.paymentservice = paymentservice;
        this.today = Date.now();
        this.cash_details = [];
        this.brid1 = [];
        this.route.queryParams.subscribe(params => {
            if (this.router.getCurrentNavigation().extras.state) {
                this.is = this.router.getCurrentNavigation().extras.state.user7;
                this.is_array = this.router.getCurrentNavigation().extras.state.user8;
            }
        });
        this.route.queryParams.subscribe(params => {
            this.i_details = JSON.parse(params.state);
            for (let i = 0; i < this.i_details.length; i++) {
                this.brid = (this.i_details[i].BranchID);
                this.brid1.push(this.brid);
            }
            this.chit_value = this.i_details.Chitvalue;
        });
    }
    ngOnInit() {
        this.cashForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            formArrayName: this.fb.array([])
        });
        this.buildForm();
    }
    buildForm() {
        const controlArray = this.cashForm.get('formArrayName');
        Object.keys(this.i_details).forEach((i) => {
            controlArray.push(this.fb.group({
                branchprefix: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.i_details[i].BranchPrefix, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
                branchname: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.i_details[i].Branch, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
                groupno: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.i_details[i].groupno, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
                totalchit: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.i_details[i].totalchitvalue, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
                branchid: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.i_details[i].BranchID, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
                memberid: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.i_details[i].Mid, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
                m_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.i_details[i].MemberID, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
                rootid: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.i_details[i].rootid, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
                headid: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.i_details[i].headID, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
                chitgroupid: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.i_details[i].chitgroupid, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
                installment: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.i_details[i].instno, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
                agreement: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.i_details[i].agreementno, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
                amountreceived: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.i_details[i].CurrentDueAmount, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
                prizedarrear: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.i_details[i].PrizedArrear, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
                nonprizedarrear: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.i_details[i].NonPrizedArrear, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
                interest: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('[. 0-9 ]*')
                ])),
                otheramount: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('[. 0-9 ]*')
                ])),
                narration: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            }));
        });
    }
    previous() {
        this.router.navigateByUrl('payment');
    }
    submit(c) {
        this.presentAlertConfirm(c);
    }
    logout() {
        this.presentAlertConfirm1();
    }
    presentAlertConfirm(c) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                message: 'Are you sure you want to submit?',
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: (blah) => {
                        }
                    },
                    {
                        text: 'Submit',
                        handler: () => {
                            this.cash_array = c.formArrayName;
                            let navigationExtras = {
                                state: {
                                    user6: this.cash_array,
                                    user10: this.i_details
                                }
                            };
                            this.router.navigate(['payment/cashpay'], navigationExtras);
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    presentAlertConfirm1() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                message: 'Are you sure you want to logout?',
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: (blah) => {
                        }
                    }, {
                        text: 'Logout',
                        handler: () => {
                            this.router.navigate(['login']);
                            localStorage.clear();
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
};
CashPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _services_payment_service__WEBPACK_IMPORTED_MODULE_4__["PaymentService"] }
];
CashPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-payment',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./cash.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/payment/cash/cash.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ../payment.page.scss */ "./src/app/pages/payment/payment.page.scss")).default]
    })
], CashPage);



/***/ }),

/***/ "./src/app/pages/payment/cashpay/cashpay.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/payment/cashpay/cashpay.page.ts ***!
  \*******************************************************/
/*! exports provided: CashPayPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CashPayPage", function() { return CashPayPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _services_payment_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/payment.service */ "./src/app/services/payment.service.ts");
/* harmony import */ var moment_locale_pt_br__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment/locale/pt-br */ "./node_modules/moment/locale/pt-br.js");
/* harmony import */ var moment_locale_pt_br__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment_locale_pt_br__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _ionic_native_toast_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/toast/ngx */ "./node_modules/@ionic-native/toast/__ivy_ngcc__/ngx/index.js");










let CashPayPage = class CashPayPage {
    constructor(fb, toast, http, loadingController, router, route, paymentservice) {
        this.fb = fb;
        this.toast = toast;
        this.http = http;
        this.loadingController = loadingController;
        this.router = router;
        this.route = route;
        this.paymentservice = paymentservice;
        this.today = Date.now();
        this.new_array = [];
        this.cashdata = [];
        this.cashdat = [];
        this.cashdata1 = [];
        this.cashdata2 = [];
        this.count = 1111;
        this.branch1 = [];
        this.sampledata = [];
        this.trigger = 0;
        this.sampledata1 = [];
        this.num1 = [];
        this.vnum1 = [];
        this.ReceiptTable1 = [];
        this.sampleinterest = [];
        this.sampletestcheck = [];
        this.isLoading = false;
        this.new_total = [];
        this.route.queryParams.subscribe(params => {
            if (this.router.getCurrentNavigation().extras.state) {
                this.new = this.router.getCurrentNavigation().extras.state.user6;
                this.new10 = this.router.getCurrentNavigation().extras.state.user10;
                for (let i = 0; i < this.new10.length; i++) {
                    this.branch_new = (this.new10[i].BranchID);
                    this.head = (this.new10[i].headID);
                    this.branch1.push(this.branch_new);
                    this.sampletest1 = [{
                            BranchID: this.new10[i].BranchID,
                            HeadID: this.new10[i].headID
                        }];
                    this.sampledata.push(this.sampletest1);
                    this.sampledata1 = [].concat.apply([], this.sampledata);
                }
                this.new_array = this.new;
            }
        });
    }
    ngOnInit() {
        this.paymentservice.receiptseries('BCAPP').subscribe(res => {
            this.voucher_count = res;
        });
        var num = 0;
        this.result = this.new_array.map(function (el) {
            var o = Object.assign({}, el);
            o.total = +el.amountreceived + +el.interest + +el.otheramount + +el.nonprizedarrear + +el.prizedarrear;
            return o;
        });
        for (let i = 0; i < this.result.length; i++) {
            num += (parseFloat(this.result[i].total));
            this.grand_total = num;
        }
        this.post_id = localStorage.getItem('col_id');
        this.nedate = new Date();
        this.day = moment__WEBPACK_IMPORTED_MODULE_6__(this.nedate.toLocaleString()).format("DD");
        this.month = moment__WEBPACK_IMPORTED_MODULE_6__(this.nedate.toLocaleString()).format("MM");
        this.year = moment__WEBPACK_IMPORTED_MODULE_6__(this.nedate.toLocaleString()).format("YYYY");
        this.submitForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            formArrayName: this.fb.array([])
        });
        this.buildForm1();
    }
    buildForm1() {
        const controlArray = this.submitForm.get('formArrayName');
        Object.keys(this.result).forEach((i) => {
            controlArray.push(this.fb.group({
                branchprefix: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.result[i].branchprefix, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
                branchname: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.result[i].branchname, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
                groupno: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.result[i].groupno, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
                totalchit: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.result[i].totalchit, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
                branchid: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.result[i].branchid, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
                memberid: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.result[i].memberid, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
                m_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.result[i].m_id, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
                rootid: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.result[i].rootid, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
                headid: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.result[i].headid, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
                chitgroupid: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.result[i].chitgroupid, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
                agreement: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.result[i].agreement, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
                installment: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.result[i].installment, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
                amountreceived: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](Number(this.new_array[i].amountreceived)),
                prizedarrear: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](Number(this.new_array[i].prizedarrear)),
                nonprizedarrear: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](Number(this.new_array[i].nonprizedarrear)),
                interest: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](Number(this.result[i].interest)),
                otheramount: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](Number(this.result[i].otheramount)),
                narration: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.result[i].narration)
            }));
        });
        console.log(controlArray);
    }
    previous() {
        this.router.navigateByUrl('payment/cash');
    }
    edit() {
        let navigationExtras = {
            state: {
                user7: true,
                user8: this.new_array
            }
        };
        this.router.navigate(['payment/cash'], navigationExtras);
    }
    submitcash(s) {
        this.present();
        this.sampletest = s.formArrayName;
        console.log(this.sampletest);
        this.paymentservice.cash_details(this.sampledata1).subscribe(res => {
            console.log(res);
            this.receipt_res = res;
            if (this.receipt_res != null) {
                for (let i = 0; i < this.receipt_res.length; i++) {
                    console.log(this.receipt_res[i].AlreadyusedNo);
                    this.num = this.receipt_res[i].AlreadyusedNo + 1;
                    this.vnum = this.receipt_res[i].BranchName + '' + this.num;
                    this.num1.push(this.num);
                    console.log(this.num1);
                    this.vnum1.push(this.vnum);
                    console.log(this.vnum1);
                    this.ReceiptTable = {
                        "AlreadyusedNo": this.num,
                        "BranchID": this.receipt_res[i].BranchID,
                        "HeadID": this.receipt_res[i].HeadID,
                        "BranchName": this.receipt_res[i].BranchName,
                        "From": this.receipt_res[i].From,
                        "ID": this.receipt_res[i].ID,
                        "Isfinished": this.receipt_res[i].Isfinished,
                        "To": this.receipt_res[i].To,
                        "VoucherCode": this.receipt_res[i].VoucherCode,
                        "VoucherNumber": this.vnum
                    };
                    console.log(this.ReceiptTable);
                    this.ReceiptTable1.push(this.ReceiptTable);
                    console.log(this.ReceiptTable1);
                }
                this.paymentservice.receipt_update(this.ReceiptTable1).subscribe(res => {
                    console.log(res);
                    this.res_status = res;
                    console.log(this.res_status);
                    if (this.res_status == 0) {
                        for (let obj of this.sampletest) {
                            console.log("object:", obj);
                            for (let key in obj) {
                            }
                        }
                        for (let i = 0; i < this.sampletest.length; i++) {
                            // var strFirstThree = this.sampletest[i].branchprefix.substring(0,3).toUpperCase();;
                            var strFirstThree = this.sampletest[i].branchprefix;
                            this.voucher_count += 1;
                            let number = this.padLeadingZeros(this.voucher_count, 8);
                            this.newvoucher_count = number;
                            console.log(this.newvoucher_count, "dashb");
                            this.new_name = strFirstThree;
                            //this.voucher_count=this.voucher_count+1;
                            console.log(this.trigger, "trigg");
                            this.receipt_name = 'B' + '-' + this.new_name + localStorage.getItem('col_id') + this.newvoucher_count;
                            console.log(this.receipt_name, "rec");
                            if (this.sampletest[i].prizedarrear != 0) {
                                this.cashpdata = [
                                    {
                                        "Amount": +this.sampletest[i].amountreceived + +this.sampletest[i].prizedarrear,
                                        "PArrear": this.sampletest[i].prizedarrear,
                                        "IsDeleted": 0,
                                        "MemberID": this.sampletest[i].memberid,
                                        "ReceievedBy": "admin",
                                        "Series": "BCAPP",
                                        "T_Day": this.day,
                                        "T_Month": this.month,
                                        "T_Year": this.year,
                                        "Trans_Medium": "0",
                                        "Trans_Type": "1",
                                        "TransactionKey": 0,
                                        "Voucher_No": this.count = this.count + 1,
                                        "Voucher_Type": "C",
                                        "IsAccepted": "0",
                                        "AppReceiptno": this.receipt_name,
                                        "ISActive": true,
                                        "BranchID": this.sampletest[i].branchid,
                                        "ChitGroupId": this.sampletest[i].chitgroupid,
                                        "Narration": this.sampletest[i].narration,
                                        "Head_Id": this.sampletest[i].headid,
                                        "Other_Trans_Type": 1,
                                        "RootID": this.sampletest[i].rootid,
                                        "M_Id": this.sampletest[i].m_id,
                                        "Type": "Cash",
                                        "MoneyCollId": this.post_id,
                                        "VoucherCount": this.newvoucher_count
                                    },
                                    {
                                        "Amount": +this.sampletest[i].amountreceived + +this.sampletest[i].prizedarrear,
                                        "PArrear": this.sampletest[i].prizedarrear,
                                        "IsDeleted": 0,
                                        "MemberID": this.sampletest[i].memberid,
                                        "ReceievedBy": "admin",
                                        "Series": "BCAPP",
                                        "T_Day": this.day,
                                        "T_Month": this.month,
                                        "T_Year": this.year,
                                        "Trans_Medium": "0",
                                        "Trans_Type": "1",
                                        "TransactionKey": 0,
                                        "Voucher_No": this.count,
                                        "IsAccepted": "0",
                                        "Voucher_Type": "D",
                                        "AppReceiptno": this.receipt_name,
                                        "ISActive": true,
                                        "BranchID": this.sampletest[i].branchid,
                                        "ChitGroupId": this.sampletest[i].chitgroupid,
                                        "Narration": this.sampletest[i].narration,
                                        "Head_Id": this.sampletest[i].headid,
                                        "Other_Trans_Type": 1,
                                        "RootID": this.sampletest[i].rootid,
                                        "M_Id": this.sampletest[i].m_id,
                                        "Type": "Cash",
                                        "MoneyCollId": this.post_id,
                                        "VoucherCount": this.newvoucher_count
                                    },
                                    {
                                        "Amount": +this.sampletest[i].interest + +this.sampletest[i].otheramount,
                                        "Interest": this.sampletest[i].interest,
                                        "OtherAmt": this.sampletest[i].otheramount,
                                        "IsDeleted": 0,
                                        "MemberID": this.sampletest[i].memberid,
                                        "ReceievedBy": "admin",
                                        "Series": "BCAPP",
                                        "T_Day": this.day,
                                        "T_Month": this.month,
                                        "T_Year": this.year,
                                        "Trans_Medium": "0",
                                        "Trans_Type": "1",
                                        "TransactionKey": 0,
                                        "Voucher_No": this.count = this.count + 1,
                                        "Voucher_Type": "C",
                                        "IsAccepted": "0",
                                        "AppReceiptno": this.receipt_name,
                                        "ISActive": true,
                                        "BranchID": this.sampletest[i].branchid,
                                        "ChitGroupId": this.sampletest[i].chitgroupid,
                                        "Narration": this.sampletest[i].narration,
                                        "Head_Id": this.sampletest[i].headid,
                                        "Other_Trans_Type": 1,
                                        "RootID": this.sampletest[i].rootid,
                                        "M_Id": this.sampletest[i].m_id,
                                        "Type": "DefaultInterest",
                                        "MoneyCollId": this.post_id,
                                        "VoucherCount": this.newvoucher_count
                                    },
                                    {
                                        "Amount": +this.sampletest[i].interest + +this.sampletest[i].otheramount,
                                        "Interest": this.sampletest[i].interest,
                                        "OtherAmt": this.sampletest[i].otheramount,
                                        "IsDeleted": 0,
                                        "MemberID": this.sampletest[i].memberid,
                                        "ReceievedBy": "admin",
                                        "Series": "BCAPP",
                                        "T_Day": this.day,
                                        "T_Month": this.month,
                                        "T_Year": this.year,
                                        "Trans_Medium": "0",
                                        "Trans_Type": "1",
                                        "TransactionKey": 0,
                                        "Voucher_No": this.count,
                                        "Voucher_Type": "D",
                                        "IsAccepted": "0",
                                        "AppReceiptno": this.receipt_name,
                                        "ISActive": true,
                                        "BranchID": this.sampletest[i].branchid,
                                        "ChitGroupId": this.sampletest[i].chitgroupid,
                                        "Narration": this.sampletest[i].narration,
                                        "Head_Id": this.sampletest[i].headid,
                                        "Other_Trans_Type": 1,
                                        "RootID": this.sampletest[i].rootid,
                                        "M_Id": this.sampletest[i].m_id,
                                        "Type": "DefaultInterest",
                                        "MoneyCollId": this.post_id,
                                        "VoucherCount": this.newvoucher_count
                                    }
                                ];
                            }
                            else if (this.sampletest[i].nonprizedarrear != 0) {
                                this.cashpdata = [
                                    {
                                        "Amount": +this.sampletest[i].amountreceived + +this.sampletest[i].nonprizedarrear,
                                        "NPArrear": this.sampletest[i].nonprizedarrear,
                                        "IsDeleted": 0,
                                        "MemberID": this.sampletest[i].memberid,
                                        "ReceievedBy": "admin",
                                        "Series": "BCAPP",
                                        "T_Day": this.day,
                                        "T_Month": this.month,
                                        "T_Year": this.year,
                                        "Trans_Medium": "0",
                                        "Trans_Type": "1",
                                        "TransactionKey": 0,
                                        "Voucher_No": this.count = this.count + 1,
                                        "Voucher_Type": "C",
                                        "IsAccepted": "0",
                                        "AppReceiptno": this.receipt_name,
                                        "ISActive": true,
                                        "BranchID": this.sampletest[i].branchid,
                                        "ChitGroupId": this.sampletest[i].chitgroupid,
                                        "Narration": this.sampletest[i].narration,
                                        "Head_Id": this.sampletest[i].headid,
                                        "Other_Trans_Type": 1,
                                        "RootID": this.sampletest[i].rootid,
                                        "M_Id": this.sampletest[i].m_id,
                                        "Type": "Cash",
                                        "MoneyCollId": this.post_id,
                                        "VoucherCount": this.newvoucher_count
                                    },
                                    {
                                        "Amount": +this.sampletest[i].amountreceived + +this.sampletest[i].nonprizedarrear,
                                        "NPArrear": this.sampletest[i].nonprizedarrear,
                                        "IsDeleted": 0,
                                        "MemberID": this.sampletest[i].memberid,
                                        "ReceievedBy": "admin",
                                        "Series": "BCAPP",
                                        "T_Day": this.day,
                                        "T_Month": this.month,
                                        "T_Year": this.year,
                                        "Trans_Medium": "0",
                                        "Trans_Type": "1",
                                        "TransactionKey": 0,
                                        "Voucher_No": this.count,
                                        "IsAccepted": "0",
                                        "Voucher_Type": "D",
                                        "AppReceiptno": this.receipt_name,
                                        "ISActive": true,
                                        "BranchID": this.sampletest[i].branchid,
                                        "ChitGroupId": this.sampletest[i].chitgroupid,
                                        "Narration": this.sampletest[i].narration,
                                        "Head_Id": this.sampletest[i].headid,
                                        "Other_Trans_Type": 1,
                                        "RootID": this.sampletest[i].rootid,
                                        "M_Id": this.sampletest[i].m_id,
                                        "Type": "Cash",
                                        "MoneyCollId": this.post_id,
                                        "VoucherCount": this.newvoucher_count
                                    },
                                    {
                                        "Amount": +this.sampletest[i].interest + +this.sampletest[i].otheramount,
                                        "Interest": this.sampletest[i].interest,
                                        "OtherAmt": this.sampletest[i].otheramount,
                                        "IsDeleted": 0,
                                        "MemberID": this.sampletest[i].memberid,
                                        "ReceievedBy": "admin",
                                        "Series": "BCAPP",
                                        "T_Day": this.day,
                                        "T_Month": this.month,
                                        "T_Year": this.year,
                                        "Trans_Medium": "0",
                                        "Trans_Type": "1",
                                        "TransactionKey": 0,
                                        "Voucher_No": this.count = this.count + 1,
                                        "Voucher_Type": "C",
                                        "IsAccepted": "0",
                                        "AppReceiptno": this.receipt_name,
                                        "ISActive": true,
                                        "BranchID": this.sampletest[i].branchid,
                                        "ChitGroupId": this.sampletest[i].chitgroupid,
                                        "Narration": this.sampletest[i].narration,
                                        "Head_Id": this.sampletest[i].headid,
                                        "Other_Trans_Type": 1,
                                        "RootID": this.sampletest[i].rootid,
                                        "M_Id": this.sampletest[i].m_id,
                                        "Type": "DefaultInterest",
                                        "MoneyCollId": this.post_id,
                                        "VoucherCount": this.newvoucher_count
                                    },
                                    {
                                        "Amount": +this.sampletest[i].interest + +this.sampletest[i].otheramount,
                                        "Interest": this.sampletest[i].interest,
                                        "OtherAmt": this.sampletest[i].otheramount,
                                        "IsDeleted": 0,
                                        "MemberID": this.sampletest[i].memberid,
                                        "ReceievedBy": "admin",
                                        "Series": "BCAPP",
                                        "T_Day": this.day,
                                        "T_Month": this.month,
                                        "T_Year": this.year,
                                        "Trans_Medium": "0",
                                        "Trans_Type": "1",
                                        "TransactionKey": 0,
                                        "Voucher_No": this.count,
                                        "Voucher_Type": "D",
                                        "IsAccepted": "0",
                                        "AppReceiptno": this.receipt_name,
                                        "ISActive": true,
                                        "BranchID": this.sampletest[i].branchid,
                                        "ChitGroupId": this.sampletest[i].chitgroupid,
                                        "Narration": this.sampletest[i].narration,
                                        "Head_Id": this.sampletest[i].headid,
                                        "Other_Trans_Type": 1,
                                        "RootID": this.sampletest[i].rootid,
                                        "M_Id": this.sampletest[i].m_id,
                                        "Type": "DefaultInterest",
                                        "MoneyCollId": this.post_id,
                                        "VoucherCount": this.newvoucher_count
                                    }
                                ];
                            }
                            else {
                                this.cashpdata = [
                                    {
                                        "Amount": +this.sampletest[i].amountreceived + +this.sampletest[i].nonprizedarrear,
                                        "NPArrear": this.sampletest[i].nonprizedarrear,
                                        "IsDeleted": 0,
                                        "MemberID": this.sampletest[i].memberid,
                                        "ReceievedBy": "admin",
                                        "Series": "BCAPP",
                                        "T_Day": this.day,
                                        "T_Month": this.month,
                                        "T_Year": this.year,
                                        "Trans_Medium": "0",
                                        "Trans_Type": "1",
                                        "TransactionKey": 0,
                                        "Voucher_No": this.count = this.count + 1,
                                        "Voucher_Type": "C",
                                        "IsAccepted": "0",
                                        "AppReceiptno": this.receipt_name,
                                        "ISActive": true,
                                        "BranchID": this.sampletest[i].branchid,
                                        "ChitGroupId": this.sampletest[i].chitgroupid,
                                        "Narration": this.sampletest[i].narration,
                                        "Head_Id": this.sampletest[i].headid,
                                        "Other_Trans_Type": 1,
                                        "RootID": this.sampletest[i].rootid,
                                        "M_Id": this.sampletest[i].m_id,
                                        "Type": "Cash",
                                        "MoneyCollId": this.post_id,
                                        "VoucherCount": this.newvoucher_count
                                    },
                                    {
                                        "Amount": +this.sampletest[i].amountreceived + +this.sampletest[i].nonprizedarrear,
                                        "NPArrear": this.sampletest[i].nonprizedarrear,
                                        "IsDeleted": 0,
                                        "MemberID": this.sampletest[i].memberid,
                                        "ReceievedBy": "admin",
                                        "Series": "BCAPP",
                                        "T_Day": this.day,
                                        "T_Month": this.month,
                                        "T_Year": this.year,
                                        "Trans_Medium": "0",
                                        "Trans_Type": "1",
                                        "TransactionKey": 0,
                                        "Voucher_No": this.count,
                                        "IsAccepted": "0",
                                        "Voucher_Type": "D",
                                        "AppReceiptno": this.receipt_name,
                                        "ISActive": true,
                                        "BranchID": this.sampletest[i].branchid,
                                        "ChitGroupId": this.sampletest[i].chitgroupid,
                                        "Narration": this.sampletest[i].narration,
                                        "Head_Id": this.sampletest[i].headid,
                                        "Other_Trans_Type": 1,
                                        "RootID": this.sampletest[i].rootid,
                                        "M_Id": this.sampletest[i].m_id,
                                        "Type": "Cash",
                                        "MoneyCollId": this.post_id,
                                        "VoucherCount": this.newvoucher_count
                                    },
                                    {
                                        "Amount": +this.sampletest[i].interest + +this.sampletest[i].otheramount,
                                        "Interest": this.sampletest[i].interest,
                                        "OtherAmt": this.sampletest[i].otheramount,
                                        "IsDeleted": 0,
                                        "MemberID": this.sampletest[i].memberid,
                                        "ReceievedBy": "admin",
                                        "Series": "BCAPP",
                                        "T_Day": this.day,
                                        "T_Month": this.month,
                                        "T_Year": this.year,
                                        "Trans_Medium": "0",
                                        "Trans_Type": "1",
                                        "TransactionKey": 0,
                                        "Voucher_No": this.count = this.count + 1,
                                        "Voucher_Type": "C",
                                        "IsAccepted": "0",
                                        "AppReceiptno": this.receipt_name,
                                        "ISActive": true,
                                        "BranchID": this.sampletest[i].branchid,
                                        "ChitGroupId": this.sampletest[i].chitgroupid,
                                        "Narration": this.sampletest[i].narration,
                                        "Head_Id": this.sampletest[i].headid,
                                        "Other_Trans_Type": 1,
                                        "RootID": this.sampletest[i].rootid,
                                        "M_Id": this.sampletest[i].m_id,
                                        "Type": "DefaultInterest",
                                        "MoneyCollId": this.post_id,
                                        "VoucherCount": this.newvoucher_count
                                    },
                                    {
                                        "Amount": +this.sampletest[i].interest + +this.sampletest[i].otheramount,
                                        "Interest": this.sampletest[i].interest,
                                        "OtherAmt": this.sampletest[i].otheramount,
                                        "IsDeleted": 0,
                                        "MemberID": this.sampletest[i].memberid,
                                        "ReceievedBy": "admin",
                                        "Series": "BCAPP",
                                        "T_Day": this.day,
                                        "T_Month": this.month,
                                        "T_Year": this.year,
                                        "Trans_Medium": "0",
                                        "Trans_Type": "1",
                                        "TransactionKey": 0,
                                        "Voucher_No": this.count,
                                        "Voucher_Type": "D",
                                        "IsAccepted": "0",
                                        "AppReceiptno": this.receipt_name,
                                        "ISActive": true,
                                        "BranchID": this.sampletest[i].branchid,
                                        "ChitGroupId": this.sampletest[i].chitgroupid,
                                        "Narration": this.sampletest[i].narration,
                                        "Head_Id": this.sampletest[i].headid,
                                        "Other_Trans_Type": 1,
                                        "RootID": this.sampletest[i].rootid,
                                        "M_Id": this.sampletest[i].m_id,
                                        "Type": "DefaultInterest",
                                        "MoneyCollId": this.post_id,
                                        "VoucherCount": this.newvoucher_count
                                    }
                                ];
                            }
                            this.cashdata.push(this.cashpdata);
                            this.cashdata1 = [].concat.apply([], this.cashdata);
                            for (let i = this.cashdata1.length - 1; i >= 0; --i) {
                                if (this.cashdata1[i].Amount == "0") {
                                    this.cashdata1.splice(i, 1);
                                }
                            }
                        }
                        this.paymentservice.post_vouchercash(this.cashdata1).subscribe(res => {
                            this.voucher_res = res;
                            if (res) {
                                this.dismiss();
                                this.second_voucher = res;
                                this.presentToast('sucessfully updated');
                                //alert('sucessfully updated');
                                localStorage.setItem("print_cash", JSON.stringify(this.voucher_res));
                                this.router.navigateByUrl('cashprint');
                            }
                            else {
                                alert('voucher error');
                                this.dismiss();
                            }
                        });
                    }
                    else {
                        alert('error');
                        this.dismiss();
                    }
                });
            }
        });
    }
    logout() {
        this.router.navigateByUrl('login');
        localStorage.clear();
    }
    present() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.isLoading = true;
            return yield this.loadingController.create({
                message: 'Saving data, Please wait.....'
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
    padLeadingZeros(num, size) {
        var s = num + "";
        while (s.length < size)
            s = "0" + s;
        return s;
    }
    presentToast(message) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.toast.show(message, '2000', 'bottom').subscribe(toast => {
                console.log(toast);
            });
        });
    }
};
CashPayPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _ionic_native_toast_ngx__WEBPACK_IMPORTED_MODULE_9__["Toast"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["LoadingController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _services_payment_service__WEBPACK_IMPORTED_MODULE_4__["PaymentService"] }
];
CashPayPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-payment',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./cashpay.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/payment/cashpay/cashpay.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ../payment.page.scss */ "./src/app/pages/payment/payment.page.scss")).default]
    })
], CashPayPage);



/***/ }),

/***/ "./src/app/pages/payment/payment.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/payment/payment.module.ts ***!
  \*************************************************/
/*! exports provided: PaymentPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentPageModule", function() { return PaymentPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _payment_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./payment.page */ "./src/app/pages/payment/payment.page.ts");
/* harmony import */ var _cash_cash_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./cash/cash.page */ "./src/app/pages/payment/cash/cash.page.ts");
/* harmony import */ var _cashpay_cashpay_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./cashpay/cashpay.page */ "./src/app/pages/payment/cashpay/cashpay.page.ts");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../material/material.module */ "./src/app/material/material.module.ts");
/* harmony import */ var _ionic_native_toast_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/toast/ngx */ "./node_modules/@ionic-native/toast/__ivy_ngcc__/ngx/index.js");












const routes = [
    {
        path: '',
        component: _payment_page__WEBPACK_IMPORTED_MODULE_6__["PaymentPage"]
    },
    {
        path: 'cash',
        component: _cash_cash_page__WEBPACK_IMPORTED_MODULE_7__["CashPage"]
    },
    {
        path: 'cashpay',
        component: _cashpay_cashpay_page__WEBPACK_IMPORTED_MODULE_8__["CashPayPage"]
    }
];
let PaymentPageModule = class PaymentPageModule {
};
PaymentPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _material_material_module__WEBPACK_IMPORTED_MODULE_9__["MaterialModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_payment_page__WEBPACK_IMPORTED_MODULE_6__["PaymentPage"], _cash_cash_page__WEBPACK_IMPORTED_MODULE_7__["CashPage"], _cashpay_cashpay_page__WEBPACK_IMPORTED_MODULE_8__["CashPayPage"]],
        providers: [_ionic_native_toast_ngx__WEBPACK_IMPORTED_MODULE_10__["Toast"]]
    })
], PaymentPageModule);



/***/ }),

/***/ "./src/app/pages/payment/payment.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/payment/payment.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".flex_arrow {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n}\n\n.logout {\n  padding-top: 2rem;\n  padding-right: 2rem;\n  color: #fff;\n}\n\n.bottom_sec p {\n  font-weight: bold;\n}\n\n.arrow {\n  margin-top: 1rem;\n  margin-left: 2rem;\n  background: linear-gradient(to right, #222428 0%, #354466 100%) !important;\n  border-radius: 50%;\n  color: #fff;\n  font-size: 30px;\n}\n\n.payment {\n  --background: linear-gradient(to right, #222428 0%, #354466 100%) !important;\n}\n\n.payee_name {\n  color: #fff;\n  font-weight: bold;\n  margin-left: 12px;\n}\n\n.today_date {\n  color: #fff;\n  margin-left: 12px;\n}\n\n.flex-page {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n}\n\n.flex-page .payee_no {\n  margin-left: 12px;\n}\n\n.flex-page .data-no {\n  margin-right: 1rem;\n  color: #5E5CA5;\n  font-weight: bold;\n}\n\n.left {\n  border-right: 1px #F05940 solid;\n}\n\n.title span {\n  font-size: 12px;\n  font-weight: 600;\n}\n\n.title .pipe {\n  margin-left: 12px;\n}\n\nion-card {\n  background-color: #F6F6FA;\n}\n\n.value {\n  color: #272727;\n}\n\nion-checkbox {\n  float: right;\n}\n\nion-card-content p span {\n  margin-left: 15px;\n}\n\n.mode {\n  margin-left: 12px;\n}\n\n.text {\n  display: inline-block;\n  vertical-align: middle;\n  padding-left: 10px;\n}\n\n.icon {\n  display: inline-block;\n  font-size: 22px;\n  color: #6765AA;\n  vertical-align: middle;\n}\n\n.cash-content p {\n  padding-left: 15px;\n}\n\n.cash-content .mat-form-field {\n  display: block;\n  font-size: 14px;\n  margin: 16px 0;\n}\n\n.flex {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n}\n\n.logout {\n  padding-top: 2rem;\n  padding-right: 2rem;\n  color: #fff;\n}\n\n.cash {\n  --background: linear-gradient(to right, #222428 0%, #354466 100%) !important;\n}\n\n.exit {\n  color: #fff;\n  display: inline-block;\n  font-size: 22px;\n  vertical-align: middle;\n}\n\n.arrow {\n  margin-top: 1rem;\n  margin-left: 2rem;\n  background: #37348B;\n  border-radius: 50%;\n  color: #fff;\n  font-size: 30px;\n}\n\n.today_date {\n  color: #fff;\n  margin-left: 12px;\n}\n\n.total-chit {\n  padding-right: 12px;\n}\n\n.align {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 20px;\n}\n\n.total-chit {\n  padding-right: 12px;\n}\n\n.align {\n  display: flex;\n  justify-content: space-between;\n}\n\n.align p {\n  margin-left: -42px;\n}\n\n.flex {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n}\n\n.logout {\n  padding-top: 2rem;\n  padding-right: 2rem;\n  color: #fff;\n}\n\n.arrow {\n  margin-top: 1rem;\n  margin-left: 2rem;\n  background: #37348B;\n  border-radius: 50%;\n  color: #fff;\n  font-size: 30px;\n}\n\n.today_date {\n  color: #fff;\n  margin-left: 12px;\n}\n\n.cash {\n  --background: linear-gradient(to right, #222428 0%, #354466 100%) !important;\n}\n\n.bottom_icon {\n  position: fixed;\n  left: 85%;\n  bottom: 2px;\n  border-radius: 50%;\n  font-size: 28px;\n  background: #37348B;\n  padding: 5px;\n  color: white;\n}\n\n.text1 {\n  display: inline-block;\n  vertical-align: middle;\n  padding-left: 10px;\n  color: white;\n}\n\n.icon_tool {\n  padding-top: 1rem;\n  padding-right: 1rem;\n}\n\n.payeename {\n  margin-top: 1rem;\n}\n\n.bank {\n  padding-left: 8px;\n  font-weight: bold;\n}\n\n.amt {\n  font-weight: bold;\n  color: black;\n}\n\nion-spinner {\n  stroke: #ff0000;\n  fill: #8b0000;\n  position: fixed;\n  z-index: 999;\n  height: 5em;\n  overflow: show;\n  margin: auto;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n}\n\n.card_bg .form-group {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 8px;\n}\n\n.card_bg .form-group label {\n  font-size: 14px;\n  font-weight: 700;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcGF5bWVudC9wYXltZW50LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0FBQ0o7O0FBQ0E7RUFDSSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtBQUVKOztBQUNJO0VBQ0osaUJBQUE7QUFFQTs7QUFDQTtFQUNJLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSwwRUFBQTtFQUVBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUFDSjs7QUFDQTtFQUNJLDRFQUFBO0FBRUo7O0FBQUE7RUFDRSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQUdGOztBQURBO0VBQ0ksV0FBQTtFQUNBLGlCQUFBO0FBSUo7O0FBREE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtBQUlKOztBQUhJO0VBQ0ksaUJBQUE7QUFLUjs7QUFISTtFQUNJLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FBS1I7O0FBRkE7RUFDSSwrQkFBQTtBQUtKOztBQVdJO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0FBUlI7O0FBVUk7RUFDSSxpQkFBQTtBQVJSOztBQVdBO0VBQ0kseUJBQUE7QUFSSjs7QUFVQTtFQUNJLGNBQUE7QUFQSjs7QUFTQTtFQUNJLFlBQUE7QUFOSjs7QUFTSTtFQUNJLGlCQUFBO0FBTlI7O0FBVUE7RUFDSSxpQkFBQTtBQVBKOztBQVVBO0VBQ0kscUJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0FBUEo7O0FBU0U7RUFDRSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0Esc0JBQUE7QUFOSjs7QUFTSTtFQUNJLGtCQUFBO0FBTlI7O0FBUUk7RUFDRixjQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUFORjs7QUFTQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0FBTko7O0FBUUE7RUFDSSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtBQUxKOztBQU9BO0VBQ0ksNEVBQUE7QUFKSjs7QUFNQTtFQUNJLFdBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtBQUhKOztBQU9BO0VBQ0ksZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQUpKOztBQU1BO0VBQ0ksV0FBQTtFQUNBLGlCQUFBO0FBSEo7O0FBTUE7RUFDQSxtQkFBQTtBQUhBOztBQUtBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7QUFGQTs7QUFXQTtFQUNJLG1CQUFBO0FBUko7O0FBVUE7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7QUFQSjs7QUFRSTtFQUNJLGtCQUFBO0FBTlI7O0FBU0k7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtBQU5SOztBQVFJO0VBQ0ksaUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QUFMUjs7QUFRSTtFQUNJLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUFMUjs7QUFPSTtFQUNJLFdBQUE7RUFDQSxpQkFBQTtBQUpSOztBQU9JO0VBQ0EsNEVBQUE7QUFKSjs7QUFNSTtFQUNJLGVBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUFIUjs7QUFLSTtFQUNJLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUFGUjs7QUFJSTtFQUNHLGlCQUFBO0VBQ0EsbUJBQUE7QUFEUDs7QUFHSTtFQUNFLGdCQUFBO0FBQU47O0FBRUk7RUFDSSxpQkFBQTtFQUNBLGlCQUFBO0FBQ1I7O0FBQ0k7RUFDSSxpQkFBQTtFQUNBLFlBQUE7QUFFUjs7QUFBSTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0FBR0o7O0FBQ0U7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBRUo7O0FBREk7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7QUFHUiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3BheW1lbnQvcGF5bWVudC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmxleF9hcnJvd3tcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcbi5sb2dvdXR7XHJcbiAgICBwYWRkaW5nLXRvcDogMnJlbTtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDJyZW07XHJcbiAgICBjb2xvcjogI2ZmZjtcclxufVxyXG4uYm90dG9tX3NlY3tcclxuICAgIHB7XHJcbmZvbnQtd2VpZ2h0OmJvbGQ7XHJcbiAgICB9XHJcbn1cclxuLmFycm93e1xyXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcclxuICAgIG1hcmdpbi1sZWZ0OiAycmVtO1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMjIyNDI4IDAlLCAjMzU0NDY2IDEwMCUpICFpbXBvcnRhbnQ7XHJcblxyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbn1cclxuLnBheW1lbnR7XHJcbiAgICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzIyMjQyOCAwJSwgIzM1NDQ2NiAxMDAlKSAhaW1wb3J0YW50O1xyXG59XHJcbi5wYXllZV9uYW1le1xyXG4gIGNvbG9yOiNmZmY7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgbWFyZ2luLWxlZnQ6IDEycHg7XHJcbn1cclxuLnRvZGF5X2RhdGV7XHJcbiAgICBjb2xvcjojZmZmO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEycHg7XHJcblxyXG59XHJcbi5mbGV4LXBhZ2V7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIC5wYXllZV9ub3tcclxuICAgICAgICBtYXJnaW4tbGVmdDogMTJweDtcclxuICAgIH1cclxuICAgIC5kYXRhLW5ve1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMXJlbTtcclxuICAgICAgICBjb2xvcjojNUU1Q0E1O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgfVxyXG59XHJcbi5sZWZ0e1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggI0YwNTk0MCBzb2xpZDtcclxuXHJcbn1cclxuLy8gcCB7XHJcbi8vICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4vLyB9XHJcblxyXG4vLyBwIHNwYW4ge1xyXG4vLyAgICAgbWFyZ2luOiAtMXB4IDFweCAxcHggLTFweDtcclxuLy8gICAgIGxpbmUtaGVpZ2h0OiAyZW07XHJcbi8vICAgICBib3JkZXItdG9wOiAxcHggc29saWQgYmx1ZTtcclxuLy8gICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgZ3JlZW47XHJcbi8vICAgICBwYWRkaW5nOiAwLjRlbTtcclxuLy8gICAgIGZsb2F0OiBsZWZ0O1xyXG4vLyB9XHJcbi50aXRsZXtcclxuICAgIHNwYW57XHJcbiAgICAgICAgZm9udC1zaXplOjEycHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIH1cclxuICAgIC5waXBle1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMnB4O1xyXG4gICAgfVxyXG59XHJcbmlvbi1jYXJke1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojRjZGNkZBO1xyXG59XHJcbi52YWx1ZXtcclxuICAgIGNvbG9yOiMyNzI3Mjc7XHJcbn1cclxuaW9uLWNoZWNrYm94e1xyXG4gICAgZmxvYXQ6cmlnaHQ7XHJcbn1cclxuaW9uLWNhcmQtY29udGVudHtcclxuICAgIHAgc3BhbntcclxuICAgICAgICBtYXJnaW4tbGVmdDogMTVweDtcclxuXHJcbiAgICB9XHJcbn1cclxuLm1vZGV7XHJcbiAgICBtYXJnaW4tbGVmdDogMTJweDtcclxuICAgXHJcbn1cclxuLnRleHR7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gIH1cclxuICAuaWNvbiB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICBjb2xvcjogIzY3NjVBQTtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgIH1cclxuICAgLmNhc2gtY29udGVudHtcclxuICAgIHB7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG4gICAgfVxyXG4gICAgLm1hdC1mb3JtLWZpZWxkIHtcclxuXHRcdGRpc3BsYXk6IGJsb2NrO1xyXG5cdFx0Zm9udC1zaXplOiAxNHB4O1xyXG5cdFx0bWFyZ2luOiAxNnB4IDA7XHJcblx0fVxyXG59XHJcbi5mbGV4e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuLmxvZ291dHtcclxuICAgIHBhZGRpbmctdG9wOiAycmVtO1xyXG4gICAgcGFkZGluZy1yaWdodDogMnJlbTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG59XHJcbi5jYXNoe1xyXG4gICAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMyMjI0MjggMCUsICMzNTQ0NjYgMTAwJSkgIWltcG9ydGFudDtcclxufVxyXG4uZXhpdHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuXHJcblxyXG59XHJcbi5hcnJvd3tcclxuICAgIG1hcmdpbi10b3A6IDFyZW07XHJcbiAgICBtYXJnaW4tbGVmdDogMnJlbTtcclxuICAgIGJhY2tncm91bmQ6ICMzNzM0OEI7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxufVxyXG4udG9kYXlfZGF0ZXtcclxuICAgIGNvbG9yOiNmZmY7XHJcbiAgICBtYXJnaW4tbGVmdDogMTJweDtcclxuXHJcbn1cclxuLnRvdGFsLWNoaXR7XHJcbnBhZGRpbmctcmlnaHQ6IDEycHg7XHJcbn1cclxuLmFsaWdue1xyXG5kaXNwbGF5OiBmbGV4O1xyXG5qdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbm1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbi8vY2FzaHBheVxyXG5cclxuLy8gaW9uLWlucHV0e1xyXG4vLyAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbi8vIH1cclxuXHJcbi50b3RhbC1jaGl0e1xyXG4gICAgcGFkZGluZy1yaWdodDogMTJweDtcclxuICAgIH1cclxuLmFsaWdue1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIHB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IC00MnB4O1xyXG4gICAgfVxyXG4gICAgfVxyXG4gICAgLmZsZXh7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIH1cclxuICAgIC5sb2dvdXR7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDJyZW07XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogMnJlbTtcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmFycm93e1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDFyZW07XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDJyZW07XHJcbiAgICAgICAgYmFja2dyb3VuZDogIzM3MzQ4QjtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgfVxyXG4gICAgLnRvZGF5X2RhdGV7XHJcbiAgICAgICAgY29sb3I6I2ZmZjtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMTJweDtcclxuICAgIFxyXG4gICAgfVxyXG4gICAgLmNhc2h7XHJcbiAgICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzIyMjQyOCAwJSwgIzM1NDQ2NiAxMDAlKSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLmJvdHRvbV9pY29ue1xyXG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICBsZWZ0OiA4NSU7XHJcbiAgICAgICAgYm90dG9tOiAycHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czo1MCU7XHJcbiAgICAgICAgZm9udC1zaXplOiAyOHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICMzNzM0OEI7XHJcbiAgICAgICAgcGFkZGluZzo1cHg7XHJcbiAgICAgICAgY29sb3I6d2hpdGU7XHJcbiAgICB9XHJcbiAgICAudGV4dDF7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIH1cclxuICAgIC5pY29uX3Rvb2x7XHJcbiAgICAgICBwYWRkaW5nLXRvcDogMXJlbTtcclxuICAgICAgIHBhZGRpbmctcmlnaHQ6IDFyZW07XHJcbiAgICB9XHJcbiAgICAucGF5ZWVuYW1le1xyXG4gICAgICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gICAgfVxyXG4gICAgLmJhbmt7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiA4cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB9XHJcbiAgICAuYW10e1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgIH1cclxuICAgIGlvbi1zcGlubmVyICB7XHJcbiAgICBzdHJva2U6ICNmZjAwMDA7XHJcbiAgICBmaWxsOiAjOGIwMDAwO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgei1pbmRleDogOTk5O1xyXG4gICAgaGVpZ2h0OiA1ZW07XHJcbiAgICBvdmVyZmxvdzogc2hvdztcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICByaWdodDogMDtcclxuICB9XHJcblxyXG4gIC5jYXJkX2Jne1xyXG4gIC5mb3JtLWdyb3VwIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG4gICAgbGFiZWwge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgfVxyXG59XHJcblxyXG4gIH0iXX0= */");

/***/ }),

/***/ "./src/app/pages/payment/payment.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/payment/payment.page.ts ***!
  \***********************************************/
/*! exports provided: PaymentPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentPage", function() { return PaymentPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_payment_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/payment.service */ "./src/app/services/payment.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");






let PaymentPage = class PaymentPage {
    constructor(route, alertController, router, paymentservice) {
        this.route = route;
        this.alertController = alertController;
        this.router = router;
        this.paymentservice = paymentservice;
        this.today = Date.now();
        this.arrayvalue = [];
        this.pushvalue = [];
        this.green = false;
        this.red = false;
        this.checkbox = false;
        this.new_check = false;
        this.prized_array = [];
        this.nonprized_array = [];
        this.arrayprized = [];
        this.prized_chits = [];
    }
    ionViewWillEnter() {
        this.imageUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].Imageurl;
        this.arrayvalue = [];
        this.newarr = [];
        this.pushvalue = [];
        this.user_details = JSON.parse(localStorage.getItem("user2"));
        this.paymentservice.payment_details(this.user_details.MemberID).subscribe(res => {
            this.payee_details = res;
            for (let i = 0; i < this.payee_details.length; i++) {
                this.status = this.payee_details[i].status;
                this.arrear = this.payee_details[i].arrearamount;
                this.prized = this.payee_details[i].isprized;
                if (this.status == 'R' || this.arrear > 0) {
                    this.pushvalue.push(this.payee_details[i]);
                    var dups = [];
                    this.newarr = this.pushvalue.filter(function (el) {
                        if (dups.indexOf(el.groupno) == -1) {
                            dups.push(el.groupno);
                            return true;
                        }
                        return false;
                    });
                    this.length1 = this.pushvalue.length;
                }
                if (this.payee_details[i].isprized == 'N') {
                    this.payee_details[i].isprized = 'Non-Prized';
                }
                else {
                    this.payee_details[i].isprized = 'Prized';
                }
            }
        });
    }
    ngOnInit() {
    }
    updateCheckedOptions(chBox, event) {
        if (event.detail.checked) {
            this.arrayvalue.push(chBox);
        }
        if (!event.detail.checked) {
            let index = this.arrayvalue.indexOf(chBox);
            if (index > -1) {
                this.arrayvalue.splice(index, 1);
            }
        }
    }
    previous() {
        this.router.navigateByUrl('dashboard');
    }
    cash() {
        this.prized_chits = [];
        if (this.arrayvalue.length != 0) {
            for (var i = 0; i < this.newarr.length; i++) {
                if (this.newarr[i].isprized == 'Prized')
                    this.prized_chits.push(this.newarr[i]);
            }
            if (this.prized_chits.length != 0) {
                if (this.arrayvalue.length <= 1) {
                    if (this.arrayvalue[0].isprized == 'Prized') {
                        let data = JSON.stringify(this.arrayvalue);
                        let navigationExtras = {
                            queryParams: { state: data },
                            skipLocationChange: true
                        };
                        this.router.navigate(['payment/cash'], navigationExtras);
                    }
                    else
                        return alert("Must choose atleast 1 Prized Chit");
                }
                else if (this.arrayvalue.length == 2) {
                    for (let i = 0; i < this.arrayvalue.length; i++) {
                        if (this.arrayvalue[i].isprized == "Prized") {
                            this.arrayprized.push(this.arrayvalue[i]);
                        }
                    }
                    if (this.arrayprized.length == 0)
                        return alert("Choose atleast 1 prized chits");
                    else {
                        let data = JSON.stringify(this.arrayvalue);
                        let navigationExtras = {
                            queryParams: { state: data },
                            skipLocationChange: true
                        };
                        this.router.navigate(['payment/cash'], navigationExtras);
                    }
                }
                else if (this.arrayvalue.length > 2) {
                    if (this.prized_chits.length == 1) {
                        let data = JSON.stringify(this.arrayvalue);
                        let navigationExtras = {
                            queryParams: { state: data },
                            skipLocationChange: true
                        };
                        this.router.navigate(['payment/cash'], navigationExtras);
                    }
                    else if (this.prized_chits.length >= 2) {
                        for (let i = 0; i < this.arrayvalue.length; i++) {
                            if (this.arrayvalue[i].isprized == "Prized") {
                                this.arrayprized.push(this.arrayvalue[i]);
                            }
                        }
                        if (this.arrayprized.length < 2) {
                            return alert("Choose atleast 2 prized chits");
                        }
                        else {
                            let data = JSON.stringify(this.arrayvalue);
                            let navigationExtras = {
                                queryParams: { state: data },
                                skipLocationChange: true
                            };
                            this.router.navigate(['payment/cash'], navigationExtras);
                        }
                    }
                }
            }
            else {
                let data = JSON.stringify(this.arrayvalue);
                let navigationExtras = {
                    queryParams: { state: data },
                    skipLocationChange: true
                };
                this.router.navigate(['payment/cash'], navigationExtras);
            }
        }
        else
            return alert("Please choose atleast one chit");
    }
    logout() {
        this.presentAlertConfirm();
    }
    presentAlertConfirm() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                message: 'Are you sure you want to logout?',
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: (blah) => {
                        }
                    }, {
                        text: 'Logout',
                        handler: () => {
                            localStorage.clear();
                            this.router.navigate(['login']);
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
};
PaymentPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_payment_service__WEBPACK_IMPORTED_MODULE_3__["PaymentService"] }
];
PaymentPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-payment',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./payment.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/payment/payment.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./payment.page.scss */ "./src/app/pages/payment/payment.page.scss")).default]
    })
], PaymentPage);



/***/ })

}]);
//# sourceMappingURL=pages-payment-payment-module-es2015.js.map
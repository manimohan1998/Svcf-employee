(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"7zK7":function(t,e,n){"use strict";n.r(e),n.d(e,"CashprintPageModule",(function(){return g}));var o=n("ofXK"),i=n("3Pt+"),r=n("tyNb"),c=n("TEn/"),s=n("mrSG"),a=n("fXoL"),b=n("SmVF"),p=n("s5zK");function l(t,e){if(1&t&&(a.Pb(0,"tr"),a.Pb(1,"th"),a.sc(2,"Interest"),a.Ob(),a.Pb(3,"td"),a.sc(4,":"),a.Ob(),a.Pb(5,"td"),a.sc(6),a.Ob(),a.Ob()),2&t){const t=a.ac().$implicit;a.Ab(6),a.tc(null==t?null:t.penaltyForOverdue)}}function d(t,e){if(1&t&&(a.Pb(0,"tr"),a.Pb(1,"th"),a.sc(2,"Other amount"),a.Ob(),a.Pb(3,"td"),a.sc(4,":"),a.Ob(),a.Pb(5,"td"),a.sc(6),a.Ob(),a.Ob()),2&t){const t=a.ac().$implicit;a.Ab(6),a.tc(null==t?null:t.otherReceipts)}}function u(t,e){if(1&t&&(a.Pb(0,"div",7,8),a.Pb(2,"ion-card",9),a.Pb(3,"ion-card-content"),a.Pb(4,"div",10),a.Lb(5,"img",11),a.Pb(6,"div",12),a.Pb(7,"p"),a.sc(8,"Branch Name:"),a.Pb(9,"span"),a.sc(10),a.Ob(),a.Ob(),a.Pb(11,"p"),a.sc(12,"Form No: "),a.Pb(13,"span"),a.sc(14,"XVI"),a.Ob(),a.Ob(),a.Ob(),a.Ob(),a.Pb(15,"div",13),a.Lb(16,"img",14),a.Ob(),a.Pb(17,"div",15),a.Pb(18,"h1"),a.sc(19,"SREE VISALAM CHIT FUND LTD."),a.Ob(),a.Pb(20,"p"),a.sc(21,"Registered Office: Tirunelveli - 6"),a.Ob(),a.Pb(22,"p"),a.sc(23,"(See Section 23 and Rule 25) "),a.Ob(),a.Pb(24,"p"),a.sc(25,"Receipt issued under the chit funds Act 1982"),a.Ob(),a.Ob(),a.Pb(26,"div",16),a.Pb(27,"ion-row",17),a.Pb(28,"ion-col",18),a.Pb(29,"h3"),a.sc(30," CD/REC.SERIES "),a.Ob(),a.Ob(),a.Pb(31,"ion-col",18),a.Pb(32,"p"),a.sc(33,"Date: "),a.Pb(34,"span"),a.sc(35),a.bc(36,"date"),a.Ob(),a.Ob(),a.Ob(),a.Ob(),a.Pb(37,"div",19),a.Pb(38,"p"),a.sc(39,"Receipt No: "),a.Pb(40,"span"),a.sc(41),a.Ob(),a.Ob(),a.Ob(),a.Pb(42,"table",20),a.Pb(43,"tbody"),a.Pb(44,"tr"),a.Pb(45,"th"),a.sc(46,"Received From"),a.Ob(),a.Pb(47,"td"),a.sc(48,":"),a.Ob(),a.Pb(49,"td"),a.sc(50),a.Ob(),a.Ob(),a.Pb(51,"tr"),a.Pb(52,"th"),a.sc(53,"Chit No"),a.Ob(),a.Pb(54,"td"),a.sc(55,":"),a.Ob(),a.Pb(56,"td"),a.sc(57),a.Ob(),a.Ob(),a.Pb(58,"tr"),a.Pb(59,"th"),a.sc(60,"Ag No/Year"),a.Ob(),a.Pb(61,"td"),a.sc(62,":"),a.Ob(),a.Pb(63,"td"),a.sc(64),a.Ob(),a.Ob(),a.rc(65,l,7,1,"tr",21),a.rc(66,d,7,1,"tr",21),a.Ob(),a.Ob(),a.Pb(67,"div",22),a.Pb(68,"p",23),a.sc(69," Total Paid"),a.Pb(70,"span"),a.sc(71),a.Ob(),a.Ob(),a.Ob(),a.Ob(),a.Ob(),a.Ob(),a.Pb(72,"p",24),a.Pb(73,"span"),a.sc(74,"Note: "),a.Ob(),a.sc(75,"Payments may take upto 3 working days to get reflected in your account"),a.Ob(),a.Ob()),2&t){const t=e.$implicit;a.Ab(10),a.tc(t.branchName),a.Ab(25),a.tc(a.cc(36,9,null==t?null:t.datetime,"dd/MM/yyyy")),a.Ab(6),a.tc(null==t?null:t.cashReceiptNo),a.Ab(9),a.tc(null==t?null:t.customerName),a.Ab(7),a.tc(null==t?null:t.chitNo),a.Ab(7),a.tc(null==t?null:t.agreementNo),a.Ab(1),a.fc("ngIf",0!=(null==t?null:t.penaltyForOverdue)),a.Ab(1),a.fc("ngIf",0!=(null==t?null:t.otherReceipts)),a.Ab(5),a.uc("\u20b9 ",null==t?null:t.total,"")}}const h=[{path:"",component:(()=>{class t{constructor(t,e,n,o,i,r,c,s){this.platform=t,this.loadingController=e,this.toast=n,this.paymentservice=o,this.modalCtrl=i,this.alertCtrl=r,this.router=c,this.route=s,this.api_id=[],this.isLoading=!1}onBack(){}ngOnInit(){this.cash_print_preview=JSON.parse(localStorage.getItem("print_cash"));for(let t=0;t<this.cash_print_preview.length;t++)this.api_id.push(this.cash_print_preview[t].ID);this.paymentservice.print_details(this.api_id).subscribe(t=>{this.print_cash_page=t})}previous(){this.router.navigateByUrl("dashboard")}logout(){this.router.navigateByUrl("login"),localStorage.clear()}done(){this.router.navigateByUrl("dashboard")}presentToast(t){return Object(s.a)(this,void 0,void 0,(function*(){this.toast.show(t,"2000","bottom").subscribe(t=>{console.log(t)})}))}}return t.\u0275fac=function(e){return new(e||t)(a.Kb(c.C),a.Kb(c.z),a.Kb(b.a),a.Kb(p.a),a.Kb(c.A),a.Kb(c.a),a.Kb(r.g),a.Kb(r.a))},t.\u0275cmp=a.Eb({type:t,selectors:[["app-cashprint"]],decls:15,vars:1,consts:[["name","arrow-back-outline",3,"click"],["fullscreen","",1,"svcf_recepit_page","svcf_dashboard_page"],[1,"payment"],[1,"page_title"],["id","printable-area",4,"ngFor","ngForOf"],[1,"done"],[3,"click"],["id","printable-area"],["my",""],[1,"card_bg"],[1,"ofz_img"],["src","../../../assets/images/img.png"],[1,"branch_name"],[1,"logo"],["src","../../../assets/images/logo.png"],[1,"ofz_address"],[1,"receipt_content"],["size","12"],["size","6"],[1,"receipt_no"],[1,"table","receipt_amts"],[4,"ngIf"],[1,"space_margin"],[1,"grand_total"],[1,"sig"]],template:function(t,e){1&t&&(a.Pb(0,"ion-header"),a.Pb(1,"ion-toolbar"),a.Pb(2,"ion-item"),a.Pb(3,"ion-icon",0),a.Xb("click",(function(){return e.previous()})),a.Ob(),a.Pb(4,"ion-title"),a.sc(5,"Receipt"),a.Ob(),a.Ob(),a.Ob(),a.Ob(),a.Pb(6,"ion-content",1),a.Pb(7,"section",2),a.Pb(8,"div",3),a.Pb(9,"h3"),a.sc(10,"Chit Details"),a.Ob(),a.Ob(),a.rc(11,u,76,12,"div",4),a.Ob(),a.Pb(12,"div",5),a.Pb(13,"ion-button",6),a.Xb("click",(function(){return e.done()})),a.sc(14,"Done"),a.Ob(),a.Ob(),a.Ob()),2&t&&(a.Ab(11),a.fc("ngForOf",e.print_cash_page))},directives:[c.k,c.w,c.o,c.l,c.v,c.j,o.j,c.d,c.e,c.f,c.s,c.i,o.k],pipes:[o.d],styles:[".flex_arrow[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-between}.done[_ngcontent-%COMP%]{text-align:center}.logout[_ngcontent-%COMP%]{padding-top:2rem;padding-right:2rem;color:#fff}.grand_total[_ngcontent-%COMP%]{font-weight:700}.exit[_ngcontent-%COMP%]{color:#fff;display:inline-block;font-size:22px;vertical-align:middle}.page_title[_ngcontent-%COMP%]{font-weight:700}.arrow[_ngcontent-%COMP%]{margin-top:1rem;margin-left:2rem;background:linear-gradient(90deg,#222428 0,#354466)!important;border-radius:50%;color:#fff;font-size:30px}ion-img[_ngcontent-%COMP%]{width:100px;padding-top:2rem}.mt-1[_ngcontent-%COMP%]{margin-top:10px}.print_branch[_ngcontent-%COMP%]{display:flex;justify-content:space-between}.image[_ngcontent-%COMP%]{padding-left:8rem}.sv[_ngcontent-%COMP%]{text-align:center;padding-top:12px}.regd[_ngcontent-%COMP%]{color:#7f7f7f}.sv_p[_ngcontent-%COMP%]{font-weight:700}.buttons[_ngcontent-%COMP%]{margin:16px}.buttons[_ngcontent-%COMP%]   .sms[_ngcontent-%COMP%]{margin-left:12px;background:#fff;color:#413e95;width:25%;height:32px;border-radius:15px;border:1px solid #413e95}.sig[_ngcontent-%COMP%]{line-height:24px;color:#7f7f7f;padding:16px;text-transform:inherit;font-size:14px}.text1[_ngcontent-%COMP%]{display:inline-block;vertical-align:middle;padding-left:10px;color:#fff}.icon_tool[_ngcontent-%COMP%]{padding-top:1rem;padding-right:1rem}.receipt[_ngcontent-%COMP%]{padding:40px}.receipt[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{float:right}.receipt[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#000}.branch_name[_ngcontent-%COMP%]{text-align:center}.receipt_date[_ngcontent-%COMP%]{padding:20px}.space_margin[_ngcontent-%COMP%]{margin-top:20px}p.sig[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:14px;color:#000;font-weight:600}"]}),t})()}];let g=(()=>{class t{}return t.\u0275mod=a.Ib({type:t}),t.\u0275inj=a.Hb({factory:function(e){return new(e||t)},providers:[b.a],imports:[[o.b,i.j,c.x,r.i.forChild(h)]]}),t})()},SmVF:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var o=n("mrSG"),i=n("C6fG"),r=n("fXoL"),c=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}Object(o.b)(e,t),e.prototype.show=function(t,e,n){return Object(i.cordova)(this,"show",{observable:!0,clearFunction:"hide"},arguments)},e.prototype.hide=function(){return Object(i.cordova)(this,"hide",{},arguments)},e.prototype.showWithOptions=function(t){return Object(i.cordova)(this,"showWithOptions",{observable:!0,clearFunction:"hide"},arguments)},e.prototype.showShortTop=function(t){return Object(i.cordova)(this,"showShortTop",{observable:!0,clearFunction:"hide"},arguments)},e.prototype.showShortCenter=function(t){return Object(i.cordova)(this,"showShortCenter",{observable:!0,clearFunction:"hide"},arguments)},e.prototype.showShortBottom=function(t){return Object(i.cordova)(this,"showShortBottom",{observable:!0,clearFunction:"hide"},arguments)},e.prototype.showLongTop=function(t){return Object(i.cordova)(this,"showLongTop",{observable:!0,clearFunction:"hide"},arguments)},e.prototype.showLongCenter=function(t){return Object(i.cordova)(this,"showLongCenter",{observable:!0,clearFunction:"hide"},arguments)},e.prototype.showLongBottom=function(t){return Object(i.cordova)(this,"showLongBottom",{observable:!0,clearFunction:"hide"},arguments)},e.pluginName="Toast",e.plugin="cordova-plugin-x-toast",e.pluginRef="plugins.toast",e.repo="https://github.com/EddyVerbruggen/Toast-PhoneGap-Plugin",e.platforms=["Android","BlackBerry 10","iOS","Windows","Windows Phone 8"],e.\u0275fac=function(t){return n(t||e)},e.\u0275prov=r.Gb({token:e,factory:function(t){return e.\u0275fac(t)}});var n=r.Rb(e);return e}(i.IonicNativePlugin)},s5zK:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var o=n("AytR"),i=n("fXoL"),r=n("tk/3");let c=(()=>{class t{constructor(t){this.http=t}payment_details(t){return this.http.get(o.a.Baseurl+"chitdetails/Mid?Mid="+t)}cash_details(t){return this.http.post(o.a.Baseurl+"ReceiptTable/AddList",t)}post_vouchercash(t){return this.http.post(o.a.Baseurl+"VoucherCreditDebit/AddList",t)}post_defaultvouchercash(t){return this.http.post(o.a.Baseurl+"DefaultCreditDebit/AddList",t)}receipt_update(t){return this.http.post(o.a.Baseurl+"ReceiptTable/Update",t)}print_details(t){return this.http.get(o.a.Baseurl+"AppVoucherPrint/AppReceiptno?AppReceiptno="+t)}receiptseries(t){return this.http.get(o.a.Baseurl+"ReceiptNo/Series?Series="+t)}receipthistory(t,e,n){return this.http.get(o.a.Baseurl+"VoucherHistory/Mid?Mid="+t+"&&FromDate="+e+"&&ToDate="+n)}}return t.\u0275fac=function(e){return new(e||t)(i.Tb(r.a))},t.\u0275prov=i.Gb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()}}]);
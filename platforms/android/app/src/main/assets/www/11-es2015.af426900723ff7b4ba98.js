(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"7zK7":function(t,e,n){"use strict";n.r(e),n.d(e,"CashprintPageModule",(function(){return g}));var o=n("ofXK"),i=n("3Pt+"),r=n("tyNb"),c=n("TEn/"),a=n("mrSG"),s=n("fXoL"),b=n("SmVF"),p=n("s5zK");function l(t,e){if(1&t&&(s.Pb(0,"tr"),s.Pb(1,"th"),s.tc(2,"Interest"),s.Ob(),s.Pb(3,"td"),s.tc(4,":"),s.Ob(),s.Pb(5,"td"),s.tc(6),s.Ob(),s.Ob()),2&t){const t=s.ac().$implicit;s.Ab(6),s.uc(null==t?null:t.penaltyForOverdue)}}function u(t,e){if(1&t&&(s.Pb(0,"tr"),s.Pb(1,"th"),s.tc(2,"Other amount"),s.Ob(),s.Pb(3,"td"),s.tc(4,":"),s.Ob(),s.Pb(5,"td"),s.tc(6),s.Ob(),s.Ob()),2&t){const t=s.ac().$implicit;s.Ab(6),s.uc(null==t?null:t.otherReceipts)}}function d(t,e){if(1&t&&(s.Pb(0,"div",7,8),s.Pb(2,"ion-card",9),s.Pb(3,"ion-card-content"),s.Pb(4,"div",10),s.Lb(5,"img",11),s.Pb(6,"div",12),s.Pb(7,"p"),s.tc(8,"Branch Name:"),s.Pb(9,"span"),s.tc(10),s.Ob(),s.Ob(),s.Pb(11,"p"),s.tc(12,"Form No: "),s.Pb(13,"span"),s.tc(14,"XVI"),s.Ob(),s.Ob(),s.Ob(),s.Ob(),s.Pb(15,"div",13),s.Lb(16,"img",14),s.Ob(),s.Pb(17,"div",15),s.Pb(18,"h1"),s.tc(19,"SREE VISALAM CHIT FUND LTD."),s.Ob(),s.Pb(20,"p"),s.tc(21,"Registered Office: Tirunelveli - 6"),s.Ob(),s.Pb(22,"p"),s.tc(23,"(See Section 23 and Rule 25) "),s.Ob(),s.Pb(24,"p"),s.tc(25,"Receipt issued under the chit funds Act 1982"),s.Ob(),s.Ob(),s.Pb(26,"div",16),s.Pb(27,"ion-row",17),s.Pb(28,"ion-col",18),s.Pb(29,"h3"),s.tc(30," CD/REC.SERIES "),s.Ob(),s.Ob(),s.Pb(31,"ion-col",18),s.Pb(32,"p"),s.tc(33,"Date: "),s.Pb(34,"span"),s.tc(35),s.bc(36,"date"),s.Ob(),s.Ob(),s.Pb(37,"p"),s.tc(38,"Time: "),s.Pb(39,"span"),s.tc(40),s.bc(41,"date"),s.Ob(),s.Ob(),s.Ob(),s.Ob(),s.Pb(42,"div",19),s.Pb(43,"p"),s.tc(44,"Receipt No: "),s.Pb(45,"span"),s.tc(46),s.Ob(),s.Ob(),s.Ob(),s.Pb(47,"table",20),s.Pb(48,"tbody"),s.Pb(49,"tr"),s.Pb(50,"th"),s.tc(51,"Received From"),s.Ob(),s.Pb(52,"td"),s.tc(53,":"),s.Ob(),s.Pb(54,"td"),s.tc(55),s.Ob(),s.Ob(),s.Pb(56,"tr"),s.Pb(57,"th"),s.tc(58,"Chit No"),s.Ob(),s.Pb(59,"td"),s.tc(60,":"),s.Ob(),s.Pb(61,"td"),s.tc(62),s.Ob(),s.Ob(),s.Pb(63,"tr"),s.Pb(64,"th"),s.tc(65,"Ag No/Year"),s.Ob(),s.Pb(66,"td"),s.tc(67,":"),s.Ob(),s.Pb(68,"td"),s.tc(69),s.Ob(),s.Ob(),s.Pb(70,"tr"),s.Pb(71,"th"),s.tc(72,"Current Inst No"),s.Ob(),s.Pb(73,"td"),s.tc(74,":"),s.Ob(),s.Pb(75,"td"),s.tc(76),s.Ob(),s.Ob(),s.sc(77,l,7,1,"tr",21),s.sc(78,u,7,1,"tr",21),s.Ob(),s.Ob(),s.Pb(79,"div",22),s.Pb(80,"p",23),s.tc(81," Total Paid"),s.Pb(82,"span"),s.tc(83),s.Ob(),s.Ob(),s.Ob(),s.Ob(),s.Ob(),s.Ob(),s.Pb(84,"p",24),s.Pb(85,"span"),s.tc(86,"Note: "),s.Ob(),s.tc(87,"Payments may take upto 3 working days to get reflected in your account"),s.Ob(),s.Ob()),2&t){const t=e.$implicit;s.Ab(10),s.uc(t.branchName),s.Ab(25),s.uc(s.cc(36,11,null==t?null:t.datetime,"dd/MM/yyyy ")),s.Ab(5),s.uc(s.cc(41,14,null==t?null:t.datetime," HH:mm a")),s.Ab(6),s.uc(null==t?null:t.cashReceiptNo),s.Ab(9),s.uc(null==t?null:t.customerName),s.Ab(7),s.uc(null==t?null:t.chitNo),s.Ab(7),s.uc(null==t?null:t.agreementNo),s.Ab(7),s.uc(null==t?null:t.currentInstalmentNo),s.Ab(1),s.fc("ngIf",0!=(null==t?null:t.penaltyForOverdue)),s.Ab(1),s.fc("ngIf",0!=(null==t?null:t.otherReceipts)),s.Ab(5),s.vc("\u20b9 ",null==t?null:t.total,"")}}const h=[{path:"",component:(()=>{class t{constructor(t,e,n,o,i,r,c,a){this.platform=t,this.loadingController=e,this.toast=n,this.paymentservice=o,this.modalCtrl=i,this.alertCtrl=r,this.router=c,this.route=a,this.api_id=[],this.isLoading=!1}ionViewWillEnter(){this.route.queryParams.subscribe(t=>{this.cash_print_preview=JSON.parse(t.state),console.log(this.cash_print_preview);for(let e=0;e<this.cash_print_preview.length;e++)this.api_id.push(this.cash_print_preview[e].ID);this.paymentservice.print_details(this.api_id).subscribe(t=>{this.print_cash_page=t})})}ngOnInit(){}previous(){this.router.navigateByUrl("dashboard")}logout(){this.router.navigateByUrl("login"),localStorage.clear()}done(){this.router.navigateByUrl("dashboard")}presentToast(t){return Object(a.a)(this,void 0,void 0,(function*(){this.toast.show(t,"2000","bottom").subscribe(t=>{console.log(t)})}))}}return t.\u0275fac=function(e){return new(e||t)(s.Kb(c.D),s.Kb(c.A),s.Kb(b.a),s.Kb(p.a),s.Kb(c.B),s.Kb(c.a),s.Kb(r.g),s.Kb(r.a))},t.\u0275cmp=s.Eb({type:t,selectors:[["app-cashprint"]],decls:15,vars:1,consts:[["name","arrow-back-outline",3,"click"],["fullscreen","",1,"svcf_recepit_page","svcf_dashboard_page"],[1,"payment"],[1,"page_title"],["id","printable-area",4,"ngFor","ngForOf"],[1,"done"],[3,"click"],["id","printable-area"],["my",""],[1,"card_bg"],[1,"ofz_img"],["src","../../../assets/images/img.png"],[1,"branch_name"],[1,"logo"],["src","../../../assets/images/logo.png"],[1,"ofz_address"],[1,"receipt_content"],["size","12"],["size","6"],[1,"receipt_no"],[1,"table","receipt_amts"],[4,"ngIf"],[1,"space_margin"],[1,"grand_total"],[1,"sig"]],template:function(t,e){1&t&&(s.Pb(0,"ion-header"),s.Pb(1,"ion-toolbar"),s.Pb(2,"ion-item"),s.Pb(3,"ion-icon",0),s.Xb("click",(function(){return e.previous()})),s.Ob(),s.Pb(4,"ion-title"),s.tc(5,"Receipt"),s.Ob(),s.Ob(),s.Ob(),s.Ob(),s.Pb(6,"ion-content",1),s.Pb(7,"section",2),s.Pb(8,"div",3),s.Pb(9,"h3"),s.tc(10,"Chit Details"),s.Ob(),s.Ob(),s.sc(11,d,88,17,"div",4),s.Ob(),s.Pb(12,"div",5),s.Pb(13,"ion-button",6),s.Xb("click",(function(){return e.done()})),s.tc(14,"Done"),s.Ob(),s.Ob(),s.Ob()),2&t&&(s.Ab(11),s.fc("ngForOf",e.print_cash_page))},directives:[c.l,c.x,c.p,c.m,c.w,c.k,o.j,c.e,c.f,c.g,c.t,c.j,o.k],pipes:[o.d],styles:[".flex_arrow[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-between}.done[_ngcontent-%COMP%]{text-align:center}.logout[_ngcontent-%COMP%]{padding-top:2rem;padding-right:2rem;color:#fff}.grand_total[_ngcontent-%COMP%]{font-weight:700}.exit[_ngcontent-%COMP%]{color:#fff;display:inline-block;font-size:22px;vertical-align:middle}.page_title[_ngcontent-%COMP%]{font-weight:700}.arrow[_ngcontent-%COMP%]{margin-top:1rem;margin-left:2rem;background:linear-gradient(90deg,#222428 0,#354466)!important;border-radius:50%;color:#fff;font-size:30px}ion-img[_ngcontent-%COMP%]{width:100px;padding-top:2rem}.mt-1[_ngcontent-%COMP%]{margin-top:10px}.print_branch[_ngcontent-%COMP%]{display:flex;justify-content:space-between}.image[_ngcontent-%COMP%]{padding-left:8rem}.sv[_ngcontent-%COMP%]{text-align:center;padding-top:12px}.regd[_ngcontent-%COMP%]{color:#7f7f7f}.sv_p[_ngcontent-%COMP%]{font-weight:700}.buttons[_ngcontent-%COMP%]{margin:16px}.buttons[_ngcontent-%COMP%]   .sms[_ngcontent-%COMP%]{margin-left:12px;background:#fff;color:#413e95;width:25%;height:32px;border-radius:15px;border:1px solid #413e95}.sig[_ngcontent-%COMP%]{line-height:24px;color:#7f7f7f;padding:16px;text-transform:inherit;font-size:14px}.text1[_ngcontent-%COMP%]{display:inline-block;vertical-align:middle;padding-left:10px;color:#fff}.icon_tool[_ngcontent-%COMP%]{padding-top:1rem;padding-right:1rem}.receipt[_ngcontent-%COMP%]{padding:40px}.receipt[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{float:right}.receipt[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#000}.branch_name[_ngcontent-%COMP%]{text-align:center}.receipt_date[_ngcontent-%COMP%]{padding:20px}.space_margin[_ngcontent-%COMP%]{margin-top:20px}p.sig[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:14px;color:#000;font-weight:600}"]}),t})()}];let g=(()=>{class t{}return t.\u0275mod=s.Ib({type:t}),t.\u0275inj=s.Hb({factory:function(e){return new(e||t)},providers:[b.a],imports:[[o.b,i.j,c.y,r.i.forChild(h)]]}),t})()},SmVF:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var o=n("mrSG"),i=n("C6fG"),r=n("fXoL"),c=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}Object(o.b)(e,t),e.prototype.show=function(t,e,n){return Object(i.cordova)(this,"show",{observable:!0,clearFunction:"hide"},arguments)},e.prototype.hide=function(){return Object(i.cordova)(this,"hide",{},arguments)},e.prototype.showWithOptions=function(t){return Object(i.cordova)(this,"showWithOptions",{observable:!0,clearFunction:"hide"},arguments)},e.prototype.showShortTop=function(t){return Object(i.cordova)(this,"showShortTop",{observable:!0,clearFunction:"hide"},arguments)},e.prototype.showShortCenter=function(t){return Object(i.cordova)(this,"showShortCenter",{observable:!0,clearFunction:"hide"},arguments)},e.prototype.showShortBottom=function(t){return Object(i.cordova)(this,"showShortBottom",{observable:!0,clearFunction:"hide"},arguments)},e.prototype.showLongTop=function(t){return Object(i.cordova)(this,"showLongTop",{observable:!0,clearFunction:"hide"},arguments)},e.prototype.showLongCenter=function(t){return Object(i.cordova)(this,"showLongCenter",{observable:!0,clearFunction:"hide"},arguments)},e.prototype.showLongBottom=function(t){return Object(i.cordova)(this,"showLongBottom",{observable:!0,clearFunction:"hide"},arguments)},e.pluginName="Toast",e.plugin="cordova-plugin-x-toast",e.pluginRef="plugins.toast",e.repo="https://github.com/EddyVerbruggen/Toast-PhoneGap-Plugin",e.platforms=["Android","BlackBerry 10","iOS","Windows","Windows Phone 8"],e.\u0275fac=function(t){return n(t||e)},e.\u0275prov=r.Gb({token:e,factory:function(t){return e.\u0275fac(t)}});var n=r.Rb(e);return e}(i.IonicNativePlugin)},s5zK:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var o=n("AytR"),i=n("fXoL"),r=n("tk/3");let c=(()=>{class t{constructor(t){this.http=t}payment_details(t){return this.http.get(o.a.Baseurl+"chitdetails/Mid?Mid="+t)}cash_details(t){return this.http.post(o.a.Baseurl+"ReceiptTable/AddList",t)}post_vouchercash(t){return this.http.post(o.a.Baseurl+"VoucherCreditDebit/AddList",t)}post_defaultvouchercash(t){return this.http.post(o.a.Baseurl+"DefaultCreditDebit/AddList",t)}receipt_update(t){return this.http.post(o.a.Baseurl+"ReceiptTable/Update",t)}print_details(t){return this.http.get(o.a.Baseurl+"AppVoucherPrint/AppReceiptno?AppReceiptno="+t)}receiptseries(t){return this.http.get(o.a.Baseurl+"ReceiptNo/Series?Series="+t)}receipthistory(t,e,n){return this.http.get(o.a.Baseurl+"VoucherHistory/Mid?Mid="+t+"&&FromDate="+e+"&&ToDate="+n)}}return t.\u0275fac=function(e){return new(e||t)(i.Tb(r.a))},t.\u0275prov=i.Gb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()}}]);
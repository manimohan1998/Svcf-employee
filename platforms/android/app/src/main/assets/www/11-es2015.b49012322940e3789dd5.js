(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"7zK7":function(t,e,n){"use strict";n.r(e),n.d(e,"CashprintPageModule",(function(){return u}));var o=n("ofXK"),i=n("3Pt+"),r=n("tyNb"),c=n("TEn/"),a=n("mrSG"),b=n("fXoL"),s=n("SmVF"),p=n("s5zK");function l(t,e){if(1&t&&(b.Pb(0,"div",7,8),b.Pb(2,"ion-card",9),b.Pb(3,"ion-card-content"),b.Pb(4,"ion-grid"),b.Pb(5,"ion-row",10),b.Lb(6,"ion-col",11),b.Pb(7,"ion-col",11),b.Lb(8,"img",12),b.Ob(),b.Pb(9,"ion-col",11),b.Pb(10,"p"),b.tc(11,"Form No: "),b.Pb(12,"span"),b.tc(13,"XVI"),b.Ob(),b.Ob(),b.Ob(),b.Ob(),b.Ob(),b.Pb(14,"div",13),b.Pb(15,"h1"),b.tc(16,"SREE VISALAM CHIT FUND LTD."),b.Ob(),b.Pb(17,"p"),b.tc(18,"Registered Office: Tirunelveli - 6"),b.Ob(),b.Pb(19,"p"),b.tc(20,"(See Section 23 and Rule 25) "),b.Ob(),b.Pb(21,"p"),b.tc(22,"Receipt issued under the chit funds Act 1982"),b.Ob(),b.Pb(23,"p"),b.Pb(24,"b"),b.tc(25,"Branch Name:"),b.Pb(26,"span"),b.tc(27),b.Ob(),b.Ob(),b.Ob(),b.Ob(),b.Pb(28,"div",14),b.Pb(29,"ion-row",15),b.Pb(30,"ion-col",16),b.Pb(31,"h3"),b.tc(32," CD/REC.SERIES "),b.Ob(),b.Ob(),b.Pb(33,"ion-col",16),b.Pb(34,"p"),b.tc(35,"Date: "),b.Pb(36,"span"),b.tc(37),b.bc(38,"date"),b.Ob(),b.Ob(),b.Pb(39,"p"),b.tc(40,"Time: "),b.Pb(41,"span"),b.tc(42),b.bc(43,"date"),b.Ob(),b.Ob(),b.Ob(),b.Ob(),b.Pb(44,"div",17),b.Pb(45,"p"),b.tc(46,"Receipt No: "),b.Pb(47,"span"),b.tc(48),b.Ob(),b.Ob(),b.Ob(),b.Pb(49,"table",18),b.Pb(50,"tbody"),b.Pb(51,"tr"),b.Pb(52,"th"),b.tc(53,"Received From"),b.Ob(),b.Pb(54,"td"),b.tc(55,":"),b.Ob(),b.Pb(56,"td"),b.tc(57),b.Ob(),b.Ob(),b.Pb(58,"tr"),b.Pb(59,"th"),b.tc(60,"Chit No"),b.Ob(),b.Pb(61,"td"),b.tc(62,":"),b.Ob(),b.Pb(63,"td"),b.tc(64),b.Ob(),b.Ob(),b.Pb(65,"tr"),b.Pb(66,"th"),b.tc(67,"Ag No/Year"),b.Ob(),b.Pb(68,"td"),b.tc(69,":"),b.Ob(),b.Pb(70,"td"),b.tc(71),b.Ob(),b.Ob(),b.Pb(72,"tr"),b.Pb(73,"th"),b.tc(74,"Amount Received"),b.Ob(),b.Pb(75,"td"),b.tc(76,":"),b.Ob(),b.Pb(77,"td"),b.tc(78),b.Ob(),b.Ob(),b.Pb(79,"tr"),b.Pb(80,"th"),b.tc(81,"Installment No"),b.Ob(),b.Pb(82,"td"),b.tc(83,":"),b.Ob(),b.Pb(84,"td"),b.tc(85),b.Ob(),b.Ob(),b.Pb(86,"tr"),b.Pb(87,"th"),b.tc(88,"Interest"),b.Ob(),b.Pb(89,"td"),b.tc(90,":"),b.Ob(),b.Pb(91,"td"),b.tc(92),b.Ob(),b.Ob(),b.Pb(93,"tr"),b.Pb(94,"th"),b.tc(95,"Other Receipts"),b.Ob(),b.Pb(96,"td"),b.tc(97,":"),b.Ob(),b.Pb(98,"td"),b.tc(99),b.Ob(),b.Ob(),b.Ob(),b.Ob(),b.Pb(100,"div",19),b.Pb(101,"p",20),b.tc(102," Total Paid"),b.Pb(103,"span"),b.tc(104),b.Ob(),b.Ob(),b.Ob(),b.Ob(),b.Ob(),b.Ob(),b.Pb(105,"p",21),b.Pb(106,"span"),b.tc(107,"Note: "),b.Ob(),b.tc(108,"Payments may take upto 3 working days to get reflected in your account"),b.Ob(),b.Ob()),2&t){const t=e.$implicit;b.Ab(27),b.uc(t.branchName),b.Ab(10),b.uc(b.cc(38,12,null==t?null:t.datetime,"dd/MM/yyyy ")),b.Ab(5),b.uc(b.cc(43,15,null==t?null:t.datetime," HH:mm a")),b.Ab(6),b.uc(null==t?null:t.cashReceiptNo),b.Ab(9),b.uc(null==t?null:t.customerName),b.Ab(7),b.uc(null==t?null:t.chitNo),b.Ab(7),b.uc(null==t?null:t.agreementNo),b.Ab(7),b.uc(""===t.amount?"0.00":t.amount),b.Ab(7),b.uc(""===t.paidInstmentNo?"0.00":t.paidInstmentNo),b.Ab(7),b.uc(""===t.penaltyForOverdue?"0.00":t.penaltyForOverdue),b.Ab(7),b.uc(""===t.otherReceipts?"0.00":t.otherReceipts),b.Ab(5),b.vc("\u20b9 ",null==t?null:t.total,"")}}const d=[{path:"",component:(()=>{class t{constructor(t,e,n,o,i,r,c,a){this.platform=t,this.loadingController=e,this.toast=n,this.paymentservice=o,this.modalCtrl=i,this.alertCtrl=r,this.router=c,this.route=a,this.api_id=[],this.isLoading=!1}ionViewWillEnter(){this.route.queryParams.subscribe(t=>{this.cash_print_preview=JSON.parse(t.state),console.log(this.cash_print_preview);for(let e=0;e<this.cash_print_preview.length;e++)this.api_id.push(this.cash_print_preview[e].ID);this.paymentservice.print_details(this.api_id).subscribe(t=>{console.log(t),this.print_cash_page=t})})}ngOnInit(){}previous(){this.router.navigateByUrl("dashboard")}logout(){this.router.navigateByUrl("login"),localStorage.clear()}done(){this.router.navigateByUrl("dashboard")}presentToast(t){return Object(a.a)(this,void 0,void 0,(function*(){this.toast.show(t,"2000","bottom").subscribe(t=>{console.log(t)})}))}}return t.\u0275fac=function(e){return new(e||t)(b.Kb(c.D),b.Kb(c.B),b.Kb(s.a),b.Kb(p.a),b.Kb(c.C),b.Kb(c.a),b.Kb(r.g),b.Kb(r.a))},t.\u0275cmp=b.Eb({type:t,selectors:[["app-cashprint"]],decls:15,vars:1,consts:[["name","arrow-back-outline",3,"click"],["fullscreen","",1,"svcf_recepit_page","svcf_dashboard_page"],[1,"payment"],[1,"page_title"],["id","printable-area",4,"ngFor","ngForOf"],[1,"done"],[3,"click"],["id","printable-area"],["my",""],[1,"card_bg"],[2,"justify-content","center"],["size","4"],["src","../../../assets/images/logo.png"],[1,"ofz_address"],[1,"receipt_content"],["size","12"],["size","6"],[1,"receipt_no"],[1,"table","receipt_amts"],[1,"space_margin"],[1,"grand_total"],[1,"sig"]],template:function(t,e){1&t&&(b.Pb(0,"ion-header"),b.Pb(1,"ion-toolbar"),b.Pb(2,"ion-item"),b.Pb(3,"ion-icon",0),b.Xb("click",(function(){return e.previous()})),b.Ob(),b.Pb(4,"ion-title"),b.tc(5,"Receipt"),b.Ob(),b.Ob(),b.Ob(),b.Ob(),b.Pb(6,"ion-content",1),b.Pb(7,"section",2),b.Pb(8,"div",3),b.Pb(9,"h3"),b.tc(10,"Chit Details"),b.Ob(),b.Ob(),b.sc(11,l,109,18,"div",4),b.Ob(),b.Pb(12,"div",5),b.Pb(13,"ion-button",6),b.Xb("click",(function(){return e.done()})),b.tc(14,"Done"),b.Ob(),b.Ob(),b.Ob()),2&t&&(b.Ab(11),b.fc("ngForOf",e.print_cash_page))},directives:[c.m,c.y,c.q,c.n,c.x,c.k,o.j,c.e,c.f,c.g,c.l,c.u,c.j],pipes:[o.d],styles:[".flex_arrow[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-between}.done[_ngcontent-%COMP%]{text-align:center}.logout[_ngcontent-%COMP%]{padding-top:2rem;padding-right:2rem;color:#fff}.grand_total[_ngcontent-%COMP%]{font-weight:700}.exit[_ngcontent-%COMP%]{color:#fff;display:inline-block;font-size:22px;vertical-align:middle}.page_title[_ngcontent-%COMP%]{font-weight:700}.arrow[_ngcontent-%COMP%]{margin-top:1rem;margin-left:2rem;background:linear-gradient(90deg,#222428 0,#354466)!important;border-radius:50%;color:#fff;font-size:30px}ion-img[_ngcontent-%COMP%]{width:100px;padding-top:2rem}.mt-1[_ngcontent-%COMP%]{margin-top:10px}.print_branch[_ngcontent-%COMP%]{display:flex;justify-content:space-between}.image[_ngcontent-%COMP%]{padding-left:8rem}.sv[_ngcontent-%COMP%]{text-align:center;padding-top:12px}.regd[_ngcontent-%COMP%]{color:#7f7f7f}.sv_p[_ngcontent-%COMP%]{font-weight:700}.buttons[_ngcontent-%COMP%]{margin:16px}.buttons[_ngcontent-%COMP%]   .sms[_ngcontent-%COMP%]{margin-left:12px;background:#fff;color:#413e95;width:25%;height:32px;border-radius:15px;border:1px solid #413e95}.sig[_ngcontent-%COMP%]{line-height:24px;color:#7f7f7f;padding:16px;text-transform:inherit;font-size:14px}.text1[_ngcontent-%COMP%]{display:inline-block;vertical-align:middle;padding-left:10px;color:#fff}.icon_tool[_ngcontent-%COMP%]{padding-top:1rem;padding-right:1rem}.receipt[_ngcontent-%COMP%]{padding:40px}.receipt[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{float:right}.receipt[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#000}.branch_name[_ngcontent-%COMP%]{text-align:center}.receipt_date[_ngcontent-%COMP%]{padding:20px}.space_margin[_ngcontent-%COMP%]{margin-top:20px}p.sig[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:14px;color:#000;font-weight:600}"]}),t})()}];let u=(()=>{class t{}return t.\u0275mod=b.Ib({type:t}),t.\u0275inj=b.Hb({factory:function(e){return new(e||t)},providers:[s.a],imports:[[o.b,i.j,c.z,r.i.forChild(d)]]}),t})()},SmVF:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var o=n("mrSG"),i=n("C6fG"),r=n("fXoL"),c=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}Object(o.b)(e,t),e.prototype.show=function(t,e,n){return Object(i.cordova)(this,"show",{observable:!0,clearFunction:"hide"},arguments)},e.prototype.hide=function(){return Object(i.cordova)(this,"hide",{},arguments)},e.prototype.showWithOptions=function(t){return Object(i.cordova)(this,"showWithOptions",{observable:!0,clearFunction:"hide"},arguments)},e.prototype.showShortTop=function(t){return Object(i.cordova)(this,"showShortTop",{observable:!0,clearFunction:"hide"},arguments)},e.prototype.showShortCenter=function(t){return Object(i.cordova)(this,"showShortCenter",{observable:!0,clearFunction:"hide"},arguments)},e.prototype.showShortBottom=function(t){return Object(i.cordova)(this,"showShortBottom",{observable:!0,clearFunction:"hide"},arguments)},e.prototype.showLongTop=function(t){return Object(i.cordova)(this,"showLongTop",{observable:!0,clearFunction:"hide"},arguments)},e.prototype.showLongCenter=function(t){return Object(i.cordova)(this,"showLongCenter",{observable:!0,clearFunction:"hide"},arguments)},e.prototype.showLongBottom=function(t){return Object(i.cordova)(this,"showLongBottom",{observable:!0,clearFunction:"hide"},arguments)},e.pluginName="Toast",e.plugin="cordova-plugin-x-toast",e.pluginRef="plugins.toast",e.repo="https://github.com/EddyVerbruggen/Toast-PhoneGap-Plugin",e.platforms=["Android","BlackBerry 10","iOS","Windows","Windows Phone 8"],e.\u0275fac=function(t){return n(t||e)},e.\u0275prov=r.Gb({token:e,factory:function(t){return e.\u0275fac(t)}});var n=r.Rb(e);return e}(i.IonicNativePlugin)},s5zK:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var o=n("AytR"),i=n("fXoL"),r=n("tk/3");let c=(()=>{class t{constructor(t){this.http=t}payment_details(t){return this.http.get(o.a.Baseurl+"chitdetails/Mid?Mid="+t)}cash_details(t){return this.http.post(o.a.Baseurl+"ReceiptTable/AddList",t)}post_vouchercash(t){return this.http.post(o.a.Baseurl+"VoucherCreditDebit/AddList",t)}post_defaultvouchercash(t){return this.http.post(o.a.Baseurl+"DefaultCreditDebit/AddList",t)}receipt_update(t){return this.http.post(o.a.Baseurl+"ReceiptTable/Update",t)}print_details(t){return this.http.get(o.a.Baseurl+"AppVoucherPrint/AppReceiptno?AppReceiptno="+t)}receiptseries(t){return this.http.get(o.a.Baseurl+"ReceiptNo/Series?Series="+t)}receipthistory(t,e,n){return this.http.get(o.a.Baseurl+"VoucherHistory/Mid?Mid="+t+"&&FromDate="+e+"&&ToDate="+n)}}return t.\u0275fac=function(e){return new(e||t)(i.Tb(r.a))},t.\u0275prov=i.Gb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()}}]);
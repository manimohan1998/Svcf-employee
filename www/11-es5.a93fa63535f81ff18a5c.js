!function(){function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function n(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"7zK7":function(e,o,i){"use strict";i.r(o),i.d(o,"CashprintPageModule",(function(){return v}));var r=i("ofXK"),c=i("3Pt+"),a=i("tyNb"),s=i("TEn/"),b=i("mrSG"),p=i("fXoL"),u=i("SmVF"),l=i("s5zK");function d(t,e){if(1&t&&(p.Pb(0,"tr"),p.Pb(1,"th"),p.tc(2,"Interest"),p.Ob(),p.Pb(3,"td"),p.tc(4,":"),p.Ob(),p.Pb(5,"td"),p.tc(6),p.Ob(),p.Ob()),2&t){var n=p.ac().$implicit;p.Ab(6),p.uc(null==n?null:n.penaltyForOverdue)}}function h(t,e){if(1&t&&(p.Pb(0,"tr"),p.Pb(1,"th"),p.tc(2,"Other amount"),p.Ob(),p.Pb(3,"td"),p.tc(4,":"),p.Ob(),p.Pb(5,"td"),p.tc(6),p.Ob(),p.Ob()),2&t){var n=p.ac().$implicit;p.Ab(6),p.uc(null==n?null:n.otherReceipts)}}function f(t,e){if(1&t&&(p.Pb(0,"div",7,8),p.Pb(2,"ion-card",9),p.Pb(3,"ion-card-content"),p.Pb(4,"div",10),p.Lb(5,"img",11),p.Pb(6,"div",12),p.Pb(7,"p"),p.tc(8,"Branch Name:"),p.Pb(9,"span"),p.tc(10),p.Ob(),p.Ob(),p.Pb(11,"p"),p.tc(12,"Form No: "),p.Pb(13,"span"),p.tc(14,"XVI"),p.Ob(),p.Ob(),p.Ob(),p.Ob(),p.Pb(15,"div",13),p.Lb(16,"img",14),p.Ob(),p.Pb(17,"div",15),p.Pb(18,"h1"),p.tc(19,"SREE VISALAM CHIT FUND LTD."),p.Ob(),p.Pb(20,"p"),p.tc(21,"Registered Office: Tirunelveli - 6"),p.Ob(),p.Pb(22,"p"),p.tc(23,"(See Section 23 and Rule 25) "),p.Ob(),p.Pb(24,"p"),p.tc(25,"Receipt issued under the chit funds Act 1982"),p.Ob(),p.Ob(),p.Pb(26,"div",16),p.Pb(27,"ion-row",17),p.Pb(28,"ion-col",18),p.Pb(29,"h3"),p.tc(30," CD/REC.SERIES "),p.Ob(),p.Ob(),p.Pb(31,"ion-col",18),p.Pb(32,"p"),p.tc(33,"Date: "),p.Pb(34,"span"),p.tc(35),p.bc(36,"date"),p.Ob(),p.Ob(),p.Ob(),p.Ob(),p.Pb(37,"div",19),p.Pb(38,"p"),p.tc(39,"Receipt No: "),p.Pb(40,"span"),p.tc(41),p.Ob(),p.Ob(),p.Ob(),p.Pb(42,"table",20),p.Pb(43,"tbody"),p.Pb(44,"tr"),p.Pb(45,"th"),p.tc(46,"Received From"),p.Ob(),p.Pb(47,"td"),p.tc(48,":"),p.Ob(),p.Pb(49,"td"),p.tc(50),p.Ob(),p.Ob(),p.Pb(51,"tr"),p.Pb(52,"th"),p.tc(53,"Chit No"),p.Ob(),p.Pb(54,"td"),p.tc(55,":"),p.Ob(),p.Pb(56,"td"),p.tc(57),p.Ob(),p.Ob(),p.Pb(58,"tr"),p.Pb(59,"th"),p.tc(60,"Ag No/Year"),p.Ob(),p.Pb(61,"td"),p.tc(62,":"),p.Ob(),p.Pb(63,"td"),p.tc(64),p.Ob(),p.Ob(),p.sc(65,d,7,1,"tr",21),p.sc(66,h,7,1,"tr",21),p.Ob(),p.Ob(),p.Pb(67,"div",22),p.Pb(68,"p",23),p.tc(69," Total Paid"),p.Pb(70,"span"),p.tc(71),p.Ob(),p.Ob(),p.Ob(),p.Ob(),p.Ob(),p.Ob(),p.Pb(72,"p",24),p.Pb(73,"span"),p.tc(74,"Note: "),p.Ob(),p.tc(75,"Payments may take upto 3 working days to get reflected in your account"),p.Ob(),p.Ob()),2&t){var n=e.$implicit;p.Ab(10),p.uc(n.branchName),p.Ab(25),p.uc(p.cc(36,9,null==n?null:n.datetime,"dd/MM/yyyy")),p.Ab(6),p.uc(null==n?null:n.cashReceiptNo),p.Ab(9),p.uc(null==n?null:n.customerName),p.Ab(7),p.uc(null==n?null:n.chitNo),p.Ab(7),p.uc(null==n?null:n.agreementNo),p.Ab(1),p.fc("ngIf",0!=(null==n?null:n.penaltyForOverdue)),p.Ab(1),p.fc("ngIf",0!=(null==n?null:n.otherReceipts)),p.Ab(5),p.vc("\u20b9 ",null==n?null:n.total,"")}}var g,O,P=[{path:"",component:(g=function(){function e(n,o,i,r,c,a,s,b){t(this,e),this.platform=n,this.loadingController=o,this.toast=i,this.paymentservice=r,this.modalCtrl=c,this.alertCtrl=a,this.router=s,this.route=b,this.api_id=[],this.isLoading=!1}return n(e,[{key:"onBack",value:function(){}},{key:"ngOnInit",value:function(){var t=this;this.cash_print_preview=JSON.parse(localStorage.getItem("print_cash"));for(var e=0;e<this.cash_print_preview.length;e++)this.api_id.push(this.cash_print_preview[e].ID);this.paymentservice.print_details(this.api_id).subscribe((function(e){t.print_cash_page=e}))}},{key:"previous",value:function(){this.router.navigateByUrl("dashboard")}},{key:"logout",value:function(){this.router.navigateByUrl("login"),localStorage.clear()}},{key:"done",value:function(){this.router.navigateByUrl("dashboard")}},{key:"presentToast",value:function(t){return Object(b.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.toast.show(t,"2000","bottom").subscribe((function(t){console.log(t)}));case 1:case"end":return e.stop()}}),e,this)})))}}]),e}(),g.\u0275fac=function(t){return new(t||g)(p.Kb(s.D),p.Kb(s.A),p.Kb(u.a),p.Kb(l.a),p.Kb(s.B),p.Kb(s.a),p.Kb(a.g),p.Kb(a.a))},g.\u0275cmp=p.Eb({type:g,selectors:[["app-cashprint"]],decls:15,vars:1,consts:[["name","arrow-back-outline",3,"click"],["fullscreen","",1,"svcf_recepit_page","svcf_dashboard_page"],[1,"payment"],[1,"page_title"],["id","printable-area",4,"ngFor","ngForOf"],[1,"done"],[3,"click"],["id","printable-area"],["my",""],[1,"card_bg"],[1,"ofz_img"],["src","../../../assets/images/img.png"],[1,"branch_name"],[1,"logo"],["src","../../../assets/images/logo.png"],[1,"ofz_address"],[1,"receipt_content"],["size","12"],["size","6"],[1,"receipt_no"],[1,"table","receipt_amts"],[4,"ngIf"],[1,"space_margin"],[1,"grand_total"],[1,"sig"]],template:function(t,e){1&t&&(p.Pb(0,"ion-header"),p.Pb(1,"ion-toolbar"),p.Pb(2,"ion-item"),p.Pb(3,"ion-icon",0),p.Xb("click",(function(){return e.previous()})),p.Ob(),p.Pb(4,"ion-title"),p.tc(5,"Receipt"),p.Ob(),p.Ob(),p.Ob(),p.Ob(),p.Pb(6,"ion-content",1),p.Pb(7,"section",2),p.Pb(8,"div",3),p.Pb(9,"h3"),p.tc(10,"Chit Details"),p.Ob(),p.Ob(),p.sc(11,f,76,12,"div",4),p.Ob(),p.Pb(12,"div",5),p.Pb(13,"ion-button",6),p.Xb("click",(function(){return e.done()})),p.tc(14,"Done"),p.Ob(),p.Ob(),p.Ob()),2&t&&(p.Ab(11),p.fc("ngForOf",e.print_cash_page))},directives:[s.l,s.x,s.p,s.m,s.w,s.k,r.j,s.e,s.f,s.g,s.t,s.j,r.k],pipes:[r.d],styles:[".flex_arrow[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-between}.done[_ngcontent-%COMP%]{text-align:center}.logout[_ngcontent-%COMP%]{padding-top:2rem;padding-right:2rem;color:#fff}.grand_total[_ngcontent-%COMP%]{font-weight:700}.exit[_ngcontent-%COMP%]{color:#fff;display:inline-block;font-size:22px;vertical-align:middle}.page_title[_ngcontent-%COMP%]{font-weight:700}.arrow[_ngcontent-%COMP%]{margin-top:1rem;margin-left:2rem;background:linear-gradient(90deg,#222428 0,#354466)!important;border-radius:50%;color:#fff;font-size:30px}ion-img[_ngcontent-%COMP%]{width:100px;padding-top:2rem}.mt-1[_ngcontent-%COMP%]{margin-top:10px}.print_branch[_ngcontent-%COMP%]{display:flex;justify-content:space-between}.image[_ngcontent-%COMP%]{padding-left:8rem}.sv[_ngcontent-%COMP%]{text-align:center;padding-top:12px}.regd[_ngcontent-%COMP%]{color:#7f7f7f}.sv_p[_ngcontent-%COMP%]{font-weight:700}.buttons[_ngcontent-%COMP%]{margin:16px}.buttons[_ngcontent-%COMP%]   .sms[_ngcontent-%COMP%]{margin-left:12px;background:#fff;color:#413e95;width:25%;height:32px;border-radius:15px;border:1px solid #413e95}.sig[_ngcontent-%COMP%]{line-height:24px;color:#7f7f7f;padding:16px;text-transform:inherit;font-size:14px}.text1[_ngcontent-%COMP%]{display:inline-block;vertical-align:middle;padding-left:10px;color:#fff}.icon_tool[_ngcontent-%COMP%]{padding-top:1rem;padding-right:1rem}.receipt[_ngcontent-%COMP%]{padding:40px}.receipt[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{float:right}.receipt[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#000}.branch_name[_ngcontent-%COMP%]{text-align:center}.receipt_date[_ngcontent-%COMP%]{padding:20px}.space_margin[_ngcontent-%COMP%]{margin-top:20px}p.sig[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:14px;color:#000;font-weight:600}"]}),g)}],v=((O=function e(){t(this,e)}).\u0275mod=p.Ib({type:O}),O.\u0275inj=p.Hb({factory:function(t){return new(t||O)},providers:[u.a],imports:[[r.b,c.j,s.y,a.i.forChild(P)]]}),O)},SmVF:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var o=n("mrSG"),i=n("C6fG"),r=n("fXoL"),c=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}Object(o.b)(e,t),e.prototype.show=function(t,e,n){return Object(i.cordova)(this,"show",{observable:!0,clearFunction:"hide"},arguments)},e.prototype.hide=function(){return Object(i.cordova)(this,"hide",{},arguments)},e.prototype.showWithOptions=function(t){return Object(i.cordova)(this,"showWithOptions",{observable:!0,clearFunction:"hide"},arguments)},e.prototype.showShortTop=function(t){return Object(i.cordova)(this,"showShortTop",{observable:!0,clearFunction:"hide"},arguments)},e.prototype.showShortCenter=function(t){return Object(i.cordova)(this,"showShortCenter",{observable:!0,clearFunction:"hide"},arguments)},e.prototype.showShortBottom=function(t){return Object(i.cordova)(this,"showShortBottom",{observable:!0,clearFunction:"hide"},arguments)},e.prototype.showLongTop=function(t){return Object(i.cordova)(this,"showLongTop",{observable:!0,clearFunction:"hide"},arguments)},e.prototype.showLongCenter=function(t){return Object(i.cordova)(this,"showLongCenter",{observable:!0,clearFunction:"hide"},arguments)},e.prototype.showLongBottom=function(t){return Object(i.cordova)(this,"showLongBottom",{observable:!0,clearFunction:"hide"},arguments)},e.pluginName="Toast",e.plugin="cordova-plugin-x-toast",e.pluginRef="plugins.toast",e.repo="https://github.com/EddyVerbruggen/Toast-PhoneGap-Plugin",e.platforms=["Android","BlackBerry 10","iOS","Windows","Windows Phone 8"],e.\u0275fac=function(t){return n(t||e)},e.\u0275prov=r.Gb({token:e,factory:function(t){return e.\u0275fac(t)}});var n=r.Rb(e);return e}(i.IonicNativePlugin)},s5zK:function(e,o,i){"use strict";i.d(o,"a",(function(){return s}));var r=i("AytR"),c=i("fXoL"),a=i("tk/3"),s=function(){var e=function(){function e(n){t(this,e),this.http=n}return n(e,[{key:"payment_details",value:function(t){return this.http.get(r.a.Baseurl+"chitdetails/Mid?Mid="+t)}},{key:"cash_details",value:function(t){return this.http.post(r.a.Baseurl+"ReceiptTable/AddList",t)}},{key:"post_vouchercash",value:function(t){return this.http.post(r.a.Baseurl+"VoucherCreditDebit/AddList",t)}},{key:"post_defaultvouchercash",value:function(t){return this.http.post(r.a.Baseurl+"DefaultCreditDebit/AddList",t)}},{key:"receipt_update",value:function(t){return this.http.post(r.a.Baseurl+"ReceiptTable/Update",t)}},{key:"print_details",value:function(t){return this.http.get(r.a.Baseurl+"AppVoucherPrint/AppReceiptno?AppReceiptno="+t)}},{key:"receiptseries",value:function(t){return this.http.get(r.a.Baseurl+"ReceiptNo/Series?Series="+t)}},{key:"receipthistory",value:function(t,e,n){return this.http.get(r.a.Baseurl+"VoucherHistory/Mid?Mid="+t+"&&FromDate="+e+"&&ToDate="+n)}}]),e}();return e.\u0275fac=function(t){return new(t||e)(c.Tb(a.a))},e.\u0275prov=c.Gb({token:e,factory:e.\u0275fac,providedIn:"root"}),e}()}}])}();
!function(){function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{XvRO:function(n,r,i){"use strict";i.r(r),i.d(r,"ReceipthistoryPageModule",(function(){return x}));var o=i("ofXK"),c=i("3Pt+"),a=i("TEn/"),b=i("tyNb"),s=i("mrSG"),p=i("wd/R"),u=(i("0tRk"),i("fXoL")),d=i("SmVF"),l=i("s5zK"),f=i("kmnG"),m=i("qFsG"),g=i("iadO");function h(t,e){if(1&t&&(u.Pb(0,"div",12),u.Pb(1,"ion-card",13),u.Pb(2,"ion-card-content"),u.Pb(3,"div",14),u.Lb(4,"img",15),u.Pb(5,"div",16),u.Pb(6,"p"),u.tc(7,"Branch Name:"),u.Pb(8,"span"),u.tc(9),u.Ob(),u.Ob(),u.Pb(10,"p"),u.tc(11,"Form No: "),u.Pb(12,"span"),u.tc(13,"XVI"),u.Ob(),u.Ob(),u.Ob(),u.Ob(),u.Pb(14,"div",17),u.Lb(15,"img",18),u.Ob(),u.Pb(16,"div",19),u.Pb(17,"h1"),u.tc(18,"SREE VISALAM CHIT FUND LTD."),u.Ob(),u.Pb(19,"p"),u.tc(20,"Registered Office: Tirunelveli - 6"),u.Ob(),u.Pb(21,"p"),u.tc(22,"(See Section 23 and Rule 25) "),u.Ob(),u.Pb(23,"p"),u.tc(24,"Receipt issued under the chit funds Act 1982"),u.Ob(),u.Ob(),u.Pb(25,"div",20),u.Pb(26,"ion-row",21),u.Pb(27,"ion-col",22),u.Pb(28,"h3"),u.tc(29," CD/REC.SERIES "),u.Ob(),u.Ob(),u.Pb(30,"ion-col",22),u.Pb(31,"p"),u.tc(32,"Date: "),u.Pb(33,"span"),u.tc(34),u.bc(35,"date"),u.Ob(),u.Ob(),u.Ob(),u.Ob(),u.Pb(36,"div",23),u.Pb(37,"p"),u.tc(38,"Receipt No: "),u.Pb(39,"span"),u.tc(40),u.Ob(),u.Ob(),u.Ob(),u.Pb(41,"table",24),u.Pb(42,"tbody"),u.Pb(43,"tr"),u.Pb(44,"th"),u.tc(45,"Customer Name"),u.Ob(),u.Pb(46,"td"),u.tc(47,":"),u.Ob(),u.Pb(48,"td"),u.tc(49),u.Ob(),u.Ob(),u.Pb(50,"tr"),u.Pb(51,"th"),u.tc(52,"Branch Name"),u.Ob(),u.Pb(53,"td"),u.tc(54,":"),u.Ob(),u.Pb(55,"td"),u.tc(56),u.Ob(),u.Ob(),u.Pb(57,"tr"),u.Pb(58,"th"),u.tc(59,"Chit No"),u.Ob(),u.Pb(60,"td"),u.tc(61,":"),u.Ob(),u.Pb(62,"td"),u.tc(63),u.Ob(),u.Ob(),u.Pb(64,"tr"),u.Pb(65,"th"),u.tc(66,"Chit Agreement No"),u.Ob(),u.Pb(67,"td"),u.tc(68,":"),u.Ob(),u.Pb(69,"td"),u.tc(70),u.Ob(),u.Ob(),u.Pb(71,"tr"),u.Pb(72,"th"),u.tc(73,"Chit Installment No"),u.Ob(),u.Pb(74,"td"),u.tc(75,":"),u.Ob(),u.Pb(76,"td"),u.tc(77),u.Ob(),u.Ob(),u.Pb(78,"tr"),u.Pb(79,"th"),u.tc(80,"Amount Received"),u.Ob(),u.Pb(81,"td"),u.tc(82,":"),u.Ob(),u.Pb(83,"td"),u.tc(84),u.Ob(),u.Ob(),u.Pb(85,"tr"),u.Pb(86,"th"),u.tc(87,"Interest"),u.Ob(),u.Pb(88,"td"),u.tc(89,":"),u.Ob(),u.Pb(90,"td"),u.tc(91),u.Ob(),u.Ob(),u.Pb(92,"tr"),u.Pb(93,"th"),u.tc(94,"Other Receipts"),u.Ob(),u.Pb(95,"td"),u.tc(96,":"),u.Ob(),u.Pb(97,"td"),u.tc(98),u.Ob(),u.Ob(),u.Ob(),u.Ob(),u.Pb(99,"div",25),u.Pb(100,"p",26),u.tc(101,"Total"),u.Pb(102,"span"),u.tc(103),u.Ob(),u.Ob(),u.Ob(),u.Pb(104,"p",27),u.Pb(105,"span"),u.tc(106,"Note: "),u.Ob(),u.tc(107," This is a computer generated Receipt hence signature is not required"),u.Ob(),u.Ob(),u.Ob(),u.Ob(),u.Ob()),2&t){var n=e.$implicit;u.Ab(9),u.uc(n.branchName),u.Ab(25),u.uc(u.cc(35,12,n.paidDate,"dd-MM-yyyy")),u.Ab(6),u.uc(n.appReceiptno),u.Ab(9),u.uc(n.customerName),u.Ab(7),u.uc(n.branchName),u.Ab(7),u.uc(n.chitNo),u.Ab(7),u.uc(n.chitAgreementno),u.Ab(7),u.uc(n.currentInstno),u.Ab(7),u.uc(n.Amount),u.Ab(7),u.uc(n.interest),u.Ab(7),u.uc(n.otherReceipts),u.Ab(5),u.vc("\u20b9 ",n.total,"")}}function O(t,e){if(1&t&&(u.Pb(0,"section",10),u.sc(1,h,108,15,"div",11),u.Ob()),2&t){var n=u.ac();u.Ab(1),u.fc("ngForOf",n.receipt_history)}}var P,_,v,y=[{path:"",component:(P=function(){function n(e,r,i,o,c,a){var b=this;t(this,n),this.fb=e,this.toast=r,this.loadingController=i,this.paymentservice=o,this.router=c,this.route=a,this.isLoading=!1,this.customernames=[],this.receiptnum=[],this.chitnum=[],this.branchname=[],this.route.queryParams.subscribe((function(t){b.router.getCurrentNavigation().extras.state&&(b.value=b.router.getCurrentNavigation().extras.state.user)})),this.colid=localStorage.getItem("col_id")}var r,i,o;return r=n,(i=[{key:"ngOnInit",value:function(){this.receiptFormGroup=this.fb.group({from_date:["",c.t.required],to_date:["",c.t.required]})}},{key:"history",value:function(){var t=this;this.present(),this.receiptFormGroup.value.from_date=p(this.receiptFormGroup.value.from_date.toLocaleString()).format("yyyy/MM/DD"),this.receiptFormGroup.value.to_date=p(this.receiptFormGroup.value.to_date.toLocaleString()).format("yyyy/MM/DD"),this.paymentservice.receipthistory(this.colid,this.receiptFormGroup.value.from_date,this.receiptFormGroup.value.to_date).subscribe((function(e){if(t.dismiss(),0==e.length)t.presentToast("No data available");else{t.receipt_history=e,t.length=t.receipt_history.length;for(var n=0;n<t.receipt_history.length;n++)t.customernames.push(t.receipt_history[n].customerName),t.receiptnum.push(t.receipt_history[n].appReceiptno),t.branchname.push(t.receipt_history[n].branchName),t.chitnum.push(t.receipt_history[n].chitNo)}}))}},{key:"presentToast",value:function(t){return Object(s.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.toast.show(t,"2000","bottom").subscribe((function(t){console.log(t)}));case 1:case"end":return e.stop()}}),e,this)})))}},{key:"previous",value:function(){this.router.navigateByUrl("dashboard")}},{key:"present",value:function(){return Object(s.a)(this,void 0,void 0,regeneratorRuntime.mark((function t(){var e=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.isLoading=!0,t.next=3,this.loadingController.create({message:"Loading,Please wait....."}).then((function(t){t.present().then((function(){console.log("presented"),e.isLoading||t.dismiss().then((function(){return console.log("abort presenting")}))}))}));case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),t,this)})))}},{key:"dismiss",value:function(){return Object(s.a)(this,void 0,void 0,regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.isLoading=!1,t.next=3,this.loadingController.dismiss().then((function(){return console.log("dismissed")}));case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),t,this)})))}}])&&e(r.prototype,i),o&&e(r,o),n}(),P.\u0275fac=function(t){return new(t||P)(u.Kb(c.d),u.Kb(d.a),u.Kb(a.A),u.Kb(l.a),u.Kb(b.g),u.Kb(b.a))},P.\u0275cmp=u.Eb({type:P,selectors:[["app-receipthistory"]],decls:21,vars:7,consts:[["name","arrow-back-outline",3,"click"],["fullscreen","",1,"svcf_recepit_page","svcf_dashboard_page"],["autocomplete","off",1,"receipt_form",3,"formGroup"],["matInput","","placeholder","From Date","formControlName","from_date",3,"matDatepicker","click"],["matSuffix","",3,"for"],["picker",""],["matInput","","placeholder","To Date","formControlName","to_date",3,"matDatepicker","click"],["picker1",""],["type","submit",1,"btn_right",3,"disabled","click"],["class","payment",4,"ngIf"],[1,"payment"],["class","history_card",4,"ngFor","ngForOf"],[1,"history_card"],[1,"card_bg"],[1,"ofz_img"],["src","../../../assets/images/img.png"],[1,"branch_name"],[1,"logo"],["src","../../../assets/images/logo.png"],[1,"ofz_address"],[1,"receipt_content"],["size","12"],["size","6"],[1,"receipt_no"],[1,"table","receipt_amts"],[1,"space_margin"],[1,"grand_total"],[1,"sig"]],template:function(t,e){if(1&t){var n=u.Qb();u.Pb(0,"ion-header"),u.Pb(1,"ion-toolbar"),u.Pb(2,"ion-item"),u.Pb(3,"ion-icon",0),u.Xb("click",(function(){return e.previous()})),u.Ob(),u.Pb(4,"ion-title"),u.tc(5,"Receipt History"),u.Ob(),u.Ob(),u.Ob(),u.Ob(),u.Pb(6,"ion-content",1),u.Pb(7,"form",2),u.Pb(8,"mat-form-field"),u.Pb(9,"input",3),u.Xb("click",(function(){return u.kc(n),u.jc(12).open()})),u.Ob(),u.Lb(10,"mat-datepicker-toggle",4),u.Lb(11,"mat-datepicker",null,5),u.Ob(),u.Pb(13,"mat-form-field"),u.Pb(14,"input",6),u.Xb("click",(function(){return u.kc(n),u.jc(17).open()})),u.Ob(),u.Lb(15,"mat-datepicker-toggle",4),u.Lb(16,"mat-datepicker",null,7),u.Ob(),u.Pb(18,"ion-button",8),u.Xb("click",(function(){return e.history()})),u.tc(19,"Submit "),u.Ob(),u.Ob(),u.sc(20,O,2,1,"section",9),u.Ob()}if(2&t){var r=u.jc(12),i=u.jc(17);u.Ab(7),u.fc("formGroup",e.receiptFormGroup),u.Ab(2),u.fc("matDatepicker",r),u.Ab(1),u.fc("for",r),u.Ab(4),u.fc("matDatepicker",i),u.Ab(1),u.fc("for",i),u.Ab(3),u.fc("disabled",!e.receiptFormGroup.valid),u.Ab(2),u.fc("ngIf",0!=e.length)}},directives:[a.l,a.x,a.p,a.m,a.w,a.k,c.u,c.o,c.h,f.b,m.b,c.b,g.b,c.n,c.f,g.d,f.e,g.a,a.e,o.k,o.j,a.f,a.g,a.t,a.j],pipes:[o.d],styles:[".flex_arrow[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-between}.logout[_ngcontent-%COMP%]{padding-top:2rem;padding-right:2rem;color:#fff}.exit[_ngcontent-%COMP%]{color:#fff;display:inline-block;font-size:22px;vertical-align:middle}.arrow[_ngcontent-%COMP%]{margin-top:1rem;margin-left:2rem;background:linear-gradient(90deg,#222428 0,#354466)!important;border-radius:50%;color:#fff;font-size:30px}ion-img[_ngcontent-%COMP%]{width:100px;padding-top:2rem}.mt-1[_ngcontent-%COMP%]{margin-top:10px}.print_branch[_ngcontent-%COMP%]{display:flex;justify-content:space-between}.image[_ngcontent-%COMP%]{padding-left:8rem}.sv[_ngcontent-%COMP%]{text-align:center;padding-top:12px}.regd[_ngcontent-%COMP%]{color:#7f7f7f}.sv_p[_ngcontent-%COMP%]{font-weight:700}.buttons[_ngcontent-%COMP%]{margin:16px}.buttons[_ngcontent-%COMP%]   .sms[_ngcontent-%COMP%]{margin-left:12px;background:#fff;color:#413e95;width:25%;height:32px;border-radius:15px;border:1px solid #413e95}.sig[_ngcontent-%COMP%]{line-height:24px;color:#7f7f7f;padding:16px;text-transform:inherit}.text1[_ngcontent-%COMP%]{display:inline-block;vertical-align:middle;padding-left:10px;color:#fff}.icon_tool[_ngcontent-%COMP%]{padding-top:1rem;padding-right:1rem}.receipt[_ngcontent-%COMP%]{padding:40px}.receipt[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{float:right}.receipt[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#000}.history_card[_ngcontent-%COMP%]{margin-top:15px}.branch_name[_ngcontent-%COMP%]{text-align:center}.receipt_date[_ngcontent-%COMP%]{padding:20px}.space_margin[_ngcontent-%COMP%]{margin-top:20px}p.sig[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:14px;color:#000;font-weight:600}"]}),P)}],C=((_=function e(){t(this,e)}).\u0275mod=u.Ib({type:_}),_.\u0275inj=u.Hb({factory:function(t){return new(t||_)},imports:[[b.i.forChild(y)],b.i]}),_),k=i("hctd"),x=((v=function e(){t(this,e)}).\u0275mod=u.Ib({type:v}),v.\u0275inj=u.Hb({factory:function(t){return new(t||v)},providers:[d.a],imports:[[o.b,c.j,a.y,c.r,k.a,C]]}),v)}}])}();
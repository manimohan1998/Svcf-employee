import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { Validators, FormBuilder, FormGroup, FormControl, FormArray } from '@angular/forms';
import { PaymentService } from '../../../services/payment.service';
import 'moment/locale/pt-br';
import * as moment from 'moment';
import { LoadingController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { Toast } from '@ionic-native/toast/ngx';
@Component({
selector: 'app-payment',
templateUrl: './cashpay.page.html',
styleUrls: ['../payment.page.scss'],
})
export class CashPayPage implements OnInit {
today = Date.now();
submitForm: FormGroup;
new_id: any
new: any;
new_value: any;
edit_value: any;
new_array: any = [];
cashpdata: any;
grandtotal1:any;
nedate: any;
day: any;
month: any;
year: any;
new10: any;
sampletest_check:any;
cashdata: any = [];
cashdat: any = [];
sampletest: any;
cashdata1: any = [];
cashdata2: any = [];
pdata: any;
count: number = 1111;
branch1: any = [];
branch_new: any;
head: any;
sampletest1: any;
sampledata: any = [];
trigger:number=0;
sampledata1: any = [];
num: any;
vnum: any;
receipt_res: any;
num1: any = [];
vnum1: any = [];
ReceiptTable: any;
res_status: any;
ReceiptTable1: any = [];
sampleinterest: any = [];
message: any;
voucher_res: any;
sampletestcheck: any = [];
voucher_print: any;
second_voucher: any;
newarr: any;
isLoading = false;
post_id:any;
grand_total:any;
new_total:any=[];
result:any;
receipt_name:any;
trigger_sum:any;
new_name:any;
voucher_count:any;
newvoucher_count:any;
B_Groups: any=[];
constructor(private fb: FormBuilder,private toast: Toast,private http: HttpClient, public loadingController: LoadingController, private router: Router, private route: ActivatedRoute, public paymentservice: PaymentService) {
this.route.queryParams.subscribe(params => {
if (this.router.getCurrentNavigation().extras.state) {
this.new = this.router.getCurrentNavigation().extras.state.user6;
this.new10 = this.router.getCurrentNavigation().extras.state.user10;
console.log(this.new10)
this.B_Groups=[]
for (let i = 0; i < this.new10.length; i++) {
  this.B_Groups.push(this.new10[i].B_Group)
this.branch_new = (this.new10[i].BranchID);
this.head = (this.new10[i].headID);
this.branch1.push(this.branch_new);
this.sampletest1 = [{
BranchID: this.new10[i].BranchID,
HeadID: this.new10[i].headID
}]
this.sampledata.push(this.sampletest1);
this.sampledata1 = [].concat.apply([], this.sampledata);
}
this.new_array = this.new;
}
})
}
ngOnInit() {
this.paymentservice.receiptseries('BCAPP').subscribe(res=>{
this.voucher_count=res;
})
var num=0;
this.result = this.new_array.map(function(el) {
var o = Object.assign({}, el);
o.total = +el.amountpayable.replace(/,/g,'') + +el.interest.replace(/,/g,'') + +el.otheramount.replace(/,/g,'');
o.total1=Number(parseFloat(o.total).toFixed(2)).toLocaleString('en', {
    minimumFractionDigits: 2
})
return o;
})
console.log(this.result,"res")
for (let i=0;i<this.result.length;i++){
  if(this.result[i].interest != "" && this.result[i].otheramount == ""){
    this.result[i].otheramount=0;
  }
  else if(this.result[i].otheramount != "" && this.result[i].interest == ""){
    this.result[i].interest=0;
  }
  else if(this.result[i].interest == "" && this.result[i].otheramount== ""){
    this.result[i].interest=0;
    this.result[i].otheramount=0;
  }
  else if(this.result[i].amountpayable == ""){
    this.result[i].amountpayable=0;

  }
  num+=(parseFloat( this.result[i].total))
  this.grand_total=num;
    this.grandtotal1=Number(parseFloat(this.grand_total).toFixed(2)).toLocaleString('en', {
    minimumFractionDigits: 2
})
  }

  this.post_id= localStorage.getItem('col_id')
  this.nedate = new Date();
  this.day = moment(this.nedate.toLocaleString()).format("DD");
  this.month = moment(this.nedate.toLocaleString()).format("MM");
  this.year = moment(this.nedate.toLocaleString()).format("YYYY");
  this.submitForm = new FormGroup({
  formArrayName: this.fb.array([])
  })
  this.buildForm1();
  }
  buildForm1() {
  const controlArray = this.submitForm.get('formArrayName') as FormArray;
  Object.keys(this.result).forEach((i) => {
  controlArray.push(
  this.fb.group({
  branchprefix: new FormControl(this.result[i].branchprefix, Validators.required),
  branchname: new FormControl(this.result[i].branchname, Validators.required),
  groupno: new FormControl(this.result[i].groupno, Validators.required),
  totalchit: new FormControl(this.result[i].totalchit, Validators.required),
  branchid: new FormControl(this.result[i].branchid, Validators.required),
  memberid: new FormControl(this.result[i].memberid, Validators.required),
  m_id: new FormControl(this.result[i].m_id, Validators.required),
  rootid: new FormControl(this.result[i].rootid, Validators.required),
  headid: new FormControl(this.result[i].headid, Validators.required),
  chitgroupid: new FormControl(this.result[i].chitgroupid, Validators.required),
  agreement: new FormControl(this.result[i].agreement, Validators.required),
  installment: new FormControl(this.result[i].installment, Validators.required),
  amountreceived: new FormControl(this.new_array[i].amountreceived),
    amountpayable: new FormControl(this.new_array[i].amountpayable),

  prizedarrear: new FormControl(this.new_array[i].prizedarrear),
  nonprizedarrear: new FormControl(this.new_array[i].nonprizedarrear),
  interest: new FormControl(this.result[i].interest),
  otheramount: new FormControl(this.result[i].otheramount),
  narration: new FormControl(this.result[i].narration)
  })
  )
  })
  console.log(controlArray)
  }
  previous() {
  this.router.navigateByUrl('payment/cash')
  }
  edit() {
  let navigationExtras: NavigationExtras = {
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
  console.log(this.sampletest)
//  let result = Array.from(this.sampletest_check, o=> Object.fromEntries(<any>Object.entries(o).filter((i) => i[1] != (null || ''))));
// console.log(result)
// this.sampletest=result
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
  this.vnum1.push(this.vnum)
  console.log(this.vnum1)
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
  console.log(this.res_status)
  if (this.res_status == 0) {
  for (let obj of this.sampletest) {
  console.log("object:", obj);
  for (let key in obj) {
  }
  }
  for (let i = 0; i < this.sampletest.length; i++) {
   
  this.sampletest[i].prizedarrear = this.sampletest[i].prizedarrear.replace(/,/g, '');
  this.sampletest[i].nonprizedarrear = this.sampletest[i].nonprizedarrear.replace(/,/g, '');
  this.sampletest[i].amountreceived = this.sampletest[i].amountreceived.replace(/,/g, '');
if(this.sampletest[i].amountpayable != ""){
  this.sampletest[i].amountpayable= this.sampletest[i].amountpayable.replace(/,/g, '');

}
else{
  this.sampletest[i].amountpayable =0;
}
console.log(this.sampletest[i].interest)

  // var strFirstThree = this.sampletest[i].branchprefix.substring(0,3).toUpperCase();;
  var strFirstThree = this.sampletest[i].branchprefix;
  this.voucher_count +=1
  let number=this.padLeadingZeros(this.voucher_count, 8);
  this.newvoucher_count=number;
  console.log(this.newvoucher_count,"dashb")
  this.new_name=strFirstThree;
  //this.voucher_count=this.voucher_count+1;
  console.log(this.trigger,"trigg")
  this.receipt_name='B' + '-'+ this.new_name+localStorage.getItem('col_id')+ this.newvoucher_count;
  console.log(this.receipt_name,"rec")
  if(this.sampletest[i].prizedarrear !=0 ){
  this.cashpdata = [
  {
  "Amount": this.sampletest[i].amountpayable,
  "PArrear":this.sampletest[i].prizedarrear,
    "CurrentDue":this.sampletest[i].amountreceived,
  "B_Group":this.B_Groups[i],
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
  "MoneyCollId":this.post_id,
  "VoucherCount":this.newvoucher_count
  },
  {
  "Amount": this.sampletest[i].amountpayable,
    "CurrentDue":this.sampletest[i].amountreceived,
    "B_Group":this.B_Groups[i],
  "PArrear":this.sampletest[i].prizedarrear,
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
  "MoneyCollId":this.post_id,
  "VoucherCount":this.newvoucher_count
  },
  {
  "Amount": +this.sampletest[i].interest + +this.sampletest[i].otheramount,
  "Interest":this.sampletest[i].interest,
  "B_Group":this.B_Groups[i],
  "OtherAmt":this.sampletest[i].otheramount,
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
  "MoneyCollId":this.post_id,
  "VoucherCount":this.newvoucher_count
  },
  {
  "Amount": +this.sampletest[i].interest + +this.sampletest[i].otheramount,
  "Interest":this.sampletest[i].interest,
  "B_Group":this.B_Groups[i],
  "OtherAmt":this.sampletest[i].otheramount,
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
  "MoneyCollId":this.post_id,
  "VoucherCount":this.newvoucher_count
  }
  ]
  }
  else if(this.sampletest[i].nonprizedarrear != 0){
  this.cashpdata = [
  {
  "Amount": this.sampletest[i].amountpayable,
  "CurrentDue":this.sampletest[i].amountreceived,
  "B_Group":this.B_Groups[i],
  "NPArrear":this.sampletest[i].nonprizedarrear,
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
  "MoneyCollId":this.post_id,
  "VoucherCount":this.newvoucher_count
  },
  {
  "Amount": this.sampletest[i].amountpayable,
    "CurrentDue":this.sampletest[i].amountreceived,
    "B_Group":this.B_Groups[i],
  "NPArrear":this.sampletest[i].nonprizedarrear,
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
  "MoneyCollId":this.post_id,
  "VoucherCount":this.newvoucher_count
  },
  {
  "Amount": +this.sampletest[i].interest + +this.sampletest[i].otheramount,
  "Interest":this.sampletest[i].interest,
  "OtherAmt":this.sampletest[i].otheramount,
  "B_Group":this.B_Groups[i],
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
  "MoneyCollId":this.post_id,
  "VoucherCount":this.newvoucher_count
  },
  {
  "Amount": +this.sampletest[i].interest + +this.sampletest[i].otheramount,
  "Interest":this.sampletest[i].interest,
  "B_Group":this.B_Groups[i],
  "OtherAmt":this.sampletest[i].otheramount,
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
  "MoneyCollId":this.post_id,
  "VoucherCount":this.newvoucher_count
  }
  ]
  }
  else{
  this.cashpdata = [
  {
  "Amount": this.sampletest[i].amountpayable,
    "CurrentDue":this.sampletest[i].amountreceived,
    "B_Group":this.B_Groups[i],
  "NPArrear":this.sampletest[i].nonprizedarrear,
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
  "MoneyCollId":this.post_id,
  "VoucherCount":this.newvoucher_count
  },
  {
  "Amount": this.sampletest[i].amountpayable,
   "CurrentDue":this.sampletest[i].amountreceived,
   "B_Group":this.B_Groups[i],
  "NPArrear":this.sampletest[i].nonprizedarrear,
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
  "MoneyCollId":this.post_id,
  "VoucherCount":this.newvoucher_count
  },
  {
  "Amount": +this.sampletest[i].interest + +this.sampletest[i].otheramount,
  "Interest":this.sampletest[i].interest,
  "B_Group":this.B_Groups[i],
  "OtherAmt":this.sampletest[i].otheramount,
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
  "MoneyCollId":this.post_id,
  "VoucherCount":this.newvoucher_count
  },
  {
  "Amount": +this.sampletest[i].interest + +this.sampletest[i].otheramount,
  "Interest":this.sampletest[i].interest,
  "B_Group":this.B_Groups[i],
  "OtherAmt":this.sampletest[i].otheramount,
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
  "MoneyCollId":this.post_id,
  "VoucherCount":this.newvoucher_count
  }
  ]
  
  }
  console.log(this.cashpdata)
  this.cashdata.push(this.cashpdata);
  this.cashdata1 = [].concat.apply([], this.cashdata);
  for (let i = this.cashdata1.length - 1; i >= 0; --i) {
  if (this.cashdata1[i].Amount == "0") {
  this.cashdata1.splice(i, 1);
  }
  }
  }
  this.paymentservice.post_vouchercash(this.cashdata1).subscribe(res => {
  if (res) {
  this.dismiss();
  this.voucher_res = res;
  this.presentToast('sucessfully updated');
   let navigationExtras: NavigationExtras = {
    queryParams: { state:JSON.stringify(this.voucher_res )},
    skipLocationChange: true
    };
    this.router.navigate(['cashprint'],navigationExtras)
  
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
  },(error=>{
    this.dismiss();
    alert('Server Error')
  }))
  }
  })
  }
  logout() {
  this.router.navigateByUrl('login');
  localStorage.clear();
  }
  async present() {
  this.isLoading = true;
  return await this.loadingController.create({
  message: 'Saving data, Please wait.....'
  }).then(a => {
  a.present().then(() => {
  if (!this.isLoading) {
  a.dismiss().then(() => console.log('abort presenting'));
  }
  });
  });
  }
  async dismiss() {
  this.isLoading = false;
  return await this.loadingController.dismiss().then(() => console.log('dismissed'));
  }
  padLeadingZeros(num, size) {
  var s = num+"";
  while (s.length < size) s = "0" + s;
  return s;
  }
  async presentToast(message) {
  this.toast.show(message, '2000', 'bottom').subscribe(
  toast => {
  console.log(toast);
  });
  }
  }
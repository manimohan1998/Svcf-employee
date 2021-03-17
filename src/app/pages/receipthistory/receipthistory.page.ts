import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { PaymentService } from '../../services/payment.service';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import * as moment from 'moment';
import 'moment/locale/pt-br';
import { LoadingController } from '@ionic/angular';
import { Toast } from '@ionic-native/toast/ngx';

@Component({
selector: 'app-receipthistory',
templateUrl: './receipthistory.page.html',
styleUrls: ['./receipthistory.page.scss'],
})
export class ReceipthistoryPage implements OnInit {
receiptFormGroup: FormGroup;
value:any;
colid:any;
receipt_history:any=[];
length:any;
isLoading = false;
customernames:any=[];
receiptnum:any=[];
chitnum:any=[];
branchname:any=[];
show:boolean=false;
history_total:any;
history_tot:any;
constructor(public fb: FormBuilder,private toast:Toast,public loadingController: LoadingController, private paymentservice:PaymentService,private router: Router,private route: ActivatedRoute) {
this.route.queryParams.subscribe(params => {
if (this.router.getCurrentNavigation().extras.state) {
this.value = this.router.getCurrentNavigation().extras.state.user;
}
})
this.colid=localStorage.getItem('col_id')
}
ionViewWillEnter(){
	    this.receiptFormGroup.reset();

	this.receipt_history=[];
this.show=false;
}
ngOnInit() {
		this.receipt_history=[];
this.show=false;

this.receiptFormGroup = this.fb.group({
from_date: ['', Validators.required],
to_date: ['', Validators.required],

});
}
history(){

	this.receipt_history=[];
this.present();
this.receiptFormGroup.value["from_date"] = moment(this.receiptFormGroup.value.from_date.toLocaleString()).format("yyyy/MM/DD");
this.receiptFormGroup.value["to_date"] = moment(this.receiptFormGroup.value.to_date.toLocaleString()).format("yyyy/MM/DD");
this.paymentservice.receipthistory(this.colid,this.receiptFormGroup.value.from_date,this.receiptFormGroup.value.to_date).subscribe(res=>{
this.dismiss();
console.log(res)
if(res['length'] == 0){
	this.show=false;
this.presentToast('No data available')
}
else{
	
	this.show=true;
  this.receipt_history=res;
this.length=this.receipt_history.length
var num=0;
for(let i=0;i<this.receipt_history.length;i++){
	  this.receipt_history[i].total = this.receipt_history[i].total.replace(/,/g, '');

	  num+=(parseFloat( this.receipt_history[i].total))

	this.history_total=num;
	this.history_tot=Number(parseFloat(this.history_total).toFixed(2)).toLocaleString('en', {
    minimumFractionDigits: 2
})
	console.log(this.history_tot)
}

}
})

}
async presentToast(message) {
this.toast.show(message, '2000', 'bottom').subscribe(
toast => {
console.log(toast);
});
}
previous(){
this.router.navigateByUrl('dashboard')
}
async present() {
this.isLoading = true;
return await this.loadingController.create({
message: 'Loading,Please wait.....'
}).then(a => {
a.present().then(() => {
console.log('presented');
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
}
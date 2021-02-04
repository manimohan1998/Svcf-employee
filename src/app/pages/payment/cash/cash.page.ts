import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { Validators, FormBuilder, FormGroup, FormControl, FormArray } from '@angular/forms';
import { PaymentService } from '../../../services/payment.service';
import { AlertController } from '@ionic/angular';
@Component({
selector: 'app-payment',
templateUrl: './cash.page.html',
styleUrls: ['../payment.page.scss'],
})
export class CashPage implements OnInit {
today = Date.now();
cashForm: FormGroup;
i_name: any;
cash_details: any = [];
i_details: any;
i_grpid: any;
chit_value: any;
edit_details: any;
cash_array: any;
is: any;
is_array: any;
brid: any;
brid1: any = [];
constructor(private route: ActivatedRoute,public alertController: AlertController, private router: Router, private fb: FormBuilder, public paymentservice: PaymentService) {
this.route.queryParams.subscribe(params => {
if (this.router.getCurrentNavigation().extras.state) {
this.is = this.router.getCurrentNavigation().extras.state.user7;
this.is_array = this.router.getCurrentNavigation().extras.state.user8;
}
})
this.route.queryParams.subscribe(params => {
this.i_details = JSON.parse(params.state)
for (let i = 0; i < this.i_details.length; i++) {
this.brid = (this.i_details[i].BranchID);
this.brid1.push(this.brid);
}
this.chit_value = this.i_details.Chitvalue;
})
}
ngOnInit() {
this.cashForm = new FormGroup({
formArrayName: this.fb.array([])
})
this.buildForm();
}
buildForm() {
const controlArray = this.cashForm.get('formArrayName') as FormArray;
Object.keys(this.i_details).forEach((i) => {
controlArray.push(
this.fb.group({
branchprefix: new FormControl(this.i_details[i].BranchPrefix, Validators.required),
branchname: new FormControl(this.i_details[i].Branch, Validators.required),
groupno: new FormControl(this.i_details[i].groupno, Validators.required),
totalchit: new FormControl(this.i_details[i].totalchitvalue, Validators.required),
branchid: new FormControl(this.i_details[i].BranchID, Validators.required),
memberid: new FormControl(this.i_details[i].Mid, Validators.required),
m_id: new FormControl(this.i_details[i].MemberID, Validators.required),
rootid: new FormControl(this.i_details[i].rootid, Validators.required),
headid: new FormControl(this.i_details[i].headID, Validators.required),
chitgroupid: new FormControl(this.i_details[i].chitgroupid, Validators.required),
installment: new FormControl(this.i_details[i].instno, Validators.required),
agreement: new FormControl(this.i_details[i].agreementno, Validators.required),
amountreceived: new FormControl(this.i_details[i].CurrentDueAmount,Validators.required),
prizedarrear: new FormControl(this.i_details[i].PrizedArrear,Validators.required),
nonprizedarrear: new FormControl(this.i_details[i].NonPrizedArrear,Validators.required),
interest: new FormControl('', Validators.compose([

Validators.pattern('[. 0-9 ]*')
])),
otheramount: new FormControl('', Validators.compose([
Validators.pattern('[. 0-9 ]*')
])),
narration: new FormControl('', Validators.required),
})

)
})
}

previous() {
this.router.navigateByUrl('payment')
}

submit(c) {
this.presentAlertConfirm(c);

}
logout() {
this.presentAlertConfirm1();
}
async presentAlertConfirm(c) {
const alert = await this.alertController.create({
message: 'Are you sure you want to submit?',
buttons: [
{
text: 'Cancel',
role: 'cancel',
cssClass: 'secondary',
handler: (blah) => {
}
}, {
text: 'Submit',
handler: () => {
this.cash_array = c.formArrayName;
let navigationExtras: NavigationExtras = {
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
await alert.present();
}
async presentAlertConfirm1() {
const alert = await this.alertController.create({
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
await alert.present();
}
}
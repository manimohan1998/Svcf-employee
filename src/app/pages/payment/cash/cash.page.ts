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
        // this.i_details= this.router.getCurrentNavigation().extras.state.user3;
        this.is = this.router.getCurrentNavigation().extras.state.user7;
        this.is_array = this.router.getCurrentNavigation().extras.state.user8;
        console.log(this.is_array);
        // console.log(this.i_details);
        // this.chit_value=this.i_details.Chitvalue;
      }
    })
       this.route.queryParams.subscribe(params => {
      this.i_details = JSON.parse(params.state)
      console.log(this.i_details,"i_details")
       for (let i = 0; i < this.i_details.length; i++) {
      this.brid = (this.i_details[i].BranchID);
      console.log(this.i_details[i].BranchID);
      this.brid1.push(this.brid);
      console.log(this.brid1)
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

    console.log(controlArray)
  }
 

  previous() {
    this.router.navigateByUrl('payment')
  }
 

  submit(c) {
    this.presentAlertConfirm(c);
    
  }
  logout() {
    this.router.navigateByUrl('login');
    localStorage.clear();

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
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Submit',
          handler: () => {
            this.cash_array = c.formArrayName;
    console.log(this.cash_array);
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
}
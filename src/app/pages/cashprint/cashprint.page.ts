import {AfterViewInit, Component,OnInit, Inject,ElementRef, ViewChild} from '@angular/core';
import { ActivatedRoute,Router,NavigationExtras } from '@angular/router';
import { NavController,ModalController,AlertController, Platform } from '@ionic/angular';
import { PaymentService } from '../../services/payment.service';
import { LoadingController } from '@ionic/angular';
@Component({
selector: 'app-cashprint',
templateUrl: './cashprint.page.html',
styleUrls: ['./cashprint.page.scss'],
})
export class CashprintPage implements OnInit {
content:any;
cash_print_preview:any;
devices:any;
api_id:any=[];
print_cash_page:any;
isLoading = false;
constructor(public loadingController: LoadingController,public paymentservice:PaymentService,public plt: Platform,private modalCtrl:ModalController, private alertCtrl:AlertController,private router:Router,private route: ActivatedRoute) {
}

ngOnInit() {
this.cash_print_preview=JSON.parse(localStorage.getItem("print_cash"));
for(let i=0;i<this.cash_print_preview.length;i++){
  this.api_id.push(this.cash_print_preview[i]['ID']);
  }
  this.paymentservice.print_details(this.api_id).subscribe(res=>{
  this.print_cash_page=res;
  })
  }
  previous(){
  this.router.navigateByUrl('payment/cashpay')
  }
  logout(){
  this.router.navigateByUrl('login')
  localStorage.clear();
  
  }
  
  done(){
  this.router.navigateByUrl('dashboard')
  }
  
  
  }
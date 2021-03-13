import {AfterViewInit, Component,OnInit, Inject,ElementRef, ViewChild} from '@angular/core';
import { ActivatedRoute,Router,NavigationExtras } from '@angular/router';
import { NavController,ModalController,AlertController, Platform } from '@ionic/angular';
import { PaymentService } from '../../services/payment.service';
import { LoadingController } from '@ionic/angular';
import { Toast } from '@ionic-native/toast/ngx';

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
constructor(private platform:Platform,public loadingController: LoadingController,private toast :Toast,public paymentservice:PaymentService,private modalCtrl:ModalController, private alertCtrl:AlertController,private router:Router,private route: ActivatedRoute) {
}

ionViewWillEnter(){
  this.route.queryParams.subscribe(params => {
this.cash_print_preview = JSON.parse(params.state)
console.log(this.cash_print_preview)
for(let i=0;i<this.cash_print_preview.length;i++){
  this.api_id.push(this.cash_print_preview[i]['ID']);
  }
   this.paymentservice.print_details(this.api_id).subscribe(res=>{
  this.print_cash_page=res;
  })
})

}

ngOnInit() {

  }
  previous(){
  this.router.navigateByUrl('dashboard')
  }
  logout(){
  this.router.navigateByUrl('login')
  localStorage.clear();
  
  }
  
  done(){
  //  this.presentToast('Payments may take upto 3 working days to get reflected in your account')
  this.router.navigateByUrl('dashboard')
  }
  
  async presentToast(message) {
    this.toast.show(message, '2000', 'bottom').subscribe(
    toast => {
    console.log(toast);
    });
    }
  }
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { DashboardService } from '../../services/dashboard.service';
import { LoadingController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
@Component({
selector: 'app-dashboard',
templateUrl: './dashboard.page.html',
styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
values: any = [];
searchTerm: string;
filter: any;
user: any;
details: any;
moneycoll_id: any;
moneycoll_name: any;
login_res_data:any;
terms:any;
items_containers:any;
isLoading = false;

   filterItems:any;
constructor(private router: Router,public alertController: AlertController,  public dashboardservice: DashboardService, private route: ActivatedRoute,public loadingController: LoadingController) {

}
ngOnInit() {

}
ionViewWillEnter(){
this.moneycoll_name=localStorage.getItem("col_name")
this.moneycoll_id = localStorage.getItem("col_id");
this.present();
this.dashboardservice.user_details(this.moneycoll_id).subscribe(res => {
this.dismiss();
this.details = res;
 this.filterItems= this.details;

})
}
goto(s) {
this.user = s;
localStorage.setItem("user2",JSON.stringify(this.user));
this.router.navigateByUrl('payment')
}

async present() {
this.isLoading = true;
return await this.loadingController.create({
message: 'Loading, Please wait.....'
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
logout(){
this.presentAlertConfirm();
}
async presentAlertConfirm() {
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
localStorage.clear();
this.router.navigate(['login']);
}
}
]
});
await alert.present();
}
history(){

this.router.navigate(['receipthistory']);
}
 searching(){
this.filterItems = this.details.filter(item =>  item.title.toLowerCase().indexOf(this.searchTerm.toLowerCase())) > -1;

 }    
}
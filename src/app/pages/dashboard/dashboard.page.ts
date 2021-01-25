import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { DashboardService } from '../../services/dashboard.service';
import { LoadingController } from '@ionic/angular';

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

  constructor(private router: Router, public dashboardservice: DashboardService, private route: ActivatedRoute,public loadingController: LoadingController) {
   
  }


  ngOnInit() {
 
  }
  ionViewWillEnter(){
    this.moneycoll_id = localStorage.getItem("col_id");
    console.log(this.moneycoll_id)
     this.present();
     this.dashboardservice.user_details(this.moneycoll_id).subscribe(res => {
       this.dismiss();
       console.log(res);
       this.details = res;
     })
  }

  goto(s) {
    this.user = s;
    console.log(this.user);
    localStorage.setItem("user2",JSON.stringify(this.user));
    this.router.navigateByUrl('payment')

  }
  logout() {
    this.router.navigateByUrl('login');
    localStorage.clear();
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

}

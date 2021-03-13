import { Component } from '@angular/core';

import { Platform ,ToastController,AlertController} from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router, NavigationExtras } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
      public counter = 0;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router:Router,
        private _location: Location,
    public alertController: AlertController,

    public toastController: ToastController

  ) {
         //this.initializeBackButtonCustomHandler();

    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
               this.statusBar.backgroundColorByHexString('#30ADFF');

      this.splashScreen.hide();
    });


    this.platform.backButton.subscribeWithPriority(10, (processNextHandler) => {
      console.log('Back press handler!');
      if (this._location.isCurrentPathEqualTo('/cashprint')) {
        this.router.navigateByUrl('dashboard')

        // Show Exit Alert!
        console.log('Show Exit Alert!');
        //this.showExitConfirm();
        processNextHandler();
      } else if(this._location.isCurrentPathEqualTo('/payment/cash' )) {

        // Navigate to back page
        console.log('Navigate to back page');
        //this._location.back();
        this.router.navigateByUrl('payment')

      }
      else if(this._location.isCurrentPathEqualTo('/payment/cashpay' )) {

        // Navigate to back page
        console.log('Navigate to back page');
        //this._location.back();
        this.router.navigateByUrl('payment/cash')

      }
       else if(this._location.isCurrentPathEqualTo('/payment' )) {

        // Navigate to back page
        console.log('Navigate to back page');
        //this._location.back();
        this.router.navigateByUrl('dashboard')

      }
        else if(this._location.isCurrentPathEqualTo('/dashboard' )) {

        // Navigate to back page
        console.log('Navigate to back page');
        //this._location.back();
        this.showExitConfirm();

      }
        else if (this._location.isCurrentPathEqualTo('/receipthistory' )) {

        // Navigate to back page
        console.log('Navigate to back page');
        //this._location.back();
        this.router.navigateByUrl('dashboard')

      }
  else  {

        // Navigate to back page
        console.log('Navigate to back page');
        //this._location.back();
          navigator['app'].exitApp();

      }
    });

    this.platform.backButton.subscribeWithPriority(5, () => {
      console.log('Handler called to force close!');
      this.alertController.getTop().then(r => {
        if (r) {
          navigator['app'].exitApp();
        }
      }).catch(e => {
        console.log(e);
      })
    });

  }
  showExitConfirm() {
    this.alertController.create({
      header: 'App termination',
      message: 'Do you want to close the app?',
      buttons: [{
        text: 'Cancel',
        role: 'cancel',
        handler: () => {
        console.log('Cancel clicked');
        }
      }, {
        text: 'Exit',
        handler: () => {
          navigator['app'].exitApp();
        }
      }]
    })
      .then(alert => {
        alert.present();
      });
  }

}



 //  async presentToast() {
 //   const toast = await this.toastController.create({
 //     message: "Press again to exit",
 //     duration: 2000,
 //   });
 //  toast.present();
 // }

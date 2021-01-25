import { Component } from '@angular/core';

import { Platform ,ToastController} from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router, NavigationExtras } from '@angular/router';

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
    public toastController: ToastController

  ) {
         this.initializeBackButtonCustomHandler();

    this.initializeApp();
  }

  initializeApp() {
            this.initializeBackButtonCustomHandler();

    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
  initializeBackButtonCustomHandler(): void {
    this.platform.ready().then(() => {
      document.addEventListener("backbutton", () => {
      if(this.router.url == "/" || this.router.url == "/login"){
        if (this.counter == 0) {
          this.counter++;
          this.presentToast();
          setTimeout(() => { this.counter = 0 }, 2000)
        }else {
          navigator['app'].exitApp();
          }
        }
      });
    })
  }
  async presentToast() {
   const toast = await this.toastController.create({
     message: "Press again to exit",
     duration: 2000,
   });
  toast.present();
 }
}

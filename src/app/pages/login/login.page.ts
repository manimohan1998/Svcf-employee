import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { Toast } from '@ionic-native/toast/ngx';
import { LoadingController, NavController, ModalController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;
  submitted = false;
  isLoading = false;
  credentials: any;
  username: any;
  password: any;
  user_details: any;
  coll_id: any;
  coll_name: any;
  passwordType: string = 'password';
  passwordIcon: string = 'eye-off';
  constructor(private fb: FormBuilder, public loadingController: LoadingController, private router: Router, private toast: Toast, public loginservice: LoginService) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      username: new FormControl('', Validators.compose([
        Validators.required
      ])),
      password: new FormControl('', Validators.compose([
        Validators.required,]))

    });
  }
  login_values(data) {
    this.present();
    this.credentials = data;
    this.username = this.credentials['username'];
    this.password = this.credentials['password'];
    if (this.username == '' || this.username == null || this.password == '' || this.password == null) {
      this.presentToast('Please Enter Valid Credentials');
    }
    else {
      this.loginservice.user_authentication(this.username, this.password).subscribe(res => {
        console.log(res);
        this.dismiss();
        this.presentToast('You have Logged in successfully');
        this.user_details = res;
        localStorage.setItem("col_id", this.user_details[0].moneycollid);
        this.coll_id = this.user_details[0].moneycollid;
        this.coll_name = this.user_details[0].moneycollname;
        let navigationExtras: NavigationExtras = {
          state: {
            //user: this.coll_id,
            user1: this.coll_name
          }
        };
        this.router.navigate(['dashboard'], navigationExtras);
      }, error => {
        this.dismiss();
        this.presentToast('Something went wrong');
        alert('Something went wrong')
      })
    }

  }
  async presentToast(message) {
    this.toast.show(message, '2000', 'bottom').subscribe(
      toast => {
        console.log(toast);
      });
  }
  async present() {
    this.isLoading = true;
    return await this.loadingController.create({
      message: 'Logging in,Please wait.....'
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
  hideShowPassword() {
    this.passwordType = this.passwordType === 'text' ? 'password' : 'text';
    this.passwordIcon = this.passwordIcon === 'eye-off' ? 'eye' : 'eye-off';
  }
    CheckSpace(event)
  {
     if(event.which ==32)
     {
        event.preventDefault();
        return false;
     }
  }



}

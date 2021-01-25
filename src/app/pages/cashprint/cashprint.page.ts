import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router,NavigationExtras } from '@angular/router';
import { NavController,ModalController,AlertController, Platform } from '@ionic/angular';
import { PaymentService } from '../../services/payment.service';
import jspdf from 'jspdf';
import domtoimage from 'dom-to-image';
import { File, IWriteOptions } from '@ionic-native/file/ngx';
import { FileOpener } from '@ionic-native/file-opener/ngx';
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

  constructor(private file: File,private fileOpener: FileOpener,public loadingController: LoadingController,public paymentservice:PaymentService,public plt: Platform,private modalCtrl:ModalController, private alertCtrl:AlertController,private router:Router,private route: ActivatedRoute) {
  }

  ngOnInit() {
    // let options='uyu';
  //this.pdfGenerator.fromURL( options).then(base64String => console.log(base64String));

    this.cash_print_preview=JSON.parse(localStorage.getItem("print_cash"));
    console.log(this.cash_print_preview);
    for(let i=0;i<this.cash_print_preview.length;i++){
      console.log(this.cash_print_preview[i]['ID']);
      this.api_id.push(this.cash_print_preview[i]['ID']);
    }
    this.paymentservice.print_details(this.api_id).subscribe(res=>{
      console.log(res);
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
share_email(img){
// this.socialSharing.canShareViaEmail().then(() => {
//   // Sharing via email is possible
// }).catch(() => {
//   // Sharing via email is not possible
// });

// // Share via email
// this.socialSharing.shareViaEmail(img,this.subject,this.sendTo).then((data) => {
//   // Success!
// }).catch(() => {
//   // Error!
// });
}
 share_watsapp(img){
//   this.socialSharing.canShareViaEmail().then(() => {
//   // Sharing via email is possible
// }).catch(() => {
//   // Sharing via email is not possible
// });

// // Share via email
// this.socialSharing.shareViaEmail(img,this.subject,this.sendTo).then((data) => {
//   // Success!
// }).catch(() => {
//   // Error!
// }); 
 }    
 share_sms(img){
//   this.socialSharing.shareViaSMS(img,null).then(() => {
//   // Sharing via email is possible
// }).catch(() => {
//   // Sharing via email is not possible
// });


 }
 generate(){
   this.present();
  const div = document.getElementById("printable-area");
  console.log(div)
  const options = { background: "white", height: div.clientWidth, width: div.clientHeight };
  domtoimage.toPng(div, options).then((dataUrl)=> {
    //Initialize JSPDF
    var doc = new jspdf("p","mm","a4");
    //Add image Url to PDF
    doc.addImage(dataUrl, 'PNG', 20, 20, 240, 180);

    let pdfOutput = doc.output();
    // using ArrayBuffer will allow you to put image inside PDF
    let buffer = new ArrayBuffer(pdfOutput.length);
    let array = new Uint8Array(buffer);
    for (var i = 0; i < pdfOutput.length; i++) {
        array[i] = pdfOutput.charCodeAt(i);
    }


    //This is where the PDF file will stored , you can change it as you like
    // for more information please visit https://ionicframework.com/docs/native/file/
    const directory = this.file.dataDirectory ;
    const fileName = "invoice.pdf";
    let options: IWriteOptions = { replace: true };

    this.file.checkFile(directory, fileName).then((success)=> {
      //Writing File to Device
      this.file.writeFile(directory,fileName,buffer, options)
      .then((success)=> {
        this.dismiss();
        console.log("File created Succesfully" + JSON.stringify(success));
        this.fileOpener.open(this.file.dataDirectory + fileName, 'application/pdf')
          .then(() => console.log('File is opened'))
          .catch(e => console.log('Error opening file', e));
      })
      .catch((error)=> {
        this.dismiss();
        console.log("Cannot Create File " +JSON.stringify(error));
      });
    })
    .catch((error)=> {
      //Writing File to Device
      this.file.writeFile(directory,fileName,buffer)
      .then((success)=> {
        this.dismiss();
        console.log("File created Succesfully" + JSON.stringify(success));
        this.fileOpener.open(this.file.dataDirectory + fileName, 'application/pdf')
          .then(() => console.log('File is opened'))
          .catch(e => console.log('Error opening file', e));
      })
      .catch((error)=> {
        this.dismiss();
        console.log("Cannot Create File " +JSON.stringify(error));
      });
    });
  })
  .catch(function (error) {
    this.dismiss();
    console.error('oops, something went wrong!', error);
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

}
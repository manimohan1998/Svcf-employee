import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReceipthistoryPageRoutingModule } from './receipthistory-routing.module';

import { ReceipthistoryPage } from './receipthistory.page';
import { MaterialModule } from '../../material/material.module';
import { Toast } from '@ionic-native/toast/ngx';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    MaterialModule,
    ReceipthistoryPageRoutingModule
  ],
  declarations: [ReceipthistoryPage],
  providers:[Toast]
})
export class ReceipthistoryPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CashprintPage } from './cashprint.page';
import { File, IWriteOptions } from '@ionic-native/file/ngx';

const routes: Routes = [
  {
    path: '',
    component: CashprintPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,

    RouterModule.forChild(routes)
  ],
  declarations: [CashprintPage],
  providers:[File]

  
})
export class CashprintPageModule {}

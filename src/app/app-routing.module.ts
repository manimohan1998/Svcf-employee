import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren:()=> import('./pages/login/login.module').then(m=> m.LoginPageModule)},
  { path: 'dashboard', loadChildren:()=> import('./pages/dashboard/dashboard.module').then(m=> m.DashboardPageModule)},
  { path: 'payment', loadChildren:()=> import('./pages/payment/payment.module').then(m=> m.PaymentPageModule)},
  { path: 'cashprint', loadChildren:()=> import('./pages/cashprint/cashprint.module').then(m=> m.CashprintPageModule)},
  {
    path: 'receipthistory',
    loadChildren: () => import('./pages/receipthistory/receipthistory.module').then( m => m.ReceipthistoryPageModule)
  },
  {
    path: 'modal',
    loadChildren: () => import('./pages/modal/modal.module').then( m => m.ModalPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

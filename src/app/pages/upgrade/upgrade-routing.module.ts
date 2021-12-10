import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UpgradeComponent } from './upgrade.component';

const routes: Routes = [
  { path: '', component: UpgradeComponent },
  { path: 'payment', loadChildren: () => import('./payment/payment.module').then(m => m.PaymentModule) }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UpgradeRoutingModule { }

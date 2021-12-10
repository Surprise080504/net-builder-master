import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ColorPipe } from './color.pipe';
import { UpgradedUsersPipe } from './upgraded-users.pipe';
import { RevenuePipe } from './revenue.pipe';
import { UsdtAmountPipe } from './usdt-amount.pipe';

@NgModule({
  declarations: [
    ColorPipe,
    UpgradedUsersPipe,
    RevenuePipe,
    UsdtAmountPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ColorPipe,
    UpgradedUsersPipe,
    RevenuePipe,
    UsdtAmountPipe
  ]
})
export class PipeModule { }

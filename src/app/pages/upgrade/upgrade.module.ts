import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UpgradeRoutingModule } from './upgrade-routing.module';

import { UpgradeComponent } from './upgrade.component';

@NgModule({
  declarations: [
    UpgradeComponent
  ],
  imports: [
    CommonModule,
    UpgradeRoutingModule
  ]
})
export class UpgradeModule { }

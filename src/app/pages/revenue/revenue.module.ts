import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RevenueRoutingModule } from './revenue-routing.module';
import { RevenueComponent } from './revenue.component';
import { PipeModule } from '../../ui-kit/pipe/pipe.module';


@NgModule({
  declarations: [
    RevenueComponent
  ],
  imports: [
    CommonModule,
    RevenueRoutingModule,
    PipeModule
  ]
})
export class RevenueModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentRoutingModule } from './payment-routing.module';
import { PaymentComponent } from './payment.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PipeModule } from '../../../ui-kit/pipe/pipe.module';
import { ClipboardModule } from 'ngx-clipboard';


@NgModule({
  declarations: [
    PaymentComponent
  ],
  imports: [
    CommonModule,
    PaymentRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    PipeModule,
    ClipboardModule
  ]
})
export class PaymentModule { }

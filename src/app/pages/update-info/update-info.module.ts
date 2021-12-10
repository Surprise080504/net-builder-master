import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UpdateInfoRoutingModule } from './update-info-routing.module';
import { UpdateInfoComponent } from './update-info.component';
import { ClipboardModule } from 'ngx-clipboard';


@NgModule({
  declarations: [
    UpdateInfoComponent
  ],
  imports: [
    CommonModule,
    UpdateInfoRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ClipboardModule
  ]
})
export class UpdateInfoModule { }

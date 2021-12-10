import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IconModule } from '../icon/icon.module';

import { ToastrComponent } from './toastr.component';
import { ToastrColorPipe } from './toastr-color.pipe';

@NgModule({
  declarations: [
    ToastrComponent,
    ToastrColorPipe,
  ],
  imports: [
    CommonModule,
    IconModule
  ],
  exports: [
    ToastrComponent
  ]
})
export class ToastrModule {
}

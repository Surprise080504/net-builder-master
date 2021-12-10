import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PipeModule } from '../pipe/pipe.module';

import { IconComponent } from './icon.component';

@NgModule({
  declarations: [
    IconComponent
  ],
  imports: [
    CommonModule,
    PipeModule
  ],
  exports: [
    IconComponent
  ]
})
export class IconModule {
}

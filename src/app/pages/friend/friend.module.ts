import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PipeModule } from '../../ui-kit/pipe/pipe.module';

import { FriendRoutingModule } from './friend-routing.module';
import { FriendComponent } from './friend.component';

@NgModule({
  declarations: [
    FriendComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FriendRoutingModule,
    PipeModule
  ]
})
export class FriendModule { }

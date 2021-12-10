import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InviteFriendRoutingModule } from './invite-friend-routing.module';
import { InviteFriendComponent } from './invite-friend.component';
import { NgxQRCodeModule } from '@techiediaries/ngx-qrcode';


@NgModule({
  declarations: [
    InviteFriendComponent
  ],
  imports: [
    CommonModule,
    InviteFriendRoutingModule,
    NgxQRCodeModule
  ]
})
export class InviteFriendModule { }

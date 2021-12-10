import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InviteFriendComponent } from './invite-friend.component';

const routes: Routes = [
  { path: '', component: InviteFriendComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InviteFriendRoutingModule { }

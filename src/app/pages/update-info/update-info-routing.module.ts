import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {UpdateInfoComponent} from "./update-info.component";

const routes: Routes = [
  { path: '', component: UpdateInfoComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UpdateInfoRoutingModule { }

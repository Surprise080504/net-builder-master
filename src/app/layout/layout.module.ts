import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AuthLayoutComponent } from './auth-layout/auth-layout.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { TabsMenuComponent } from './tabs-menu/tabs-menu.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AuthLayoutComponent,
    MainLayoutComponent,
    TabsMenuComponent,
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    AuthLayoutComponent,
    MainLayoutComponent,
  ]
})
export class LayoutModule { }

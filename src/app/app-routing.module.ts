import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { AuthLayoutComponent } from './layout/auth-layout/auth-layout.component';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { ResetPasswordComponent } from './auth/reset-password/reset-password.component';
import { ForgotPasswordComponent } from './auth/forgot-password/forgot-password.component';
import { AuthGuard } from './core/guards/auth.guard';
import { AuthResolver } from './core/resolvers/auth.resolver';
import { AcceptInviteComponent } from './auth/accept-invite/accept-invite.component';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    canActivate: [AuthGuard],
    resolve: { auth: AuthResolver },
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./pages/home/home.module').then((m) => m.HomeModule),
      },
      {
        path: 'revenue',
        loadChildren: () =>
          import('./pages/revenue/revenue.module').then((m) => m.RevenueModule),
      },
      {
        path: 'upgrade',
        loadChildren: () =>
          import('./pages/upgrade/upgrade.module').then((m) => m.UpgradeModule),
      },
      {
        path: 'invite',
        loadChildren: () =>
          import('./pages/invite-friend/invite-friend.module').then(
            (m) => m.InviteFriendModule
          ),
      },
      {
        path: 'contact-us',
        loadChildren: () =>
          import('./pages/contact-us/contact-us.module').then(
            (m) => m.ContactUsModule
          ),
      },
      {
        path: 'update-info',
        loadChildren: () =>
          import('./pages/update-info/update-info.module').then(
            (m) => m.UpdateInfoModule
          ),
      },
      {
        path: 'friend/:level',
        loadChildren: () =>
          import('./pages/friend/friend.module').then((m) => m.FriendModule),
      },
    ],
  },
  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      { path: 'login', component: LoginComponent, data: { title: 'Sign in' } },
      {
        path: 'signup',
        component: SignupComponent,
        data: { title: 'Sign up' },
      },
      {
        path: 'accept-invite/:invitorId',
        component: AcceptInviteComponent,
        data: { title: 'Accept Invitation' },
      },
      {
        path: 'reset-password',
        component: ResetPasswordComponent,
        data: { title: 'Reset Password' },
      },
      {
        path: 'forgot-password',
        component: ForgotPasswordComponent,
        data: { title: 'Forgot Password' },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

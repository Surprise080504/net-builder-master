import { Component, OnInit } from '@angular/core';
import { MainLayoutService } from '../../layout/main-layout/main-layout.service';
import { AuthService } from '../../core/services/auth.service';
import { NgxQrcodeElementTypes, NgxQrcodeErrorCorrectionLevels } from '@techiediaries/ngx-qrcode';
import { Router } from '@angular/router';

@Component({
  selector: 'app-invite-friend',
  templateUrl: './invite-friend.component.html',
  styleUrls: ['./invite-friend.component.scss']
})
export class InviteFriendComponent implements OnInit {

  user$ = this.authService.user$;
  name = 'Net Builder Invitation Link QR Code';
  elementType = NgxQrcodeElementTypes.URL;
  correctionLevel = NgxQrcodeErrorCorrectionLevels.HIGH;
  value = '';

  constructor(
    private router: Router,
    private mainLayoutService: MainLayoutService,
    private authService: AuthService
  ) {
    this.mainLayoutService.showHeader('Invite Friends', '/');
    this.value = this.router['location']._platformLocation.location.origin + '/accept-invite/';
  }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { MainLayoutService } from '../../layout/main-layout/main-layout.service';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-upgrade',
  templateUrl: './upgrade.component.html',
  styleUrls: ['./upgrade.component.scss']
})
export class UpgradeComponent implements OnInit {

  user$ = this.authService.user$;

  constructor(
    private mainLayoutService: MainLayoutService,
    private authService: AuthService
  ) {
    this.mainLayoutService.showHeader('Upgrade', '/');
  }

  ngOnInit(): void {
  }

}

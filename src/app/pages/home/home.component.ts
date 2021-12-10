import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../core/services/auth.service';
import { FriendService } from '../../core/services/friend.service';
import { GroupOfFriends } from '../../core/models/friend.model';
import { RevenueService } from '../../core/services/revenue.service';

import { MainLayoutService } from '../../layout/main-layout/main-layout.service';
import { ToastrService } from '../../core/services/toastr.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  user$ = this.authService.user$;
  groups: GroupOfFriends[] = [];
  totalCount: number = 0;
  isLoading = false;
  totalRevenueSum = 0;


  constructor(
    private mainLayoutService: MainLayoutService,
    private authService: AuthService,
    private friendService: FriendService,
    private revenueService: RevenueService,
    private toastr: ToastrService,
  ) {
    this.mainLayoutService.hideHeader();
  }

  ngOnInit(): void {
    this.loadFriends();
    this.loadRevenue();
  }

  logout() {
    this.authService.logout();
  }

  private async loadFriends() {
    try {
      this.isLoading = true;
      const friends = await this.friendService.getFriends().toPromise();
      const groupedFriends = friends.reduce((result, friend) => {
        //@ts-ignore
        (result[friend.level] = result[friend.level] || []).push(friend);
        this.totalCount++;
        return result;
      }, {});
      this.groups = Object.keys(groupedFriends).map((level: string) => ({
        level: Number(level),
        //@ts-ignore
        friends: groupedFriends[level]
      }));
    } catch (e) {
      this.toastr.danger(e.error.message);
    } finally {
      this.isLoading = false;
    }
  }

  private async loadRevenue() {
    try {
      this.isLoading = true;
      const totalRevenue = await this.revenueService.getRevenue().toPromise();
      totalRevenue.map(revenue => {
        this.totalRevenueSum += revenue.amount;
      });
    } catch (e) {
      this.toastr.danger(e.error.message);
    } finally {
      this.isLoading = false;
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { MainLayoutService } from '../../layout/main-layout/main-layout.service';
import { RevenueService } from '../../core/services/revenue.service';
import { Revenue } from '../../core/models/revenue.model';
import { ToastrService } from '../../core/services/toastr.service';

enum  RevenueDisplayType{
  Daily = 'DAILY',
  Monthly = 'MONTHLY'
}

@Component({
  selector: 'app-revenue',
  templateUrl: './revenue.component.html',
  styleUrls: ['./revenue.component.scss']
})
export class RevenueComponent implements OnInit {

  RevenueDisplayType = RevenueDisplayType;
  currentTab: RevenueDisplayType = RevenueDisplayType.Daily;

  isLoading = false;
  totalRevenue: Revenue[] = [];
  totalRevenueSum = 0;
  todayRevenueSum = 0;

  constructor(
    private mainLayoutService: MainLayoutService,
    private revenueService: RevenueService,
    private toastr: ToastrService
  ) {
    this.mainLayoutService.showHeader('Revenue', '/');
  }

  ngOnInit(): void {
    this.loadRevenue();
  }

  private async loadRevenue() {
    try {
      this.isLoading = true;
      this.totalRevenue = await this.revenueService.getRevenue().toPromise();
      const today = new Date();
      this.totalRevenue.map(revenue => {
        this.totalRevenueSum += revenue.amount;
        const createAt = new Date(revenue.createdAt);
        if(today.getDate() == createAt.getDate() && today.getMonth() == createAt.getMonth() && today.getFullYear() == createAt.getFullYear()) {
          this.todayRevenueSum += revenue.amount;
        }
      });
    } catch (e) {
      this.toastr.danger(e.error.message);
    } finally {
      this.isLoading = false;
    }
  }

}

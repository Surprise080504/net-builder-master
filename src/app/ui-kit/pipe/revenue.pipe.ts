import { Pipe, PipeTransform } from '@angular/core';
import { Revenue } from '../../core/models/revenue.model';

@Pipe({
  name: 'dailyMonthlyRevenue'
})
export class RevenuePipe implements PipeTransform {

  transform(revenues: Revenue[], daily: number): Revenue[] {
    const today = new Date();
    if(daily == 1) {
      return revenues.filter(function(revenue) {
        const createAt = new Date(revenue.createdAt);
        return (today.getDate() == createAt.getDate() && today.getMonth() == createAt.getMonth() && today.getFullYear() == createAt.getFullYear());
      });
    } else {
      return revenues.filter(function(revenue) {
        const createAt = new Date(revenue.createdAt);
        return (today.getMonth() == createAt.getMonth() && today.getFullYear() == createAt.getFullYear());
      });
    }
  }

}

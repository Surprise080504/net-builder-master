import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'usdtAmount'
})
export class UsdtAmountPipe implements PipeTransform {

  transform(amount: number): string {
    const result = `${amount}`.padStart(6, '0');
    return result;
  }

}

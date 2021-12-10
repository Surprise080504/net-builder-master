import { Pipe, PipeTransform } from '@angular/core';
import { ToastrType } from '../../core/models/toastr';

type FieldType = 'bg' | 'image' | 'icon';

@Pipe({
  name: 'toastrColor'
})
export class ToastrColorPipe implements PipeTransform {

  transform(type: ToastrType, field: FieldType): string {
    let data = {
      bg: '',
      image: '',
      icon: '',
    };
    if (type === ToastrType.Success) {
      data = {
        bg: 'bg-blue-200',
        image: 'assets/images/icons/toastr/check.svg',
        icon: 'jewel',
      };
    } else if (type === ToastrType.Info) {
      data = {
        bg: 'bg-green-200',
        image: 'assets/images/icons/toastr/help.svg',
        icon: 'atoll',
      };
    } else if (type === ToastrType.Warning) {
      data = {
        bg: 'bg-yellow-200',
        image: 'assets/images/icons/toastr/question.svg',
        icon: 'tangerine',
      };
    } else if (type === ToastrType.Danger) {
      data = {
        bg: 'bg-red-200',
        image: 'assets/images/icons/toastr/danger.svg',
        icon: 'merlot',
      };
    }
    return data[field];
  }

}

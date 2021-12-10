import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'color'
})
export class ColorPipe implements PipeTransform {

  colors = {
    niagara: '#07A39D', // primary color
    jewel: '#106D2F', // success color
    'blue-romance': '#D1F4D9',
    atoll: '#0C6C7E', // info color
    'humming-bird': '#D0F3F8',
    tangerine: '#F18F01', // warning color
    peach: '#FFE4BC',
    merlot: '#841E30', // danger color
    cosmos: '#FED6DB',
    japonica: '#D97070',
    'pickled-bluewood': '#354A5E',
    'cod-gray': '#151515',
    'mine-shaft': '#3E3E3E',
    tundora: '#414141',
    'dove-gray': '#666666',
    'regent-gray': '#86929E',
    mercury: '#E3E3E3',
    'black-squeeze': '#E6F6F5',
    'catskill-white': '#F7F9FB',
    'athens-gray': '#F7F8FA',
    'aqua-island': '#9CDAD8',
  };

  transform(value: string): string {
    return (this.colors as any)[value] || value;
  }
}

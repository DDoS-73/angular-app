import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration',
})
export class DurationPipe implements PipeTransform {
  transform(value: number, ...args: unknown[]): string {
    if (value < 60) {
      return `${value}min`;
    } else {
      let hours = formatTime(Math.floor(value / 60));
      let minutes = formatTime(value % 60);

      return `${hours}h ${minutes}min`;
    }
  }
}

const formatTime = (num: number) => {
  return String(num).padStart(2, '0');
};

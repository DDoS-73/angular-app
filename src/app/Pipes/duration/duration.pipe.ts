import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration',
})
export class DurationPipe implements PipeTransform {
  transform(value: number, ...args: unknown[]): string {
    return value < 60
      ? `${value}min`
      : `${formatTime(Math.floor(value / 60))}h ${formatTime(value % 60)}min`;
  }
}

const formatTime = (num: number) => {
  return String(num).padStart(2, '0');
};
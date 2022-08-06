import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration',
})
export class DurationPipe implements PipeTransform {
  transform(value: number | undefined): string {
    if (!value) {
      return '0min';
    }
    return value < 60
      ? `${value}min`
      : `${this.formatTime(Math.floor(value / 60))}h ${this.formatTime(
          value % 60
        )}min`;
  }

  private formatTime(num: number) {
    return String(num).padStart(2, '0');
  }
}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'transformDate',
})
export class TransformDatePipe implements PipeTransform {
  transform(date: string | undefined): Date {
    if (!date) {
      return new Date();
    }
    const [day, month, year] = date.split('/');
    return new Date(+year, +month, +day);
  }
}

import { Pipe, PipeTransform } from '@angular/core';
import { Course } from '../../Course';

@Pipe({
  name: 'orderBy',
})
export class OrderByPipe implements PipeTransform {
  transform(arr: Array<Course>, field: string): Array<Course> {
    const copyArr = [...arr];
    copyArr.sort((a: any, b: any) => {
      if (a[field] < b[field]) {
        return -1;
      } else if (a[field] > b[field]) {
        return 1;
      } else {
        return 0;
      }
    });
    return copyArr;
  }
}

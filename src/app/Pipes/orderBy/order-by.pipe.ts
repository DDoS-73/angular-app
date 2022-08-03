import { Pipe, PipeTransform } from '@angular/core';
import { Course } from '../../Models/course.model';

@Pipe({
  name: 'orderBy',
})
export class OrderByPipe implements PipeTransform {
  transform(
    arr: Array<Course | undefined> | null,
    field: string
  ): Array<Course | undefined> {
    if (!arr) {
      return [];
    }
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

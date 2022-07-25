import { Pipe, PipeTransform } from '@angular/core';
import { Course } from '../../Models/course.model';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(arr: Array<Course>, title: string): Array<Course | undefined> {
    const result = arr.filter((course) =>
      course.title.toLowerCase().includes(title.toLowerCase())
    );

    return result.length === 0 ? [undefined] : result;
  }
}

import { Pipe, PipeTransform } from '@angular/core';

import { Author } from '../../Models/author.model';

@Pipe({
  name: 'authors',
})
export class AuthorsPipe implements PipeTransform {
  transform(authors: Author[] | null): string {
    if (!authors) {
      return '';
    }
    let result = authors.reduce((acc, el) => {
      return acc + el.name + ', ';
    }, '');
    return result.slice(0, result.length - 2);
  }
}

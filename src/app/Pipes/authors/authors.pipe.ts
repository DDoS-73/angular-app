import { Pipe, PipeTransform } from '@angular/core';

import { AuthorsService } from '../../Services/authors/authors.service';

@Pipe({
  name: 'authors',
})
export class AuthorsPipe implements PipeTransform {
  constructor(private authorsService: AuthorsService) {}

  transform(id: string[] | undefined): string {
    if (!id) {
      return '';
    }
    let authors = id.map((el) => this.authorsService.getAuthorByID(el));
    let result = authors.reduce((acc, el) => {
      return acc + el.name + ', ';
    }, '');
    return result.slice(0, result.length - 2);
  }
}

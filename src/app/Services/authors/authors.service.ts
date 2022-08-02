import { Injectable } from '@angular/core';
import { mockedAuthorsList } from '../../constants';
import { Author } from '../../Models/author.model';

@Injectable({
  providedIn: 'root',
})
export class AuthorsService {
  private authors: Author[] = mockedAuthorsList;

  constructor() {}

  getAuthors(): Author[] {
    return this.authors;
  }

  getAuthorByID(id: string) {
    const author = this.authors.find((el) => el.id === id);
    if (author) {
      return author;
    }
    throw Error('There is no such author');
  }

  addAuthor() {}
}

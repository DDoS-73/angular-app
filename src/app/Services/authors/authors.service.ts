import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, tap } from 'rxjs';

import { BASE_URL } from '../../constants';
import { Author } from '../../Models/author.model';
import { AuthorsResponse } from '../../Models/response';
import { AuthorResponse } from '../../Models/response/AuthorResponse';

@Injectable({
  providedIn: 'root',
})
export class AuthorsService {
  private authors$ = new BehaviorSubject<Author[]>([]);

  get authors() {
    return this.authors$.getValue();
  }

  set authors(val: Author[]) {
    this.authors$.next(val);
  }

  constructor(private http: HttpClient) {
    this.fetchAuthors();
  }

  private fetchAuthors() {
    this.http
      .get<AuthorsResponse>(BASE_URL + '/authors/all')
      .subscribe((res) => {
        this.authors = res.result;
      });
  }

  getAuthors(): BehaviorSubject<Author[]> {
    return this.authors$;
  }

  getAuthorByID(id: string) {
    const author = this.authors.find((el) => el.id === id);
    if (author) {
      return author;
    }
    throw Error('There is no such author');
  }

  addAuthor(author: Author) {
    return this.http
      .post<AuthorResponse>(BASE_URL + '/authors/add', author)
      .pipe(
        tap((res) => {
          this.authors = [...this.authors, res.result];
        })
      );
  }
}

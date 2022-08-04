import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { BASE_URL } from '../../constants';
import { Author } from '../../Models/author.model';
import { AuthorsResponse } from '../../Models/response';

@Injectable({
  providedIn: 'root',
})
export class AuthorsService {
  private authors$ = new BehaviorSubject<Author[]>([]);

  constructor(private http: HttpClient) {
    this.fetchAuthors();
  }

  private fetchAuthors() {
    this.http
      .get<AuthorsResponse>(BASE_URL + '/authors/all')
      .subscribe((res) => {
        this.authors$.next(res.result);
      });
  }

  getAuthors(): BehaviorSubject<Author[]> {
    return this.authors$;
  }

  getAuthorByID(id: string) {
    const author = this.authors$.getValue().find((el) => el.id === id);
    if (author) {
      return author;
    }
    throw Error('There is no such author');
  }

  addAuthor() {}
}

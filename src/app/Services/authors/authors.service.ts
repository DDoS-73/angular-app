import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, map, Observable } from 'rxjs';

import { BASE_URL } from '../../constants';
import { Author } from '../../Models/author.model';
import { AuthorsResponse } from '../../Models/response';
import { AuthorResponse } from '../../Models/response/AuthorResponse';

@Injectable({
  providedIn: 'root',
})
export class AuthorsService {
  constructor(private http: HttpClient) {}

  getAuthors(): Observable<AuthorsResponse> {
    return this.http.get<AuthorsResponse>(BASE_URL + '/authors/all');
  }

  getAuthorByID(id: string) {
    return this.http.get<AuthorResponse>(BASE_URL + `/authors/${id}`);
  }

  getAuthorsByID(id: string[]): Observable<Author[]> {
    const observableArr = id.map((el) =>
      this.getAuthorByID(el).pipe(map((result) => result.result))
    );
    return forkJoin(observableArr);
  }

  addAuthor(author: Author) {
    return this.http.post<AuthorResponse>(BASE_URL + '/authors/add', author);
  }
}

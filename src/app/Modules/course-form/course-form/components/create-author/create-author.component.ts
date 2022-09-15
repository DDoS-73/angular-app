import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { Author } from '../../../../../Models/author.model';
import { AuthorsPageActions } from '../../../../../Store/authors/authors.actions';

@Component({
  selector: 'course-create-author',
  templateUrl: './create-author.component.html',
  styleUrls: ['./create-author.component.scss'],
})
export class CreateAuthorComponent {
  name: string = '';
  constructor(private store: Store) {}

  createAuthor() {
    const author: Author = { id: '', name: this.name };
    this.store.dispatch(AuthorsPageActions.addAuthor({ author }));
  }
}

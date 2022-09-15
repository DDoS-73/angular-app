import { createReducer, on } from '@ngrx/store';

import { Author } from '../../Models/author.model';
import { AuthorsPageActions } from './authors.actions';

const initialState: Author[] = [];

export const authorsReducer = createReducer(
  initialState,
  on(AuthorsPageActions.loadAuthorsSuccess, (state, { authors }) => authors),
  on(AuthorsPageActions.addAuthorSuccess, (state, { author }) => [
    ...state,
    author,
  ])
);

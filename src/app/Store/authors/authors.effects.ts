import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, EMPTY, exhaustMap, map } from 'rxjs';

import { MessageService } from '../../Modules/message/message.service';
import { AuthorsService } from '../../Services/authors/authors.service';
import { AuthorsPageActions } from './authors.actions';

@Injectable()
export class AuthorsEffects {
  loadAuthors$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthorsPageActions.loadAuthors),
      exhaustMap(() =>
        this.authorsService.getAuthors().pipe(
          map(({ result }) =>
            AuthorsPageActions.loadAuthorsSuccess({ authors: result })
          ),
          catchError(() => EMPTY)
        )
      )
    )
  );

  addAuthor$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthorsPageActions.addAuthor),
      exhaustMap((action) =>
        this.authorsService.addAuthor(action.author).pipe(
          map(({ result }) => {
            this.messageService.openSuccess('Author created');
            return AuthorsPageActions.addAuthorSuccess({ author: result });
          }),
          catchError(() => EMPTY)
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private authorsService: AuthorsService,
    private messageService: MessageService
  ) {}
}

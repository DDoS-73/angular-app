import { createActionGroup, emptyProps, props } from '@ngrx/store';

import { Author } from '../../Models/author.model';

export const AuthorsPageActions = createActionGroup({
  source: 'Authors Page',
  events: {
    'Load Authors': emptyProps(),
    'Load Authors Success': props<{ authors: Author[] }>(),
    'Add author': props<{ author: Author }>(),
    'Add author Success': props<{ author: Author }>(),
  },
});

import { createFeatureSelector } from '@ngrx/store';

import { Author } from '../../Models/author.model';
import { Features } from '../features';

export const selectAuthors = createFeatureSelector<Author[]>(Features.Authors);

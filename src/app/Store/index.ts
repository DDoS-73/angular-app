import { Author } from '../Models/author.model';
import { Course } from '../Models/course.model';
import { authorsReducer } from './authors/authors.reducer';
import { coursesReducer } from './courses/courses.reducer';
import { Features } from './features';

export interface State {
  courses: Course[];
  authors: Author[];
}

export const rootReducer = {
  [Features.Courses]: coursesReducer,
  [Features.Authors]: authorsReducer,
};

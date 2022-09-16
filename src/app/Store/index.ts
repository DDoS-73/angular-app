import { authorsReducer } from './authors/authors.reducer';
import { coursesReducer } from './courses/courses.reducer';
import { Features } from './features';
import { userReducer } from './user/user.reducer';

export const rootReducer = {
  [Features.Courses]: coursesReducer,
  [Features.Authors]: authorsReducer,
  [Features.User]: userReducer,
};

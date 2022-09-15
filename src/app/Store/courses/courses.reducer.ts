import { createReducer, on } from '@ngrx/store';

import { Course } from '../../Models/course.model';
import { CoursePageActions } from './courses.actions';

const initialState: Course[] = [];

export const coursesReducer = createReducer(
  initialState,
  on(CoursePageActions.loadCoursesSuccess, (state, { courses }) => courses),
  on(CoursePageActions.deleteCourseSuccess, (state, { id }) =>
    state.filter((el) => el.id !== id)
  ),
  on(CoursePageActions.createCourseSuccess, (state, { course }) => [
    ...state,
    course,
  ]),
  on(CoursePageActions.updateCourseSuccess, (state, { course }) =>
    state.map((el) => (el.id === course.id ? course : el))
  )
);

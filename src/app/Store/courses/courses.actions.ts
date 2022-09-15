import { createActionGroup, emptyProps, props } from '@ngrx/store';

import { Course } from '../../Models/course.model';

export const CoursePageActions = createActionGroup({
  source: 'Course Page',
  events: {
    'Load Courses': emptyProps(),
    'Load Courses Success': props<{ courses: Course[] }>(),
    'Delete Course': props<{ id: string }>(),
    'Delete Course Success': props<{ id: string }>(),
    'Create Course': props<{ course: Course }>(),
    'Create Course Success': props<{ course: Course }>(),
    'Update Course': props<{ course: Course }>(),
    'Update Course Success': props<{ course: Course }>(),
  },
});

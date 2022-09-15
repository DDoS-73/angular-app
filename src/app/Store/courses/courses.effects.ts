import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, EMPTY, exhaustMap, map, mergeMap } from 'rxjs';

import { MessageService } from '../../Modules/message/message.service';
import { CourseService } from '../../Services/courses/course.service';
import { CoursePageActions } from './courses.actions';

@Injectable()
export class CoursesEffects {
  loadCourses$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CoursePageActions.loadCourses),
      mergeMap(() =>
        this.courseService.getCourses().pipe(
          map(({ result }) =>
            CoursePageActions.loadCoursesSuccess({ courses: result })
          ),
          catchError(() => EMPTY)
        )
      )
    )
  );

  deleteCourse$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CoursePageActions.deleteCourse),
      exhaustMap((action) =>
        this.courseService.deleteCourse(action.id).pipe(
          map(() => {
            this.messageService.openSuccess('Courses was deleted');
            return CoursePageActions.deleteCourseSuccess({ id: action.id });
          }),
          catchError(() => EMPTY)
        )
      )
    )
  );

  createCourse$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CoursePageActions.createCourse),
      exhaustMap((action) =>
        this.courseService.createCourse(action.course).pipe(
          map(({ result }) => {
            this.messageService.openSuccess('The course has been created');
            this.router.navigate(['/courses']);
            return CoursePageActions.createCourseSuccess({ course: result });
          }),
          catchError(() => EMPTY)
        )
      )
    )
  );

  updateCourse$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CoursePageActions.updateCourse),
      exhaustMap((action) =>
        this.courseService.updateItem(action.course).pipe(
          map(({ result }) => {
            this.messageService.openSuccess('The course has been updated');
            this.router.navigate(['/courses']);
            return CoursePageActions.updateCourseSuccess({ course: result });
          }),
          catchError(() => EMPTY)
        )
      )
    )
  );

  constructor(
    private router: Router,
    private actions$: Actions,
    private courseService: CourseService,
    private messageService: MessageService
  ) {}
}

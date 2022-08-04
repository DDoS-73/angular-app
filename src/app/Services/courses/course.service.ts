import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';

import { BASE_URL } from '../../constants';
import { Course } from '../../Models/course.model';
import {
  CourseResponse,
  CoursesResponse,
  SuccessfulResponse,
} from '../../Models/response';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  private courses$ = new BehaviorSubject<Course[]>([]);

  constructor(private http: HttpClient) {
    this.fetchCourses();
  }

  private fetchCourses() {
    this.http
      .get<CoursesResponse>(BASE_URL + '/courses/all')
      .subscribe((res) => {
        this.courses$.next(res.result);
      });
  }

  getCourses(): BehaviorSubject<Course[]> {
    return this.courses$;
  }

  createCourse(course: Course) {
    return this.http
      .post<CourseResponse>(BASE_URL + '/courses/add', course)
      .pipe(
        tap((res) => {
          this.courses$.next([...this.courses$.getValue(), res.result]);
          return res;
        })
      );
  }

  getItemByID(id: string) {
    // const course = this.courses$.find((el) => el.id === id);
    // if (course) {
    //   return course;
    // }
    // throw Error('There is no such course');
  }

  updateItem(course: Course) {
    // this.courses$ = this.courses$.filter((el) => el.id !== course.id);
    // this.courses$.push(course);
  }

  removeItem(id: string): Observable<SuccessfulResponse> {
    return this.http
      .delete<SuccessfulResponse>(BASE_URL + `/courses/${id}`)
      .pipe(
        tap((res) => {
          this.courses$.next(
            [...this.courses$.getValue()].filter((el) => el.id !== id)
          );
          return res;
        })
      );
  }
}

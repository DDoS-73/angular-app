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

  get courses() {
    return this.courses$.getValue();
  }

  set courses(val: Course[]) {
    this.courses$.next(val);
  }

  constructor(private http: HttpClient) {
    this.fetchCourses();
  }

  private fetchCourses() {
    this.http
      .get<CoursesResponse>(BASE_URL + '/courses/all')
      .subscribe((res) => {
        this.courses = res.result;
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
          this.courses = [...this.courses, res.result];
        })
      );
  }

  getItemByID(id: string) {
    return this.http.get<CourseResponse>(BASE_URL + `/courses/${id}`);
  }

  updateItem(course: Course) {
    return this.http
      .put<CourseResponse>(BASE_URL + `/courses/${course.id}`, course)
      .pipe(
        tap(({ result }) => {
          this.courses = this.courses.map((course) =>
            course.id === result.id ? result : course
          );
        })
      );
  }

  removeItem(id: string): Observable<SuccessfulResponse> {
    return this.http
      .delete<SuccessfulResponse>(BASE_URL + `/courses/${id}`)
      .pipe(
        tap(() => {
          this.courses = this.courses.filter((el) => el.id !== id);
        })
      );
  }
}

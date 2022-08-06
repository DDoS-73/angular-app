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
          const courses: Course[] = this.courses$
            .getValue()
            .filter((el) => el.id !== result.id);
          this.courses$.next([...courses, result]);
        })
      );
  }

  removeItem(id: string): Observable<SuccessfulResponse> {
    return this.http
      .delete<SuccessfulResponse>(BASE_URL + `/courses/${id}`)
      .pipe(
        tap(() => {
          this.courses$.next(
            this.courses$.getValue().filter((el) => el.id !== id)
          );
        })
      );
  }
}

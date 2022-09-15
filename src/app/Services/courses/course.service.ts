import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

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
  constructor(private http: HttpClient) {}

  getCourses(): Observable<CoursesResponse> {
    return this.http.get<CoursesResponse>(BASE_URL + '/courses/all');
  }

  createCourse(course: Course) {
    return this.http.post<CourseResponse>(BASE_URL + '/courses/add', course);
  }

  getItemByID(id: string) {
    return this.http.get<CourseResponse>(BASE_URL + `/courses/${id}`);
  }

  updateItem(course: Course) {
    return this.http.put<CourseResponse>(
      BASE_URL + `/courses/${course.id}`,
      course
    );
  }

  deleteCourse(id: string): Observable<SuccessfulResponse> {
    return this.http.delete<SuccessfulResponse>(BASE_URL + `/courses/${id}`);
  }
}

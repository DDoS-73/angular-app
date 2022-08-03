import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';

import { BASE_URL, mockedCoursesList } from '../../constants';
import { Course } from '../../Models/course.model';
import { ServerResponse } from '../../Models/ServerResponse.model';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  private courses: Course[] = mockedCoursesList;

  constructor(private http: HttpClient) {}

  getCourses(): Course[] {
    return this.courses;
  }

  createCourse(course: Course) {
    return this.http
      .post<ServerResponse>(BASE_URL + '/courses/add', course, {
        headers: { Authorization: localStorage.getItem('token') || '' },
      })
      .pipe(
        tap((res) => {
          this.courses.push(res.result as Course);
        })
      );
  }

  getItemByID(id: string) {
    const course = this.courses.find((el) => el.id === id);
    if (course) {
      return course;
    }
    throw Error('There is no such course');
  }

  updateItem(course: Course) {
    this.courses = this.courses.filter((el) => el.id !== course.id);
    this.courses.push(course);
  }

  removeItem(id: string): Course[] {
    this.courses = this.courses.filter((course) => course.id !== id);
    return this.courses;
  }
}

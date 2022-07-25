import { Injectable } from '@angular/core';

import { mockedCoursesList } from '../constants';
import { Course } from '../Models/course.model';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  private courses: Course[] = mockedCoursesList;

  getCourses(): Course[] {
    return this.courses;
  }

  createCourse(course: Course) {
    this.courses.push(course);
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

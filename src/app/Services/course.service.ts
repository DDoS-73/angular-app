import { Injectable } from '@angular/core';

import { mockedCoursesList } from '../constants';
import { Course } from '../Models/course.model';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  private courses: Course[] = mockedCoursesList;

  getList(): Course[] {
    return this.courses;
  }

  createCourse() {}
  getItemByID() {}
  updateItem() {}

  removeItem(id: string): Course[] {
    this.courses = this.courses.filter((course) => course.id !== id);
    return this.courses;
  }
}

import { Injectable } from '@angular/core';
import { mockedCoursesList } from '../constants';
import { Course } from '../Course';

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
  removeItem() {}
}

import { Component, OnInit } from '@angular/core';

import { Course } from '../Course';
import { mockedCoursesList } from '../constants';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent implements OnInit {
  courses: Course[] = [];

  plus = faPlus;

  ngOnInit(): void {
    this.courses = mockedCoursesList;
  }

  trackByID(index: number, course: Course) {
    return course.id;
  }

  deleteCourse(id: string) {
    console.log(id);
  }

  loadMoreHandler() {
    console.log('Load more button is clicked');
  }
}

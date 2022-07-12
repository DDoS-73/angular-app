import { Component, Input, OnChanges, OnInit } from '@angular/core';

import { Course } from '../Course';
import { mockedCoursesList } from '../constants';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FilterPipe } from '../Pipes/filter/filter.pipe';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent implements OnInit, OnChanges {
  courses: Course[] = [];

  plus = faPlus;

  @Input() searchText!: string;

  ngOnInit(): void {
    this.courses = mockedCoursesList;
  }

  ngOnChanges() {
    this.courses = new FilterPipe().transform(
      mockedCoursesList,
      this.searchText
    );
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

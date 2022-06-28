import { Component, Input, OnChanges, OnInit } from '@angular/core';

import { Course } from '../Course';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FilterPipe } from '../Pipes/filter/filter.pipe';
import { CourseService } from '../Services/course.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent implements OnInit, OnChanges {
  courses: Course[] = [];
  filteredCourses: Course[] = [];
  plus = faPlus;

  constructor(private courseService: CourseService) {}

  @Input() searchText!: string;

  ngOnInit(): void {
    this.courses = this.filteredCourses = this.courseService.getList();
  }

  ngOnChanges() {
    this.filteredCourses = new FilterPipe().transform(
      this.courses,
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

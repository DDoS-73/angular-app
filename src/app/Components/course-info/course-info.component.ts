import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { mergeMap } from 'rxjs';

import { Author } from '../../Models/author.model';
import { Course } from '../../Models/course.model';
import { AuthorsService } from '../../Services/authors/authors.service';
import { CourseService } from '../../Services/courses/course.service';

@Component({
  selector: 'app-course-info',
  templateUrl: './course-info.component.html',
  styleUrls: ['./course-info.component.scss'],
})
export class CourseInfoComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private courseService: CourseService,
    public authorsService: AuthorsService,
    private location: Location
  ) {}
  course!: Course;
  authors!: Author[];

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.courseService
        .getItemByID(params['id'])
        .pipe(
          mergeMap(({ result }) => {
            this.course = result;
            return this.authorsService.getAuthorsByID(result.authors);
          })
        )
        .subscribe((res) => (this.authors = res));
    });
  }

  navigateBack() {
    this.location.back();
  }
}

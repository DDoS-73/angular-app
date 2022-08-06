import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Course } from '../../Models/course.model';
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
    private location: Location
  ) {}
  course?: Course;

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.courseService.getItemByID(params['id']).subscribe((res) => {
        this.course = res.result;
      });
    });
  }

  navigateBack() {
    this.location.back();
  }
}

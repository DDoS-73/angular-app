import { Component, OnInit } from '@angular/core';
import { Course } from '../../../Models/course.model';
import { CourseService } from '../../../Services/course.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-course',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss'],
})
export class CourseFormComponent implements OnInit {
  editMode = false;
  course: Course = {
    id: '',
    title: '',
    creationDate: new Date(),
    description: '',
    duration: 0,
    topRated: false,
  };
  constructor(
    private courseService: CourseService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.editMode = true;
      this.fillFields(id);
    }
  }

  fillFields(id: string) {
    try {
      this.course = this.courseService.getItemByID(id);
    } catch (e) {
      console.log(e);
    }
  }

  saveHandler() {
    try {
      if (this.editMode) {
        this.courseService.updateItem(this.course);
      } else {
        this.courseService.createCourse(this.course);
      }
    } catch (e) {
      console.log(e);
    }
    this.router.navigate(['../../courses']);
  }

  cancelHandler() {
    this.router.navigate(['../../courses']);
  }
}

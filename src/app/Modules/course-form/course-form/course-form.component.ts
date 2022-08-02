import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseService } from '../../../Services/course.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss'],
})
export class CourseFormComponent implements OnInit {
  courseForm = this.fb.group({
    title: [''],
    description: [''],
    duration: [0],
  });

  editMode = false;

  constructor(
    private courseService: CourseService,
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder
  ) {}

  get duration(): number {
    return <number>this.courseForm.get('duration')?.value;
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.editMode = true;
      // this.fillFields(id);
    }
  }

  // fillFields(id: string) {
  //   try {
  //     this.course = this.courseService.getItemByID(id);
  //   } catch (e) {
  //     console.log(e);
  //   }
  // }

  onSubmit() {
    console.log(this.courseForm.value);
    try {
      if (this.editMode) {
        // this.courseService.updateItem(this.course);
      } else {
        // this.courseService.createCourse(this.course);
      }
    } catch (e) {
      console.log(e);
    }
    // this.router.navigate(['../../courses']);
  }

  cancelHandler() {
    this.router.navigate(['../../courses']);
  }
}

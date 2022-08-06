import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Course } from '../../../Models/course.model';
import { AuthorsService } from '../../../Services/authors/authors.service';
import { CourseService } from '../../../Services/courses/course.service';
import { oneCheckboxShouldBeCheckedValidator } from '../../../Validators/oneOfCheckboxesShouldBeChecked';
import { MessageService } from '../../message/message.service';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss'],
})
export class CourseFormComponent implements OnInit {
  courseForm = this.fb.nonNullable.group({
    title: ['', Validators.required],
    description: ['', Validators.required],
    duration: [0, Validators.required],
    authors: this.fb.array([], [oneCheckboxShouldBeCheckedValidator]),
  });

  authors$ = this.authorsService.getAuthors();
  id!: string | null;

  constructor(
    private authorsService: AuthorsService,
    private courseService: CourseService,
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private messageService: MessageService
  ) {}

  get authors() {
    return this.courseForm.get('authors') as FormArray;
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) {
      this.fillFields(this.id);
    }
  }

  fillFields(id: string) {
    this.courseService.getItemByID(id).subscribe(({ result: course }) => {
      const data = {
        title: course.title,
        description: course.description,
        duration: course.duration,
        authors: this.convertCourseAuthors(course.authors),
      };
      this.courseForm.setValue(data);
    });
  }

  onSubmit() {
    const course: Course = {
      title: this.courseForm.get('title')!.value,
      description: this.courseForm.get('description')!.value,
      duration: this.courseForm.get('duration')!.value,
      authors: this.getSelectedAuthors(this.authors.value),
    };

    if (this.id) {
      this.courseService
        .updateItem({ ...course, id: this.id })
        .subscribe(() => {
          this.messageService.openSuccess('The course has been updated');
          this.router.navigate(['/courses']);
        });
    } else {
      this.courseService.createCourse(course).subscribe(() => {
        this.messageService.openSuccess('The course has been created');
        this.router.navigate(['/courses']);
      });
    }
  }

  private getSelectedAuthors(selected: boolean[]): string[] {
    return selected.flatMap((el, i) =>
      el ? this.authors$.getValue()[i].id : []
    );
  }

  private convertCourseAuthors(authors: string[]): boolean[] {
    return this.authors$.getValue().map((el) => authors.includes(el.id));
  }
}

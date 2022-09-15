import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';

import { Author } from '../../../Models/author.model';
import { Course } from '../../../Models/course.model';
import { AuthorsService } from '../../../Services/authors/authors.service';
import { CourseService } from '../../../Services/courses/course.service';
import { selectAuthors } from '../../../Store/authors/authors.selectors';
import { CoursePageActions } from '../../../Store/courses/courses.actions';
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

  authors!: Author[];
  id!: string | null;

  constructor(
    private authorsService: AuthorsService,
    private courseService: CourseService,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private messageService: MessageService,
    private store: Store
  ) {}

  get formAuthors() {
    return this.courseForm.get('authors') as FormArray;
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) {
      this.fillFields(this.id);
    }
    this.store.select(selectAuthors).subscribe((authors) => {
      this.authors = authors;
    });
  }

  fillFields(id: string) {
    this.courseService.getItemByID(id).subscribe(({ result: course }) => {
      const data = {
        title: course.title,
        description: course.description,
        duration: course.duration,
        authors: this.convertCourseAuthorsToBoolean(course.authors),
      };
      this.courseForm.setValue(data);
    });
  }

  onSubmit() {
    const course: Course = {
      title: this.courseForm.get('title')!.value,
      description: this.courseForm.get('description')!.value,
      duration: this.courseForm.get('duration')!.value,
      authors: this.getSelectedAuthors(this.formAuthors.value),
    };

    if (this.id) {
      this.store.dispatch(
        CoursePageActions.updateCourse({ course: { ...course, id: this.id } })
      );
    } else {
      this.store.dispatch(CoursePageActions.createCourse({ course }));
    }
  }

  private getSelectedAuthors(selected: boolean[]): string[] {
    return selected.flatMap((el, i) => (el ? this.authors[i].id : []));
  }

  private convertCourseAuthorsToBoolean(authors: string[]): boolean[] {
    return this.authors.map((el) => authors.includes(el.id));
  }
}

import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from '../../../Models/course.model';
import { AuthorsService } from '../../../Services/authors/authors.service';
import { CourseService } from '../../../Services/courses/course.service';
import { oneCheckboxShouldBeCheckedValidator } from '../../../Validators/oneOfCheckboxesShouldBeChecked';
import { MessageService } from '../../message/message.service';

@Component({
  selector: 'app-add-course',
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
  editMode = false;
  authorName = '';

  constructor(
    private authorsService: AuthorsService,
    private courseService: CourseService,
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private messageService: MessageService
  ) {}

  get duration(): number {
    return this.courseForm.get('duration')!.value;
  }

  get authors() {
    return this.courseForm.get('authors') as FormArray;
  }

  ngOnInit(): void {
    this.authors$.subscribe((res) => {
      this.authors.controls = [];
      for (const el of res) {
        this.authors.push(this.fb.control(false));
      }
    });

    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.editMode = true;
      // this.fillFields(id);
    }
  }

  addAuthor(e: Event) {
    e.preventDefault();
    this.authorsService
      .addAuthor({ id: '', name: this.authorName })
      .subscribe(() => {
        this.messageService.openSuccess('Author created');
      });
  }

  // fillFields(id: string) {
  //   try {
  //     this.course = this.courseService.getItemByID(id);
  //   } catch (e) {
  //     console.log(e);
  //   }
  // }

  onSubmit() {
    const course: Course = {
      title: this.courseForm.get('title')!.value,
      description: this.courseForm.get('description')!.value,
      duration: this.courseForm.get('duration')!.value,
      authors: this.getSelectedAuthors(this.authors.value),
    };
    this.courseService.createCourse(course).subscribe(() => {
      this.messageService.openSuccess('The course has been created');
      this.router.navigate(['/courses']);
    });
  }

  cancelHandler() {
    this.router.navigate(['/courses']);
  }

  private getSelectedAuthors(selected: boolean[]): string[] {
    return selected.flatMap((el, i) =>
      el ? this.authors$.getValue()[i].id : []
    );
  }
}

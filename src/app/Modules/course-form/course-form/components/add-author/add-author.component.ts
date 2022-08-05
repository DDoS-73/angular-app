import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormGroup,
  FormGroupDirective,
} from '@angular/forms';
import { AuthorsService } from '../../../../../Services/authors/authors.service';

@Component({
  selector: 'course-add-author',
  templateUrl: './add-author.component.html',
  styleUrls: ['./add-author.component.scss'],
})
export class AddAuthorComponent implements OnInit {
  authors$ = this.authorsService.getAuthors();
  form!: FormGroup;
  constructor(
    private authorsService: AuthorsService,
    private rootFormGroup: FormGroupDirective,
    private fb: FormBuilder
  ) {}

  get authors() {
    return this.form.get('authors') as FormArray;
  }

  ngOnInit(): void {
    this.form = this.rootFormGroup.control as FormGroup;

    this.authors$.subscribe((res) => {
      this.authors.controls = [];
      for (const el of res) {
        this.authors.push(this.fb.control(false));
      }
    });
  }
}

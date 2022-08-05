import { Component, OnInit } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'course-base-info',
  templateUrl: './base-info.component.html',
  styleUrls: ['./base-info.component.scss'],
})
export class BaseInfoComponent implements OnInit {
  form!: FormGroup;
  constructor(private rootFormGroup: FormGroupDirective) {}

  ngOnInit(): void {
    this.form = this.rootFormGroup.control;
  }

  get duration(): number {
    return this.form.get('duration')!.value;
  }
}

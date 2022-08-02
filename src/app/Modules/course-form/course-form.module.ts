import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MdbCheckboxModule } from 'mdb-angular-ui-kit/checkbox';
import { MdbValidationModule } from 'mdb-angular-ui-kit/validation';
import { CourseFormComponent } from './course-form/course-form.component';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { SharedModule } from '../shared/shared.module';
import { CourseFormRoutingModule } from './course-form-routing.module';

@NgModule({
  declarations: [CourseFormComponent],
  imports: [
    CommonModule,
    MdbFormsModule,
    CourseFormRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    MdbValidationModule,
    MdbCheckboxModule,
  ],
  exports: [CourseFormComponent],
})
export class CourseFormModule {}

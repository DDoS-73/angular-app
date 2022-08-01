import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseFormComponent } from './course-form/course-form.component';
import { InputComponent } from './course-form/components/input/input.component';
import { TextAreaComponent } from './course-form/components/text-area/text-area.component';
import { DurationInputComponent } from './course-form/components/duration-input/duration-input.component';
import { DateInputComponent } from './course-form/components/date-input/date-input.component';
import { AuthorsInputComponent } from './course-form/components/authors-input/authors-input.component';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { SharedModule } from '../shared/shared.module';
import { CourseFormRoutingModule } from './course-form-routing.module';

@NgModule({
  declarations: [
    CourseFormComponent,
    InputComponent,
    TextAreaComponent,
    DurationInputComponent,
    DateInputComponent,
    AuthorsInputComponent,
  ],
  imports: [
    CommonModule,
    MdbFormsModule,
    CourseFormRoutingModule,
    SharedModule,
  ],
  exports: [CourseFormComponent],
})
export class CourseFormModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseFormComponent } from './add-course/course-form.component';
import { InputComponent } from './add-course/components/input/input.component';
import { TextAreaComponent } from './add-course/components/text-area/text-area.component';
import { DurationInputComponent } from './add-course/components/duration-input/duration-input.component';
import { DateInputComponent } from './add-course/components/date-input/date-input.component';
import { AuthorsInputComponent } from './add-course/components/authors-input/authors-input.component';
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

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddCourseComponent } from './add-course/add-course.component';
import { InputComponent } from './add-course/components/input/input.component';
import { TextAreaComponent } from './add-course/components/text-area/text-area.component';
import { DurationInputComponent } from './add-course/components/duration-input/duration-input.component';
import { DateInputComponent } from './add-course/components/date-input/date-input.component';
import { AuthorsInputComponent } from './add-course/components/authors-input/authors-input.component';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { DurationPipe } from '../../Pipes/duration/duration.pipe';

@NgModule({
  declarations: [
    AddCourseComponent,
    InputComponent,
    TextAreaComponent,
    DurationInputComponent,
    DateInputComponent,
    AuthorsInputComponent,
    DurationPipe,
  ],
  imports: [CommonModule, MdbFormsModule],
  exports: [AddCourseComponent, DurationPipe],
})
export class AddCourseModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MdbCheckboxModule } from 'mdb-angular-ui-kit/checkbox';
import { MdbValidationModule } from 'mdb-angular-ui-kit/validation';
import { CourseFormComponent } from './course-form/course-form.component';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { SharedModule } from '../shared/shared.module';
import { CourseFormRoutingModule } from './course-form-routing.module';
import { BaseInfoComponent } from './course-form/components/base-info/base-info.component';
import { AddAuthorComponent } from './course-form/components/add-author/add-author.component';
import { CreateAuthorComponent } from './course-form/components/create-author/create-author.component';

@NgModule({
  declarations: [
    CourseFormComponent,
    BaseInfoComponent,
    AddAuthorComponent,
    CreateAuthorComponent,
  ],
  imports: [
    CommonModule,
    MdbFormsModule,
    CourseFormRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    MdbValidationModule,
    MdbCheckboxModule,
    FormsModule,
  ],
  exports: [CourseFormComponent],
})
export class CourseFormModule {}

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MdbCheckboxModule } from 'mdb-angular-ui-kit/checkbox';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { MdbValidationModule } from 'mdb-angular-ui-kit/validation';

import { SharedModule } from '../shared/shared.module';
import { CourseFormRoutingModule } from './course-form-routing.module';
import { AddAuthorComponent } from './course-form/components/add-author/add-author.component';
import { BaseInfoComponent } from './course-form/components/base-info/base-info.component';
import { CreateAuthorComponent } from './course-form/components/create-author/create-author.component';
import { CourseFormComponent } from './course-form/course-form.component';

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

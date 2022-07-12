import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CourseFormComponent } from './add-course/course-form.component';

const routes: Routes = [
  {
    path: '',
    component: CourseFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CourseFormRoutingModule {}

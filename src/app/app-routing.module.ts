import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Modules/auth/login/login.component';
import { MainPageComponent } from './Components/main-page/main-page.component';
import { CourseFormComponent } from './Modules/add-course/add-course/course-form.component';
import { PageNotFoundComponent } from './Components/page-not-found/page-not-found.component';
import { AuthGuard } from './Guards/auth-guard.service';
import { BreadcrumbsComponent } from './Components/breadcrumbs/breadcrumbs.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/courses',
  },
  {
    path: '',
    component: BreadcrumbsComponent,
    outlet: 'breadcrumbs',
  },
  {
    path: '',
    canActivate: [AuthGuard],
    children: [
      {
        path: 'courses',
        component: MainPageComponent,
      },
      {
        path: 'courses/new',
        component: CourseFormComponent,
      },
      {
        path: 'courses/:id',
        component: CourseFormComponent,
      },
    ],
  },
  { path: 'login', component: LoginComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

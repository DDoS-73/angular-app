import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Modules/auth/login/login.component';
import { MainPageComponent } from './Components/main-page/main-page.component';
import { CourseFormComponent } from './Modules/add-course/add-course/course-form.component';
import { PageNotFoundComponent } from './Components/page-not-found/page-not-found.component';
import { AuthGuard } from './Guards/auth-guard.service';

const routes: Routes = [
  { path: '', redirectTo: '/courses', pathMatch: 'full' },
  {
    path: 'courses',
    component: MainPageComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'courses/new',
    component: CourseFormComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'courses/:id',
    component: CourseFormComponent,
    canActivate: [AuthGuard],
  },
  { path: 'login', component: LoginComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

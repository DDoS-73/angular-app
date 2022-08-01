import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Modules/auth/login/login.component';
import { MainPageComponent } from './Components/main-page/main-page.component';
import { PageNotFoundComponent } from './Components/page-not-found/page-not-found.component';
import { AuthGuard } from './Guards/auth-guard.service';
import { RegistrationComponent } from './Modules/auth/registration/registration.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/courses',
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
        loadChildren: () =>
          import('./Modules/course-form/course-form.module').then(
            (m) => m.CourseFormModule
          ),
      },
      {
        path: 'courses/:id',
        loadChildren: () =>
          import('./Modules/course-form/course-form.module').then(
            (m) => m.CourseFormModule
          ),
      },
    ],
  },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegistrationComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

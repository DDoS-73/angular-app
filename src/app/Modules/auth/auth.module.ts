import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { MdbValidationModule } from 'mdb-angular-ui-kit/validation';

import { IsAuthDirective } from './is-auth.directive';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';

@NgModule({
  declarations: [IsAuthDirective, LoginComponent, RegistrationComponent],
  imports: [
    CommonModule,
    MdbFormsModule,
    RouterModule,
    MdbValidationModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  exports: [IsAuthDirective, LoginComponent, RegistrationComponent],
})
export class AuthModule {}

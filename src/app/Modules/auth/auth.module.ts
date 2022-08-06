import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { MdbValidationModule } from 'mdb-angular-ui-kit/validation';

import { AppRoutingModule } from '../../app-routing.module';
import { AuthService } from './auth.service';
import { IsAuthDirective } from './is-auth.directive';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';

@NgModule({
  declarations: [LoginComponent, IsAuthDirective, RegistrationComponent],
  imports: [
    CommonModule,
    MdbFormsModule,
    AppRoutingModule,
    MdbValidationModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [AuthService],
  exports: [IsAuthDirective, LoginComponent, RegistrationComponent],
})
export class AuthModule {}

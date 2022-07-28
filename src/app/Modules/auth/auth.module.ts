import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MdbValidationModule } from 'mdb-angular-ui-kit/validation';
import { LoginComponent } from './login/login.component';
import { AuthService } from './auth.service';
import { IsAuthDirective } from './is-auth.directive';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { AppRoutingModule } from '../../app-routing.module';
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

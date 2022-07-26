import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { MdbValidationModule } from 'mdb-angular-ui-kit/validation';
import { AppRoutingModule } from '../../app-routing.module';
import { AuthService } from '../auth/auth.service';
import { RegistrationComponent } from './registration/registration.component';

@NgModule({
  declarations: [RegistrationComponent],
  imports: [
    CommonModule,
    MdbFormsModule,
    AppRoutingModule,
    MdbValidationModule,
    ReactiveFormsModule,
  ],
  providers: [AuthService],
  exports: [RegistrationComponent],
})
export class RegistrationModule {}

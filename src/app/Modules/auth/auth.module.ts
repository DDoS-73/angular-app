import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MdbValidationModule } from 'mdb-angular-ui-kit/validation';
import { LoginComponent } from './login/login.component';
import { AuthService } from './auth.service';
import { IsAuthDirective } from './is-auth.directive';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { AppRoutingModule } from '../../app-routing.module';

@NgModule({
  declarations: [LoginComponent, IsAuthDirective],
  imports: [
    CommonModule,
    MdbFormsModule,
    AppRoutingModule,
    MdbValidationModule,
    ReactiveFormsModule,
  ],
  providers: [AuthService],
  exports: [IsAuthDirective, LoginComponent],
})
export class AuthModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { AuthService } from './auth.service';
import { IsAuthDirective } from './is-auth.directive';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { AppRoutingModule } from '../../app-routing.module';

@NgModule({
  declarations: [LoginComponent, IsAuthDirective],
  imports: [CommonModule, MdbFormsModule, AppRoutingModule],
  providers: [AuthService],
  exports: [IsAuthDirective, LoginComponent],
})
export class AuthModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { AuthService } from './auth.service';
import { IsAuthDirective } from './is-auth.directive';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';

@NgModule({
  declarations: [LoginComponent, IsAuthDirective],
  imports: [CommonModule, MdbFormsModule],
  providers: [AuthService],
  exports: [IsAuthDirective, LoginComponent],
})
export class AuthModule {}

import { Component } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from '../../message/message.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginFrom: FormGroup;

  constructor(
    private router: Router,
    private authService: AuthService,
    private messageService: MessageService
  ) {
    this.loginFrom = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(6),
      ]),
    });
    if (this.authService.isAuth().getValue()) {
      this.router.navigate(['/courses']);
    }
  }

  get email(): AbstractControl | null {
    return this.loginFrom.get('email');
  }

  get password(): AbstractControl | null {
    return this.loginFrom.get('password');
  }

  onSubmit(): void {
    this.authService.login(this.loginFrom.value).subscribe(() => {
      this.messageService.openSuccess('Successful login');
      this.router.navigate(['/', 'courses']);
    });
  }
}

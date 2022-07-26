import { Component } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginFrom: FormGroup;

  constructor(private router: Router) {
    this.loginFrom = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(6),
      ]),
    });
  }

  get email(): AbstractControl | null {
    return this.loginFrom.get('email');
  }

  get password(): AbstractControl | null {
    return this.loginFrom.get('password');
  }

  onSubmit(): void {
    this.router.navigate(['/', 'courses']);
  }
}

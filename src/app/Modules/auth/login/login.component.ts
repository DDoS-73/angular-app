import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

import { LoginPageAction } from '../../../Store/user/user.actions';
import { selectAuthStatus } from '../../../Store/user/user.selectors';
import { MessageService } from '../../message/message.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginFrom!: FormGroup;

  constructor(
    private router: Router,
    private authService: AuthService,
    private messageService: MessageService,
    private store: Store
  ) {}

  ngOnInit() {
    this.loginFrom = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(6),
      ]),
    });
    this.store.select(selectAuthStatus).subscribe((isAuth) => {
      if (isAuth) this.router.navigate(['/courses']);
    });
  }

  get email(): AbstractControl | null {
    return this.loginFrom.get('email');
  }

  get password(): AbstractControl | null {
    return this.loginFrom.get('password');
  }

  onSubmit(): void {
    this.store.dispatch(
      LoginPageAction.loginUser({ user: this.loginFrom.value })
    );
  }
}

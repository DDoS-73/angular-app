import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../../../Models/user.model';
import { MessageService } from '../../message/message.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent {
  registrationForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private authService: AuthService,
    private messageService: MessageService
  ) {}

  get email(): AbstractControl | null {
    return this.registrationForm.get('email');
  }

  get password(): AbstractControl | null {
    return this.registrationForm.get('password');
  }

  get name(): AbstractControl | null {
    return this.registrationForm.get('name');
  }

  onSubmit(): void {
    this.authService
      .register(this.registrationForm.value as User)
      .subscribe((res) => {
        this.messageService.openSuccess(res.result);
        this.router.navigate(['/', 'login']);
      });
  }
}

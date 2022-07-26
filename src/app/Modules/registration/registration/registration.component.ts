import { Component } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent {
  registrationFrom: FormGroup;

  constructor(private route: ActivatedRoute, private router: Router) {
    this.registrationFrom = new FormGroup({
      name: new FormControl(),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(6),
      ]),
    });
  }

  get email(): AbstractControl | null {
    return this.registrationFrom.get('email');
  }

  get password(): AbstractControl | null {
    return this.registrationFrom.get('password');
  }

  get name(): AbstractControl | null {
    return this.registrationFrom.get('name');
  }

  onSubmit(): void {
    this.router.navigate(['/', 'login']);
  }
}

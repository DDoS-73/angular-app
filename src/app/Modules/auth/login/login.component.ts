import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { User } from '../../../Models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  user: User = {
    id: '',
    firstName: '',
    secondName: '',
    email: '',
    password: '',
  };

  constructor(private auth: AuthService) {}

  handlerInput(e: Event) {
    const target = e.target as HTMLInputElement;
    this.user[target.name as keyof User] = target.value;
  }

  loginClick() {
    this.auth.login(this.user);
  }
}

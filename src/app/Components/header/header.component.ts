import { Component, DoCheck } from '@angular/core';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from '../../Modules/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements DoCheck {
  constructor(private auth: AuthService) {}
  faUser = faUser;
  logOff = faArrowRightFromBracket;
  username = '';

  ngDoCheck() {
    this.username = this.auth.getUserInfo().firstName;
  }

  logOut() {
    this.auth.logout();
  }
}

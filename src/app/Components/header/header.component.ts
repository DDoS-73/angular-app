import { Component, DoCheck } from '@angular/core';
import { Router } from '@angular/router';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from '../../Modules/auth/auth.service';
import { MessageService } from '../../Modules/message/message.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements DoCheck {
  constructor(
    private auth: AuthService,
    private messageService: MessageService,
    private router: Router
  ) {}
  faUser = faUser;
  logOff = faArrowRightFromBracket;
  username: string | undefined;

  ngDoCheck() {
    this.username = this.auth.getUserInfo().name;
  }

  logOut() {
    this.auth.logout().subscribe(() => {
      this.messageService.openSuccess('Successful logout');
      this.router.navigate(['login']);
    });
  }
}

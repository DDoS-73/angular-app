import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  faArrowRightFromBracket,
  faUser,
} from '@fortawesome/free-solid-svg-icons';

import { AuthService } from '../../Modules/auth/auth.service';
import { MessageService } from '../../Modules/message/message.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(
    private auth: AuthService,
    private messageService: MessageService,
    private router: Router
  ) {}
  faUser = faUser;
  logOff = faArrowRightFromBracket;
  username: string | undefined;

  ngOnInit() {
    this.auth.getUserInfo().subscribe((user) => {
      this.username = user.name;
    });
  }

  logOut() {
    this.auth.logout().subscribe(() => {
      this.messageService.openSuccess('Successful logout');
      this.router.navigate(['login']);
    });
  }
}

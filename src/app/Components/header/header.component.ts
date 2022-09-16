import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  faArrowRightFromBracket,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import { Store } from '@ngrx/store';

import { MessageService } from '../../Modules/message/message.service';
import { HeaderAction } from '../../Store/user/user.actions';
import { selectName } from '../../Store/user/user.selectors';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(
    private messageService: MessageService,
    private router: Router,
    private store: Store
  ) {}

  faUser = faUser;
  logOff = faArrowRightFromBracket;
  username: string | undefined;

  ngOnInit() {
    this.store.select(selectName).subscribe((name) => {
      this.username = name;
    });
  }

  logOut() {
    this.store.dispatch(HeaderAction.logout());
  }
}

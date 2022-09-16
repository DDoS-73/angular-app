import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { AuthorsPageActions } from './Store/authors/authors.actions';
import { CoursePageActions } from './Store/courses/courses.actions';
import { loadUser } from './Store/user/user.actions';
import { selectAuthStatus } from './Store/user/user.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'my-app';

  constructor(private store: Store) {}

  ngOnInit() {
    this.store.select(selectAuthStatus).subscribe((isAuth) => {
      if (isAuth) {
        this.store.dispatch(CoursePageActions.loadCourses());
        this.store.dispatch(AuthorsPageActions.loadAuthors());
        this.store.dispatch(loadUser());
      }
    });
  }
}

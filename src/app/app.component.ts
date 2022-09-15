import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { AuthorsPageActions } from './Store/authors/authors.actions';
import { CoursePageActions } from './Store/courses/courses.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'my-app';

  constructor(private store: Store) {}

  ngOnInit() {
    this.store.dispatch(CoursePageActions.loadCourses());
    this.store.dispatch(AuthorsPageActions.loadAuthors());
  }
}

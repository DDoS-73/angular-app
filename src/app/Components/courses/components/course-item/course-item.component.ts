import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faCalendar, faClock } from '@fortawesome/free-regular-svg-icons';
import {
  faMagnifyingGlass,
  faPencil,
  faTrash,
} from '@fortawesome/free-solid-svg-icons';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Author } from '../../../../Models/author.model';
import { Course } from '../../../../Models/course.model';
import { AuthorsService } from '../../../../Services/authors/authors.service';
import { selectRole } from '../../../../Store/user/user.selectors';

@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.scss'],
})
export class CourseItemComponent implements OnInit {
  clock = faClock;
  calendar = faCalendar;
  pencil = faPencil;
  trash = faTrash;
  info = faMagnifyingGlass;

  authors$!: Observable<Author[]>;

  constructor(private authorsService: AuthorsService, private store: Store) {}

  @Input() course!: Course;
  role?: string;

  @Output() deleteCourse = new EventEmitter();

  deleteHandler() {
    this.deleteCourse.emit(this.course.id);
  }

  ngOnInit() {
    this.authors$ = this.authorsService.getAuthorsByID(this.course.authors);
    this.store.select(selectRole).subscribe((role) => {
      this.role = role;
    });
  }
}

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faCalendar, faClock } from '@fortawesome/free-regular-svg-icons';
import {
  faMagnifyingGlass,
  faPencil,
  faTrash,
} from '@fortawesome/free-solid-svg-icons';
import { Observable } from 'rxjs';

import { Author } from '../../../../Models/author.model';
import { Course } from '../../../../Models/course.model';
import { AuthorsService } from '../../../../Services/authors/authors.service';

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

  constructor(public authorsService: AuthorsService) {}

  @Input() course!: Course;
  @Input() role?: string;

  @Output() deleteCourse = new EventEmitter();

  deleteHandler() {
    this.deleteCourse.emit(this.course.id);
  }

  ngOnInit() {
    console.log('init');
    this.authors$ = this.authorsService.getAuthorsByID(this.course.authors);
  }
}

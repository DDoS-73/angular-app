import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { faCalendar, faClock } from '@fortawesome/free-regular-svg-icons';
import {
  faPencil,
  faTrash,
  faMagnifyingGlass,
} from '@fortawesome/free-solid-svg-icons';
import { Course } from '../../../../Models/course.model';

@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CourseItemComponent {
  clock = faClock;
  calendar = faCalendar;
  pencil = faPencil;
  trash = faTrash;
  info = faMagnifyingGlass;

  @Input() course!: Course;
  @Input() role?: string;

  @Output() deleteCourse = new EventEmitter();

  deleteHandler() {
    this.deleteCourse.emit(this.course.id);
  }
}

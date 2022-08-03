import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { faCalendar, faClock } from '@fortawesome/free-regular-svg-icons';
import { faPencil, faTrash } from '@fortawesome/free-solid-svg-icons';
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

  @Input() course!: Course;

  @Output() deleteCourse = new EventEmitter();

  get creationDate() {
    const [day, month, year] = (this.course.creationDate as string).split('/');
    return new Date(+year, +month, +day);
  }

  deleteHandler() {
    this.deleteCourse.emit(this.course.id);
  }

  editHandler() {
    console.log('Edit button is clicked');
  }
}

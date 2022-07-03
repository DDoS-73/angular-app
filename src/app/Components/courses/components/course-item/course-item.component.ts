import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { faCalendar, faClock } from '@fortawesome/free-regular-svg-icons';
import { faPencil, faStar, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Course } from '../../../../Models/course.model';

@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CourseItemComponent implements OnInit {
  clock = faClock;
  calendar = faCalendar;
  pencil = faPencil;
  trash = faTrash;
  star = faStar;

  @Input() course!: Course;

  ngOnInit(): void {}

  @Output() deleteCourse = new EventEmitter();

  deleteHandler() {
    this.deleteCourse.emit(this.course.id);
  }

  editHandler() {
    console.log('Edit button is clicked');
  }
}

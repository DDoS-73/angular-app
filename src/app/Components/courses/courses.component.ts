import { Component, Input, OnInit } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Store } from '@ngrx/store';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { Observable } from 'rxjs';

import { Course } from '../../Models/course.model';
import { AuthService } from '../../Modules/auth/auth.service';
import { MessageService } from '../../Modules/message/message.service';
import { AuthorsService } from '../../Services/authors/authors.service';
import { CourseService } from '../../Services/courses/course.service';
import { CoursePageActions } from '../../Store/courses/courses.actions';
import { selectCourses } from '../../Store/courses/courses.selectors';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent implements OnInit {
  modalRef: MdbModalRef<ModalComponent> | null = null;
  courses$: Observable<Course[]> = this.store.select(selectCourses);
  plus = faPlus;
  role: string | undefined;

  constructor(
    private authorsService: AuthorsService,
    private courseService: CourseService,
    private modalService: MdbModalService,
    private messageService: MessageService,
    private authService: AuthService,
    private store: Store
  ) {}

  ngOnInit() {
    this.authService.getUserInfo().subscribe((user) => {
      this.role = user.role;
    });
  }

  @Input() searchText!: string;

  trackByID(index: number, course: Course | undefined) {
    return course?.id;
  }

  deleteCourse(id: string) {
    this.modalRef = this.modalService.open(ModalComponent, {
      modalClass: 'modal-dialog-centered',
    });
    this.modalRef.onClose.subscribe((result: boolean) => {
      if (result) {
        this.store.dispatch(CoursePageActions.deleteCourse({ id }));
      }
    });
  }
}

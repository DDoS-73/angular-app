import { Component, Input, OnInit } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { BehaviorSubject } from 'rxjs';

import { Course } from '../../Models/course.model';
import { AuthService } from '../../Modules/auth/auth.service';
import { MessageService } from '../../Modules/message/message.service';
import { AuthorsService } from '../../Services/authors/authors.service';
import { CourseService } from '../../Services/courses/course.service';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent implements OnInit {
  modalRef: MdbModalRef<ModalComponent> | null = null;
  courses$!: BehaviorSubject<Course[]>;
  plus = faPlus;
  role: string | undefined;

  constructor(
    private authorsService: AuthorsService,
    private courseService: CourseService,
    private modalService: MdbModalService,
    private messageService: MessageService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.courses$ = this.courseService.getCourses();
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
        this.courseService.removeItem(id).subscribe(() => {
          this.messageService.openSuccess('Courses was deleted');
        });
      }
    });
  }
}

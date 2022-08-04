import { Component, Input } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { BehaviorSubject } from 'rxjs';

import { Course } from '../../Models/course.model';
import { AuthorsService } from '../../Services/authors/authors.service';
import { CourseService } from '../../Services/courses/course.service';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent {
  modalRef: MdbModalRef<ModalComponent> | null = null;
  courses$: BehaviorSubject<Course[]>;
  plus = faPlus;

  constructor(
    private authorsService: AuthorsService,
    private courseService: CourseService,
    private modalService: MdbModalService
  ) {
    this.courses$ = this.courseService.getCourses();
  }

  @Input() searchText!: string;

  trackByID(index: number, course: Course | undefined) {
    return course?.id;
  }

  deleteCourse(id: string) {
    // this.modalRef = this.modalService.open(ModalComponent, {
    //   modalClass: 'modal-dialog-centered',
    // });
    // this.modalRef.onClose.subscribe((result: boolean) => {
    //   if (result) {
    //     this.courses$ = this.courseService.removeItem(id);
    //   }
    // });
  }
}

import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';

import { Course } from '../../Models/course.model';
import { FilterPipe } from '../../Pipes/filter/filter.pipe';
import { CourseService } from '../../Services/course.service';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent implements OnInit, OnChanges {
  modalRef: MdbModalRef<ModalComponent> | null = null;
  courses: Course[] = [];
  filteredCourses: Course[] = [];
  plus = faPlus;

  constructor(
    private courseService: CourseService,
    private modalService: MdbModalService
  ) {}

  @Input() searchText!: string;

  ngOnInit(): void {
    this.courses = this.filteredCourses = this.courseService.getList();
  }

  ngOnChanges() {
    this.filteredCourses = new FilterPipe().transform(
      this.courses,
      this.searchText
    );
  }

  trackByID(index: number, course: Course) {
    return course.id;
  }

  deleteCourse(id: string) {
    this.modalRef = this.modalService.open(ModalComponent, {
      modalClass: 'modal-dialog-centered',
    });
    this.modalRef.onClose.subscribe((result: boolean) => {
      if (result) {
        this.courses = this.filteredCourses = this.courseService.removeItem(id);
      }
    });
  }

  loadMoreHandler() {
    console.log('Load more button is clicked');
  }
}

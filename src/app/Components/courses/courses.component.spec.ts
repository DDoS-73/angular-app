import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { CoursesComponent } from './courses.component';
import { CourseService } from '../../Services/course.service';
import { MdbModalModule } from 'mdb-angular-ui-kit/modal';
import { mockedCoursesList } from '../../constants';
import { CourseItemComponent } from './components/course-item/course-item.component';
import { ModalComponent } from '../modal/modal.component';
import { AppRoutingModule } from '../../app-routing.module';
import { SharedModule } from '../../Modules/shared/shared.module';

describe('CoursesComponent', () => {
  let component: CoursesComponent;
  let fixture: ComponentFixture<CoursesComponent>;
  let valueServiceSpy: jasmine.SpyObj<CourseService>;

  beforeEach(async () => {
    valueServiceSpy = jasmine.createSpyObj('CourseService', [
      'removeItem',
      'getCourses',
    ]);
    await TestBed.configureTestingModule({
      declarations: [CoursesComponent, CourseItemComponent, ModalComponent],
      imports: [
        FontAwesomeModule,
        MdbModalModule,
        AppRoutingModule,
        SharedModule,
      ],
      providers: [{ provide: CourseService, useValue: valueServiceSpy }],
    }).compileComponents();

    valueServiceSpy.getCourses.and.returnValue(mockedCoursesList);
    valueServiceSpy.removeItem.and.callFake((id: string) => mockedCoursesList);
    fixture = TestBed.createComponent(CoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have "Add course" button', () => {
    const button = fixture.nativeElement.querySelector('button');
    console.log(typeof button);
    expect(button.textContent).toContain('Add course');
  });

  it('should call console.log() after click "Load more" button', () => {
    console.log = jasmine.createSpy('log');
    const loadMoreBtn = fixture.debugElement.query(By.css('#loadMoreBtn'));
    loadMoreBtn.triggerEventHandler('click');
    expect(console.log).toHaveBeenCalled();
  });
});

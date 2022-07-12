import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { first } from 'rxjs';

import { CourseItemComponent } from './course-item.component';
import { mockedCoursesList } from '../../../constants';
import { DurationPipe } from '../../../Pipes/duration/duration.pipe';

describe('CourseItemComponent', () => {
  let component: CourseItemComponent;
  let fixture: ComponentFixture<CourseItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CourseItemComponent, DurationPipe],
      imports: [FontAwesomeModule],
    }).compileComponents();

    fixture = TestBed.createComponent(CourseItemComponent);
    component = fixture.componentInstance;
    component.course = mockedCoursesList[0];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('raises the deleteCourse event when clicked', () => {
    const comp = new CourseItemComponent();
    comp.course = mockedCoursesList[0];
    const expectID = mockedCoursesList[0].id;
    comp.deleteHandler = jasmine.createSpy().and.callFake(() => {
      comp.deleteCourse.emit(comp.course.id);
    });
    comp.deleteCourse
      .pipe(first())
      .subscribe((id: string) => expect(id).toBe(expectID));
    comp.deleteHandler();
  });

  it('should display course title', () => {
    let courseItemDe: DebugElement = fixture.debugElement;
    let courseItemEl: HTMLElement = courseItemDe.query(
      By.css('div.card')
    ).nativeElement;
    const actualTitle = courseItemEl?.querySelector('.card-title')?.textContent;
    expect(actualTitle).toEqual('JavaScript'.toUpperCase());
  });

  it('should call console.log() after click Edit button', () => {
    console.log = jasmine.createSpy('log');
    const editBtn = fixture.debugElement.query(By.css('.btn-info'));
    editBtn.triggerEventHandler('click');
    expect(console.log).toHaveBeenCalled();
  });
});

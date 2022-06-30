import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { CoursesComponent } from './courses.component';
import { OrderByPipe } from '../../Pipes/orderBy/order-by.pipe';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('CoursesComponent', () => {
  let component: CoursesComponent;
  let fixture: ComponentFixture<CoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CoursesComponent, OrderByPipe],
      imports: [FontAwesomeModule],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(CoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have "Add course" button', () => {
    const button = fixture.nativeElement.querySelector('button');
    expect(button.textContent).toContain('Add course');
  });

  it('should call console.log() after click "Load more" button', () => {
    console.log = jasmine.createSpy('log');
    const loadMoreBtn = fixture.debugElement.query(By.css('#loadMoreBtn'));
    loadMoreBtn.triggerEventHandler('click');
    expect(console.log).toHaveBeenCalled();
  });

  it('should call console.log() after call deleteCourse()', () => {
    console.log = jasmine.createSpy('log');
    component.deleteCourse('testID');
    expect(console.log).toHaveBeenCalledWith('testID');
  });
});

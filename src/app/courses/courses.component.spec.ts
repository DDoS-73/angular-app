import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesComponent } from './courses.component';
import { By } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

describe('CoursesComponent', () => {
  let component: CoursesComponent;
  let fixture: ComponentFixture<CoursesComponent>;
  let button: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CoursesComponent],
      imports: [FontAwesomeModule],
    }).compileComponents();

    fixture = TestBed.createComponent(CoursesComponent);
    component = fixture.componentInstance;
    button = fixture.nativeElement.querySelector('button');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have "Add course" button', () => {
    expect(button.textContent).toContain('Add course');
  });

  it('should call console.log() after click "Load more" button', () => {
    console.log = jasmine.createSpy('log');
    const loadMoreBtn = fixture.debugElement.query(
      By.css('#loadMoreBtn')
    );
    loadMoreBtn.triggerEventHandler('click');
    expect(console.log).toHaveBeenCalled();
  });

  it('should call console.log() after call deleteCourse()', () => {
    console.log = jasmine.createSpy('log');
    component.deleteCourse('testID');
    expect(console.log).toHaveBeenCalledWith('testID');
  });
});

import { Component, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { ChangeBorderDirective } from './change-border.directive';

@Component({
  template: ` <p [appChangeBorder]="freshCourse">Fresh course</p>
    <p [appChangeBorder]="upcomingCourse">Upcoming course</p>
    <p [appChangeBorder]="overdueCourse">Overdue course</p>`,
})
class TestComponent {
  weekInMilliseconds = 7 * 24 * 60 * 60 * 1000;
  freshCourse = new Date(Date.now() - this.weekInMilliseconds);
  upcomingCourse = new Date(Date.now() + this.weekInMilliseconds);
  overdueCourse = new Date(2020, 0, 1);
}

describe('ChangeBorderDirective', () => {
  let fixture: ComponentFixture<TestComponent>;
  let des: DebugElement[];

  beforeEach(() => {
    fixture = TestBed.configureTestingModule({
      declarations: [ChangeBorderDirective, TestComponent],
    }).createComponent(TestComponent);
    fixture.detectChanges();

    des = fixture.debugElement.queryAll(By.directive(ChangeBorderDirective));
  });

  it('should have three elements', () => {
    expect(des.length).toBe(3);
  });

  it('should color 1st <p> border-color "green"', () => {
    const classes = des[0].nativeElement.classList;
    expect(classes).toContain('border-success');
  });

  it('should color 2nd <p> border-color "blue"', () => {
    const classes = des[1].nativeElement.classList;
    expect(classes).toContain('border-info');
  });

  it('should not color 3rd <p> border-color', () => {
    const classes = des[2].nativeElement.classList;
    expect(classes).not.toContain('border-info' || 'border-success');
  });
});

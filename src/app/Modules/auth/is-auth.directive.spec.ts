import { IsAuthDirective } from './is-auth.directive';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AuthService } from './auth.service';
import { Component } from '@angular/core';
import { AuthModule } from './auth.module';

@Component({
  template: `<p *ifAuthenticated>Not show</p>`,
})
class TestComponent {
  constructor(private auth: AuthService) {}
}

describe('IsAuthDirective', () => {
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(async () => {
    fixture = TestBed.configureTestingModule({
      declarations: [IsAuthDirective, TestComponent],
      imports: [AuthModule],
      providers: [AuthService],
    }).createComponent(TestComponent);
    fixture.detectChanges();
  });
  it('should not display element ', () => {
    expect(fixture.nativeElement.innerText).not.toContain('Not show');
  });
});

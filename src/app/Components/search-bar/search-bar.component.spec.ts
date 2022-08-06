import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { SearchBarComponent } from './search-bar.component';

describe('SearchBarComponent', () => {
  let component: SearchBarComponent;
  let fixture: ComponentFixture<SearchBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchBarComponent],
      imports: [FontAwesomeModule, FormsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(SearchBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call console.log() after call onSearchClick()', () => {
    console.log = jasmine.createSpy('log');
    const inputEl = fixture.debugElement.query(By.css('input'));
    inputEl.nativeElement.value = 'Test text';
    inputEl.triggerEventHandler('input', { target: inputEl.nativeElement });
    fixture.detectChanges();
    component.onSearchClick();
    expect(console.log).toHaveBeenCalledWith('Test text');
  });
});

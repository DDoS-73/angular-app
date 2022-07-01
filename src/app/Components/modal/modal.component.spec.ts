import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalComponent } from './modal.component';
import { By } from '@angular/platform-browser';
import { MdbModalModule, MdbModalRef } from 'mdb-angular-ui-kit/modal';

describe('ModalComponent', () => {
  let component: ModalComponent;
  let fixture: ComponentFixture<ModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModalComponent],
      imports: [MdbModalModule],
      providers: [{ provide: MdbModalRef, useValue: {} }],
    }).compileComponents();

    fixture = TestBed.createComponent(ModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should call close() method', () => {
    component.close = jasmine.createSpy('close');
    const btn = fixture.debugElement.query(By.css('#deleteBtn'));
    btn.triggerEventHandler('click');
    expect(component.close).toHaveBeenCalled();
  });
});

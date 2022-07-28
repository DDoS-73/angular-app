import { Component, OnDestroy, OnInit } from '@angular/core';
import { faCircleCheck, faXmark } from '@fortawesome/free-solid-svg-icons';
import { Subject, takeUntil } from 'rxjs';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss'],
})
export class MessageComponent implements OnInit, OnDestroy {
  constructor(private messageService: MessageService) {}

  faXmark = faXmark;
  faCircleCheck = faCircleCheck;

  messages: string[] | null = null;
  alertClasses = {
    alert: true,
    show: false,
    hide: true,
    showAlert: false,
    success: false,
  };
  destroy$: Subject<boolean> = new Subject<boolean>();
  timeout!: number;

  openAlert(msg: string[]) {
    this.alertClasses = {
      ...this.alertClasses,
      hide: false,
      show: true,
      showAlert: true,
    };
    this.messages = msg;
    clearTimeout(this.timeout);
    this.timeout = setTimeout(this.closeAlert.bind(this), 5000);
  }

  closeAlert() {
    this.alertClasses = {
      ...this.alertClasses,
      hide: true,
      show: false,
    };
  }

  ngOnInit(): void {
    this.messageService
      .getError()
      .pipe(takeUntil(this.destroy$))
      .subscribe((msg) => {
        this.alertClasses = { ...this.alertClasses, success: false };
        this.openAlert(msg);
      });
    this.messageService
      .getSuccess()
      .pipe(takeUntil(this.destroy$))
      .subscribe((msg) => {
        this.alertClasses = { ...this.alertClasses, success: true };
        this.openAlert([msg]);
      });
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}

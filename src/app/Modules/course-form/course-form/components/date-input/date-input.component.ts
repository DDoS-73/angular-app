import { Component, EventEmitter, Input, Output } from '@angular/core';
@Component({
  selector: 'app-date-input',
  templateUrl: './date-input.component.html',
  styleUrls: ['./date-input.component.scss'],
})
export class DateInputComponent {
  @Input() date!: Date;
  @Output() dateChange = new EventEmitter<Date>();
  constructor() {}

  handlerInput(e: Event) {
    const target = e.target as HTMLInputElement;
    this.dateChange.emit(new Date(target.value));
  }
}

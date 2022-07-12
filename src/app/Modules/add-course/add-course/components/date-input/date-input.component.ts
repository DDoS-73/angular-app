import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
@Component({
  selector: 'app-date-input',
  templateUrl: './date-input.component.html',
  styleUrls: ['./date-input.component.scss'],
})
export class DateInputComponent implements OnInit {
  @Input() date!: Date;
  @Output() dateChange = new EventEmitter<Date>();
  constructor() {}

  ngOnInit(): void {}

  handlerInput(e: Event) {
    const target = e.target as HTMLInputElement;
    this.dateChange.emit(new Date(target.value));
  }
}

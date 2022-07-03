import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-input',
  templateUrl: './date-input.component.html',
  styleUrls: ['./date-input.component.scss'],
})
export class DateInputComponent implements OnInit {
  date = '';
  constructor() {}

  ngOnInit(): void {}

  handlerInput(e: Event) {
    const target = e.target as HTMLInputElement;
    this.date = target.value;
  }
}

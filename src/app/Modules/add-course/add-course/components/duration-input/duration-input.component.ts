import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-duration-input',
  templateUrl: './duration-input.component.html',
  styleUrls: ['./duration-input.component.scss'],
})
export class DurationInputComponent implements OnInit {
  duration: number = 0;
  constructor() {}

  ngOnInit(): void {}

  handlerInput(e: Event) {
    const target = e.target as HTMLInputElement;
    this.duration = +target.value;
  }
}

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-duration-input',
  templateUrl: './duration-input.component.html',
  styleUrls: ['./duration-input.component.scss'],
})
export class DurationInputComponent implements OnInit {
  @Input() duration = 0;
  @Output() durationChange = new EventEmitter<number>();
  constructor() {}

  ngOnInit(): void {}

  handlerInput(e: Event) {
    const target = e.target as HTMLInputElement;
    this.duration = +target.value;
    this.durationChange.emit(this.duration);
  }
}

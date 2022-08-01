import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent {
  @Input() title = '';
  @Output() titleChange = new EventEmitter<string>();
  constructor() {}

  handlerInput(e: Event) {
    const target = e.target as HTMLInputElement;
    this.title = target.value;
    this.titleChange.emit(this.title);
  }
}

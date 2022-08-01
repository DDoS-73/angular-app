import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-text-area',
  templateUrl: './text-area.component.html',
  styleUrls: ['./text-area.component.scss'],
})
export class TextAreaComponent {
  @Input() description = '';
  @Output() descriptionChange = new EventEmitter<string>();
  constructor() {}

  handlerInput(e: Event) {
    const target = e.target as HTMLInputElement;
    this.description = target.value;
    this.descriptionChange.emit(this.description);
  }
}

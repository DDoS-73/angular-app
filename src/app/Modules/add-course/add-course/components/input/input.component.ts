import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent implements OnInit {
  title = '';
  constructor() {}

  ngOnInit(): void {}

  handlerInput(e: Event) {
    const target = e.target as HTMLInputElement;
    this.title = target.value;
  }
}

import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appChangeBorder]',
})
export class ChangeBorderDirective implements OnInit {
  constructor(private el: ElementRef) {}

  @Input('appChangeBorder') creationDate!: Date;

  now = Date.now();

  ngOnInit() {
    if (
      this.creationDate.getTime() < this.now &&
      this.creationDate.getTime() >= this.now - 14 * 24 * 60 * 60 * 60 * 1000
    ) {
      this.el.nativeElement.classList.value += ' border border-success';
    } else if (this.creationDate.getTime() > this.now) {
      this.el.nativeElement.classList.value += ' border border-info';
    }
  }
}

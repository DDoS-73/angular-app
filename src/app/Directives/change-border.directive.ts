import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appChangeBorder]',
})
export class ChangeBorderDirective implements OnInit {
  constructor(private el: ElementRef) {}

  @Input('appChangeBorder') creationDate?: string;

  ngOnInit() {
    if (!this.creationDate) {
      return;
    }
    const now = Date.now();
    const date = new Date(this.creationDate);
    if (
      date.getTime() < now &&
      date.getTime() >= now - 14 * 24 * 60 * 60 * 1000
    ) {
      this.el.nativeElement.classList.value += ' border border-success';
    } else if (date.getTime() > now) {
      this.el.nativeElement.classList.value += ' border border-info';
    }
  }
}

import {
  Directive,
  DoCheck,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';
import { AuthService } from './auth.service';

@Directive({
  selector: '[ifAuthenticated]',
})
export class IsAuthDirective implements DoCheck {
  private hasView = false;
  private isAuth = false;

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private auth: AuthService
  ) {}

  ngDoCheck(): void {
    this.isAuth = this.auth.isAuth();
    if (this.isAuth && !this.hasView) {
      this.viewContainer.createEmbeddedView(this.templateRef);
      this.hasView = true;
    } else if (!this.isAuth && this.hasView) {
      this.viewContainer.clear();
      this.hasView = false;
    }
  }
}

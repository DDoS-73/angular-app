import {
  Directive,
  OnInit,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';
import { AuthService } from './auth.service';

@Directive({
  selector: '[ifAuthenticated]',
})
export class IsAuthDirective implements OnInit {
  private hasView = false;
  private isAuth = this.auth.isAuth();

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private auth: AuthService
  ) {}

  ngOnInit() {
    if (this.isAuth && !this.hasView) {
      this.viewContainer.createEmbeddedView(this.templateRef);
      this.hasView = true;
    } else if (!this.isAuth && this.hasView) {
      this.viewContainer.clear();
      this.hasView = false;
    }
  }
}

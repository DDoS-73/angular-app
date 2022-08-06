import {
  Directive,
  OnDestroy,
  OnInit,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';
import { Subscription } from 'rxjs';

import { AuthService } from './auth.service';

@Directive({
  selector: '[ifAuthenticated]',
})
export class IsAuthDirective implements OnInit, OnDestroy {
  private hasView = false;
  private isAuth$ = this.auth.isAuth();
  private subscription?: Subscription;

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private auth: AuthService
  ) {}

  ngOnInit(): void {
    this.subscription = this.isAuth$.subscribe((auth) => {
      if (auth && !this.hasView) {
        this.viewContainer.createEmbeddedView(this.templateRef);
        this.hasView = true;
      } else if (!auth && this.hasView) {
        this.viewContainer.clear();
        this.hasView = false;
      }
    });
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}

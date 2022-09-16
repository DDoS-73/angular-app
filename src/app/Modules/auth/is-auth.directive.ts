import {
  Directive,
  OnDestroy,
  OnInit,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';

import { selectAuthStatus } from '../../Store/user/user.selectors';

@Directive({
  selector: '[ifAuthenticated]',
})
export class IsAuthDirective implements OnInit, OnDestroy {
  private hasView = false;
  private isAuth$ = this.store.select(selectAuthStatus);
  private subscription?: Subscription;

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private store: Store
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

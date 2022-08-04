import {
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const authToken = localStorage.getItem('token');
    if (authToken) {
      const authReq = req.clone({
        headers: req.headers.set('Authorization', authToken),
      });
      return next.handle(authReq);
    }
    return next.handle(req);
  }
}

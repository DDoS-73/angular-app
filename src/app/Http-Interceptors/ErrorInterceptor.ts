import {
  HttpErrorResponse,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, EMPTY } from 'rxjs';

import { MessageService } from '../Modules/message/message.service';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private messageService: MessageService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    return next.handle(req).pipe(catchError(this.handleError.bind(this)));
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('An error occurred:', error.error);
      this.messageService.openError(['Status code 0']);
    } else {
      console.error(
        `Backend returned code ${error.status}, body was: `,
        error.error
      );
      this.messageService.openError(error.error.errors);
    }
    return EMPTY;
  }
}

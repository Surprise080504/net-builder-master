import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(
    private authService: AuthService
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const duplicate = request.clone({
      headers: request.headers.set('Authorization', this.authService.accessToken ? 'bearer ' + this.authService.accessToken : 'bearer')
    });
    return next.handle(duplicate).pipe(
      catchError((err) => {
        if (err.status === 401) {
          this.authService.logout();
        }
        return throwError(err);
      })
    );
  }
}

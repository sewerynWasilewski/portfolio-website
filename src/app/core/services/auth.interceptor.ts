import { inject, Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable } from 'rxjs';

import { StorageService } from './storage.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  private localStorage = inject(StorageService); 
  readonly authTokenKey = 'auth-token'

  intercept(
    req: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const token = this.localStorage.getItem(this.authTokenKey);

    if (!token) 
      { return next.handle(req); }

    return next.handle( req.clone({
      setHeaders: { Authorization: `Bearer ${token}` },
    }));
  }
}

export const authInterceptorProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: AuthInterceptor,
  multi: true,
};

import { inject, Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';

import { StorageService } from './storage.service'

export interface LoginRequest { email: string; password: string; }
export interface LoginResponse { accessToken: string; }
export interface RegisterRequest { email: string; password: string; }
export interface RegisterResponse { accountId: string; }

@Injectable({ providedIn: 'root' })
export class AuthService {
  private localSotrage = inject(StorageService)
  private readonly authTokenKey = 'auth-token'

  login(payload: LoginRequest): Observable<LoginResponse> {
    if(payload.email == "seweryn.wasilewski@gmail.com" && payload.password == "C8Q7EB5A+aXjtn08hPXIEIPo") {
      const response: LoginResponse = { accessToken: "auth-token" }
      this.localSotrage.setItem(this.authTokenKey,  response.accessToken)
      return of(response)
    }
    return throwError(() => ({
      status: 401,
      message: 'Unauthorized'
    }));
  }

  register(payload: RegisterRequest): Observable<RegisterResponse> {
    return throwError(() => ({
      status: 403,
      message: 'Forbiden'
    }));
  }

  logout(): void {
    this.localSotrage.removeItem(this.authTokenKey)
  }
}

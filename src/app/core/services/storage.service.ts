import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class StorageService {

  getItem(key: string): string | null {
    return localStorage.getItem(key);
  }

  setItem(key: string, token: string): void {
    localStorage.setItem(key, token);
  }

  removeItem(key: string): void {
    localStorage.removeItem(key);
  }
}

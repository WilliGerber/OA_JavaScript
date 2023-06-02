import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {
  constructor() {}

  isDesktop(): boolean {
    return window.innerWidth >= 1024;
  }

  isTablet(): boolean {
    return window.innerWidth >= 768 && window.innerWidth < 1024;
  }

  isMobile(): boolean {
    return window.innerWidth < 768;
  }
}
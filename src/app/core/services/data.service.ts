import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private sidebarData: any[] = [];

  setSidebarData(data: any[]): void {
    this.sidebarData = data;
  }

  getSidebarData(): any[] {
    return this.sidebarData;
  }
}
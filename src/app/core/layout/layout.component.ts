import { Component } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {
  expandMenu: boolean = true;

  toggleExpandMenu() {
    this.expandMenu = !this.expandMenu;
  }
}
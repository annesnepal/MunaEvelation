import { Component } from '@angular/core';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  isClearVisible: boolean = true;
  isMenuVisible: boolean = false;

  toggleButtons() {
    this.isClearVisible = !this.isClearVisible;
    this.isMenuVisible = !this.isMenuVisible;
  }
}

import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  isSideMenuOpen = false;
  @Input() darkNavbar: boolean;
  navbarList = [
    {id: 0, title: 'Home', url: '#home'},
    {id: 1, title: 'About', url: '#about'},
    {id: 2, title: 'Documentation', url: '#documentation'},
    {id: 3, title: 'Pricing', url: '#pricing'},
    {id: 4, title: 'Contact', url: '#contact'},
  ]

  toggleSideMenu() {
    this.isSideMenuOpen = !this.isSideMenuOpen;
  }
}

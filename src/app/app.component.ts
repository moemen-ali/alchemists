import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { LayoutModule } from './layout-components/components/layout-components.module';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, LayoutModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'alchemists';
  isNavbarFixed = false;

  constructor() {}

  @HostListener('window:scroll', [])
  onWindowScroll() {
    // Triggered when the user scrolls
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    // Add or remove the 'fixed' class based on the scroll position
    this.isNavbarFixed = scrollPosition > 50; // Adjust the threshold as needed
  }
}

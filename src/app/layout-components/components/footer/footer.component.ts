import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  socialMediaLink = [
    {id: 0, class: 'alch-facebook'},
    {id: 1, class: 'alch-instagram'},
    {id: 2, class: 'alch-twitter'},
    {id: 3, class: 'alch-linkedin'},
  ]
}

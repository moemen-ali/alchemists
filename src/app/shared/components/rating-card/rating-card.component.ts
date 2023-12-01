import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-rating-card',
  templateUrl: './rating-card.component.html',
  styleUrl: './rating-card.component.scss'
})
export class RatingCardComponent {
  @Input() ratingData: any;

  constructor() {}

  ngOnInit() {
  }
}

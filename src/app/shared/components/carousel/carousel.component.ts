import { animate, style, transition, trigger } from '@angular/animations';
import { Component, Input } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';


@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss',
  animations: [
    trigger('stagger',[
      transition(':enter', [
        style({ opacity: 0 }),
        animate('100ms', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        animate('100ms', style({ opacity: 0 }))
      ])
    ])
  ],

})
export class CarouselComponent {

  @Input() type : 'images' | 'cards' = 'cards';
  @Input() sliderData: any;
  cards = [
    { image: 'url1.jpg' },
    { image: 'url2.jpg' },
    { image: 'url3.jpg' },
    // Add more cards as needed
  ];

  currentIndex = 0;

  customOptions: OwlOptions = {
    loop: false,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: true,
    autoWidth: false,
    dots: false,
    navSpeed: 700,
    margin: 50,
    navText: [ '<i class="alch-arrow-left"></i>', '<i class="alch-arrow-right"></i>' ],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 3
      }
    },
    nav: true
  }

  ngOnInit(): void {
    this.showCurrent();
  }

  next() {
    if (this.currentIndex < this.cards.length - 1) {
      this.currentIndex++;
      this.showCurrent();
    }
  }

  prev() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.showCurrent();
    }
  }

  showCurrent() {
    this.cards.forEach((card, index) => {
      index === this.currentIndex;
    });
  }




}

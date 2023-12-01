import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RatingCardComponent } from './components/rating-card/rating-card.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [RatingCardComponent, ContactFormComponent, CarouselComponent],
  imports: [
    CommonModule,
    CarouselModule,
    FormsModule
  ],
  exports: [RatingCardComponent, ContactFormComponent, CarouselComponent]
})
export class SharedModule { }

import { Component, ViewEncapsulation } from '@angular/core';
import { CarouselService } from 'src/app/services/carousel.service';
import { Carousel } from './carousel/Carousel';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent {
  carousels!: Carousel[];
  responsiveOptions;
  constructor( private carouselservice: CarouselService) {
    this.responsiveOptions = [
      {
          breakpoint: '1024px',
          numVisible: 3,
          numScroll: 3
      },
      {
          breakpoint: '768px',
          numVisible: 2,
          numScroll: 2
      },
      {
          breakpoint: '560px',
          numVisible: 1,
          numScroll: 1
      }
  ];
  }

  ngOnInit() {
		this.carouselservice.getProductsSmall().then(carousels => {
			this.carousels = carousels;
		});
    }

}

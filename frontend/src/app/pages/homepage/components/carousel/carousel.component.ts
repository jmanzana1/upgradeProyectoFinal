import { Component, ViewEncapsulation } from '@angular/core';
import { MessageService } from 'primeng/api';
import { HomeService } from 'src/app/services/home.services';
import { Carousel } from './carousel/Carousel';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent {
  public carousels:  any = [];
  responsiveOptions;
  constructor( private homeservice: HomeService) {
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
    this.getCarousels();
		// this.homeservice.getPelisCarousel().then(carousels => {
		// 	console.log('carousels', carousels)
    //   this.carousels = carousels;
		// });

    }
  
    public getCarousels() { 

      this.homeservice.getPelisCarousel()
      .subscribe({
        next: ( carousels ) => { 
  
          this.carousels = carousels;
          console.log( "pli", this.carousels)
        }
       });
        
  
    }

}

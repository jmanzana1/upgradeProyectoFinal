// import { CardPeliculaComponent } from 'src/app/shared/card-pelicula/card-pelicula.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomepageRoutingModule } from './homepage-routing.module';
import { HomepageComponent } from './components/homepage/homepage.component';
import { CarouselComponent } from './components/carousel/carousel.component';

import {CarouselModule} from 'primeng/carousel';
import {ButtonModule} from 'primeng/button';
import {ToastModule} from 'primeng/toast';
import { ProximasComponent } from './components/proximas/proximas.component';
import { SharedModule } from 'src/app/shared/shared.module';
// import { CardPeliComponent } from 'src/app/shared/components/card-peli/card-peli.component';




@NgModule({
  declarations: [
    HomepageComponent,
    CarouselComponent,
    ProximasComponent,
    // CardPeliComponent
  ],
  imports: [
    CommonModule,
    HomepageRoutingModule,
    CarouselModule,
    ButtonModule,
    ToastModule,
    SharedModule
  ]
})
export class HomepageModule { }

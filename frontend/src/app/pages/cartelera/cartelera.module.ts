import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarteleraRoutingModule } from './cartelera-routing.module';
import { CarteleraComponent } from './components/cartelera/cartelera.component';
import { SharedModule } from 'src/app/shared/shared.module';

// PrimeNG
import { ImageModule } from 'primeng/image';
import { CardModule } from 'primeng/card';
import { FichaPeliculaComponent } from './components/ficha-pelicula/ficha-pelicula.component';



@NgModule({
  declarations: [
    CarteleraComponent,
    FichaPeliculaComponent,
  ],
  imports: [
    CommonModule,
    CarteleraRoutingModule,
    ImageModule,
    CardModule,
    SharedModule
  ],
  // exports: [ CardPeliculaComponent ]
})
export class CarteleraModule { }

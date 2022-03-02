import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarteleraRoutingModule } from './cartelera-routing.module';
import { CarteleraComponent } from './components/cartelera/cartelera.component';
import { FichaClienteComponent } from './components/ficha-cliente/ficha-cliente.component';
import { CardPeliculaComponent } from 'src/app/shared/card-pelicula/card-pelicula.component';

// PrimeNG
import { ImageModule } from 'primeng/image';
import { CardModule } from 'primeng/card';



@NgModule({
  declarations: [
    CarteleraComponent,
    FichaClienteComponent,
    CardPeliculaComponent,
  ],
  imports: [
    CommonModule,
    CarteleraRoutingModule,
    ImageModule,
    CardModule,
  ]
})
export class CarteleraModule { }

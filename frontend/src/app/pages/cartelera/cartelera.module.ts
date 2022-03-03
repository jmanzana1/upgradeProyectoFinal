import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarteleraRoutingModule } from './cartelera-routing.module';
import { CarteleraComponent } from './components/cartelera/cartelera.component';
import { FichaClienteComponent } from './components/ficha-cliente/ficha-cliente.component';
import { SharedModule } from 'src/app/shared/shared.module';
// import { CardPeliculaComponent } from 'src/app/shared2/card-pelicula/card-pelicula.component';

// PrimeNG
import { ImageModule } from 'primeng/image';
import { CardModule } from 'primeng/card';



@NgModule({
  declarations: [
    CarteleraComponent,
    FichaClienteComponent,
    // CardPeliculaComponent,
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

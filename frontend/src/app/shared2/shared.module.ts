import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardPeliculaComponent } from './components/card-pelicula/card-pelicula.component';



@NgModule({
  declarations: [
    CardPeliculaComponent
  ],
  imports: [
    CommonModule,
    CardPeliculaComponent
  ],
  exports: [
    CardPeliculaComponent
  ]
})
export class SharedModule { }

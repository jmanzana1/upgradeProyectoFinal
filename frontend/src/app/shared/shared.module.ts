import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardPeliComponent } from './components/card-peli/card-peli.component';



@NgModule({
  declarations: [
    CardPeliComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CardPeliComponent
  ]
})
export class SharedModule { }

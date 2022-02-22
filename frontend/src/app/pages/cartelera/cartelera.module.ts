import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarteleraRoutingModule } from './cartelera-routing.module';
import { CarteleraComponent } from './components/cartelera/cartelera.component';
import { FichaClienteComponent } from './components/ficha-cliente/ficha-cliente.component';


@NgModule({
  declarations: [
    CarteleraComponent,
    FichaClienteComponent
  ],
  imports: [
    CommonModule,
    CarteleraRoutingModule
  ]
})
export class CarteleraModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { PeliculasComponent } from './components/peliculas/peliculas.component';
import { SalasComponent } from './components/salas/salas.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
	declarations: [
    PeliculasComponent,
    SalasComponent
  ],
	imports: [
		CommonModule,
		AdminRoutingModule,
		ReactiveFormsModule,
		FormsModule
	]
})
export class AdminModule { }

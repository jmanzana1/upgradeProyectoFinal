import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { PeliculasComponent } from './peliculas/peliculas.component';


@NgModule({
	declarations: [],
	imports: [
		CommonModule,
		AdminRoutingModule,
		PeliculasComponent,
	]
})
export class AdminModule { }

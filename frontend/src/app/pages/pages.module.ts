import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { HomepageComponent } from './homepage/homepage.component';
import { CarteleraComponent } from './cartelera/cartelera.component';
import { FichaPeliculasComponent } from './cartelera/components/ficha-peliculas/ficha-peliculas.component';


@NgModule({
	declarations: [
		HomepageComponent,
		CarteleraComponent,
		FichaPeliculasComponent,
	],
	imports: [
		CommonModule,
		PagesRoutingModule,
	]
})
export class PagesModule { }

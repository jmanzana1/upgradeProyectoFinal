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
import { NavComponent } from './components/nav/nav.component';
import { TodasComponent } from './components/todas/todas.component';
import { EstrenosComponent } from './components/estrenos/estrenos.component';

@NgModule({
	declarations: [
		HomepageComponent,
		CarouselComponent,
		ProximasComponent,
		NavComponent,
		TodasComponent,
		EstrenosComponent,
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

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { PeliculasComponent } from './components/peliculas/peliculas.component';
import { SalasComponent } from './components/salas/salas.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PeliculasListComponent } from './components/peliculas-list/peliculas-list.component';
import {TableModule} from 'primeng/table';


@NgModule({
	declarations: [
    PeliculasComponent,
    SalasComponent,
    PeliculasListComponent,

  ],
	imports: [
		CommonModule,
		AdminRoutingModule,
		ReactiveFormsModule,
		FormsModule,
		TableModule
	]
})
export class AdminModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { PeliculasComponent } from './components/peliculas/peliculas.component';
import { SalasComponent } from './components/salas/salas.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PeliculasListComponent } from './components/peliculas-list/peliculas-list.component';
import {TableModule} from 'primeng/table';
import { SigninComponent } from './components/signin/signin.component';
import { ToastModule } from 'primeng/toast';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { MessagesModule } from 'primeng/messages';
import { ButtonModule } from 'primeng/button';
import { SalasListComponent } from './components/salas-list/salas-list.component';
import { MenubarModule } from 'primeng/menubar';
import { MenubarComponent } from './components/menubar/menubar.component';


@NgModule({
	declarations: [
    PeliculasComponent,
    SalasComponent,
    PeliculasListComponent,
    SigninComponent,
    SalasListComponent,
    MenubarComponent,

  ],
	imports: [
		CommonModule,
		AdminRoutingModule,
		ReactiveFormsModule,
		FormsModule,
		TableModule,
		ToastModule,
		ConfirmDialogModule,
		MessagesModule,
		ButtonModule,
		MenubarModule
	]
})
export class AdminModule { }

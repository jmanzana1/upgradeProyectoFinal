import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './core/components/navbar/navbar.component';
import { FooterComponent } from './core/components/footer/footer.component';


// PrimeNg Componentes
import {MenubarModule} from 'primeng/menubar';
import { CardPeliculaComponent } from './shared/card-pelicula/card-pelicula.component';


@NgModule({
	declarations: [
		AppComponent,
  		NavbarComponent,
		FooterComponent,
  CardPeliculaComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		FormsModule,
		ReactiveFormsModule,
		HttpClientModule,
		MenubarModule,
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule ,HTTP_INTERCEPTORS} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './core/components/navbar/navbar.component';
import { FooterComponent } from './core/components/footer/footer.component';
import { AuthInterceptor } from './services/interceptors/auth-interceptor.service';



// PrimeNg Componentes
import {MenubarModule} from 'primeng/menubar';


@NgModule({
	declarations: [
		AppComponent,
  		NavbarComponent,
		FooterComponent,
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
	providers: [{
		provide:HTTP_INTERCEPTORS,
      useClass:AuthInterceptor,
      multi:true
	}],
	bootstrap: [AppComponent]
})
export class AppModule { }

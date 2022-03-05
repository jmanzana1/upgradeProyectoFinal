import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarteleraComponent } from './components/cartelera/cartelera.component';
import { FichaPeliculaComponent } from './components/ficha-pelicula/ficha-pelicula.component';

const routes: Routes = [
	{
		path: '', component: CarteleraComponent
	},
	{
		path: 'fichapelicula/:id', component: FichaPeliculaComponent
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarteleraRoutingModule { }

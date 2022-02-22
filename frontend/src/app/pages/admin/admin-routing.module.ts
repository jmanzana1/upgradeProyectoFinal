import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PeliculasComponent } from './components/peliculas/peliculas.component';
import { SalasComponent } from './components/salas/salas.component';

const routes: Routes = [
	{
		path: 'peliculas', component: PeliculasComponent
	},
	{
		path: 'salas', component: SalasComponent
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

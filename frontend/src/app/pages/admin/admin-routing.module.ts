import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PeliculasComponent } from './components/peliculas/peliculas.component';
import { PeliculasListComponent } from './components/peliculas-list/peliculas-list.component';
import { SalasComponent } from './components/salas/salas.component';
import { SigninComponent } from './components/signin/signin.component';
import { AuthGuard } from 'src/app/services/guards/auth.guard';

const routes: Routes = [
	{
		path: 'peliculas', component: PeliculasListComponent,canActivate: [AuthGuard]
	},
	{
		path: 'peliculas_alta', component: PeliculasComponent,canActivate: [AuthGuard]
	},
	{
		path: 'salas', component: SalasComponent,canActivate: [AuthGuard]
	},
	{
		path: 'signIn', component: SigninComponent
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

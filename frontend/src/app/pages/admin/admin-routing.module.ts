import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PeliculasComponent } from './components/peliculas/peliculas.component';
import { PeliculasListComponent } from './components/peliculas-list/peliculas-list.component';
import { SalasComponent } from './components/salas/salas.component';
import { SigninComponent } from './components/signin/signin.component';
import { AuthGuard } from 'src/app/services/guards/auth.guard';
import { SalasListComponent } from './components/salas-list/salas-list.component';

const routes: Routes = [
	
	{
		path: '', component: PeliculasListComponent,canActivate: [AuthGuard]
	},
	{
		path: 'peliculas_alta', component: PeliculasComponent,canActivate: [AuthGuard]
	},
	{
		path: 'peliculas_edit/:id', component: PeliculasComponent,canActivate: [AuthGuard]
	},
	{
		path: 'salas', component: SalasListComponent,canActivate: [AuthGuard]
	},
	{
		path: 'salas_alta', component: SalasComponent,canActivate: [AuthGuard]
	},
	{
		path: 'salas_edit/:id', component: SalasComponent,canActivate: [AuthGuard]
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

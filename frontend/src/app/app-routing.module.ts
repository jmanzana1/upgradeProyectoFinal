import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
	{
		path: '', loadChildren: () => import('./pages/homepage/homepage.module').then( m => m.HomepageModule)
	},
	{
		path: 'cartelera', loadChildren: () => import('./pages/cartelera/cartelera.module').then( m => m.CarteleraModule)
	},
	{
		path: 'admin', loadChildren: () => import('./pages/admin/admin.module').then( m=> m.AdminModule)
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

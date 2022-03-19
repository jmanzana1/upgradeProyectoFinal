import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StepsFormComponent } from './steps-form/steps-form.component';
import { AsientosComponent } from './components/asientos/asientos.component';
import { PersonalComponent } from './components/personal/personal.component';
import { PagoComponent } from './components/pago/pago.component';
import { ConfirmacionComponent } from './components/confirmacion/confirmacion.component';

const routes: Routes = [
	{
		path: '', component: StepsFormComponent, children:[
			{
				path: '', redirectTo: 'entradas', pathMatch: 'full'
			},
			{
				path: 'entradas', component: AsientosComponent
			},
			{
				path: 'datospersonales', component: PersonalComponent
			},
			{
				path: 'pago', component: PagoComponent
			},
			{
				path: 'confirmacion', component: ConfirmacionComponent
			}
		]
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class StepsComponentRoutingModule { }

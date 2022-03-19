import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StepsFormComponent } from './steps-form/steps-form.component';
import { AsientosComponent } from './components/asientos/asientos.component';

const routes: Routes = [
	{
		path: '', component: StepsFormComponent
	},{
		path:'entradas', component: AsientosComponent
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class StepsComponentRoutingModule { }

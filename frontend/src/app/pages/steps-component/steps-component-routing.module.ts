import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StepsFormComponent } from './steps-form/steps-form.component';

const routes: Routes = [
	{
		path: '', component: StepsFormComponent
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class StepsComponentRoutingModule { }

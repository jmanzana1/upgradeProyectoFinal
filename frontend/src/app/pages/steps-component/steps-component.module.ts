import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StepsComponentRoutingModule } from './steps-component-routing.module';
import { PersonalComponent } from './components/personal/personal.component';
import { AsientosComponent } from './components/asientos/asientos.component';
import { PagoComponent } from './components/pago/pago.component';
import { ConfirmacionComponent } from './components/confirmacion/confirmacion.component';
import { StepsFormComponent } from './steps-form/steps-form.component';

//PrimeNG 
import { StepsModule } from 'primeng/steps';
import { CardModule } from 'primeng/card';

import { TooltipModule } from 'ngx-bootstrap/tooltip';

@NgModule({
	declarations: [
    PersonalComponent,
    AsientosComponent,
    PagoComponent,
    ConfirmacionComponent,
    StepsFormComponent,
  ],
	imports: [
	CommonModule,
	StepsComponentRoutingModule,
	StepsModule,
	CardModule,
	TooltipModule.forRoot(),
	]
})
export class StepsComponentModule { }

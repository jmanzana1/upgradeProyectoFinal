import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-steps-form',
  templateUrl: './steps-form.component.html',
  styleUrls: ['./steps-form.component.scss'],
  providers: [MessageService ]
})
export class StepsFormComponent implements OnInit {

	public items: MenuItem[];

	//subscription: Subscription;

	constructor( 

		public _messageService: MessageService,
	) {
		this.items = [
			{
				label: 'Asientos',
				routerLink: 'entradas'
			},
			{
				label: 'Datos Personales',
				routerLink: 'datospersonales'
			},
			{
				label: 'Pago',
				routerLink: 'pago'
			},
			{
				label: 'Confirmación',
				routerLink: 'confirmacion'
			}
		];
	}
	
	ngOnInit(): void {

		
	}

}

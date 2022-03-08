import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-steps-form',
  templateUrl: './steps-form.component.html',
  styleUrls: ['./steps-form.component.scss']
})
export class StepsFormComponent implements OnInit {

	public items: MenuItem[];

	constructor() {
		this.items = [
			{label: 'Asientos'},
			{label: 'Datos Personales'},
			{label: 'Pago'},
			{label: 'Confirmación'}
		];
	}
	
	ngOnInit(): void {

	}

}

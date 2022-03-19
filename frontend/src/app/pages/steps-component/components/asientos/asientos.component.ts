import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-asientos',
  templateUrl: './asientos.component.html',
  styleUrls: ['./asientos.component.scss']
})
export class AsientosComponent implements OnInit {
	//	
	public butacas = [
		{ 'posicion': 1, ocupada: 'libre' },
		{ 'posicion': 2, ocupada: 'libre' },
		{ 'posicion': 3, ocupada: 'libre' },
		{ 'posicion': 4, ocupada: 'libre' },
		{ 'posicion': 5, ocupada: 'libre' },
		{ 'posicion': 6, ocupada: 'libre' },
		{ 'posicion': 7, ocupada: 'libre' },
		{ 'posicion': 8, ocupada: 'libre' },
		{ 'posicion': 9, ocupada: 'libre' },
		{ 'posicion': 10, ocupada: 'libre' },
		{ 'posicion': 11, ocupada: 'libre' },
		{ 'posicion': 12, ocupada: 'libre' },
		{ 'posicion': 13, ocupada: 'libre' },
		{ 'posicion': 14, ocupada: 'libre' },

	];
	
	public sala: any = [
		{
			"fila": 1,
			'butacas':  [
				{ 'posicion': 1, ocupada: 'libre' },
				{ 'posicion': 2, ocupada: 'libre' },
				{ 'posicion': 3, ocupada: 'libre' },
				{ 'posicion': 4, ocupada: 'libre' },
				{ 'posicion': 5, ocupada: 'libre' },
				{ 'posicion': 6, ocupada: 'libre' },
				{ 'posicion': 7, ocupada: 'libre' },
				{ 'posicion': 8, ocupada: 'libre' },
				{ 'posicion': 9, ocupada: 'libre' },
				{ 'posicion': 10, ocupada: 'libre' },
				{ 'posicion': 11, ocupada: 'libre' },
				{ 'posicion': 12, ocupada: 'libre' },
				{ 'posicion': 13, ocupada: 'libre' },
				{ 'posicion': 14, ocupada: 'libre' },
		
			],
			
		},
		{
			"fila": 2,
			'butacas':  [
				{ 'posicion': 1, ocupada: 'libre' },
				{ 'posicion': 2, ocupada: 'libre' },
				{ 'posicion': 3, ocupada: 'vendida' },
				{ 'posicion': 4, ocupada: 'vendida' },
				{ 'posicion': 5, ocupada: 'vendida' },
				{ 'posicion': 6, ocupada: 'libre' },
				{ 'posicion': 7, ocupada: 'libre' },
				{ 'posicion': 8, ocupada: 'libre' },
				{ 'posicion': 9, ocupada: 'libre' },
				{ 'posicion': 10, ocupada: 'libre' },
				{ 'posicion': 11, ocupada: 'libre' },
				{ 'posicion': 12, ocupada: 'libre' },
				{ 'posicion': 13, ocupada: 'libre' },
				{ 'posicion': 14, ocupada: 'libre' },
		
			]
		},
		{
			"fila": 3,
			'butacas':  [
				{ 'posicion': 1, ocupada: 'libre' },
				{ 'posicion': 2, ocupada: 'libre' },
				{ 'posicion': 3, ocupada: 'libre' },
				{ 'posicion': 4, ocupada: 'libre' },
				{ 'posicion': 5, ocupada: 'libre' },
				{ 'posicion': 6, ocupada: 'libre' },
				{ 'posicion': 7, ocupada: 'libre' },
				{ 'posicion': 8, ocupada: 'libre' },
				{ 'posicion': 9, ocupada: 'libre' },
				{ 'posicion': 10, ocupada: 'libre' },
				{ 'posicion': 11, ocupada: 'libre' },
				{ 'posicion': 12, ocupada: 'libre' },
				{ 'posicion': 13, ocupada: 'libre' },
				{ 'posicion': 14, ocupada: 'libre' },
		
			]
		},
		{
			"fila": 4,
			'butacas':  [
				{ 'posicion': 1, ocupada: 'libre' },
				{ 'posicion': 2, ocupada: 'libre' },
				{ 'posicion': 3, ocupada: 'libre' },
				{ 'posicion': 4, ocupada: 'libre' },
				{ 'posicion': 5, ocupada: 'libre' },
				{ 'posicion': 6, ocupada: 'libre' },
				{ 'posicion': 7, ocupada: 'libre' },
				{ 'posicion': 8, ocupada: 'libre' },
				{ 'posicion': 9, ocupada: 'libre' },
				{ 'posicion': 10, ocupada: 'libre' },
				{ 'posicion': 11, ocupada: 'libre' },
				{ 'posicion': 12, ocupada: 'libre' },
				{ 'posicion': 13, ocupada: 'libre' },
				{ 'posicion': 14, ocupada: 'libre' },
		
			]
		},
		{
			"fila": 5,
			'butacas':  [
				{ 'posicion': 1, ocupada: 'libre' },
				{ 'posicion': 2, ocupada: 'libre' },
				{ 'posicion': 3, ocupada: 'libre' },
				{ 'posicion': 4, ocupada: 'libre' },
				{ 'posicion': 5, ocupada: 'libre' },
				{ 'posicion': 6, ocupada: 'libre' },
				{ 'posicion': 7, ocupada: 'libre' },
				{ 'posicion': 8, ocupada: 'libre' },
				{ 'posicion': 9, ocupada: 'libre' },
				{ 'posicion': 10, ocupada: 'libre' },
				{ 'posicion': 11, ocupada: 'libre' },
				{ 'posicion': 12, ocupada: 'libre' },
				{ 'posicion': 13, ocupada: 'libre' },
				{ 'posicion': 14, ocupada: 'libre' },
		
			]
		},
		{
			"fila": 6,
			'butacas':  [
				{ 'posicion': 1, ocupada: 'libre' },
				{ 'posicion': 2, ocupada: 'libre' },
				{ 'posicion': 3, ocupada: 'libre' },
				{ 'posicion': 4, ocupada: 'libre' },
				{ 'posicion': 5, ocupada: 'libre' },
				{ 'posicion': 6, ocupada: 'libre' },
				{ 'posicion': 7, ocupada: 'libre' },
				{ 'posicion': 8, ocupada: 'libre' },
				{ 'posicion': 9, ocupada: 'libre' },
				{ 'posicion': 10, ocupada: 'libre' },
				{ 'posicion': 11, ocupada: 'libre' },
				{ 'posicion': 12, ocupada: 'libre' },
				{ 'posicion': 13, ocupada: 'libre' },
				{ 'posicion': 14, ocupada: 'libre' },
		
			]
		},
		{
			"fila": 7,
			'butacas':  [
				{ 'posicion': 1, ocupada: 'libre' },
				{ 'posicion': 2, ocupada: 'vendida' },
				{ 'posicion': 3, ocupada: 'vendida' },
				{ 'posicion': 4, ocupada: 'vendida' },
				{ 'posicion': 5, ocupada: 'vendida' },
				{ 'posicion': 6, ocupada: 'libre' },
				{ 'posicion': 7, ocupada: 'libre' },
				{ 'posicion': 8, ocupada: 'libre' },
				{ 'posicion': 9, ocupada: 'libre' },
				{ 'posicion': 10, ocupada: 'libre' },
				{ 'posicion': 11, ocupada: 'libre' },
				{ 'posicion': 12, ocupada: 'libre' },
				{ 'posicion': 13, ocupada: 'libre' },
				{ 'posicion': 14, ocupada: 'libre' },
		
			]
		},
		{
			"fila": 8,
			'butacas':  [
				{ 'posicion': 1, ocupada: 'libre' },
				{ 'posicion': 2, ocupada: 'libre' },
				{ 'posicion': 3, ocupada: 'libre' },
				{ 'posicion': 4, ocupada: 'libre' },
				{ 'posicion': 5, ocupada: 'libre' },
				{ 'posicion': 6, ocupada: 'libre' },
				{ 'posicion': 7, ocupada: 'libre' },
				{ 'posicion': 8, ocupada: 'libre' },
				{ 'posicion': 9, ocupada: 'libre' },
				{ 'posicion': 10, ocupada: 'libre' },
				{ 'posicion': 11, ocupada: 'libre' },
				{ 'posicion': 12, ocupada: 'libre' },
				{ 'posicion': 13, ocupada: 'libre' },
				{ 'posicion': 14, ocupada: 'libre' },
		
			]
		},
		{
			"fila": 9,
			'butacas':  [
				{ 'posicion': 1, ocupada: 'libre' },
				{ 'posicion': 2, ocupada: 'libre' },
				{ 'posicion': 3, ocupada: 'libre' },
				{ 'posicion': 4, ocupada: 'libre' },
				{ 'posicion': 5, ocupada: 'libre' },
				{ 'posicion': 6, ocupada: 'libre' },
				{ 'posicion': 7, ocupada: 'libre' },
				{ 'posicion': 8, ocupada: 'libre' },
				{ 'posicion': 9, ocupada: 'libre' },
				{ 'posicion': 10, ocupada: 'libre' },
				{ 'posicion': 11, ocupada: 'libre' },
				{ 'posicion': 12, ocupada: 'libre' },
				{ 'posicion': 13, ocupada: 'libre' },
				{ 'posicion': 14, ocupada: 'libre' },
		
			]
		},
		{
			"fila": 10,
			'butacas':  [
				{ 'posicion': 1, ocupada: 'libre' },
				{ 'posicion': 2, ocupada: 'libre' },
				{ 'posicion': 3, ocupada: 'libre' },
				{ 'posicion': 4, ocupada: 'libre' },
				{ 'posicion': 5, ocupada: 'libre' },
				{ 'posicion': 6, ocupada: 'libre' },
				{ 'posicion': 7, ocupada: 'libre' },
				{ 'posicion': 8, ocupada: 'libre' },
				{ 'posicion': 9, ocupada: 'libre' },
				{ 'posicion': 10, ocupada: 'libre' },
				{ 'posicion': 11, ocupada: 'libre' },
				{ 'posicion': 12, ocupada: 'libre' },
				{ 'posicion': 13, ocupada: 'libre' },
				{ 'posicion': 14, ocupada: 'libre' },
		
			]
		},
		{
			"fila": 11,
			'butacas':  [
				{ 'posicion': 1, ocupada: 'libre' },
				{ 'posicion': 2, ocupada: 'libre' },
				{ 'posicion': 3, ocupada: 'libre' },
				{ 'posicion': 4, ocupada: 'libre' },
				{ 'posicion': 5, ocupada: 'libre' },
				{ 'posicion': 6, ocupada: 'vendida' },
				{ 'posicion': 7, ocupada: 'vendida' },
				{ 'posicion': 8, ocupada: 'vendida' },
				{ 'posicion': 9, ocupada: 'vendida' },
				{ 'posicion': 10, ocupada: 'libre' },
				{ 'posicion': 11, ocupada: 'libre' },
				{ 'posicion': 12, ocupada: 'libre' },
				{ 'posicion': 13, ocupada: 'libre' },
				{ 'posicion': 14, ocupada: 'libre' },
		
			]
		},
		{
			"fila": 12,
			'butacas':  [
				{ 'posicion': 1, ocupada: 'libre' },
				{ 'posicion': 2, ocupada: 'libre' },
				{ 'posicion': 3, ocupada: 'libre' },
				{ 'posicion': 4, ocupada: 'libre' },
				{ 'posicion': 5, ocupada: 'libre' },
				{ 'posicion': 6, ocupada: 'libre' },
				{ 'posicion': 7, ocupada: 'libre' },
				{ 'posicion': 8, ocupada: 'libre' },
				{ 'posicion': 9, ocupada: 'libre' },
				{ 'posicion': 10, ocupada: 'libre' },
				{ 'posicion': 11, ocupada: 'libre' },
				{ 'posicion': 12, ocupada: 'libre' },
				{ 'posicion': 13, ocupada: 'libre' },
				{ 'posicion': 14, ocupada: 'libre' },
		
			]
		},
		{
			"fila": 13,
			'butacas':  [
				{ 'posicion': 1, ocupada: 'libre' },
				{ 'posicion': 2, ocupada: 'libre' },
				{ 'posicion': 3, ocupada: 'libre' },
				{ 'posicion': 4, ocupada: 'libre' },
				{ 'posicion': 5, ocupada: 'libre' },
				{ 'posicion': 6, ocupada: 'libre' },
				{ 'posicion': 7, ocupada: 'libre' },
				{ 'posicion': 8, ocupada: 'libre' },
				{ 'posicion': 9, ocupada: 'libre' },
				{ 'posicion': 10, ocupada: 'libre' },
				{ 'posicion': 11, ocupada: 'libre' },
				{ 'posicion': 12, ocupada: 'libre' },
				{ 'posicion': 13, ocupada: 'libre' },
				{ 'posicion': 14, ocupada: 'libre' },
		
			]
		},
		{
			"fila": 14,
			'butacas':  [
				{ 'posicion': 1, ocupada: 'libre' },
				{ 'posicion': 2, ocupada: 'libre' },
				{ 'posicion': 3, ocupada: 'libre' },
				{ 'posicion': 4, ocupada: 'libre' },
				{ 'posicion': 5, ocupada: 'libre' },
				{ 'posicion': 6, ocupada: 'libre' },
				{ 'posicion': 7, ocupada: 'libre' },
				{ 'posicion': 8, ocupada: 'libre' },
				{ 'posicion': 9, ocupada: 'libre' },
				{ 'posicion': 10, ocupada: 'libre' },
				{ 'posicion': 11, ocupada: 'libre' },
				{ 'posicion': 12, ocupada: 'libre' },
				{ 'posicion': 13, ocupada: 'libre' },
				{ 'posicion': 14, ocupada: 'libre' },
		
			]
		}
	];

	constructor(
		private _router: Router
	) { }
	
	ngOnInit(): void {
		
		//this.getConfigSala();
			
	}
		

	public getConfigSala() {

		for (let filas = 1; filas < 11; filas++ ){

			for( let butacas = 1; butacas < 15; butacas++ ){

				let posicion = filas + "_" + butacas;

				//this.sala.push(posicion);
				console.log("butacas", posicion);


			}
		}
	}

	public seleccionarAsiento( fila: number, butaca: number) {


		fila = fila -1 ;
		butaca = butaca -1;
		
		console.log("butaca", butaca)
		console.log("info", this.sala)
		console.log("info2", this.sala[fila].butacas[butaca])
		
		console.log("ocupada", this.sala[fila].butacas[butaca].ocupada)
		if ( this.sala[fila].butacas[butaca].ocupada === 'libre') { this.sala[fila].butacas[butaca].ocupada = 'reservada' } else { this.sala[fila].butacas[butaca].ocupada = 'libre'};
		
	}

	public next() { 
		console.log("entro")
		this._router.navigate(['compraentradas/datospersonales']);
	}
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cartelera',
  templateUrl: './cartelera.component.html',
  styleUrls: ['./cartelera.component.scss']
})
export class CarteleraComponent implements OnInit {

	public botonVisible: boolean = true;

	public peliculas = [
		{
			nombre: 	'La abuela',
			imgCaratula: 	'assets/laabuela_peq.jpg'
		},
		{
			nombre: 	'Avengers Endgame',
			imgCaratula: 	'assets/advengers_endgame_peq.jpg'
		},
		{
			nombre: 	'Coda',
			imgCaratula: 	'assets/coda_peq.jpg'
		},
		{
			nombre: 	'el Método Williams',
			imgCaratula: 	'assets/elmetodowilliams_peq.jpg'
		},
		{
			nombre: 	'Spiderman no Way Home',
			imgCaratula: 	'assets/spider-man-no-way-home_peq.jpg'
		},
		{
			nombre: 	'Uncharter',
			imgCaratula: 	'assets/uncharter_peq.jpg'
		}
	]

	constructor() { }
	
	ngOnInit(): void {
	
	}

}

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
			titulo: 	'La abuela',
			urlImage: 	'assets/laabuela_peq.jpg'
		},
		{
			titulo: 	'Avengers Endgame',
			urlImage: 	'assets/advengers_endgame_peq.jpg'
		},
		{
			titulo: 	'Coda',
			urlImage: 	'assets/coda_peq.jpg'
		},
		{
			titulo: 	'el Método Williams',
			urlImage: 	'assets/elmetodowilliams_peq.jpg'
		},
		{
			titulo: 	'Spiderman no Way Home',
			urlImage: 	'assets/spider-man-no-way-home_peq.jpg'
		},
		{
			titulo: 	'Uncharter',
			urlImage: 	'assets/uncharter_peq.jpg'
		}
	]

	constructor() { }
	
	ngOnInit(): void {
	
	}

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ficha-pelicula',
  templateUrl: './ficha-pelicula.component.html',
  styleUrls: ['./ficha-pelicula.component.scss']
})
export class FichaPeliculaComponent implements OnInit {

	public nombre: string = 'La abuela';
	public imgCaratula: string = 'assets/laabuela_peq.jpg';
	public botonVisible: boolean = false
	
	constructor() { }
	
	ngOnInit(): void {
	}

}

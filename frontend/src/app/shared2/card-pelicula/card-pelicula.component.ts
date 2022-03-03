import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-pelicula',
  templateUrl: './card-pelicula.component.html',
  styleUrls: ['./card-pelicula.component.scss']
})
export class CardPeliculaComponent2 implements OnInit {

	@Input() titulo = '';
	@Input() urlImage = '';
	@Input() boton = false;

	constructor() { }
	
	ngOnInit(): void {
	}

}

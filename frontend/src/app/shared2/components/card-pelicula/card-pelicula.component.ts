import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-pelicula',
  templateUrl: './card-pelicula.component.html',
  styleUrls: ['./card-pelicula.component.scss']
})
export class CardPeliculaComponent implements OnInit {

  @Input() titulo = '';
	@Input() urlImage = '';
	@Input() boton = false;

	constructor() { }
	
	ngOnInit(): void {
	}

}

import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-peli',
  templateUrl: './card-peli.component.html',
  styleUrls: ['./card-peli.component.scss']
})
export class CardPeliComponent implements OnInit {
	
	@Input() id!:string;
	@Input() nombre!:string | undefined;
	@Input() imgCaratula!:string | undefined;
	@Input() boton:boolean = false;
	
	constructor(
		private _router: Router,
	) { }

	ngOnInit(): void {
	}

	mostrarFichaDetalle(id: string) {
	
		this._router.navigate(['/cartelera/fichapelicula/' + id]);
		
	}

}

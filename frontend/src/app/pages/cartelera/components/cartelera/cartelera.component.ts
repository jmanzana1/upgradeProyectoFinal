import { CarteleraService } from './../../../../services/cartelera.service';
import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-cartelera',
  templateUrl: './cartelera.component.html',
  styleUrls: ['./cartelera.component.scss'],
  providers: [MessageService]
})
export class CarteleraComponent implements OnInit {

	public botonVisible: boolean = true;

	public peliculas: any = [];

	constructor(
		private _carteleraService: CarteleraService,
		private _messageService: MessageService
	) { }
	
	ngOnInit(): void {
	
		this.getPeliculas();
	}

	public getPeliculas() { 

		this._carteleraService.getCartelera()
		.subscribe({
			next: ( data ) => { 

				this.peliculas = data;
				console.log( "pli", this.peliculas)
			},
			error: ( error ) => { 

				this._messageService.add({severity:'error', summary:'Error Cartelera', detail: error.message });

			}
		 });
			

	}

}

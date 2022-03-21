import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PeliculasService } from '../../../../services/peliculas.service';
import { MessageService } from 'primeng/api';


@Component({
  selector: 'app-ficha-pelicula',
  templateUrl: './ficha-pelicula.component.html',
  styleUrls: ['./ficha-pelicula.component.scss'],
  providers: [ MessageService]
})
export class FichaPeliculaComponent implements OnInit {

	public id: string = '';
	public nombre: string = 'La abuela';
	public imgCaratula: string = 'assets/laabuela_peq.jpg';
	public botonVisible: boolean = false

	public dataPelicula: any;
	
	constructor(
		private _peliculasService: PeliculasService,
		private _activatedRouter: ActivatedRoute,
		private _messageService: MessageService,
		private _router: Router,
	) { }
	
	ngOnInit(): void {
		
		this.getPeliculaInfo( );

	}

	public compraEntrada(id: String) {
		
		this._router.navigate(['compraentradas/entradas/' + id])
	}

	public getPeliculaInfo( ){

		this.id = this._activatedRouter.snapshot.params['id'];

		this._peliculasService.getPeliculaById( this.id )
		.subscribe({
			next: ( data ) => { 

				this.dataPelicula = data;
				console.log( "pli", this.dataPelicula)
			},
			error: ( error ) => { 

				this._messageService.add({severity:'error', summary:'Error Cartelera', detail: error.message });

			}
		 });

		console.log("id", this.id)
	}

	

}

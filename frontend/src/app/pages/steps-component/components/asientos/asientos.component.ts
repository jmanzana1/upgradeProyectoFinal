import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common'
import { FormularioCompraService } from '../../../../services/formulario-compra.service';
import { MessageService } from 'primeng/api';
import { Sesiones } from '../../../../models/sesiones';
import { PeliculasService } from '../../../../services/peliculas.service';

@Component({
	selector: 'app-asientos',
	templateUrl: './asientos.component.html',
	styleUrls: ['./asientos.component.scss'],
	providers: [ DatePipe, MessageService ]
})
export class AsientosComponent implements OnInit {
	
	public fechaSesion: any = null ;
	public butacasVisible: boolean = false;
	public dataButacas: any;
	public idPelicula: string = ''; 
	public idSesion: string = '';
	public dataSesion: Sesiones[];
	public butacasSelecionadas: string = '';
	public butacasDetalle: string = '';
	public numeroEntradas: number = 0;
	public dataPelicula: any;
	public sala: number = 0;
	public horaSesion: string = '';
	public minDate = new Date();


	public fechaSeleccionada: boolean = false;
	public sesionSeleccionada: boolean= false;


	constructor(
		private _router: Router,
		private datepipe: DatePipe,
		private _activatedRouter: ActivatedRoute,
		private _formularioCompraService: FormularioCompraService,
		private _messageService: MessageService,
		private _peliculasService: PeliculasService,
	) { 
		this.dataSesion = [{
			_id: '',
			sala: '',
			sesion: '',
			numeroSala: 0,
			fecha: ''
		}]
	}
	
	ngOnInit(): void {
		
		this.idPelicula = this._activatedRouter.snapshot.params['id'];

		this.getPelicula();
			
	}

	public getPelicula( ) {

		this._peliculasService.getPeliculaById( this.idPelicula ) 
			.subscribe({
				next: ( data ) => {

					this.dataPelicula = data;

				},
				error: ( error ) => {
					
					this._messageService.add({severity:'error', summary:'Error Cartelera', detail: error.message });

				}
			})


	}
		

	public getSalas( evento: Date ) {

		this.fechaSeleccionada = true;

		this.fechaSesion = this.datepipe.transform(evento, 'yyyy-MM-dd') ;

		
		this._formularioCompraService.getSalas( this.idPelicula, this.fechaSesion)
			.subscribe({
				next: ( data: any ) => {
					
					this.dataSesion = data.map( ( item: Sesiones ) => {
						
						this.sala = item.numeroSala;
						this.horaSesion = item.sesion;

						return {
							_id: item._id,
							sala: 'sala ' + item.numeroSala,
							sesion: this.horaSesion,
							numeroSala: item.numeroSala,
							fecha: this.fechaSesion
						}
					})
				
				},
				error: ( error ) => {
					
					this._messageService.add({severity:'error', summary:'Error Compra Entradas', detail: error.message });

				}
			})
		
	}

	public getDispoSala( fecha: string, id: string) {

		this.sesionSeleccionada = true;
		this.idSesion = id;
		
		this._formularioCompraService.getButacas( id, fecha )
			.subscribe({
				next: (data: any ) => {

					this.dataButacas = data;
					this.butacasVisible = true;

				},
				error: ( error ) => {

					this._messageService.add({severity:'error', summary:'Error Compra Entradas', detail: error.message });

				}
			})
	}

	public seleccionarAsiento( fila: number, butaca: number) {

		fila = fila -1 ;
		butaca = butaca -1;

		const filaButaca: string = this.dataButacas[fila].fila + "_" + this.dataButacas[fila].butacas[butaca].posicion + ',';
		const butacasDetalleSelecciona = 'Fila: ' + this.dataButacas[fila].fila + ' Butaca: ' +  this.dataButacas[fila].butacas[butaca].posicion + ','

		if( this.numeroEntradas > 9 ) {
			
			if( this.dataButacas[fila].butacas[butaca].ocupada == 'reservada' ) {

				this.dataButacas[fila].butacas[butaca].ocupada = 'libre';
				this.numeroEntradas -= 1;
				this.butacasSelecionadas = this.butacasSelecionadas.replace( filaButaca, '' );
				this.butacasDetalle = this.butacasDetalle.replace( butacasDetalleSelecciona, '');

			}else {

				this._messageService.add({severity:'error', summary:'Compra Entradas', detail: 'Has alcanzado el número máximo de entradas, solo puedes 10 entradas' });

			}

		} else { 
			
			if ( this.dataButacas[fila].butacas[butaca].ocupada === 'libre') 
			{ 	
				this.dataButacas[fila].butacas[butaca].ocupada = 'reservada' 
				this.numeroEntradas += 1
				this.butacasSelecionadas += filaButaca;
				this.butacasDetalle += butacasDetalleSelecciona;

			
			} else 
			{ 
				
				this.dataButacas[fila].butacas[butaca].ocupada = 'libre'
				this.numeroEntradas -= 1

				this.butacasSelecionadas = this.butacasSelecionadas.replace( filaButaca, '' );
				this.butacasDetalle = this.butacasDetalle.replace( butacasDetalleSelecciona, '');
	
			};
			

		}


	}

	public next() { 

		const butacas: string = this.butacasSelecionadas .substring(0, this.butacasSelecionadas.length - 1);
		const butacasDetalle: string = this.butacasDetalle.substring(0, this.butacasDetalle.length - 1);
		const numeroEntradas = butacas.split(',');


		if( !this.fechaSeleccionada ) { 

			this._messageService.add({severity:'error', summary:'Compra Entradas', detail: 'Debe de seleccionar una fecha para continuar' });

		} else if( !this.sesionSeleccionada) {

			this._messageService.add({severity:'error', summary:'Compra Entradas', detail: 'Debe de seleccionar una sesión para continuar' });

		} else if( butacas.length === 0){

			this._messageService.add({severity:'error', summary:'Compra Entradas', detail: 'Debe de seleccionar al menos una butaca para continuar' });

		}
		else
		{
	
			const precioFinal = 9.5 * numeroEntradas.length; 
			let asientos = {
				fecha: this.fechaSesion,
				sala: this.sala,
				hora: this.horaSesion,
				asientosReservados: butacas,
				precio: precioFinal,
				idPelicula: this.idPelicula,
				idSalaSesion: this.idSesion,
				titulo: this.dataPelicula.nombre,
				butacas: butacasDetalle,
				urlCaratula: this.dataPelicula.imgFicha
			 }
	

			localStorage.setItem("asientos",  JSON.stringify(asientos));
			this._router.navigate(['compraentradas/datospersonales']);
		}
	}
}

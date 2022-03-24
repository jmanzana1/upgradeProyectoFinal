import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { variablesConstantes } from '../app.variables';
import { Sesiones } from '../models/sesiones';

@Injectable({
  providedIn: 'root'
})
export class FormularioCompraService {

	urlMaster: string = variablesConstantes.urlMaster;
	
	constructor(
		private _httpClient: HttpClient,
	) { }


	public getSalas( id: string, fecha: string | null ) {

		const url: string = this.urlMaster + 'Sala/salasdisponibles/' + id + '/' + fecha;

		return this._httpClient.get( url );
	}

	public getButacas( id: string, fecha: string ) { 

		const url: string = this.urlMaster + 'Compras/asientos/' + fecha + '/' + id;

		return this._httpClient.get( url );

	}

	public postCompra(reserva: Sesiones) {
		
		const url: string = this.urlMaster + 'Compras';
		
		return this._httpClient.post( url, reserva );
		
	}

}

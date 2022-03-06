import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { variablesConstantes } from '../app.variables';


@Injectable({
  providedIn: 'root'
})
export class CarteleraService {

	urlMaster: string = variablesConstantes.urlMaster;

	constructor(
		private _httpClient: HttpClient,
	) { }

	public getCartelera() { 

		const url: string = this.urlMaster;

		return this._httpClient.get( url );

	}
}

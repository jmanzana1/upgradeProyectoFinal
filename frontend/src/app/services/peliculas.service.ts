import { Injectable } from '@angular/core';
import { variablesConstantes } from '../app.variables';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http'; 
import { Router } from '@angular/router';
import {Peliculas} from '../models/peliculas'
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class PeliculasService {
	urlMaster: string = variablesConstantes.urlMaster;
	headers = new HttpHeaders().set('Content-Type', 'application/json');
	
	constructor(
		private _httpClient:HttpClient,
		public router:Router
	) { }

	public crearPelicula(pelicula: Peliculas) {

		let api = `${this.urlMaster}Pelicula/`;

		return this._httpClient.post(api,pelicula);

	}

	public editarPelicula(id:string, pelicula: Peliculas) {
		
		let api = `${this.urlMaster}Pelicula/${id}`;
		
		return this._httpClient.put(api,pelicula);

	}

	public getPeliculas(){
		
		const url = this.urlMaster + 'Pelicula/';
		
		return this._httpClient.get( url );

	}

	public getPeliculaById( id: string) {
	
		const url = this.urlMaster + 'Pelicula/' + id;
	
		return this._httpClient.get( url );	

	}

	public borrarpelicula( id: string) {
	
		const url = this.urlMaster + 'Pelicula/' + id;
	
		return this._httpClient.delete( url );	
	
	}


}


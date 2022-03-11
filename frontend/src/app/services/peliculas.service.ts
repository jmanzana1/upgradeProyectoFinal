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

// Nueva Pelicula
crearPelicula(pelicula: Peliculas) {
  console.log("Creando Pelicula")
  let api = `${this.urlMaster}Pelicula/`;
  console.log(pelicula)
  return this._httpClient.post(api,pelicula);
}


}


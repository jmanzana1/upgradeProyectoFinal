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
  urlMaster2: string = variablesConstantes.urlMaster;
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(
    private http:HttpClient,
    public router:Router
  ) { }

// Nueva Pelicula
signUp(pelicula: Peliculas): Observable<any> {
  console.log("Creando Pelicula")
  let api = `${this.urlMaster2}/Pelicula/`;
  return this.http.post(api, pelicula)
    .pipe(
      catchError(this.handleError)
    )
}

handleError(error: HttpErrorResponse) {
  console.log("HandleError")
  let msg = '';
  if (error.error instanceof ErrorEvent) {
    // client-side error
    msg = error.error.message;
  } else {
    // server-side error
    msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
  }
  return throwError(msg);
}

}


import { Injectable } from '@angular/core';
import { variablesConstantes } from '../app.variables';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http'; 
import { Router } from '@angular/router';
import { compras } from '../models/compras';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ComprasService {
  urlMaster: string = variablesConstantes.urlMaster;
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(  private _httpClient:HttpClient,
    public router:Router) { }

    public getCompras(){
      const url = this.urlMaster + 'Compras/contodo';
      return this._httpClient.get( url );
    }

    public borrarCompra(id: string){
      const url = this.urlMaster + 'Compras/' + id;
      return this._httpClient.delete( url );
    }
    

}

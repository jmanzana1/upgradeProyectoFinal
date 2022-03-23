import { Injectable } from '@angular/core';
import { Salas } from '../models/salas';
import { variablesConstantes } from '../app.variables';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http'; 
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SalasService {
  urlMaster: string = variablesConstantes.urlMaster;
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor( private _httpClient:HttpClient, public router:Router) { }

  public crearSala(Sala: Salas) {
    let api = `${this.urlMaster}Sala/`;
    return this._httpClient.post(api,Sala);
  }

  public editarSala(id: string,Sala: Salas) {
    let api = `${this.urlMaster}Sala/` + id;
    return this._httpClient.put(api,Sala);
  }

  public getSalas(){
    const url = this.urlMaster + 'Sala/salaconPeli/';
    return this._httpClient.get( url );
  }

  public getSala(id: string){
    const url = this.urlMaster + 'Sala/' + id;
    return this._httpClient.get( url );
  }

  public borrarsala(id: string){
    const url = this.urlMaster + 'Sala/' + id;
    return this._httpClient.delete( url );
  }


}

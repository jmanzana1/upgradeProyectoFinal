import { Injectable } from '@angular/core';
import { variablesConstantes } from '../app.variables';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http'; 
import { Router } from '@angular/router';
import {User} from '../models/user'
import { Observable, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  urlMaster: string = variablesConstantes.urlMaster;
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  currentUser = {};

  constructor(
    private http:HttpClient,
    public router:Router
  ) { }


  signUp(user: User): Observable<any> {
    console.log("Signup")
    let api = `${this.urlMaster}usuarios/register-user`;
    return this.http.post(api, user)
  }

  signIn(user: User) {
    console.log("Signin")
    return this.http.post<any>(`${this.urlMaster}usuarios/signin`, user)
      .subscribe((res: any) => {
        localStorage.setItem('access_token', res.token)
        console.log("el token es"+res.token)
      })
  }


  getToken() {
    console.log("GetToken")
    return localStorage.getItem('access_token');
  }

  get isLoggedIn(): boolean {
    console.log("Islogged")
    let authToken = localStorage.getItem('access_token');
    return (authToken !== null) ? true : false;
  }

}

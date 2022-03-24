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
		public router:Router,
	) { }


	signUp(user: User): Observable<any> {
	
		let api = `${this.urlMaster}usuarios/register-user`;
		
		return this.http.post(api, user);
	}

	signIn(user: User) {
	
		return this.http.post<any>(`${this.urlMaster}usuarios/signin`, user);

	}


	getToken() {

		return localStorage.getItem('access_token');
		
	}

	get isLoggedIn(): boolean {
		
		
		let authToken = localStorage.getItem('access_token');
		
		return (authToken !== null) ? true : false;

	}
	
}

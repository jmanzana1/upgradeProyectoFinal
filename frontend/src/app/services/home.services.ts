import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Carousel, Pelis } from '../pages/homepage/components/carousel/carousel/Carousel';
import { variablesConstantes } from '../app.variables';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  urlMaster: string = variablesConstantes.urlMaster;

  constructor(private http: HttpClient) { }

  public getCartelera() { 

		const url: string = this.urlMaster;

		return this.http.get( url );

	}
// ------------------
  getPelisCarousel() {
    return this.http.get<any>('assets/pelis.json')
    .toPromise()
    .then(res => <Carousel[]>res.data)
    .then(data => { return data; });
  }

  getPelisExtrenos() {
    return this.http.get<any>('assets/pelis.json')
    .toPromise()
    .then(res => <Pelis[]>res.data)
    .then(data => { return data; });
}
  getPelisProximas() {
    return this.http.get<any>('assets/pelis.json')
    .toPromise()
    .then(res => <Pelis[]>res.data)
    .then(data => { return data; });
  }

}

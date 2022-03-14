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

		const url: string = this.urlMaster + 'Pelicula';
    return this.http.get( url );

	}
// ------------------
  // getPelisCarousel() {
  //   return this.http.get<any>(this.urlMaster + 'Pelicula')
  //   .toPromise()
  //   .then(res => <Carousel[]>res.data)
    
  //   .then(data => {
  //     console.log('carousel2',data)
  //     return data; });
  // }

  public getPelisCarousel() { 

		const url: string = this.urlMaster + 'Pelicula/carousel';
    return this.http.get( url );

	}

  public getEstrenos() { 

		const url: string = this.urlMaster + 'Pelicula/estreno';
    return this.http.get( url );

	}
  public getProximas() { 

		const url: string = this.urlMaster + 'Pelicula/proxima';
    return this.http.get( url );

	}

}

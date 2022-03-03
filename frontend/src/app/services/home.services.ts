import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Carousel, Pelis } from '../pages/homepage/components/carousel/carousel/Carousel';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  

  constructor(private http: HttpClient) { }

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

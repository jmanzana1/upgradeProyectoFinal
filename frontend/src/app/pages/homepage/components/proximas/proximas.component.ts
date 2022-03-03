import { Pelis } from './../carousel/carousel/Carousel';
import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/services/home.services';
@Component({
  selector: 'app-proximas',
  templateUrl: './proximas.component.html',
  styleUrls: ['./proximas.component.scss']
})
export class ProximasComponent implements OnInit {
  
  public botonVisible: boolean = false;

  public pelis!: Pelis[];
  public nombre!:any
  public imgCaratula!:any
  public id!:any

  constructor(private homeservice: HomeService) { }

  ngOnInit(): void {
    this.homeservice.getPelisProximas().then(pelis => {
			this.pelis = pelis;
		});
  }

}

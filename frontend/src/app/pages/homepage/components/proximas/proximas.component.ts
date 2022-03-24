import { Pelis } from './../carousel/carousel/Carousel';
import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/services/home.services';
import { MessageService } from 'primeng/api';
@Component({
  selector: 'app-proximas',
  templateUrl: './proximas.component.html',
  styleUrls: ['./proximas.component.scss'],
  providers: [MessageService]
})
export class ProximasComponent implements OnInit {
  
	public botonVisible: boolean = false;
	
	public peliculas: any = [];
	public nombre!:any
	public imgCaratula!:any
	public id!:any
	
	constructor(private homeservice: HomeService, private messageService: MessageService) { }

	ngOnInit(): void {
	
		this.getPeliculas();
	
	}

	public getPeliculas() { 

		this.homeservice.getProximas()
		.subscribe({
			next: ( data ) => { 
				this.peliculas = data;
				console.log( "proximas", this.peliculas)
			},
			error: ( error ) => { 

				this.messageService.add({severity:'error', summary:'Error en próximas', detail: error.message });

			}
		 });

	}

}

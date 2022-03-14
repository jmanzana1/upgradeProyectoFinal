import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { HomeService } from 'src/app/services/home.services';

@Component({
  selector: 'app-estrenos',
  templateUrl: './estrenos.component.html',
  styleUrls: ['./estrenos.component.scss'],
  providers: [MessageService]
})
export class EstrenosComponent implements OnInit {
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

		this.homeservice.getEstrenos()
		.subscribe({
			next: ( data ) => { 
				this.peliculas = data;
				console.log( "todas", this.peliculas)
			},
			error: ( error ) => { 

				this.messageService.add({severity:'error', summary:'Error en próximas', detail: error.message });

			}
		 });
			

	}

}

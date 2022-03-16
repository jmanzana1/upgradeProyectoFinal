import { Component, OnInit } from '@angular/core';
import {PeliculasService} from '../../../../services/peliculas.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-peliculas-list',
  templateUrl: './peliculas-list.component.html',
  styleUrls: ['./peliculas-list.component.scss'],
  providers: [MessageService]
})
export class PeliculasListComponent implements OnInit {
  public peliculas: any = [];

  constructor(public peliculasService:PeliculasService,private _messageService: MessageService) { }

  ngOnInit(): void {
    this.getPeliculas();
  }

  public getPeliculas() { 

		this.peliculasService.getPeliculas()
		.subscribe({
			next: ( data ) => { 

				this.peliculas = data;
				console.log( "pli", this.peliculas)
			},
			error: ( error ) => { 

				this._messageService.add({severity:'error', summary:'Error Cartelera', detail: error.message });

			}
		 });
			

	}

}

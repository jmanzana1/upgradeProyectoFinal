import { Component, OnInit } from '@angular/core';
import { SalasService } from 'src/app/services/salas.service';
import {PeliculasService} from '../../../../services/peliculas.service';
import {ConfirmationService} from 'primeng/api';
import {Message} from 'primeng/api';
import { PrimeNGConfig } from 'primeng/api';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-salas-list',
  templateUrl: './salas-list.component.html',
  styleUrls: ['./salas-list.component.scss'],
  providers: [ConfirmationService,MessageService]
})
export class SalasListComponent implements OnInit {
  public Salas: any = [];
  public Pelicula: any = [];
  public Salasconpeli: any = [];

  constructor(public peliculasService:PeliculasService,public Salasservice:SalasService, private confirmationService: ConfirmationService,private primengConfig: PrimeNGConfig,private messageservice:MessageService) { }

  ngOnInit(): void {
    this.getSalas();
  }

  public getSalas() { 

		this.Salasservice.getSalas()
		.subscribe({
			next: ( data ) => { 
        console.log(data)
				this.Salas = data;
        console.log(this.Salas)
        
			},
			error: ( error ) => { 
				console.log(error)
			}
		 });
	}

}

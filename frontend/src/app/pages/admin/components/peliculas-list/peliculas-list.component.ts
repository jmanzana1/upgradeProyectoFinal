import { Component, OnInit } from '@angular/core';
import {PeliculasService} from '../../../../services/peliculas.service';
import {ConfirmationService} from 'primeng/api';
import {Message} from 'primeng/api';
import { PrimeNGConfig } from 'primeng/api';
import { MessageService } from 'primeng/api';


@Component({
  selector: 'app-peliculas-list',
  templateUrl: './peliculas-list.component.html',
  styleUrls: ['./peliculas-list.component.scss'],
  providers: [ConfirmationService,MessageService]
})
export class PeliculasListComponent implements OnInit {
  public peliculas: any = [];
  public pelicula:any = [];
  routeState: any;
  data: any = {};
  msgs: Message[] = [];

  constructor(public peliculasService:PeliculasService,private confirmationService: ConfirmationService,private primengConfig: PrimeNGConfig,private messageservice:MessageService) {}
	
  

  ngOnInit(): void {
    this.getPeliculas();
	//console.log("data", this.data);
  this.primengConfig.ripple = true;
  }

  public getPeliculas() { 

		this.peliculasService.getPeliculas()
		.subscribe({
			next: ( data ) => { 

				this.peliculas = data;
				//console.log( "pli", this.peliculas)
			},
			error: ( error ) => { 
				console.log(error)
			}
		 });
	}

  deletepeliculaclic(id: string) {
    
    this.confirmationService.confirm({
      message: '¿Estas seguro que deseas borrar la pelicula?',
      header: 'Delete',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.deletepelicula(id);
      }
  });
}

deletepelicula(id:string){
  this.peliculasService.borrarpelicula(id)
		.subscribe({
			next: ( data ) => { 
        console.log("borrado",data);
        this.messageservice.add({severity:'success', summary:'Borrado', detail: 'La Pelicula ha sido borrada correctamente.  ' });
        this.getPeliculas();
        //window.location.reload();
			},
			error: ( error ) => { 
				console.log(error)
			}
		 });

}



}

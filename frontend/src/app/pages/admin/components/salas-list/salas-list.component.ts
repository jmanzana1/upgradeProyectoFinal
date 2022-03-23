import { Component, OnInit } from '@angular/core';
import { SalasService } from 'src/app/services/salas.service';
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
  public Pelicula: any = {};
  public Salasconpeli: any = [];

  constructor(public Salasservice:SalasService, private confirmationService: ConfirmationService,private primengConfig: PrimeNGConfig,private messageservice:MessageService) { }

  ngOnInit(): void {
    this.getSalas();
  }

  public getSalas() { 
		this.Salasservice.getSalas()
		.subscribe({
			next: ( data: any ) => { 
				this.Salas = data;
			},
			error: ( error ) => { 
				console.log(error)
			}
		 });
	}


  deletesalaclic(id: string) {
    
    this.confirmationService.confirm({
      message: '¿Estas seguro que deseas borrar la sala?',
      header: 'Delete',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.deletesala(id);
      }
  });
}


deletesala(id:string){
  this.Salasservice.borrarsala(id)
		.subscribe({
			next: ( data ) => { 
        console.log("borrado",data);
        this.messageservice.add({severity:'success', summary:'Borrado', detail: 'La Sala ha sido borrada correctamente.  ' });
        this.getSalas();
			},
			error: ( error ) => { 
				console.log(error)
			}
		 });

}

}

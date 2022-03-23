import { Component, OnInit } from '@angular/core';
import { ComprasService } from 'src/app/services/compras.service';
import {ConfirmationService} from 'primeng/api';
import {Message} from 'primeng/api';
import { PrimeNGConfig } from 'primeng/api';
import { MessageService } from 'primeng/api';


@Component({
  selector: 'app-compras-list',
  templateUrl: './compras-list.component.html',
  styleUrls: ['./compras-list.component.scss'],
  providers: [ConfirmationService,MessageService]
})
export class ComprasListComponent implements OnInit {
  public compras:any=[];

  constructor(public comprasservice:ComprasService,private confirmationService: ConfirmationService,private primengConfig: PrimeNGConfig,private messageservice:MessageService) { }

  ngOnInit(): void {
    this.primengConfig.ripple = true;
    this.getCompras()
  }

  public getCompras() { 
		this.comprasservice.getCompras()
		.subscribe({
			next: ( data ) => { 

				this.compras = data;
				console.log( "compras", this.compras)
			},
			error: ( error ) => { 
				console.log(error)
			}
		 });
	}

  public deletecompra(id:string){
    this.confirmationService.confirm({
      message: '¿Estas seguro que deseas borrar la venta?',
      header: 'Delete',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.deletecompraser(id);
      }
  });
  }

  public deletecompraser(id:string){
    this.comprasservice.borrarCompra(id)
		.subscribe({
			next: ( data ) => { 
        console.log("borrado",data);
        this.messageservice.add({severity:'success', summary:'Borrado', detail: 'La Compra ha sido borrada correctamente.  ' });
        this.getCompras();
			},
			error: ( error ) => { 
				console.log(error)
			}
		 });
  }

}

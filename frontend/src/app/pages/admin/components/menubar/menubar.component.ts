import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';



@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.scss']
})
export class MenubarComponent implements OnInit {
	
	public items: any =[];
	
	constructor() { }
	
	ngOnInit(): void {
	
		this.items = [
			{
				label:'Peliculas',
				icon:'pi pi-fw pi-youtube',
				items:[
					{
						label:'Nueva',
						icon:'pi pi-fw pi-plus',
						url:"/admin/peliculas_alta"
					},
					{
						label:'Listado',
						icon:'pi pi-fw pi-bars',
						url:"/admin/peliculas"
					}      
				]
			},
			{
				label:'Salas',
				icon:'pi pi-fw pi-star-fill',
				items:[
				{
					label:'Nueva',
					icon:'pi pi-fw pi-plus',
					url:"/admin/salas_alta"
					},
				{
					label:'Listado',
					icon:'pi pi-fw pi-bars',
					url:"/admin/salas"
				}      
			]
			},
			{
			label:'Compras',
			icon:'pi pi-fw pi-ticket',
			items:[
				{
					label:'Listado',
					icon:'pi pi-fw pi-bars',
					url:"/admin/compras"
				}
			]
		},
			
		];
	
	}

}

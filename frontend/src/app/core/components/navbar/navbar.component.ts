import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

	items: MenuItem[];

	constructor() {
		this.items = [
			{
				label:'Portada',
				routerLink: ['/'],
				routerLinkActiveOptions: {
					exact: true
					},
				styleClass: 'menucus'
			},
			{
				label:'Cartelera',
				routerLink: ['cartelera'],
				routerLinkActiveOptions: {
					exact: true
					},
				styleClass: 'menucus'
			},
			
			{
				label:'Admin',
				// icon:'pi pi-fw pi-file',
				items:[
					{
						label:'Películas',
						// icon:'pi pi-fw pi-plus',
						routerLink: ['admin/peliculas'],
						routerLinkActiveOptions: {
							exact: true
							},
						
						
					},
					{
						label:'Salas',
						// icon:'pi pi-fw pi-trash',
						routerLink: ['admin/salas'],
						routerLinkActiveOptions: {
							exact: true
							},
						styleClass: 'menucus'
						
					},
				]
			}
		];
	 }
	
	ngOnInit(): void {

		

	}

}

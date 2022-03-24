import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

	constructor(private router: Router) {}

	ngOnInit(): void {
	
		this.router.navigate(['todas'])
		
	}

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pago',
  templateUrl: './pago.component.html',
  styleUrls: ['./pago.component.scss']
})
export class PagoComponent implements OnInit {

  constructor(
	  private _router: Router
  ) { }

  ngOnInit(): void {
  }

  public next() { 
	console.log("entro")
	this._router.navigate(['compraentradas/confirmacion']);
}

}

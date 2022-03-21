import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirmacion',
  templateUrl: './confirmacion.component.html',
  styleUrls: ['./confirmacion.component.scss']
})
export class ConfirmacionComponent implements OnInit {
  
  

  public usuario = JSON.parse(localStorage.getItem('usuario') || '{}')
  public pago = JSON.parse(localStorage.getItem('pago') || '{}')
  public asientos = JSON.parse(localStorage.getItem('asientos') || '{}')
  
  constructor(private _router: Router,) { }

  ngOnInit(): void {
  }
  
  public back() { 
    
    this._router.navigate(['compraentradas/pago']);
  }
  
  
  
}

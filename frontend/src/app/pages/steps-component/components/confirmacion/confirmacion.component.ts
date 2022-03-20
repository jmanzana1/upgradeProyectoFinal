import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirmacion',
  templateUrl: './confirmacion.component.html',
  styleUrls: ['./confirmacion.component.scss']
})
export class ConfirmacionComponent implements OnInit {
  public usuario = localStorage.getItem('usuario');
  // public fsubList:Array<any> = JSON.parse(localStorage.getItem('usuario'));

  public pago = localStorage.getItem('pago');
  
  constructor() { }

  ngOnInit(): void {
  }
  get user(): any {
    return localStorage.getItem('usuario');
}
}

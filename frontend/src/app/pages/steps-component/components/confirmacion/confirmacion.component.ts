import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormularioCompraService } from 'src/app/services/formulario-compra.service';

@Component({
  selector: 'app-confirmacion',
  templateUrl: './confirmacion.component.html',
  styleUrls: ['./confirmacion.component.scss']
})
export class ConfirmacionComponent implements OnInit {
  
  

  public usuario = JSON.parse(localStorage.getItem('usuario') || '{}')
  public pago = JSON.parse(localStorage.getItem('pago') || '{}')
  public asientos = JSON.parse(localStorage.getItem('asientos') || '{}')
  
  constructor(private _router: Router, private formularioComprasService: FormularioCompraService) { }

  ngOnInit(): void {
    this.compra();
  }
  
  public back() { 
    
    this._router.navigate(['compraentradas/pago']);
  }
  public seguir() { 
    
    this._router.navigate(['']);
  }

  public compra(){
    this.formularioComprasService.postCompra(this.asientos)
      .subscribe({
        next:(data) => {
          console.log(data)
          localStorage.removeItem('asientos')
          localStorage.removeItem("pago")
          localStorage.removeItem("usuario")

        },
        error:(error)=>{
          console.log(error)
        }
      })
  }
  
  
  
}

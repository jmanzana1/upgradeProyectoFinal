import { map } from 'rxjs/operators';
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
  public numTarjeta = this.pago.numero
  public numAsiento : number = 0;
  
  constructor(private _router: Router, private formularioComprasService: FormularioCompraService) { }

  ngOnInit(): void {
    this.compra();
    this.numEntradas();
    this.recorteNum();
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
  public numEntradas()
   {
    let sss = this.asientos.asientosReservados.split(',')
    // console.log(splitAsientos);
    this.numAsiento = sss.length
   }

   public recorteNum(){
     let mmm = this.pago.numero
     this.numTarjeta = mmm.substr(-4,4)
    //  this.pago.numero.substr(-3,2)
   }
  
}

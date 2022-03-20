import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserPayForm } from './model/userPayForm'

@Component({
  selector: 'app-pago',
  templateUrl: './pago.component.html',
  styleUrls: ['./pago.component.scss']
})
export class PagoComponent implements OnInit {
// Incialización del formulario
public userPayForm: FormGroup;
// variable submitted a false
public submitted: boolean = false;
  constructor(
	  private _router: Router,
    private formBuilder: FormBuilder
  ) {
    this.userPayForm = this.formBuilder.group({
      nombre: ['', [Validators.required, Validators.maxLength(20)]],
      numero: ['', [Validators.required]],
      fecha: ['', [Validators.required]],
      cvv: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {/* Empty */}

//   public next() { 
// 	console.log("entro")
// 	this._router.navigate(['compraentradas/confirmacion']);
// }

//Función accionada al clickar en submit
public onSubmit(): void {
  // El usuario ha pulsado en submit->cambia a true submitted
  this.submitted = true;
  // Si el formulario es valido
  if (this.userPayForm.valid) {
    // Creamos un Usuario y lo emitimos
    const pay: UserPayForm = {
      nombre: this.userPayForm.get('nombre')?.value,
      numero: this.userPayForm.get('numero')?.value,
      fecha: this.userPayForm.get('fecha')?.value,
      cvv: this.userPayForm.get('cvv')?.value,
    };
    console.log(pay);
    // Reseteamos todos los campos y el indicador de envío o submitted
    this.userPayForm.reset();
    this.submitted = false;
    localStorage.setItem('pago', JSON.stringify(pay));
    this._router.navigate(['compraentradas/confirmacion']);
  }
}

}

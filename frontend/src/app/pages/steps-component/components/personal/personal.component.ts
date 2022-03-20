import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserDataForm } from './model/userDataForm'

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.scss'],

})
export class PersonalComponent implements OnInit {
  // Incialización del formulario
  public userDataForm: FormGroup;
	// variable submitted a false
	public submitted: boolean = false;

  constructor(
	  private _router: Router,
    private formBuilder: FormBuilder
  ) {

    this.userDataForm = this.formBuilder.group({
      nombre: ['', [Validators.required, Validators.maxLength(20)]],
      apellidos: ['', [Validators.required, Validators.maxLength(20)]],
      telefono: ['', [Validators.required, Validators.maxLength(13), Validators.minLength(9),Validators.pattern("^[0-9]*$")]],
      email: ['', [Validators.required, Validators.email, Validators.maxLength(50)]],
    });
  }

  ngOnInit(): void {/* Empty */}

  // public nextPage() { 
	// console.log("entro")
	// this._router.navigate(['compraentradas/pago']);
  
  
  
  //Función accionada al clickar en submit
	public onSubmit(): void {
    // El usuario ha pulsado en submit->cambia a true submitted
    this.submitted = true;
    // Si el formulario es valido
    if (this.userDataForm.valid) {
      // Creamos un Usuario y lo emitimos
      const user: UserDataForm = {
        nombre: this.userDataForm.get('nombre')?.value,
        apellidos: this.userDataForm.get('apellidos')?.value,
        telefono: this.userDataForm.get('telefono')?.value,
        email: this.userDataForm.get('email')?.value,
      };
      console.log(user);
      // Reseteamos todos los campos y el indicador de envío o submitted
      this.userDataForm.reset();
      this.submitted = false;
      localStorage.setItem('usuario', JSON.stringify(user));
      this._router.navigate(['compraentradas/pago']);
    }
  }
}



  



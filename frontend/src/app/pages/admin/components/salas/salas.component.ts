import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup , Validators} from "@angular/forms";
import { Router ,ActivatedRoute } from '@angular/router';
import { SalasService } from 'src/app/services/salas.service';
import {PeliculasService} from '../../../../services/peliculas.service';
import { variablesConstantes } from '../../../../app.variables';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-salas',
  templateUrl: './salas.component.html',
  styleUrls: ['./salas.component.scss'],
  providers:[MessageService]
})
export class SalasComponent implements OnInit {
  public urlMaster: string = variablesConstantes.urlMaster;
  public Peliculas: any =[];
  public idSala:any='';
  public datossala:any='';
  public esedit:boolean=false;


  myForm = new FormGroup({
    numeroSala: new FormControl('', [Validators.required, Validators.minLength(1),Validators.maxLength(2),Validators.pattern("^[0-9]*$")]),
    sesion: new FormControl('', [Validators.required, Validators.minLength(5),Validators.maxLength(5),Validators.pattern("^[0-9]{2}:[0-9]{2}")]),
    activo: new FormControl('', [Validators.required]),
    idPelicula: new FormControl([''], [Validators.required]),

  })

  constructor(public peliculasService:PeliculasService,public Salasservice:SalasService,public router: Router, public http:HttpClient, private messageservice:MessageService,private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getPeliculas();
    this.activatedRoute.paramMap.subscribe(params => {
      this.idSala = params.get('id')
      if (this.idSala!=''&& this.idSala!=null){
        this.getSala(this.idSala);
        this.esedit=true;
      }
  })
  }

  getPeliculas(){
    this.peliculasService.getPeliculas()
    .subscribe({
      next: (data) => {
        this.Peliculas=data;
        //console.log(this.Peliculas)
      },
      error: (error)=>{
        console.log(error);
      }
    })
  }


  getSala(idsala: any){
    this.Salasservice.getSala(idsala)
    .subscribe({
      next: (data) => {
        this.datossala=data;
        this.myForm.patchValue({
          numeroSala:this.datossala.numeroSala,
          sesion:this.datossala.sesion,
          activo:this.datossala.activo,
          idPelicula:this.datossala.idPelicula

        })
        //console.log(this.Peliculas)
      },
      error: (error)=>{
        console.log(error);
      }
    })
  }

  CreaSalas(){
    this.myForm.markAllAsTouched();
    if (this.myForm.valid){
      console.log("Datos Formulario", this.myForm.value)
      if (this.esedit==false){
      this.Salasservice.crearSala(this.myForm.value)
      .subscribe({
        next: (data) => {
          //console.log(data)
          this.router.navigate(['/admin/salas'])
 
        },
        error: (error)=>{
          console.log(error);
        }
      })
    }
    else {
      this.Salasservice.editarSala(this.idSala,this.myForm.value)
      .subscribe({
        next: (data) => {
          //console.log(data)
          this.router.navigate(['/admin/salas'])
 
        },
        error: (error)=>{
          console.log(error);
        }
      })

    }


    }else{
    this.myForm.markAllAsTouched();
    this.messageservice.add({severity:'error', summary:'Error Formulario', detail: 'Revisa los campos del formulario. ' });
    }
    
  }

}

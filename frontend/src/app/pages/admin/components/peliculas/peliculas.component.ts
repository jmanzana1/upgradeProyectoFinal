import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import { Router } from '@angular/router';
import {PeliculasService} from '../../../../services/peliculas.service';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.scss']
})
export class PeliculasComponent implements OnInit {
 Peliculasform: FormGroup;

  constructor(
    public fb: FormBuilder,
    public peliculasService:PeliculasService,
    public router: Router

  ) { 
    this.Peliculasform=this.fb.group({
      nombre:[''],
      Descripcion:[''],
      genero:[''],
      imgCarousel:[''],
      imgFicha:[''],
      trailer:['']

    })

  }

  ngOnInit(){  }

  CreaPeliculas(){
    console.log("peliculas",this.Peliculasform.value)
    this.peliculasService.crearPelicula(this.Peliculasform.value)
    .subscribe({
      next: (data) => {
        console.log("data",data);
      },
      error: (error)=>{
        console.log(error);
      }
    })

  }

}

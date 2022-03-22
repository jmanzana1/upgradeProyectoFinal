import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup , Validators} from "@angular/forms";
import { Router } from '@angular/router';
import {PeliculasService} from '../../../../services/peliculas.service';
import { variablesConstantes } from '../../../../app.variables';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.scss']
})
export class PeliculasComponent implements OnInit {

  public urlMaster: string = variablesConstantes.urlMaster;
  public imgCarouselSrc: string = '';
  public imgFichaSrc: string = '';
  public trailerSrc: string = '';
  public fileName = '';
  public imgcarousel: string = '';
  public imgFichaweb: string = '';
  public trailerweb: string = '';
  public submitted:Boolean=false;
  public imgCarouselerror:Boolean=false;
  public imgFichaerror:Boolean=false;
  public trailererror:Boolean=false;

  myForm = new FormGroup({
    nombre: new FormControl('', [Validators.required, Validators.minLength(3)]),
    descripcion: new FormControl('', [Validators.required, Validators.minLength(50)]),
    genero: new FormControl('', [Validators.required, Validators.minLength(3), Validators.pattern('^[a-zA-Z ]*$')]),
    duracion: new FormControl('', [Validators.required, Validators.minLength(2),Validators.maxLength(3),Validators.pattern("^[0-9]*$")]),
    pais: new FormControl('', [Validators.required, Validators.minLength(3)]),
    imdb: new FormControl('', [Validators.required, Validators.minLength(1)]),
    director: new FormControl('', [Validators.required, Validators.minLength(8)]),
    actores: new FormControl('', [Validators.required, Validators.minLength(8)]),
    carousel: new FormControl('', [Validators.required, Validators.minLength(3)]),
    estreno: new FormControl('', [Validators.required, Validators.minLength(3)]),
    proximo: new FormControl('', [Validators.required, Validators.minLength(3)]),
    imgCarousel: new FormControl(''),
    imgFicha: new FormControl(''),
    trailer: new FormControl(''),
  })
 
  constructor(public peliculasService:PeliculasService, public router: Router, public http:HttpClient) {}
  

  ngOnInit(): void {
  }


  onFileChangeimgCarousel(event:any) {
    const file:File = event.target.files[0];
  
    if (file) {
      if (file.type=="image/png" || file.type=="image/jpg"){
        this.imgCarouselerror=false;
        this.fileName = file.name;
        const formData = new FormData();
        formData.append("file", file);
        const upload$ = this.http.post(this.urlMaster+"Pelicula/subearchivo", formData, {reportProgress: true,observe: 'events'})
        .subscribe({
          next: (data) => {
            console.log("data",data);
            //setTimeout(() => this.imgcarousel=this.urlMaster+"static/"+this.fileName, 1500);
            },
          complete: () =>{
            this.imgcarousel=this.urlMaster+"static/"+this.fileName
            this.myForm.patchValue({
              imgCarousel:this.urlMaster+"static/"+this.fileName
                });
          }
    })
}
else{
  this.imgCarouselerror=true;
}
}
  }

  onFileChangeimgFicha(event:any) {
    const file:File = event.target.files[0];
    if (file) {
      if (file.type=="image/png" || file.type=="image/jpg"){
        this.imgFichaerror=false;
        this.fileName = file.name;
        const formData = new FormData();
        formData.append("file", file);
        const upload$ = this.http.post(this.urlMaster+"Pelicula/subearchivo", formData, {reportProgress: true,observe: 'events'})
        .subscribe({
          next: (data) => {
            console.log("data",data);
            //setTimeout(() => this.imgcarousel=this.urlMaster+"static/"+this.fileName, 1500);
            },
          complete: () =>{
            this.imgFichaweb=this.urlMaster+"static/"+this.fileName
            this.myForm.patchValue({
              imgFicha:this.urlMaster+"static/"+this.fileName
                });
          }
    })
}
else{
  this.imgFichaerror=true;
}
    }
  }

  onFileChangetrailer(event:any) {
    const file:File = event.target.files[0];
    console.log(file)
    if (file) {
      if (file.type=="video/mp4" || file.type=="video/webm"){
        this.trailererror=false;
        this.fileName = file.name;
        const formData = new FormData();
        formData.append("file", file);
        const upload$ = this.http.post(this.urlMaster+"Pelicula/subearchivo", formData, {reportProgress: true,observe: 'events'})
        .subscribe({
          next: (data) => {
            console.log("data",data);
            //setTimeout(() => this.imgcarousel=this.urlMaster+"static/"+this.fileName, 1500);
            },
          complete: () =>{
            this.trailerweb=this.urlMaster+"static/"+this.fileName;
            this.myForm.patchValue({
                trailer:this.urlMaster+"static/"+this.fileName
                  });
          }
    })
}
else{
  this.trailererror=true;
}
    }
  }





  CreaPeliculas(){
    if (this.myForm.valid && this.trailererror==false && this.imgFichaerror==false &&this.imgCarouselerror==false){
    console.log("peliculas",this.myForm.value)
    this.peliculasService.crearPelicula(this.myForm.value)
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

}



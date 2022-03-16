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

  urlMaster: string = variablesConstantes.urlMaster;
  imgCarouselSrc: string = '';
  imgFichaSrc: string = '';
  trailerSrc: string = '';
  fileName = '';
  imgcarousel: string = '';
  imgFichaweb: string = '';
  trailerweb: string = '';

  myForm = new FormGroup({
    nombre: new FormControl('', [Validators.required, Validators.minLength(3)]),
    descripcion: new FormControl('', [Validators.required, Validators.minLength(3)]),
    genero: new FormControl('', [Validators.required, Validators.minLength(3)]),
    duracion: new FormControl('', [Validators.required, Validators.minLength(3)]),
    pais: new FormControl('', [Validators.required, Validators.minLength(3)]),
    imdb: new FormControl('', [Validators.required, Validators.minLength(3)]),
    director: new FormControl('', [Validators.required, Validators.minLength(3)]),
    actores: new FormControl('', [Validators.required, Validators.minLength(3)]),
    carousel: new FormControl('', [Validators.required, Validators.minLength(3)]),
    estreno: new FormControl('', [Validators.required, Validators.minLength(3)]),
    proximo: new FormControl('', [Validators.required, Validators.minLength(3)]),
    imgCarousel: new FormControl('', [Validators.required]),
    imgFicha: new FormControl('', [Validators.required]),
    trailer: new FormControl('', [Validators.required]),
  })
 
  constructor(public peliculasService:PeliculasService, public router: Router, public http:HttpClient) {}
  

  ngOnInit(): void {
  }

  get f(){
    return this.myForm.controls;
  }

  onFileChangeimgCarousel(event:any) {
    const file:File = event.target.files[0];
    if (file) {
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
  }

  onFileChangeimgFicha(event:any) {
    const file:File = event.target.files[0];
    if (file) {
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
  }

  onFileChangetrailer(event:any) {
    const file:File = event.target.files[0];
    if (file) {
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
  }


  // onFileChangeimgCarousel2(event:any) {
  //   const reader = new FileReader();
  //   if(event.target.files && event.target.files.length) {
  //     const [file] = event.target.files;
  //     console.log(file);
  //     reader.readAsDataURL(file);
  //     reader.onload = () => {
  //       this.imgCarouselSrc = reader.result as string;
  //       this.myForm.patchValue({
  //         fileSourceimgCarousel: reader.result,
  //         imgCarousel:file.name
  //       });
  //     };
  //   }
  // }



  // onFileChangetrailer(event:any) {
  //   const reader = new FileReader();
  //   if(event.target.files && event.target.files.length) {
  //     const [file] = event.target.files;
  //     console.log(file);
  //     reader.readAsDataURL(file);
  //     reader.onload = () => {
  //       this.trailerSrc = reader.result as string;
  //       this.myForm.patchValue({
  //         fileSourcetrailer: reader.result,
  //         trailer:file.name
  //       });
  //     };
  //   }
  // }





  CreaPeliculas(){
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

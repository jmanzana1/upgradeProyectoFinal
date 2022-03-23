import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup , Validators} from "@angular/forms";
import { Router ,ActivatedRoute } from '@angular/router';
import {PeliculasService} from '../../../../services/peliculas.service';
import { variablesConstantes } from '../../../../app.variables';
import { MessageService } from 'primeng/api';


@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.scss'],
  providers:[MessageService]
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
  public imgCarouselvacio:Boolean=false;
  public imgFichavacio:Boolean=false;
  public trailervacio:Boolean=false;
  public idpelicula:any='';
  public datospelicula:any='';
  public esedit:boolean=false;

  // PRODUCCION
  myForm = new FormGroup({
    nombre: new FormControl('', [Validators.required, Validators.minLength(3)]),
    descripcion: new FormControl('', [Validators.required, Validators.minLength(50)]),
    genero: new FormControl('', [Validators.required, Validators.minLength(3), Validators.pattern('^[a-zA-ZáéíóúÁÉÍÓÚ,]*$')]),
    duracion: new FormControl('', [Validators.required, Validators.minLength(2),Validators.maxLength(3),Validators.pattern("^[0-9]*$")]),
    pais: new FormControl('', [Validators.required, Validators.minLength(3)]),
    imdb: new FormControl('', [Validators.required, Validators.minLength(1),Validators.pattern("^[0-9]{1}[.][0-9]{1}$")]),
    director: new FormControl('', [Validators.required, Validators.minLength(8)]),
    actores: new FormControl('', [Validators.required, Validators.minLength(8)]),
    carousel: new FormControl('', [Validators.required, Validators.minLength(3)]),
    estreno: new FormControl('', [Validators.required, Validators.minLength(3)]),
    proximo: new FormControl('', [Validators.required, Validators.minLength(3)]),
    imgCarousel: new FormControl(''),
    imgFicha: new FormControl(''),
    trailer: new FormControl(''),
  })

  // TEST
  // myForm = new FormGroup({
  //   nombre: new FormControl('nombreTest', [Validators.required, Validators.minLength(3)]),
  //   descripcion: new FormControl('descripciondescripciondescripciondescripciondescripcion', [Validators.required, Validators.minLength(50)]),
  //   genero: new FormControl('genero', [Validators.required, Validators.minLength(3), Validators.pattern('^[a-zA-Z ]*$')]),
  //   duracion: new FormControl('120', [Validators.required, Validators.minLength(2),Validators.maxLength(3),Validators.pattern("^[0-9]*$")]),
  //   pais: new FormControl('USA', [Validators.required, Validators.minLength(3)]),
  //   imdb: new FormControl('6.6', [Validators.required, Validators.minLength(1)]),
  //   director: new FormControl('Paco Melenas', [Validators.required, Validators.minLength(8)]),
  //   actores: new FormControl('Aitor tilla', [Validators.required, Validators.minLength(8)]),
  //   carousel: new FormControl(true, [Validators.required, Validators.minLength(3)]),
  //   estreno: new FormControl(true, [Validators.required, Validators.minLength(3)]),
  //   proximo: new FormControl(false, [Validators.required, Validators.minLength(3)]),
  //   imgCarousel: new FormControl(''),
  //   imgFicha: new FormControl(''),
  //   trailer: new FormControl(''),
  // })
 
  constructor(public peliculasService:PeliculasService, public router: Router, public http:HttpClient, private messageservice:MessageService,private activatedRoute: ActivatedRoute) {}
  

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      this.idpelicula = params.get('id')
      //console.log( this.idpelicula)
      if (this.idpelicula!=''&& this.idpelicula!=null){
        this.getpelicula(this.idpelicula);
        this.esedit=true;
      }
  })
}


  onFileChangeimgCarousel(event:any) {
    const file:File = event.target.files[0];
  
    if (file) {
      if (file.type=="image/png" || file.type=="image/jpg"|| file.type=="image/jpeg"){
        this.imgCarouselerror=false;
        this.fileName = file.name;
        const formData = new FormData();
        formData.append("file", file);
        const upload$ = this.http.post(this.urlMaster+"Pelicula/subearchivo", formData, {reportProgress: true,observe: 'events'})
        .subscribe({
          next: (data) => {
            console.log("data",data);
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
    if (this)
    if (file) {
      if (file.type=="image/png" || file.type=="image/jpg"|| file.type=="image/jpeg"){
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
    this.myForm.markAllAsTouched();
    if (this.trailerweb==''){
      this.trailervacio=true;
    }
    if (this.imgFichaweb==''){
      this.imgFichavacio=true;
    }
    if (this.imgcarousel==''){
      this.imgCarouselvacio=true;
    }


    if (this.myForm.valid && this.trailererror==false && this.imgFichaerror==false &&this.imgCarouselerror==false){
      this.trailervacio=false;
      this.imgFichavacio=false;
      this.imgCarouselvacio=false;
    //console.log("peliculas",this.myForm.value)
      if (this.esedit==false){
        this.peliculasService.crearPelicula(this.myForm.value)
        .subscribe({
          next: (data) => {
            //console.log("data",data);
            this.router.navigate(['/admin/peliculas'])
          },
          error: (error)=>{
            console.log(error);
          }
        })
      }
      else{
        this.peliculasService.editarPelicula(this.idpelicula,this.myForm.value)
        .subscribe({
          next: (data) => {
            //console.log("data",data);
            this.router.navigate(['/admin/peliculas'])
          },
          error: (error)=>{
            console.log(error);
          }
        })

      }
  }
  else{
    //console.log("No valido")
    this.myForm.markAllAsTouched();
    this.messageservice.add({severity:'error', summary:'Error Formulario', detail: 'Revisa los campos del formulario. ' });
  }
    

  }


  public getpelicula(idpelicula: any){
    this.peliculasService.getPeliculaById(idpelicula)
    .subscribe({
      next: ( data ) => { 
          this.datospelicula=data;
        this.myForm.patchValue({
          nombre:this.datospelicula.nombre,
          descripcion:this.datospelicula.descripcion,
          genero:this.datospelicula.genero,
          duracion:this.datospelicula.duracion,
          pais:this.datospelicula.pais,
          imdb:this.datospelicula.imdb,
          director:this.datospelicula.director,
          actores:this.datospelicula.actores,
          carousel:this.datospelicula.carousel,
          estreno:this.datospelicula.estreno,
          proximo:this.datospelicula.proximo,
          imgCarousel:this.datospelicula.imgCarousel,
          imgFicha:this.datospelicula.imgFicha,
          trailer:this.datospelicula.trailer

        })
        this.trailerweb=this.datospelicula.trailer;
        this.imgFichaweb=this.datospelicula.imgFicha;
        this.imgcarousel=this.datospelicula.imgCarousel;

      },
      error: ( error ) => { 
        this.messageservice.add({severity:'error', summary:'Error Cartelera', detail: error.message });
      }
     });
  
  }

}



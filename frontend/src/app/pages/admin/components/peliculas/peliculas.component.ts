import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import { Router } from '@angular/router';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.scss']
})
export class PeliculasComponent implements OnInit {
 // Peliculasform: FormGroup;

  constructor(
    public fb: FormBuilder,
    public router: Router

  ) { }

  ngOnInit(): void {
  }

}

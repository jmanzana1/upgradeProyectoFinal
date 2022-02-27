import { Component, OnInit } from '@angular/core';
import { Footer } from './models/footer.models';
import './data.json'
import data from './data.json'

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  public movies!: Footer[];
  public events!: Footer[];
  public group!: Footer[];
  public theaters!: Footer[];
  public technologies!: Footer[];
  public social!: Footer[];

  constructor() {

    this.movies = data.movies,
    this.events = data.events,
    this.group = data.group,
    this.theaters = data.theaters,
    this.technologies = data.technologies,
    this.social = data.social
    
  }

  ngOnInit(): void {
  }

}

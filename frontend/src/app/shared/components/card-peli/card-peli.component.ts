import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-peli',
  templateUrl: './card-peli.component.html',
  styleUrls: ['./card-peli.component.scss']
})
export class CardPeliComponent implements OnInit {
  @Input() id!:string | undefined;
  @Input() nombre!:string | undefined;
	@Input() imgCaratula!:string | undefined;
	@Input() boton:boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

}

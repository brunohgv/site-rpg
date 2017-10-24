import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-mesa',
  templateUrl: './card-mesa.component.html',
  styleUrls: ['./card-mesa.component.css']
})
export class CardMesaComponent implements OnInit {

  @Input() mesa: any

  constructor() { }

  ngOnInit() {
  }

}

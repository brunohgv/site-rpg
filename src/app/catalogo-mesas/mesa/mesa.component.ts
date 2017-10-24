import { Component, OnInit, Input } from '@angular/core';

import { Mesa } from './mesa.model';

@Component({
  selector: 'app-mesa',
  templateUrl: './mesa.component.html',
  styleUrls: ['./mesa.component.css']
})
export class MesaComponent implements OnInit {

  @Input() mesa: Mesa

  constructor() { }

  ngOnInit() {
  }

}

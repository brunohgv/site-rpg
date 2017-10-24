import { Component, OnInit } from '@angular/core';

import {Mesa} from './mesa/mesa.model'

@Component({
  selector: 'app-catalogo-mesas',
  templateUrl: './catalogo-mesas.component.html',
  styleUrls: ['./catalogo-mesas.component.css']
})
export class CatalogoMesasComponent implements OnInit {

  mesas: Mesa[] = [
    {
    id: "mesa-recife",
    sistema: "Dungeons and Dragons",
    edicao: "5.0",
    aventura: "Elemental Evil",
    cenario: "",
    imagem: "assets/img/sistemas/dandd.png",
    descricao: "Mesa muito legal, com gente feliz, divertida e um halfling ladino boladão chamado Sil",
    cidade: "Recife",
    estado: "PE",
    endereco: "Rua sete pecados, Arruda",
    horario: "19:30",
    prefixo: "81",
    telefone: "99456-8657", 
    minJogadores: 3,
    maxJogadores: 7
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}

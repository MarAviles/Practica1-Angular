import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contenido',
  templateUrl: './contenido.component.html',
  styleUrls: ['./contenido.component.css']
})


export class ContenidoComponent implements OnInit {

  hola = 'Esto es una variable dinámica';
  fecha = new Date();


  constructor() { }

  ngOnInit(): void {
  }

}

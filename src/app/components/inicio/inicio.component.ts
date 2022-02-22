import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { User } from 'src/app/interface/user.modelo';
import { Coment } from 'src/app/interface/coment.modelo';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  formulario1 = this.FormularioInter.group({
      nombre:'',
      apellido:'',
      pagina:''
  });

  formulario2 = this.FormularioInter.group({
    mejoras:'',
    gustos:'',
  });

  usuarios:User[]=[];
  comentarios:Coment[]=[];
  status1 = false;
  status2 = false;
  constructor(private FormularioInter:FormBuilder) { }

  ngOnInit(): void {
  }

  guardar1() {
    let nuevoUser : User = {
      nombre:this.formulario1.get('nombre')?.value,
      apellido:this.formulario1.get('apellido')?.value,
      pagina:this.formulario1.get('pagina')?.value
    }
    this.usuarios.push(nuevoUser);
    this.status1 = true;
    this.limpiarForm1();
  }

  guardar2() {
    let nuevoComent : Coment = {
      mejoras:this.formulario2.get('mejoras')?.value,
      gustos:this.formulario2.get('gustos')?.value
  }

    this.comentarios.push(nuevoComent);
    this.status2 = true;
    this.limpiarForm2();
  }

  limpiarForm1() {
    this.formulario1.reset();
  }

  limpiarForm2() {
    this.formulario2.reset();
  }

}

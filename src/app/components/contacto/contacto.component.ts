import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  formulario = this.formBuilder.group({
    nombre: new FormControl('', Validators.required),
    apellido: new FormControl('', Validators.required),
    email: new FormControl('', Validators.email),
    comentario: new FormControl('', Validators.required)

});

nombre = '';
apellido = '';
email = '';
comentario = '';
status = false;

  constructor(private formBuilder: FormBuilder,) { }


  ngOnInit(): void {

  }

  onsubmit(){
    this.status = true;
    this.nombre = this.formulario.get('nombre')?.value;
    this.apellido = this.formulario.get('apellido')?.value;
    this.email = this.formulario.get('email')?.value;
    this.comentario = this.formulario.get('comentario')?.value;
   /* console.log(this.formulario.value);*/
  }
  
}


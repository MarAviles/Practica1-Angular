import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interface/user.modelo';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-listado-usuarios',
  templateUrl: './listado-usuarios.component.html',
  styleUrls: ['./listado-usuarios.component.css']
})
export class ListadoUsuariosComponent implements OnInit {

  usuarios:User[]=[];
  first: User = {
    nombre:  '',
    apellido:  '',
    pagina: '',
  }

  /*last: User = {
    nombre:  '',
    apellido:  '',
    pagina: '',
  }*/

  last:User = {} as User

  firstLast: User[]=[];
  constructor(private UserService: UserService) { }

  ngOnInit(): void {
    this.usuarios = this.UserService.getAll();

    this.first = this.UserService.getFirst();
    if(this.usuarios.length > 1){
      this.last = this.UserService.getLast();
    }
         
  }
  

}

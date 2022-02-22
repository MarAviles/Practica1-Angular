import { Injectable } from '@angular/core';
import { User } from '../interface/user.modelo';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  usuarios: User[]=[];
  longitud: number = 0;
  constructor() { }

  getAll(){
    return this.usuarios;
  }

  addUser(user:User){
    this.usuarios.push(user);
  }

  getFirst(){  

    return this.usuarios[0]
  }

  getLast(){
    this.longitud = this.usuarios.length-1;

    return this.usuarios[this.longitud]
  }
}

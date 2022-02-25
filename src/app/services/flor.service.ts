import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Flor } from '../interface/flor.modelo';

@Injectable({
  providedIn: 'root'
})
export class FlorService {

  url:string = "http://localhost:8080/flores";

  constructor(private HttpClient: HttpClient) { }

  getFlores(){
    return this.HttpClient.get(this.url);
  }

  sendFlor(flor: Flor){
    return this.HttpClient.post(this.url,flor)
  }
}

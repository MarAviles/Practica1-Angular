import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Flor } from 'src/app/interface/flor.modelo';
import { FlorService } from 'src/app/services/flor.service';

@Component({
  selector: 'app-flores',
  templateUrl: './flores.component.html',
  styleUrls: ['./flores.component.css']
})
export class FloresComponent implements OnInit {

  formulario = this.FormBuilder.group({
    nombre:'',
    especie:'',
    color:''
  });

  constructor(private FormBuilder : FormBuilder, private FlorService: FlorService) { }

  ngOnInit(): void {
    this.FlorService.getFlores().subscribe((res:any)=>{
      console.log(res);
    }, (err) =>{
      console.log(err);
    });
  }

  guardar(){
    
  }

  

}

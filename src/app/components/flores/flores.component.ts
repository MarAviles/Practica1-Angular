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

  flores: Flor[] = [];
  status = false;

  formulario = this.FormBuilder.group({
    nombre:'',
    especie:'',
    color:''
  });

  constructor(private FormBuilder : FormBuilder, private FlorService: FlorService) { }

  ngOnInit(): void {
  }

  guardar(){
    // let flor: Flor = {
    //   nombre: this.formulario.get('nombre')?.value,
    //   especie:this.formulario.get('especie')?.value,
    //   color: this.formulario.get('color')?.value
    // }
    // console.log(flor);

    this.FlorService.sendFlor(this.formulario.value).subscribe((res: any)=>{
      console.log(res);
    });  
  }


  cleanForm(){
    this.formulario.reset();
  }


  showFlores(){
    this.FlorService.getFlores().subscribe((res:any)=>{
      this.flores = res;
      console.table(res);
      this.status = true;
    }, (err) =>{
      console.log(err);
    });
  }

}

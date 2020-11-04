import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre      :string      = "Capitán America";
  nombre2      :string     = "dAnnY ArmIjoS";
  arreglo                  =[1,2,3,4,5,6,7,8,9,10];
  PI          :number      =Math.PI;
  porcentaje  :number      =0.234;
  salario     :number      = 1234.5;
  fecha       :Date        = new Date();
  idioma      :string      ="es";
  videoUrl    :string      ="https://www.youtube.com/embed/cSnkWzZ7ZAA";
  activar     :boolean     = true;

  //solo funciona con el resolve
  valorPromesa= new Promise<string>((res)=>{
    setTimeout(()=>{
      res('llego la data');
    },4500);
  })

  heroe={
    nombre:  'Logan',
    clave:    'wolverine',
    edad:     500,
    direccion:{
      calle:  'Primera',
      casa:    20
    }
  }
}

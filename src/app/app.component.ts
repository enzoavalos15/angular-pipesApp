import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  nombre: string = 'enZopoLIs';
  valor: number = 56000;

  mostrarNombre(){
    console.log(this.nombre);
    console.log(this.valor);
    
  }



}

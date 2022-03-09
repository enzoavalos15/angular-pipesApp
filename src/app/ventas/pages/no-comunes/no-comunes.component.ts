import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [],
})
export class NoComunesComponent {
  //i18nSelect
  nombre = 'Enzo';
  genero = 'masculino';

  recibirMap = {
    masculino: 'recibirlo',
    femenino: 'recibirla',
  };

  selectActivo: boolean = false;

  cambiarSelect(): void {
    this.selectActivo = !this.selectActivo;
    if (this.selectActivo === false) {
      this.nombre = 'Enzo';
      this.genero = 'masculino';
    } else {
      this.nombre = 'Nadia';
      this.genero = 'femenino';
    }
  }

  //i18nPlural

  clientes: string[] = ['Enzo','Nadia','Franco','Genaro','Eric'];
  clientesBorrados: string[]=[];

  clientesMap = {
    '=0': 'no hay clientes esperando',
    '=1': 'tenemos 1 cliente esperando',
    other: 'tenemos # clientes esperando',
  };
  
  agregarCliente(){
    this.clientes.push(this.clientesBorrados.pop()!);
  }
  borrarCliente() {
    this.clientesBorrados.push(this.clientes.pop()!);
  }

  //keyValue 

  persona = {
    nombre: 'Enzo',
    edad: 25,
    ciudad: 'Mendoza',
    profesion: 'Programador'
  }

  //async pipe
  miObservable = interval(2000);

  valorPromesa = new Promise((resolve, reject)=>{
    setTimeout(() => {
      resolve('Tenemos data de promesa 3500ms de timeout');
    }, 3500);
  })

}

import { Component } from '@angular/core';
import { Jugadores } from '../../interfaces/ventas.interface';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [],
})
export class OrdenarComponent {
  mayus: boolean = true;

  tipo:string = '';

  jugadores: Jugadores[] = [
    {
      nombre: 'Enzo',
      apellido: 'Avalos',
      edad: 24,
      activo: true,
      posicion: 'Ala-pivot',
    },
    {
      nombre: 'Nacho',
      apellido: 'Diaz',
      edad: 26,
      activo: true,
      posicion: 'Escolta',
    },
    {
      nombre: 'Martin',
      apellido: 'Fernandez',
      edad: 24,
      activo: true,
      posicion: 'Alero',
    },
    {
      nombre: 'Luis',
      apellido: 'Scola',
      edad: 42,
      activo: false,
      posicion: 'Ala-pivot',
    },
    {
      nombre: 'Emanuel',
      apellido: 'Ginobili',
      edad: 43,
      activo: false,
      posicion: 'Escolta',
    },
    {
      nombre: 'Shaquille',
      apellido:"O'neal",
      edad: 47,
      activo: false,
      posicion: 'Pivot',
    },
    {
      nombre: 'Luka',
      apellido: 'Doncic',
      edad: 21,
      activo: true,
      posicion: 'Base',
    },
    {
      nombre: 'Facundo',
      apellido: 'Gago',
      edad: 25,
      activo: true,
      posicion: 'Base',
    },
    {
      nombre: 'Earvin',
      apellido: 'Johnson',
      edad: 51,
      activo: false,
      posicion: 'Base',
    },
  ];

  cambiarPipe() {
    this.mayus = !this.mayus;
  }

  ordenar(valor:string){
    this.tipo = valor;
  }

}

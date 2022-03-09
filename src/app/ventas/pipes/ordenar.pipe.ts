import { Pipe, PipeTransform } from '@angular/core';
import { Jugadores } from '../interfaces/ventas.interface';

@Pipe({
  name: 'ordenar',
})
export class OrdenarPipe implements PipeTransform {
  transform(jugadores: Jugadores[], tipo: string = 'nombre'): Jugadores[] {
    switch (tipo) {
      case 'nombre':
        return (jugadores = jugadores.sort((jug1, jug2) =>
          jug1.nombre > jug2.nombre ? 1 : -1
        ));
      case 'apellido':
        return (jugadores = jugadores.sort((jug1, jug2) =>
          jug1.apellido > jug2.apellido ? 1 : -1
        ));
      case 'posicion':
        return (jugadores = jugadores.sort((jug1, jug2) =>
          jug1.posicion > jug2.posicion ? 1 : -1
        ));
      case 'activo':
        return (jugadores = jugadores.sort((jug1, jug2) =>
          jug1.activo > jug2.activo ? 1 : -1
        ));
      case 'edad':
        return (jugadores = jugadores.sort((jug1, jug2) =>
          jug1.edad > jug2.edad ? 1 : -1
        ));
      default:
        return jugadores;
    }


  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [],
})
export class BasicosComponent {
  stringUpper: string = 'no te escucho';
  stringLower: string = 'PARA DE GRITAR';
  stringTitle: string = 'lionel andres messi';

  fecha: Date = new Date();

  upper: boolean = false;
  lower: boolean = false;
  title: boolean = false;
}

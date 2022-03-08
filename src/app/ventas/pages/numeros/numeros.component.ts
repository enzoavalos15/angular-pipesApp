import { Component } from '@angular/core';

@Component({
  selector: 'app-numeros',
  templateUrl: './numeros.component.html',
  styles: [
  ]
})
export class NumerosComponent {

ventasNetas:number = 23455991.4573;
porcentaje:number = 0.2387;

btnVentasNetas: boolean = false;
btnCurrency: boolean = false;
btnPorcentaje: boolean = false;

}

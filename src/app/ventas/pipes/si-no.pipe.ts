import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sino'
})
export class SiNoPipe implements PipeTransform {

  transform(valor: boolean): string {
    return valor ? 'si' : 'no';
  }

}

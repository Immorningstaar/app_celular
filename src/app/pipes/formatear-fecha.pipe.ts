import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatearFecha'
})
export class FormatearFechaPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}

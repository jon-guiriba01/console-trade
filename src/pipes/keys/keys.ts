import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'keys',
})
export class KeysPipe implements PipeTransform {
  transform(value, args:string[]) : any {
    let values = [];
    for (let key in value) {
      values.push(value);
    }
    return values;
  }
}

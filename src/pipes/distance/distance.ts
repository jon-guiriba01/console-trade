import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the DistancePipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'ceil',
})
export class DistancePipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(value: string, ...args) {
    return Math.ceil(parseFloat(value))
  }
}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'alphaList'
})
export class AlphaListPipe implements PipeTransform {

  transform(value: string[]): string[] {
    return value.sort();
  }

}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(produit: any, ref: any): Array<string> {
    if ( produit !== undefined ) { 
    if (ref === undefined) {
      return produit;
    }
    return produit.filter(function (filtre) {
      return filtre.productSeller.includes(ref);
    });
  }
  }
}

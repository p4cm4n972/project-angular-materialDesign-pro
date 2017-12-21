import { Component, OnInit } from '@angular/core';

/**
 * SERVICE : PRODUIT
 */
import { ProduitService } from '../produit.service';

import { IProduit } from './mock-produit';

@Component({
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.scss'],
  providers: [ProduitService]
})
export class ProduitComponent implements OnInit {
  errorMessage: string;
  _listFilter: string;
  get listFilter(): string {
      return this._listFilter;
  }
  set listFilter(value: string) {
      this._listFilter = value;
      this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.produit;
  }

  filteredProducts: IProduit[];
  produit: IProduit[] = [];

  constructor(private _produitService: ProduitService) { }

  performFilter(filterBy: string): IProduit[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.produit.filter((produit: IProduit) =>
          produit.categorieSecteur.toLocaleLowerCase().indexOf(filterBy) !== -1);
}

  ngOnInit() {
    this._produitService.getProduit()
      .subscribe(produit => {
        this.produit = produit;
        this.filteredProducts = this.produit;
        this.listFilter = ' ';
      },
      error => this.errorMessage = <any>error);
  }

  onFiltre(filtre): void {
this.listFilter = filtre;
  }
}

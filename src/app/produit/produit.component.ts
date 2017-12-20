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
  produit: IProduit[] = [];
  constructor(private _produitService: ProduitService) { }

  ngOnInit() {
    this._produitService.getProduit()
      .subscribe(produit => {
        this.produit = produit;
      },
      error => this.errorMessage = <any>error);
  }
}

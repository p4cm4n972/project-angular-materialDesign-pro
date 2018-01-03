import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

/**
 * SERVICE : PRODUIT
 */
import { ProduitService } from '../produit.service';

import { IProduit } from '../produit/mock-produit';

@Component({
  selector: 'app-produit-list',
  templateUrl: './produit-list.component.html',
  styleUrls: ['./produit-list.component.scss'],
  providers: [ ProduitService ]
})
export class ProduitListComponent implements OnInit {
  errorMessage: string;
  produit;
  constructor( private _route: ActivatedRoute,
    private _router: Router,
    private _produitService: ProduitService,
    private location: Location ) { }

  ngOnInit() {
    console.log('INIT detail');
    let id = this._route.snapshot.paramMap.get('id');
    this.getProduitList(id);
  }
  getProduitList(id: string) {
    this._produitService.getProduitList(id).subscribe(
      produit => this.produit = produit,
      error => this.errorMessage = <any>error);
  }
    onBack(): void {
    this.location.back();
  }
}

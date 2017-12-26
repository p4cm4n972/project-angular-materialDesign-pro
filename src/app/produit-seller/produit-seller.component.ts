import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProduitService } from '../produit.service';
import { Location } from '@angular/common';

import { IProduit } from '../produit/mock-produit';

@Component({
  selector: 'app-produit-seller',
  templateUrl: './produit-seller.component.html',
  styleUrls: ['./produit-seller.component.scss']
})
export class ProduitSellerComponent implements OnInit {
  errorMessage: string;
  produit;
  constructor( private _route: ActivatedRoute,
    private _router: Router,
    private _produitService: ProduitService,
    private location: Location) { }

  ngOnInit() {
    let id = this._route.snapshot.paramMap.get('id');
    console.log(id);
    this.getProduitSeller(id);
  }
  getProduitSeller(id: string) {
    this._produitService.getProduitSeller(id )
    .subscribe(produit => this.produit = produit,
    error => this.errorMessage = <any>error);
  }
  onBack(): void {
    this.location.back();
  }
}

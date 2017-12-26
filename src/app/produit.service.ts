import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

import { IProduit } from './produit/mock-produit';
import { AlphaListPipe } from './alpha-list.pipe';



@Injectable()
export class ProduitService {

  private _produitUrl = '../api/data.json';
  constructor(private _http: HttpClient) { }

  getProduit(): Observable<IProduit[]> {
    return this._http.get<IProduit[]>(this._produitUrl)
      .do(data => console.log(data))
      .catch(this.handleError);
  }

  getProduitList(id: string): Observable<IProduit> {
    return this.getProduit()
      .map((produit: IProduit[]) => produit.find(p => p.categorieUrl === id))
      .do(data => console.log(data))
      .catch(this.handleError);
  }
  getProduitSeller(id: string): Observable<IProduit> {
    return this.getProduit()
      .map((produit: IProduit[]) => produit.find(p => p.categorieUrl === id))
      .do(data => console.log(data))
      .catch(this.handleError);
  }


  private handleError(err: HttpErrorResponse) {
    console.error(err.message);
    return Observable.throw(err.message);
  }
}

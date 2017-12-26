import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

import { IPartenaire } from './partenaire/mock-partenaire';

@Injectable()
export class PartenaireService {
  private _partenaireUrl = '../api/partenaire-list.json';

  constructor( private _http: HttpClient) { }

  getPartenaire(): Observable<IPartenaire[]> {
    return this._http.get<IPartenaire[]>(this._partenaireUrl);
}
getPartenaireDetail(id: string): Observable<IPartenaire> {
  return this.getPartenaire()
  .map((partenaire: IPartenaire[]) => partenaire.find(p => p.partenaireName === id ))
  .do(data => console.log(data))
  .catch(this.handleError);
}


private handleError(err: HttpErrorResponse) {
  console.error(err.message);
  return Observable.throw(err.message);
}

}

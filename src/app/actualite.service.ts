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

import { IActualite } from './news/mock-actualite';
import { AlphaListPipe } from './alpha-list.pipe';

@Injectable()
export class ActualiteService {

  private _actualiteUrl = '../api/actualite.json';

  constructor( private _http: HttpClient) { }

  getArticle(): Observable<IActualite[]> {
    return this._http.get<IActualite[]>(this._actualiteUrl)
    .do(data => console.log(data))
    .catch(this.handleError);
  }
  private handleError(err: HttpErrorResponse) {
    console.error(err.message);
    return Observable.throw(err.message);
  }
}

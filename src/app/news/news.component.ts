import { Component, OnInit } from '@angular/core';

import { ActualiteService } from '../actualite.service';
import { IActualite } from './mock-actualite';

@Component({
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
  providers : [ ActualiteService ]
})
export class NewsComponent implements OnInit {
  errorMessage: string;
  newsList: IActualite[] = [];
  constructor( private _actualiteService: ActualiteService) { }

  ngOnInit(): void {
    this._actualiteService.getArticle()
    .subscribe( newsList => {
      this.newsList = newsList;
    }, error => this.errorMessage = <any>error);
  }

}

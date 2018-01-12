import { Component, OnInit } from '@angular/core';
import { ActualiteService } from '../actualite.service';
import { IActualite } from '../news/mock-actualite';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers : [ ActualiteService ]

})
export class HomeComponent implements OnInit {
  errorMessage: string;
  newsList: IActualite[] = [];
  constructor(private _actualiteService: ActualiteService) { }




  ngOnInit(): void {
    console.log('Welcome, Everythings seem be allright !');
    this._actualiteService.getArticle()
    .subscribe( newsList => {
      this.newsList = newsList;
    }, error => this.errorMessage = <any>error);
  }
}

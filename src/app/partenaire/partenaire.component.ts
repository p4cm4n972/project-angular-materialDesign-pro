import { Component, OnInit } from '@angular/core';

import { PartenaireService } from '../partenaire.service';
import { IPartenaire } from '../partenaire/mock-partenaire';

@Component({
  templateUrl: './partenaire.component.html',
  styleUrls: ['./partenaire.component.scss']
})
export class PartenaireComponent implements OnInit {
  errorMessage: string;
  partList: IPartenaire[] = [];

  constructor(private _partenaireService: PartenaireService) { }

  ngOnInit(): void {
    this._partenaireService.getPartenaire()
    .subscribe( partlist => {
      this.partList = partlist;
    },
  error => this.errorMessage = <any>error);
  }

}

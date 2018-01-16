import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  public map: any = {
    lat: 48.621483, lng: 2.330711, zoom: 10
  };
  constructor() { }

  ngOnInit() {
  }

}

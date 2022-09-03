import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  cards: Array<any>

  url = '/api/skills'
  constructor(private httpClient: HttpClient){

  }

  ngOnInit(): void {
    this.httpClient.get(this.url).subscribe((cards: Array<any>) => this.cards = cards)
  }

  name = 'Angular';
}

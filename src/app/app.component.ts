import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  cards: Array<any>;
  constructor(private httpClient: HttpClient){

  }
  ngOnInit() {

    this.httpClient.get('/api/skills').subscribe((ret: Array<any>) => this.cards = ret
    );
   
  }
  name = 'Angular';
}

import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  loading: boolean = false;
  cards: Array<any>;

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.loading = true;
    this.httpClient.get('/api/skills').subscribe((ret: Array<any>) => {
      this.cards = ret
      this.loading = false;
    });
  }

}

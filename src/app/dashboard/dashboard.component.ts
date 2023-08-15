import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Card } from '../services/cards.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  cards: Array<Card>;
  public isLoading: boolean = false;

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.httpClient.get('/api/skills').subscribe((ret: Array<Card>) => {
      this.cards = ret;
      this.isLoading = !this.isLoading;
    });
  }

}

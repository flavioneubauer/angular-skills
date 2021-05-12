import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoadingService } from '../loading/loading.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  cards: Array<any>;

  constructor(private httpClient: HttpClient, 
    private loading: LoadingService) { }

  ngOnInit() {
    
    this.loading.start();
     this.httpClient.get('/api/skills').subscribe((ret: Array<any>) => {
       this.cards = ret
       this.loading.stop();
      });

  }

}

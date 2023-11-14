import { Component, OnInit } from '@angular/core';
import { LoadService } from 'src/app/services/load.service';
import { Card } from '../../models/card.model';
import { CardService } from '../../services/card.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  cards: Array<Card>;

  constructor(private cardService: CardService, private load: LoadService) { }

  ngOnInit() {
    this.load.open()
    this.cardService.getSkills().subscribe((ret: Array<Card>) => {
      setTimeout(() => {
        this.cards = ret
        this.load.close();
      }, 3000);
    });
  }

}

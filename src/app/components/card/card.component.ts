import { Component, OnInit, Input } from '@angular/core';
import { Card } from 'src/app/models/card.model';
import { CardService } from 'src/app/services/card.service';
import { LoadService } from 'src/app/services/load.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() card;
  public color = '#FF2D00'
  constructor(private cardService: CardService, private load: LoadService) { }

  ngOnInit() {
  }

  onLike(card: Card) {
    card.likes += 1
    this.setColor(card)
    this.cardService.updateLike(card).subscribe({
      next(value) {
        
      },
      error(err) { 
        
      },

    })
  }

  onShare(card: any) {
    let a = document.createElement('a');
    a.target = '_blank';
    a.href = 'https://www.linkedin.com/';
    a.click();
  }

  setColor(card: Card) {
    if (card.likes >= 5 && card.likes < 10) {
      card.color = '#3498DB'
    } else
      if (card.likes >= 10) {
        card.color = '#3A884C'
      }
  }

}

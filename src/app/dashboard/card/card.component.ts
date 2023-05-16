import { Component, OnInit, Input } from '@angular/core';
import { ICard } from '../dashboard.interfaces';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  url = "/api/skills";

  @Input() card: ICard;

  likesButtonColor = "";

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.card.likes
  }

  onLike(card: ICard){
    card.likes++;
    this.httpClient.patch(`${this.url}/${card.id}`, card);
  }

  onShare(card: ICard){
    // TODO: abrir o link do seu linkedin
  }

  getButtonColor(card: ICard) {
    if (card.likes >= 10) return "accent"
    else if (card.likes >= 5) return "primary"
    else return null
  }

}

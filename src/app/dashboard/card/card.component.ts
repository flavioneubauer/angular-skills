import { Component, OnInit, Input } from '@angular/core';
import { Skill } from '../interfaces/Skill.model';
import { CardService } from './card.service';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() card: Skill;

  constructor(private cardService: CardService) { }

  ngOnInit() { }

  async onLike(card: Skill){

    const body = {
      ...card,
      likes: card.likes + 1
    }

    this.cardService.updateSkill(body)
    .then(() => { 
      card.likes = card.likes + 1;

    }).catch(error => {
      console.log('add like error ', error)
    });
  }
  

  onShare(card: Skill){
    window.open('https://linkedin.com/in/marcos-nobre');
  }

}

import { Component, OnInit, Input } from '@angular/core';
import { Card, CardsService } from 'src/app/services/cards.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() card;

  public animation = {
    like: false,
    favorite: false,
  }
  constructor(private cardService: CardsService) { }

  ngOnInit() {
  }

  /**
   * send like to API
   * @param card indicates object Card from CardServices
   */
  onLike(card: Card) {
    card.likes = card.likes + 1;

    this.activeAnimationLike(card.likes === 5 || card.likes === 10);

    this.cardService.update(card).subscribe(
      () => { null }
    );

    this.sendLog()
  }


  /**
   * send dislike to API
   * @param card indicates object Card from CardServices
   */
  onDislike(card: Card) {
    card.likes = card.likes - 1;
    this.cardService.update(card).subscribe(
      () => { null }
    );

    this.sendLog()
  }

  /**
   * redirect to profile on LinkedIn
   */
  onShare() {
    window.open('https://www.linkedin.com/in/lucio-brito', '_blank')
  }

  /**
   * actives animations about button like
   * @param moveHeart indicates if also active animation of icon favorite
   */
  activeAnimationLike(moveHeart: boolean = false) {
    this.animation.like = !this.animation.like
    moveHeart ? this.animation.favorite = !this.animation.favorite : null
    setTimeout(() => {
      moveHeart ? this.animation.favorite = !this.animation.favorite : null
      this.animation.like = !this.animation.like
    }, 500)
  }

  /**
   * send a log about the current state of the API
   */
  sendLog() {
    this.cardService.get().subscribe(resp => {
      console.log("response of request:", resp)
    })
  }
}

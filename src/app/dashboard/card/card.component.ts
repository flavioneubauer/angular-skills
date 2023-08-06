import { Component, OnInit, Input } from '@angular/core';
import { CardService } from './card.service';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  animations: [
    trigger('heartbeat', [
      state('normal', style({
        offset: 0,
        transform: 'scale(1.3)'
      })),
      state('liked', style({
        offset: 0.5,
        transform: 'scale(1)'
      })),
      transition('normal => liked', animate('0.6s 100ms ease-in')),
      transition('liked => normal', animate('0.7s 100ms ease-out'))
    ]),
  ]
})
export class CardComponent implements OnInit {

  @Input() card;
  public isUpdatingLikes = false;
  public isLiked = true;

  constructor(public cardService: CardService) { }

  ngOnInit() {}

  onLike(card: any) {
    this.isUpdatingLikes = true;

    this.cardService.incrementLikes(card).subscribe(
      () => {
        this.card.likes++;
        this.isUpdatingLikes = false;
        this.animatiHeart(this.card.likes);
      },
      error => {
        console.error('Error incrementing likes', error);
      }
    )
  };

  animatiHeart(qtd: number) {
    let totalCycles  = qtd * 2;
    let completedCycles = 0;

    const interval = setInterval(() => {
      this.isLiked = !this.isLiked;
      completedCycles++;

      if (completedCycles >= totalCycles ) {
        clearInterval(interval);
      }
    }, 300);
  }

  onShare(card: any) {
    const linkedInShareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`;
    console.log(linkedInShareUrl)
    window.open(linkedInShareUrl, '_blank');
  }

  getLikeButtonClass(likes: number) {
    if (this.card.likes >= 10) {
      return 'like-special';
    } else if (this.card.likes >= 5) {
      return 'like-blue';
    }
    return '';
  }

}

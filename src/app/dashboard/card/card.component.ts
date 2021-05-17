import { Component, OnInit, Input, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input() card;

  constructor(@Inject(DOCUMENT) private document: Document) {}

  @Input() deviceXs: boolean;
  topVal = 0;
  onScroll(e) {
    let scrollXs = this.deviceXs ? 55 : 73;
    if (e.srcElement.scrollTop < scrollXs) {
      this.topVal = e.srcElement.scrollTop;
    } else {
      this.topVal = scrollXs;
    }
  }
  sideBarScroll() {
    let e = this.deviceXs ? 160 : 130;
    return e - this.topVal;
  }

  ngOnInit() {}

  onLike(card: any) {
    // TODO: incrementar o like, salvar via rest
  }

  onShare(card: any) {
    // TODO: abrir o link do seu linkedin
    this.document.location.href =
      'https://www.linkedin.com/in/jefferson-coelho/';
  }
}

import { Component, OnInit, Input, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { SkillServices } from 'src/app/services/skill.services';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input() card;

  constructor(@Inject(DOCUMENT) private document: Document, private skillService: SkillServices) {}

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

  onLike(skill: any) {
    // TODO: incrementar o like, salvar via rest

    skill.likes++
    this.skillService.updateSkill(skill)
    
  }

  get colorOfLikes(){
    if(this.card.likes>=5 && this.card.likes<=10){
      return 'blue'
    }
    if(this.card.likes > 10){
      return 'green'
    }

    return 'pink'

  }

  onShare(card: any) {
    // TODO: abrir o link do seu linkedin
    window.open('https://www.linkedin.com/in/jefferson-coelho/', '_blank')
  }
}

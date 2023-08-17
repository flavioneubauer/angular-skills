import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { SkillCard } from './core/class/skill-card';
import { SkillCardStore } from './core/store/skill-card-store';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  implements OnInit{
  likes$!: Observable<number>;

  constructor(private skillCardStore: SkillCardStore) { }
  
  ngOnInit() {
    this.likes$ = this.skillCardStore.currentValueTotalLikes();
  }
}

import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SkillServices } from '../services/skill.services';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  cards: Array<any>;

  @Input() deviceXs: boolean;

  constructor(private skillService: SkillServices) {}

  ngOnInit() {
    this.getSkills();
    setTimeout(() => {

    }, 10000);
  }

  getSkills(){
    this.skillService
    .getSkills()
    .subscribe((ret: Array<any>) => (this.cards = ret));
  }
}

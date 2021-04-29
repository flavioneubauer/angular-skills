import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { Skill } from './interfaces/Skill.model';
import { DashboardService } from './dashboard.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  cards: Array<Skill>;

  constructor(
    private dashboardService: DashboardService,
    private loaderService: NgxSpinnerService) { }

  async ngOnInit(): Promise<void> {
    this.loaderService.show();

    this.cards = await this.dashboardService.getSkills() as Array<Skill>;
    console.log('get cards ', this.cards)

    this.loaderService.hide();
  }

}

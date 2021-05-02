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

  cards: Skill[];

  constructor(
    private dashboardService: DashboardService,
    private loaderService: NgxSpinnerService) {
      this.cards = [];
    }

  async ngOnInit(): Promise<void> {
    this.loaderService.show(); // spinner indicando que a pagina esta carregando

    this.cards = await this.dashboardService.getSkills() as Skill[];
    this.loaderService.hide(); // depois dos dados serem carregados, o spinner some
  }

}

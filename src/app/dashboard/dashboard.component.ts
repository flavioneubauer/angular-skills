import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BreakpointObserver, BreakpointState, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { ICard } from './dashboard.interfaces';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  isLoading: boolean = true;
  spinnerColor = "primary";
  spinnerMode = "indeterminate";

  cards: Array<ICard>;

  currentBreakpoint: Observable<string>;

  gridCols: number = 3;

  constructor(
    private httpClient: HttpClient,
    private breakpointObserver: BreakpointObserver
  ) {}

  ngOnInit() {
    this.httpClient.get<ICard[]>('/api/skills').subscribe((ret: Array<any>) => {
      this.cards = ret;
      this.isLoading = false;
    });

    this.breakpointObserver.observe([Breakpoints.Medium, Breakpoints.Large])
      .subscribe((state: BreakpointState) => {
        console.log("State: ", state);
        if (state.breakpoints[Breakpoints.Large]) {
          this.gridCols = 3;
        } else if (state.breakpoints[Breakpoints.Medium]) {
          this.gridCols = 2;
        } else {
          this.gridCols = 1;
        }
      });
  }
}

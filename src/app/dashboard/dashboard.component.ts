import { Component, OnInit, HostListener } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  cards: Array<any>;
  layout;

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.httpClient.get('/api/skills').subscribe((ret: Array<any>) => this.cards = ret);
    this.resize(window.innerWidth)  
  }

  sizes = [
    {
      name: 'lg',
      minWidth: 1280,
      maxWidth: 1919
    },
    {
      name: 'md',
      minWidth: 960,
      maxWidth: 1279
    }
  ];

  //Keep listening the window:resize event to call the resize method
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.resize(event.target.innerWidth);
  }

  //Depends the width of the window atributes the correct class layout to the div
  resize(width){
    if(width >= this.sizes.find(size => size.name == 'lg').minWidth){
      this.layout = "layout-lg"
    }
    else if(width >= this.sizes.find(size => size.name == 'md').minWidth){
      this.layout = "layout-md"
    }
    else{
      this.layout = "layout-sm"
    }
  }

}

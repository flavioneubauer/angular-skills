import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  color: any;
  @Input() card;
  cards: Array<any>;

  constructor(private httpClient: HttpClient) { }


  ngOnInit() {
  }

  onLike(card: any) {
    card++;
    this.card.likes = card;

    this.httpClient.put<any>('/api/skills/', this.card).subscribe( (res)=>{
      this.httpClient.get('/api/skills').subscribe((ret: Array<any>) => 
      this.cards = ret);
    });
      

    if (this.card.likes >= 5 && this.card.likes < 10) {
      this.color = "#87CEFA";
    } else if (this.card.likes >= 10) {
      this.color = "#F0E68C";
    }
  }

  onShare(card: any) {
    // TODO: abrir o link do seu linkedin
    window.open("https://www.linkedin.com/in/gleice-juste-ba466563/", "_blank");


  }

}

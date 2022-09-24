import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() card;
  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
  }

  onLike(card: any){
    card.likes += 1 
    // TODO: incrementar o like, salvar via rest
    this.httpClient.put(`/api/skills/${card.id}`, card).subscribe({
      next: (response) => {
        console.log(response)
      },
      error(err) {
          console.log(err)
      },
    });
  }

  onShare(){
    // TODO: abrir o link do seu linkedin
    window.open('https://www.linkedin.com/in/karolina104016/', "_blank");
  }

}

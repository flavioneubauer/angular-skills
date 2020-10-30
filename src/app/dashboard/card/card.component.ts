import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css', './animation.css']
})

export class CardComponent implements OnInit {

  @Input() card;
  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    if(this.card.id == 1){
      document.getElementById("loading").parentNode.removeChild(document.getElementById("loading"));
    }
    document.getElementsByTagName("mat-card")[this.card.id-1].setAttribute("style","--i:"+(this.card.id-1))
   }

  onLike(card: any){
    // TODO: incrementar o like, salvar via rest
    this.card.likes = card.likes + 1;

    this.httpClient.put<number>('/api/skills/'+this.card.id, this.card).subscribe();
    if(this.card.likes == 5){
      document.getElementsByTagName("button")[this.card.id*2 -2].style.backgroundColor = "blue"
    }
    else if(this.card.likes > 10){
      document.getElementsByTagName("button")[this.card.id*2 -2].style.backgroundColor = "red"
    }
  }

  onShare(card: any){
    // TODO: abrir o link do seu linkedin
    // O card é passado como argumento, porém não possui um campo com o linkedin, então entendi que deve
    // ser aberto o meu linkedin pessoal
    window.open("https://www.linkedin.com/in/yurilpbh");
  }

}

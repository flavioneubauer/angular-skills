import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() card;
  likes: any;
  cards: Array<any>;
  constructor(private httpClient: HttpClient,
    private apiService:ApiService) { }

  ngOnInit() {
  }

  onLike(card: any){
    console.log(card)
    card.likes++;
    this.apiService.editLikes(card).subscribe(response=>{
    })
  }

  onShare(card: any){
    // TODO: abrir o link do seu linkedin
  }

}

import { FakeApiService } from './../../fake-api.service';
import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
   

  @Input() card: any;
  constructor(private fakeApiService: FakeApiService) { }

  ngOnInit() {
  }

  onLike(card: any) {
    // TODO: incrementar o like, salvar via rest  
    card.likes += 1
    this.fakeApiService.updateLikes(card).subscribe(() => {      
      console.log(card)
    })


  }

  onShare(card: any) {
    // TODO: abrir o link do seu linkedin
  }

}

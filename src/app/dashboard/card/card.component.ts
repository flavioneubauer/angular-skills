import { Component, OnInit, Input } from '@angular/core';
import { DashboardService } from '../dashboard.service';
import { Skill } from '../interfaces/Skill.model';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() card: Skill;
  @Input() index: string; //identifica unicamente cada card


  constructor(private dashboardService: DashboardService) { }


  ngOnInit() { }


  async onLike(card: Skill){
    // seleciona unicamente o spinner do botao de like que foi clicado
    const spinnerElement = document.getElementById(this.index) as HTMLButtonElement;

    // faz aparecer o spinner indicando que a requisicao esta carregando
    spinnerElement.classList.add('spinner');

    const body = {
      ...card,
      likes: card.likes + 1
    }

    // faz a requisicao para a API
    await this.dashboardService.updateSkill(body).then(async () => {
      this.card = await this.dashboardService.getSkill(card.id) as Skill;
      
    }).catch(error => {
      console.error(error)
    });

    // depois de terminado, faz desaparecer o spinner
    spinnerElement.classList.remove('spinner');
  }
  

  onShare(){
    window.open('https://linkedin.com/in/marcos-nobre');
  }

}

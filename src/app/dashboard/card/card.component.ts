import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Observable, Subscription } from 'rxjs';
import { SkillCard } from 'src/app/core/class/skill-card';
import { SkillCardService } from 'src/app/core/service/skill-card.service';
import { SkillCardStore } from 'src/app/core/store/skill-card-store';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  cards$!: Observable<SkillCard[]>;
  subscription!: Subscription;
  skillCardCurrent: SkillCard;
  constructor(
    private skillCardService: SkillCardService, 
    private skillCardStore: SkillCardStore,
    private toastr: ToastrService
    ) { }

  ngOnInit() { 
    if (!this.skillCardStore.currentValue.skillCards.length) {
      this.cards$ = this.skillCardStore.getList();
      this.subscription = this.skillCardService.getSkillCards().subscribe(list => {
        if(list){ 
          this.toastr.success('Card carregados com sucesso!','Cards', {
          timeOut: 3000
        })
      }
      }, err =>{
        this.toastr.error('Erro ao tentar carregar cards!','Cards', {
          timeOut: 3000
        })

      });
      return
    }
    this.cards$ = this.skillCardStore.getList();
  }

  onLike(skillCard: SkillCard){
    // TODO: incrementar o like, salvar via rest
    this.skillCardService.likeSkillCard(skillCard).subscribe(skillCardLike =>{
      if(skillCardLike){
        this.skillCardStore.updateList(skillCardLike);
        this.toastr.success('Card atualizado com sucesso!','Cards', {
          timeOut: 3000
        })
      }
    }, err =>{
      this.toastr.error('Erro ao tentar atulizar card!','Atualizar Card', {
        timeOut: 3000
      })
    }).add(() => { 
    })
  }

  onShare(){
    // TODO: abrir o link do seu linkedin
    let a= document.createElement('a');
    a.target= '_blank';
    a.href= 'https://www.linkedin.com/in/luancassio/';
    a.click();
  }

  getColor(skillCard: SkillCard): string{
    const color = skillCard.likes >= 5 && skillCard.likes < 10 ? 'primary' : 'warn';
    return color;
  }

}

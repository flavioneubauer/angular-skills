import { BehaviorSubject, Observable } from "rxjs";
import { map } from "rxjs/operators";
import { SkillCardState } from "./skill-card-state";
import { SkillCard } from "../class/skill-card";


const  state: SkillCardState = {
  skillCards: []
}
export class SkillCardStore {

  private subject = new BehaviorSubject<SkillCardState>(state);
  private store$ = this.subject.asObservable();

  get currentValue(){
    return this.subject.value;
  }

  setState(name: string, state: any){
    this.subject.next({
      ...this.currentValue,
      [name]: state
    })
  }

  public getList(): Observable<SkillCard[]>{
    return this.store$.pipe(
      map(store => store.skillCards)
    );
  }

  public currentValueTotalLikes(): Observable<number>{
    return this.store$.pipe(
      map(store => store.skillCards.reduce((accumulator,value) => {
        return accumulator + value.likes
      },0))
    );
  }

  public updateList(skillCard: SkillCard){
    skillCard.likes++;
    const updateList = this.currentValue.skillCards.map((skill: SkillCard) => {
      if (skill.id === skillCard.id) {
        return { ...skill, likes: skillCard.likes };
      }
      return skill;
    });
    console.log(updateList, 'updateList');
    
    this.setState('skillCards', updateList)
  }

}

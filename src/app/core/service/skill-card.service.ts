import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SkillCard } from '../class/skill-card';
import { tap } from 'rxjs/operators';
import { SkillCardStore } from '../store/skill-card-store';

@Injectable({
  providedIn: 'root'
})
export class SkillCardService {
private url = '/api/skills';
constructor(
  private http: HttpClient,
  private skillCardStore: SkillCardStore
  ) { }

getSkillCards(): Observable<SkillCard[]>{
    return this.http.get<SkillCard[]>(this.url).pipe(
      tap(skillCards => {
      this.skillCardStore.setState('skillCards',skillCards);
    }));
  }

  likeSkillCard(skillCard: SkillCard): Observable<SkillCard>{
    return this.http.put<SkillCard>(`${this.url}/${skillCard.id}`, skillCard);
  }

}

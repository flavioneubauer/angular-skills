import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { debounceTime } from 'rxjs/operators';

@Injectable({providedIn: "root"})
export class SkillServices{

  constructor(private Http: HttpClient){

  }

  getSkills(){
    return this.Http
    .get('/api/skills')
  }

  updateSkill(skill: any){
    return this.Http
    .put(`/api/skills/${skill.id}`, skill)
    .pipe(debounceTime(700))
  }

}
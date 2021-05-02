import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Skill } from './interfaces/Skill.model';


@Injectable({
  providedIn: 'root'
})
export class DashboardService  {

  private apiURL = '/api/skills';
  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) { }


  getSkills() {
    return this.http.get(this.apiURL).toPromise();
  }

  
  getSkill(id: number) {
    return this.http.get(`${this.apiURL}/${id}`).toPromise();
  }
  

  updateSkill(skill: Skill) {
    return this.http.put(this.apiURL, skill, { headers: this.headers }).toPromise();
  }
}

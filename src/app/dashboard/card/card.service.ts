import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Skill } from '../interfaces/Skill.model';


@Injectable({
  providedIn: 'root'
})
export class CardService {

  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  private apiURL = '/api/skills';

  constructor(private http: HttpClient) { }

  updateSkill(skill: Skill) {
    return this.http.put(this.apiURL, skill, { headers: this.headers }).toPromise();
  }

}

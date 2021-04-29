import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class DashboardService  {

  private apiURL = '/api/skills';

  constructor(private http: HttpClient) { }


  getSkills() {
    return this.http.get(this.apiURL).toPromise();
  }
}

import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import {Observable} from 'rxjs'
import {map} from 'rxjs/operators';
import { Card } from '../models/card.model';
import { LoadService } from './load.service';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  private URL: string = '/api/skills'
  private _countLike = 0

  constructor(private http: HttpClient) { }

  protected defaultHeaders() {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
  }

  getSkills(): Observable<Array<Card>> {
    return this.http.get<any>(this.URL, this.defaultHeaders()).pipe(
      map((skills)=> {
        skills.color = '#FFFFFF'

        return skills
      })
    )
  }

  updateLike(like: Card): Observable<Card> {
    return this.http.put<Card>(`${this.URL}/${like.id}`, like)
  }

  getLike() {
    return this._countLike
  }

  setLike(like: number) {
    this._countLike = this._countLike + like
  }
}

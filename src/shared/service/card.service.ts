import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Card } from '../models/card';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class CardService {

  url = 'http://localhost:3000/cards'


  constructor(private httpClient: HttpClient) { }

  getAllCards(): Observable<Card[]>{
    return this.httpClient.get<Card[]>(this.url)
  }

  createCard(card: Card): Observable<Card>{
    return this.httpClient.post<Card>(this.url, JSON.stringify(card), httpOptions)
  }

  updateCard(card: Card): Observable<Card>{
    return this.httpClient.put<Card>(this.url + '/' + card.id, JSON.stringify(card), httpOptions)
  }

}

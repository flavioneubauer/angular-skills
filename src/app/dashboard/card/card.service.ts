import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CardService {
  private baseUrl = '/api/skills/';

  constructor(private httpClient: HttpClient) {}

  incrementLikes(card: any): Observable<any> {
    const copyOfTheCard = JSON.parse(JSON.stringify(card));
    copyOfTheCard.likes++;
    return this.httpClient.put(`${this.baseUrl}${card.id}`, copyOfTheCard);
  }
}

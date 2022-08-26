import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { cardModel } from './cardModel';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }


    editLikes(card:cardModel){
        return this.httpClient.put('/api/skills', {id:card.id, description:card.description, name:card.name, pic:card.pic, likes:card.likes})
    }

}

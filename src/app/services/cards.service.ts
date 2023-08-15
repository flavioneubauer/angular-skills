import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { EMPTY, Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators'

export type Card = {
  id: number,
  name: string,
  description: string,
  pic: string,
  likes: number
}

@Injectable({
  providedIn: 'root'
})
export class CardsService {

  private baseUrl = "/api/skills/"

  constructor(private http: HttpClient, private snackBar: MatSnackBar) { }

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: isError ? ['msg-error'] : ['msg-success']
    })
  }


  update(card: Card): Observable<Card> {
    const url = this.baseUrl + card.id
    return this.http.put<Card>(url, card).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    )
  }


  get(): Observable<any> {
    return this.http.get(this.baseUrl).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    )
  }

  private errorHandler(e: any): Observable<any> {
    console.log(e);
    this.showMessage('Ocorreu um erro!', true);
    return EMPTY;
  }
}

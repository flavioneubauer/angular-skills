import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: "app-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.css"],
})
export class CardComponent implements OnInit {
  likes: number = 0;

  @Input() card;

  buttonBlueFiveLimit: boolean = false;
  buttonRedTenLimit: boolean = false;
  isLoading: boolean = false;

  @Input() link: any = {
    linkedinLink: "https://www.linkedin.com/in/marcosfelipesl/",
  };

  ngOnInit() {}

  constructor(private http: HttpClient) {}

  @Output() loadingChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  onLike(card: any) {
    // TODO: incrementar o like, salvar via rest
    this.likes++;
    console.log(this.likes);
    this.isLoading = true;
    this.loadingChange.emit(true);

    if (this.likes >= 5) {
      this.buttonBlueFiveLimit = true;
    }

    if (this.likes >= 10) {
      this.buttonRedTenLimit = true;
    }

    this.http.post<any>("api/counter", { value: this.likes }).subscribe(
      (data: string) => {
        console.log("Adicionado " + JSON.stringify(data));
        this.isLoading = false;
        this.loadingChange.emit(false);
      },
      (error: HttpErrorResponse) => {
        console.error("Error!! Valor não salvo!");
        this.isLoading = false;
        this.loadingChange.emit(false);
      }
    ); 
  }

  onShare(card: any) {
    // TODO: abrir o link do seu linkedin
    if (this.link.linkedinLink) {
      window.open(this.link.linkedinLink, "_blank");
    }
  }
}

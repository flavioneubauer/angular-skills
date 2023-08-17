import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  onShare(){
    // TODO: abrir o link do seu linkedin
    let a= document.createElement('a');
    a.target= '_blank';
    a.href= 'https://www.linkedin.com/in/luancassio/';
    a.click();
  }
  onWhatsApp(){
    // TODO: abrir o link do seu linkedin
    let a= document.createElement('a');
    a.target= '_blank';
    a.href= 'https://wa.me/5547992890127?text=Ol%C3%A1%2C+Tudo+bom+com+voc%C3%AA%3F';
    a.click();
  }
}

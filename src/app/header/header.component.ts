import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  @Input() deviceXs: boolean;

  onAbout() {
    window.open('https://github.com/BioJJ/', '_blank')
  }

  onContact(){
    window.open('https://wa.me/5592984543675?text=Olá!%20:)%20podemos%20te%20ajudar?', '_blank')
  }
}

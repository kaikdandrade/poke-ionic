import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  public env = environment;
  
  public appPages = [
    { title: 'Ínicio', url: '/home', icon: 'home' },
    { title: 'Políticas de Privacidade', url: '/privacy-policies', icon: 'alert' },
    { title: 'Contato', url: '/contact', icon: 'id-card' },
    { title: 'Sobre', url: '/about', icon: 'reader' },
  ];

  public labels = ['Família', 'Amigos', 'Trabalho', 'Pokémons', 'Pokebola'];

  constructor() { }
}

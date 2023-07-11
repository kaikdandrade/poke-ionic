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
    { title: 'Contato', url: '/contact', icon: 'chatbox-ellipses' },
    { title: 'Sobre', url: '/about', icon: 'document-attach' },
    { title: 'Políticas de Privacidade', url: '/policies', icon: 'document-lock' }
  ];

  public labels = ['Família', 'Amigos', 'Trabalho', 'Pokémons', 'Pokebola'];

  constructor() { }
}

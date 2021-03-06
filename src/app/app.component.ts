import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <a routerLink="/dashboard">Dashboard</a>
    <a routerLink="/heroes">Heroes</a>
    <router-outlet></router-outlet>  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Card Game';
}

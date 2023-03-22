import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <app-header></app-header>
    <a routerLink="/">Home</a>
    <a routerLink="/about">About</a>
    <router-outlet></router-outlet>
  `,
  styles: [],
  imports: [RouterOutlet, RouterLink, HeaderComponent],
})
export class AppComponent {
  title = 'header-portal';
}

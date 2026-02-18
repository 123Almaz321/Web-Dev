import {Component} from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  template: `
    <a routerLink="/">Home</a>
    <a routerLink="/user">User</a>
  `,
  imports: [RouterLink, RouterOutlet],
})
export class App {}

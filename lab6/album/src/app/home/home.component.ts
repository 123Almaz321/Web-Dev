import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="welcome_box">
      <h1>Album Browser</h1>
      <p>Welcome! This application allows you to browse and manage photo albums.</p>
      <button class="btn_main" routerLink="/albums">Browse Albums</button>
    </div>
  `,
  styles: [`
    .welcome_box { 
        text-align: center; 
        margin-top: 50px; }
    .btn_main { 
        padding: 10px 20px; 
        background: #007bff;
        color: white; 
        border: none; 
        cursor: pointer; 
    }
  `]
})
export class HomeComponent {}
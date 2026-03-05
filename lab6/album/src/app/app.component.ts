import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  template: `
    <header class="header">
      <nav class="nav_container">
        <div class="logo">AlbumApp</div>
        <div class="nav_links">
          <a routerLink="/home" routerLinkActive="active_link">Home</a>
          <a routerLink="/about" routerLinkActive="active_link">About</a>
          <a routerLink="/albums" routerLinkActive="active_link">Albums</a>
        </div>
      </nav>
    </header>

    <main class="content">
      <router-outlet></router-outlet>
    </main>
  `,
  styles: [`
    :host {
      display: block;
      font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    }

    .header {
      background-color: #1f2937; 
      color: white;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
      width: 100%;
    }

    .nav_container {
      max-width: 1200px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 20px;
      height: 64px;
    }

    .logo {
      font-size: 1.25rem;
      font-weight: bold;
      letter-spacing: 1px;
    }

    .nav_links {
      display: flex;
      gap: 30px;
    }

    .nav_links a {
      color: #d1d5db;
      text-decoration: none;
      font-size: 0.95rem;
      font-weight: 500;
      transition: color 0.2s ease;
      padding: 5px 0;
    }

    .nav_links a:hover {
      color: white;
    }

    .active_link {
      color: white !important;
      border-bottom: 2px solid #3b82f6; 
    }

    .content {
      max-width: 1200px;
      margin: 40px auto;
      padding: 0 20px;
    }
  `]
})
export class AppComponent {}
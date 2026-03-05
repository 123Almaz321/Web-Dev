import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { AlbumService } from '../album.service';
import { Album } from '../models';

@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="container">
      <h2>Albums List</h2>
      
      @if (is_loading) {
        <div class="loader">Loading albums...</div>
      } @else {
        <div class="album_grid">
          @for (album of albums_data; track album.id) {
            <div class="album_card">
              <div class="album_info">
                <span class="album_id">#{{ album.id }}</span>
                <h3 class="album_title">{{ album.title }}</h3>
              </div>
              
              <div class="actions">
                <a [routerLink]="['/albums', album.id]" class="btn_detail">Detail</a>
                <button (click)="deleteItem(album.id)" class="btn_del">Delete</button>
              </div>
            </div>
          }
        </div>
      }
    </div>
  `,
  styles: [`
    .container { max-width: 1200px; margin: 0 auto; padding: 20px; }
    .album_grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
      gap: 25px;
      justify-content: center;
    }
    .album_card {
      background: white;
      border: 1px solid #e9ecef;
      border-radius: 16px;
      padding: 20px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      box-shadow: 0 4px 15px rgba(0,0,0,0.03);
      transition: all 0.3s ease;
      min-height: 180px;
    }
    .album_card:hover {
      transform: translateY(-8px);
      box-shadow: 0 12px 24px rgba(0,0,0,0.1);
      border-color: #007bff;
    }
    .album_id { color: #adb5bd; font-weight: bold; font-size: 0.9rem; }
    .album_title { margin: 10px 0; font-size: 1.1rem; color: #343a40; font-weight: 700; }
    .actions { display: flex; flex-direction: column; gap: 10px; }
    .btn_detail {
      background: #ffcc00; color: #000; text-align: center;
      text-decoration: none; padding: 10px; border-radius: 8px; font-weight: 600;
    }
    .btn_del {
      background: #fff0f0; color: #ff4757; border: 1px solid #ff4757;
      padding: 10px; border-radius: 8px; cursor: pointer; font-weight: 600;
    }
    .loader { text-align: center; font-size: 1.5rem; margin-top: 50px; color: #6c757d; }
  `]
})
export class AboutComponent implements OnInit {
  albums_data: Album[] = [];
  is_loading: boolean = true;

  constructor(private album_service: AlbumService) {}

  ngOnInit() {
    this.album_service.getAlbums().subscribe({
      next: (res) => {
        this.albums_data = res;
        this.is_loading = false; 
      },
      error: () => {
        this.is_loading = false;
      }
    });
  }

  deleteItem(id: number) {
    this.album_service.deleteAlbum(id).subscribe(() => {
      this.albums_data = this.albums_data.filter(a => a.id !== id);
    });
  }
}
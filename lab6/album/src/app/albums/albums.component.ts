import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { AlbumService } from '../album.service';
import { Album } from '../models';

@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <h2>Albums List</h2>

    <div class="toolbar">
      <button class="btn_filter" (click)="toggleFilter()">
        {{ show_favorites ? 'Show All' : 'Show Favorites' }}
        <span class="badge" *ngIf="album_service.getFavoritesCount() > 0">
          ★ {{ album_service.getFavoritesCount() }}
        </span>
      </button>
    </div>

    <div *ngIf="is_loading" class="loader">Loading albums...</div>

    <div *ngIf="!is_loading && displayedAlbums.length === 0 && show_favorites" class="empty">
      <p>⭐ No favorites yet!</p>
      <button (click)="toggleFilter()">← Back to all albums</button>
    </div>

    <div class="album_grid" *ngIf="!is_loading && displayedAlbums.length > 0">
      <div class="album_item" *ngFor="let album of displayedAlbums">
        <button
          class="btn_star"
          [class.starred]="album_service.isFavorite(album.id)"
          (click)="toggleFavorite($event, album.id)"
          [attr.aria-pressed]="album_service.isFavorite(album.id)"
          [attr.aria-label]="(album_service.isFavorite(album.id) ? 'Remove from favorites: ' : 'Add to favorites: ') + album.title">
          {{ album_service.isFavorite(album.id) ? '★' : '☆' }}
        </button>
        <a [routerLink]="['/albums', album.id]" class="album_link">
          {{ album.id }}. {{ album.title }}
        </a>
        <button class="btn_del" (click)="deleteItem(album.id)">Delete</button>
      </div>
    </div>
  `,
  styles: [`
    h2 { padding: 20px 20px 10px; }
    .toolbar { padding: 0 20px 10px; }
    .btn_filter {
      background: #f0f0f0;
      border: 1px solid #ccc;
      padding: 6px 14px;
      border-radius: 20px;
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      gap: 6px;
    }
    .btn_filter:hover { background: #e0e0e0; }
    .badge {
      background: #f0b429;
      color: #333;
      border-radius: 10px;
      padding: 1px 7px;
      font-size: 0.75rem;
      font-weight: 700;
    }
    .album_grid {
      display: flex;
      flex-direction: column;
      gap: 8px;
      padding: 0 20px 20px;
    }
    .album_item {
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 12px 16px;
      border: 1px solid #ddd;
      border-radius: 8px;
    }
    .btn_star {
      background: none;
      border: none;
      font-size: 1.3rem;
      cursor: pointer;
      color: #ccc;
      padding: 0;
      line-height: 1;
    }
    .btn_star.starred { color: #f0b429; }
    .btn_star:hover { transform: scale(1.2); }
    .album_link {
      text-decoration: none;
      color: #333;
      flex: 1;
    }
    .album_link:hover { color: #0066cc; }
    .btn_del {
      background: #dc3545;
      color: white;
      border: none;
      cursor: pointer;
      padding: 6px 14px;
      border-radius: 4px;
    }
    .empty {
      text-align: center;
      padding: 3rem;
      color: #888;
    }
    .empty button {
      margin-top: 1rem;
      padding: 6px 14px;
      cursor: pointer;
    }
  `]
})
export class AlbumsComponent implements OnInit {
  albums_data: Album[] = [];
  is_loading = true;
  show_favorites = false;

  get displayedAlbums(): Album[] {
    if (!this.show_favorites) return this.albums_data;
    return this.albums_data.filter(a => this.album_service.isFavorite(a.id));
  }

  constructor(
    public album_service: AlbumService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.album_service.getAlbums().subscribe({
      next: (res) => {
        this.albums_data = res;
        this.is_loading = false;
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error(err);
        this.is_loading = false;
        this.cdr.detectChanges();
      }
    });
  }

  toggleFavorite(event: Event, id: number) {
  event.preventDefault();
  event.stopPropagation();
  this.album_service.toggleFavorite(id);
  this.cdr.detectChanges();  
}

toggleFilter() {
  this.show_favorites = !this.show_favorites;
  this.cdr.detectChanges();
}

  deleteItem(id: number) {
    this.album_service.deleteAlbum(id).subscribe(() => {
      this.albums_data = this.albums_data.filter(a => a.id !== id);
      this.cdr.detectChanges();
    });
  }
}
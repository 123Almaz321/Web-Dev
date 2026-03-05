import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AlbumService } from '../album.service';
import { Album } from '../models';

@Component({
  selector: 'app-album-detail',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  template: `
    <div *ngIf="album" class="container">
      <h3>Album Details</h3>
      <p><strong>ID:</strong> {{ album.id }}</p>
      <p><strong>User ID:</strong> {{ album.userId }}</p>

      <button
        class="btn_star"
        [class.starred]="service.isFavorite(album.id)"
        (click)="toggleFavorite()"
        [attr.aria-pressed]="service.isFavorite(album.id)"
        [attr.aria-label]="service.isFavorite(album.id) ? 'Remove from favorites' : 'Add to favorites'">
        {{ service.isFavorite(album.id) ? '★ Favorited' : '☆ Add to Favorites' }}
      </button>

      <div class="edit_group">
        <label>Title:</label>
        <input [(ngModel)]="album.title">
        <button (click)="saveTitle()">Save</button>
      </div>

      <div class="actions">
        <button (click)="goBack()">Back to List</button>
        <button [routerLink]="['/albums', album.id, 'photos']">View Photos</button>
      </div>
    </div>
  `,
  styles: [`
    .container { padding: 20px; }
    .btn_star {
      background: none;
      border: 1px solid #ccc;
      font-size: 1.1rem;
      padding: 6px 14px;
      border-radius: 20px;
      cursor: pointer;
      color: #888;
      margin-bottom: 16px;
    }
    .btn_star.starred { color: #f0b429; border-color: #f0b429; }
    .btn_star:hover { border-color: #f0b429; color: #f0b429; }
    .edit_group { margin: 20px 0; }
    .edit_group input { width: 300px; padding: 5px; }
    .actions { display: flex; gap: 10px; }
    button { padding: 8px 15px; cursor: pointer; }
  `]
})
export class AlbumDetailComponent implements OnInit {
  album?: Album;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public service: AlbumService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.service.getAlbum(id).subscribe(data => {
      this.album = data;
      this.cdr.detectChanges();
    });
  }

  toggleFavorite() {
    if (this.album) {
      this.service.toggleFavorite(this.album.id);
      this.cdr.detectChanges();
    }
  }

  saveTitle() {
    if (this.album) {
      this.service.updateAlbum(this.album).subscribe();
    }
  }

  goBack() {
    this.router.navigate(['/albums']);
  }
}
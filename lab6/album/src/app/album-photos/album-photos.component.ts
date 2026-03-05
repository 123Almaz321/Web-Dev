import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { AlbumService } from '../album.service';
import { Photo } from '../models';

@Component({
  selector: 'app-album-photos',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button (click)="goBack()">Back to Details</button>
    <div class="photo_grid">
      <div class="photo_card" *ngFor="let photo of photos_list">
        <img [src]="photo.thumbnailUrl" [alt]="photo.title">
        <div class="photo_title">{{ photo.title }}</div>
      </div>
    </div>
  `,
  styles: [`
    .photo_grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)); gap: 15px; margin-top: 20px; }
    .photo_card { border: 1px solid #ccc; padding: 5px; border-radius: 5px; }
    .photo_card img { width: 100%; height: auto; }
    .photo_title { font-size: 12px; margin-top: 5px; text-align: center; }
  `]
})
export class AlbumPhotosComponent implements OnInit {
  photos_list: Photo[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: AlbumService,
    private cdr: ChangeDetectorRef  
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.service.getAlbumPhotos(id).subscribe(data => {
      this.photos_list = data;
      this.cdr.detectChanges();  
    });
  }

  goBack() {
    const id = this.route.snapshot.paramMap.get('id');
    this.router.navigate(['/albums', id]);
  }
}
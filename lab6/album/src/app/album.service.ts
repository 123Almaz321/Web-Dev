import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Album, Photo } from './models';

const FAVORITES_KEY = 'album_favorites';

@Injectable({ providedIn: 'root' })
export class AlbumService {
  private base_url = 'https://jsonplaceholder.typicode.com';

  private favoritesSubject = new BehaviorSubject<Set<number>>(this.loadFavorites());
  favorites$ = this.favoritesSubject.asObservable();

  constructor(private http_client: HttpClient) {}


  getAlbums(): Observable<Album[]> {
  return this.http_client.get<Album[]>(`${this.base_url}/albums`);
}

  getAlbum(id: number): Observable<Album> {
    return this.http_client.get<Album>(`${this.base_url}/albums/${id}`);
  }

  getAlbumPhotos(id: number): Observable<Photo[]> {
    return this.http_client.get<Photo[]>(`${this.base_url}/albums/${id}/photos`);
  }

  updateAlbum(album: Album): Observable<Album> {
    return this.http_client.put<Album>(`${this.base_url}/albums/${album.id}`, album);
  }

  deleteAlbum(id: number): Observable<void> {
    return this.http_client.delete<void>(`${this.base_url}/albums/${id}`);
  }


  private loadFavorites(): Set<number> {
    try {
      const stored = localStorage.getItem(FAVORITES_KEY);
      return stored ? new Set<number>(JSON.parse(stored)) : new Set<number>();
    } catch {
      return new Set<number>();
    }
  }

  private saveFavorites(favorites: Set<number>): void {
    localStorage.setItem(FAVORITES_KEY, JSON.stringify([...favorites]));
  }

  isFavorite(id: number): boolean {
    return this.favoritesSubject.value.has(id);
  }

  toggleFavorite(id: number): void {
    const current = new Set(this.favoritesSubject.value);
    if (current.has(id)) {
      current.delete(id);
    } else {
      current.add(id);
    }
    this.saveFavorites(current);
    this.favoritesSubject.next(current);
  }

  getFavoritesCount(): number {
    return this.favoritesSubject.value.size;
  }
}
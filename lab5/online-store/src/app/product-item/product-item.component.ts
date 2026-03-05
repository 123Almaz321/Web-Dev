import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css'
})
export class ProductItemComponent {
  @Input() product!: Product; 
  @Output() remove = new EventEmitter<number>();
  @Output() toggleFav = new EventEmitter<number>(); 

  like() { this.product.likes++; }
  
  onFavoriteClick() {
    this.toggleFav.emit(this.product.id); 
  }

  share(platform: string) {
    const url = encodeURIComponent(this.product.link);
    const link = platform === 'tg' ? `https://t.me/share/url?url=${url}` : `https://wa.me/?text=${url}`;
    window.open(link, '_blank');
  }
}
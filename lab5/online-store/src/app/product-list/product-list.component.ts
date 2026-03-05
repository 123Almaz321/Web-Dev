import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../models/product.model';
import { ProductItemComponent } from '../product-item/product-item.component';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductItemComponent],
  template: `
    <div class="product-grid">
      @for (prod of products; track prod.id) {
        <app-product-item 
          [product]="prod" 
          (remove)="removeProduct.emit($event)"
          (toggleFav)="toggleFavorite.emit($event)">
        </app-product-item>
      }
    </div>
  `,
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  @Input() products: Product[] = [];
  @Output() removeProduct = new EventEmitter<number>();
  @Output() toggleFavorite = new EventEmitter<number>();
}
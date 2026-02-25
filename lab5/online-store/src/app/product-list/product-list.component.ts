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
          (remove)="handleDelete($event)">
        </app-product-item>
      } @empty {
        <div class="empty-msg">No products left in this category.</div>
      }
    </div>
  `,
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  @Input() products: Product[] = [];
  @Output() removeProduct = new EventEmitter<number>();

  handleDelete(id: number) {
    this.removeProduct.emit(id);
  }
}
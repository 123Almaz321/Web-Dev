import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from './product.service';
import { Category, Product } from './models/product.model';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductItemComponent } from './product-item/product-item.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ProductListComponent, ProductItemComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  categories: Category[];
  allProducts: Product[];
  favorites: Product[] = []; 
  selectedCategoryId: number | null = null;

  constructor(private productService: ProductService) {
    this.categories = this.productService.getCategories();
    this.allProducts = this.productService.getProducts();
  }

  get filteredProducts() {
    return this.allProducts.filter(p => p.categoryId === this.selectedCategoryId);
  }

  selectCategory(id: number) {
    this.selectedCategoryId = id;
  }

  toggleFavorite(productId: number) {
    const product = this.allProducts.find(p => p.id === productId);
    if (product) {
      product.isFavorite = !product.isFavorite;
      this.favorites = this.allProducts.filter(p => p.isFavorite);
    }
  }

  removeProduct(id: number) {
    this.allProducts = this.allProducts.filter(p => p.id !== id);
    this.favorites = this.favorites.filter(p => p.id !== id);
  }
}
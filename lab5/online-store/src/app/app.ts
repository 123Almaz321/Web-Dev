import { Component } from '@angular/core';
import { ProductService } from './product.service';
import { Product } from './models/product.model';
import { Category } from './models/category.model';
import { ProductListComponent } from './product-list/product-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProductListComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  categories: Category[];
  allProducts: Product[];
  filteredProducts: Product[] = []; 
  selectedCategoryId: number | null = null;

  constructor(private productService: ProductService) {
    this.categories = this.productService.getCategories();
    this.allProducts = this.productService.getProducts();
  }

  selectCategory(id: number) {
    this.selectedCategoryId = id;
    this.updateFilteredProducts();
  }

  removeProductFromAll(id: number) {
    this.allProducts = this.allProducts.filter(p => p.id !== id);
    this.updateFilteredProducts();
  }

  private updateFilteredProducts() {
    this.filteredProducts = [...this.allProducts.filter(p => p.categoryId === this.selectedCategoryId)];
  }
}
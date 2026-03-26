import { Component, OnInit, PLATFORM_ID, Inject, ChangeDetectorRef } from '@angular/core';
import { isPlatformBrowser, CommonModule } from '@angular/common';
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
export class App implements OnInit {
  categories: Category[] = [];
  allProducts: Product[] = [];
  favorites: Product[] = [];
  selectedCategoryId: number | null = null;

  constructor(
    private productService: ProductService,
    private cdr: ChangeDetectorRef,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.productService.getCategories().subscribe(data => {
        this.categories = [...data];
        this.cdr.detectChanges();
      });
      this.productService.getProducts().subscribe(data => {
        this.allProducts = [...data];
        this.cdr.detectChanges();
      });
    }
  }

  get filteredProducts() {
    return this.allProducts.filter(p => p.category_id === this.selectedCategoryId);
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
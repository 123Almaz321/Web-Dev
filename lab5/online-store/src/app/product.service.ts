import { Injectable } from '@angular/core';
import { Product } from './models/product.model';
import { Category } from './models/category.model';

@Injectable({ providedIn: 'root' })
export class ProductService {
  private categories: Category[] = [
    { id: 1, name: 'Smartphones' },
    { id: 2, name: 'Laptops' },
    { id: 3, name: 'Headphones' },
    { id: 4, name: 'Tablets' }
  ];

  private products: Product[] = [
    // smartphones
    { id: 1, categoryId: 1, name: 'iPhone 16 Pro', price: 700000, likes: 0, rating: 5.0, image: 'https://resources.cdn-kaspi.kz/img/m/p/hf7/hec/87295486197790.png?format=preview-large', link: 'https://kaspi.kz/shop/p/apple-iphone-16-pro-128gb-nanosim-esim-zolotistyi-123888919/?c=750000000', description: 'Latest Apple flagship with A18 Pro chip.', images: [] },
    { id: 2, categoryId: 1, name: 'Samsung S24 Ultra', price: 620000, likes: 0, rating: 4.8, image: 'https://resources.cdn-kaspi.kz/img/m/p/h7c/h38/84963297329182.png?format=preview-large', link: 'https://kaspi.kz/shop/p/samsung-galaxy-s24-ultra-5g-12-gb-256-gb-seryi-116043556/?c=750000000', description: 'AI-powered smartphone with 200MP camera.', images: [] },
    { id: 3, categoryId: 1, name: 'Xiaomi 14 Ultra', price: 550000, likes: 0, rating: 4.7, image: 'https://resources.cdn-kaspi.kz/img/m/p/p64/p81/67214865.png?format=preview-large', link: 'https://kaspi.kz/shop/p/xiaomi-redmi-note-14-pro-8-gb-256-gb-chernyi-133335702/?c=750000000', description: 'Professional Leica optics in your pocket.', images: [] },
    { id: 4, categoryId: 1, name: 'Google Pixel 9 Pro', price: 580000, likes: 0, rating: 4.9, image: 'https://resources.cdn-kaspi.kz/img/m/p/pdd/pb6/3092410.jpeg?format=preview-large', link: 'https://kaspi.kz/shop/p/google-pixel-9-pro-xl-16-gb-128-gb-chernyi-128508316/?c=750000000', description: 'The best Android experience with Google AI.', images: [] },
    { id: 5, categoryId: 1, name: 'iPhone 15', price: 400000, likes: 0, rating: 4.8, image: 'https://resources.cdn-kaspi.kz/img/m/p/h1d/hfc/86303745998878.jpg?format=preview-large', link: 'https://kaspi.kz/shop/p/apple-iphone-15-128gb-nanosim-esim-chernyi-113137790/?c=750000000', description: 'Great balance of performance and price.', images: [] },

    // laptops
    { id: 6, categoryId: 2, name: 'MacBook Air M3', price: 650000, likes: 0, rating: 4.9, image: 'https://resources.cdn-kaspi.kz/img/m/p/p81/p15/29102101.png?format=preview-large', link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-2024-13-6-16-gb-ssd-512-gb-macos-mxct3-137228009/?c=750000000', description: 'Supercharged by M3 chip, thin and light.', images: [] },
    { id: 7, categoryId: 2, name: 'ASUS ROG Zephyrus', price: 950000, likes: 0, rating: 4.7, image: 'https://resources.cdn-kaspi.kz/img/m/p/p2e/p89/47502192.jpg?format=preview-large', link: 'https://kaspi.kz/shop/p/asus-asus-rog-zephyrus-g16-16-32-gb-ssd-2000-gb-bez-os-90nr0lz5-m009d0-141048362/?c=750000000', description: 'Powerful gaming laptop with OLED display.', images: [] },
    { id: 8, categoryId: 2, name: 'HP Victus 15', price: 350000, likes: 0, rating: 4.6, image: 'https://resources.cdn-kaspi.kz/img/m/p/h25/hcc/85983814680606.png?format=preview-large', link: 'https://kaspi.kz/shop/p/hp-victus-15-6-16-gb-ssd-512-gb-dos-15-fb2027ci-a19gqea-119250104/?c=750000000', description: 'Affordable gaming performance.', images: [] },
    { id: 9, categoryId: 2, name: 'Lenovo Legion 5', price: 580000, likes: 0, rating: 4.8, image: 'https://resources.cdn-kaspi.kz/img/m/p/p26/pa5/78068073.png?format=preview-large', link: 'https://kaspi.kz/shop/p/lenovo-legion-5-15ahp10-15-1-16-gb-ssd-512-gb-bez-os-83m00042rk-149602832/?c=750000000', description: 'Stylish and powerful workstation.', images: [] },
    { id: 10, categoryId: 2, name: 'Huawei MateBook D16', price: 320000, likes: 0, rating: 4.7, image: 'https://resources.cdn-kaspi.kz/img/m/p/h83/h09/84934294700062.png?format=preview-large', link: 'https://kaspi.kz/shop/p/huawei-matebook-d16-16-8-gb-ssd-512-gb-win-11-home-mitchellf-w5851-115943439/?c=750000000', description: 'Large screen for productive work.', images: [] },

    // headphones
    { id: 11, categoryId: 3, name: 'AirPods Pro 2', price: 120000, likes: 0, rating: 5.0, image: 'https://resources.cdn-kaspi.kz/img/m/p/ha3/h07/84108189630494.jpg', link: 'https://kaspi.kz/shop/p/apple-airpods-pro-2-with-type-c-magsafe-charging-case-belyi-113472022/', description: 'Best noise cancellation for Apple users.', images: [] },
    { id: 12, categoryId: 3, name: 'Sony WH-1000XM5', price: 160000, likes: 0, rating: 4.9, image: 'https://resources.cdn-kaspi.kz/img/m/p/h9c/h23/65099684020254.jpg?format=preview-large', link: 'https://kaspi.kz/shop/p/naushniki-sony-wh-1000xm5-chernyi-105259822/?c=750000000', description: 'Industry-leading noise canceling.', images: [] },
    { id: 13, categoryId: 3, name: 'Marshall Major V', price: 85000, likes: 0, rating: 4.8, image: 'https://resources.cdn-kaspi.kz/img/m/p/pf3/pc1/17680136.jpg?format=preview-large', link: 'https://kaspi.kz/shop/p/naushniki-marshall-major-iv-chernyi-102138144/?c=750000000', description: 'Iconic design with 100+ hours of battery.', images: [] },
    { id: 14, categoryId: 3, name: 'Bose QuietComfort', price: 145000, likes: 0, rating: 4.8, image: 'https://resources.cdn-kaspi.kz/img/m/p/h59/h04/84919601987614.jpg?format=preview-large', link: 'https://kaspi.kz/shop/p/naushniki-bose-quietcomfort-ultra-earbuds-chernyi-115912598/?c=750000000', description: 'Legendary comfort and sound.', images: [] },
    { id: 15, categoryId: 3, name: 'HyperX Cloud II', price: 45000, likes: 0, rating: 4.7, image: 'https://resources.cdn-kaspi.kz/img/m/p/h72/he2/63770832764958.jpg?format=preview-large', link: 'https://kaspi.kz/shop/p/naushniki-hyperx-cloud-ii-cherno-krasnyi-4800107/?c=750000000', description: 'The gold standard for gaming headsets.', images: [] },

    // tablets
    { id: 16, categoryId: 4, name: 'iPad Pro M4', price: 650000, likes: 0, rating: 5.0, image: 'https://resources.cdn-kaspi.kz/img/m/p/hb3/h75/86106948239390.png?format=preview-large', link: 'https://kaspi.kz/shop/p/apple-ipad-pro-11-2024-wi-fi-11-djuim-8-gb-256-gb-chernyi-119774227/?c=750000000', description: 'Thinnest Apple product with Tandem OLED.', images: [] },
    { id: 17, categoryId: 4, name: 'Samsung Tab S9', price: 380000, likes: 0, rating: 4.8, image: 'https://resources.cdn-kaspi.kz/img/m/p/h02/h6e/82770436030494.jpg?format=preview-large', link: 'https://kaspi.kz/shop/p/samsung-galaxy-tab-s9-sm-x716bzaas-11-djuim-8-gb-128-gb-grafit-112488621/?c=750000000', description: 'Water-resistant tablet with S-Pen.', images: [] },
    { id: 18, categoryId: 4, name: 'iPad Air M2', price: 380000, likes: 0, rating: 4.7, image: 'https://resources.cdn-kaspi.kz/img/m/p/h9f/hdb/86223792013342.jpg?format=preview-large', link: 'https://kaspi.kz/shop/p/apple-ipad-air-11-2024-wi-fi-11-djuim-8-gb-256-gb-seryi-120178607/?c=750000000', description: 'Powerful performance in vibrant colors.', images: [] },
    { id: 19, categoryId: 4, name: 'Xiaomi Pad 6', price: 160000, likes: 0, rating: 4.7, image: 'https://resources.cdn-kaspi.kz/img/m/p/h32/hdc/82729741582366.jpg?format=preview-large', link: 'https://kaspi.kz/shop/p/xiaomi-pad-6-11-djuim-8-gb-256-gb-seryi-112453226/?c=750000000', description: 'Excellent value for money tablet.', images: [] },
    { id: 20, categoryId: 4, name: 'iPad 10.9 (2022)', price: 190000, likes: 0, rating: 4.8, image: 'https://resources.cdn-kaspi.kz/img/m/p/p7e/p65/85883926.jpg?format=preview-large', link: 'https://kaspi.kz/shop/p/chehol-dlja-apple-ipad-11-a16-2025-11-djuim-fioletovyi-151984133/?c=750000000', description: 'The perfect iPad for students.', images: [] }
  ];

  getCategories(): Category[] { return this.categories; }
  getProducts(): Product[] { return this.products; }
}
export interface Category {
  id: number;
  name: string;
}

export interface Product {
  id: number;
  categoryId: number;
  name: string;
  description: string;
  price: number;
  rating: number;
  likes: number;
  image: string;
  link: string;
  isFavorite: boolean; 
}
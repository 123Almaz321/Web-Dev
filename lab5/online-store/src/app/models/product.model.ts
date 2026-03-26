export interface Category {
  id: number;
  name: string;
}

export interface Product {
  id: number;
  category_id: number;
  name: string;
  description: string;
  price: number;
  count: number;
  is_active: boolean;
  likes?: number;
  image?: string;
  link?: string;
  isFavorite?: boolean;
}
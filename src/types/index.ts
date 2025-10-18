export interface Product {
  id: string;
  title: string;
  vendor?: string;
  price: number;
  regularPrice?: number;
  image: string;
  images: string[];
  category: string;
  size: string;
  style: string;
  badge?: 'Sale' | 'Sold Out' | 'New';
  discount?: number;
  inStock: boolean;
  description?: string;
  material?: string;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  image: string;
  slug: string;
}

export interface Filters {
  size: string[];
  category: string[];
  style: string[];
  priceRange: [number, number];
  inStock: boolean | null;
  sort: 'featured' | 'best-selling' | 'price-low' | 'price-high' | 'newest';
}

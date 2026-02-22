export interface Product {
  name: string;
  description: string;
  image: string;
  price: number;
  currency: string;
  availability: 'InStock' | 'OutOfStock' | 'PreOrder';
  sku: string;
  brand: string;
  slug: string;
  rating?: number;
}
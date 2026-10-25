export type FlowerOccasion = 'Birthday' | 'Anniversary' | 'Wedding' | 'Thank You' | 'Just Because';

export type FlowerColor = 'Pink' | 'White' | 'Red' | 'Purple' | 'Yellow';

export type FlowerCategory = 'roses' | 'seasonal' | 'tulips' | 'luxury' | 'all';

export interface Product {
  id: string;
  name: string;
  subtitle: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  image: string;
  secondaryImage?: string;
  category: 'roses' | 'seasonal' | 'tulips' | 'luxury';
  occasions: FlowerOccasion[];
  colors: FlowerColor[];
  description: string;
  flowerTypes: string[];
  stemCount: string;
  vaseIncluded: boolean;
  careGuide: string;
  isBestseller?: boolean;
  isNewSeason?: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedAddon?: 'vase' | 'greeting_card' | 'chocolates' | 'none';
  customNote?: string;
}

export interface CollectionItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  image: string;
  itemCount: number;
  categoryKey: 'roses' | 'seasonal' | 'tulips' | 'luxury';
}

export interface Testimonial {
  id: string;
  author: string;
  location: string;
  occasion: string;
  review: string;
  rating: number;
  date: string;
  purchasedProduct: string;
}

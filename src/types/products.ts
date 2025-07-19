export interface Product {
  id: string;
  title: string;
  slug: string;
  description?: string;
  specification?: string;
  price: number;
  discount_price: number;
  stock_quantity: number;
  is_featured: boolean;
  is_best_selling: boolean;
  category_id?: string;
  brand_id?: string;
  rating: number;
  total_reviews: number;
  created_at: string;
  main_image_url: string;
  category?: {
    id: string;
    name: string;
  };
  brand?: {
    id: string;
    name: string;
  };
}

export interface Filters {
  search: string;
  category: string[];
  brand: string[];
  priceRange: [number, number];
  rating: number;
  inStock: boolean;
  colors?: string[];
  sizes?: string[];
}

export type SortOption =
  | "featured"
  | "newest"
  | "price-low"
  | "price-high"
  | "rating"
  | "popularity";
export interface FilterOption {
  value: string;
  label: string;
  count?: number;
}

export interface Filters {
  search: string;
  category: string[];
  brand: string[];
  priceRange: [number, number];
  rating: number;
  inStock: boolean;
  colors?: string[];
  sizes?: string[];
}

export interface ProductsResponse {
  products: Product[];
  total: number;
  page: number;
  limit: number;
  hasMore: boolean;
}

export type ViewMode = "grid" | "list";
export type SortBy =
  | "featured"
  | "newest"
  | "price-low"
  | "price-high"
  | "rating"
  | "popularity";

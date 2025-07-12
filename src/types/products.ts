export interface Product {
  id: string;
  title: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  brand: string;
  rating: number;
  reviews: number;
  inStock: boolean;
  tags: string[];
  description?: string;
  colors?: string[];
  sizes?: string[];
  discount?: number;
  isNew?: boolean;
  isFeatured?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface Filters {
  search: string;
  category: string[];
  brand: string[];
  priceRange: [number, number];
  rating: number;
  inStock: boolean;
  tags: string[];
  colors?: string[];
  sizes?: string[];
}

export interface SortOption {
  value: string;
  label: string;
}

export interface FilterOption {
  value: string;
  label: string;
  count?: number;
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

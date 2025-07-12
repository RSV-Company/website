import { Product, Filters, SortBy } from "@/types/products";

export const filterProducts = (
  products: Product[],
  filters: Filters
): Product[] => {
  return products.filter((product) => {
    const matchesSearch =
      product.title.toLowerCase().includes(filters.search.toLowerCase()) ||
      product.description?.toLowerCase().includes(filters.search.toLowerCase());
    const matchesCategory =
      filters.category.length === 0 ||
      filters.category.includes(product.category);
    const matchesBrand =
      filters.brand.length === 0 || filters.brand.includes(product.brand);
    const matchesPrice =
      product.price >= filters.priceRange[0] &&
      product.price <= filters.priceRange[1];
    const matchesRating = product.rating >= filters.rating;
    const matchesStock = !filters.inStock || product.inStock;
    const matchesTags =
      filters.tags.length === 0 ||
      filters.tags.some((tag) => product.tags.includes(tag));
    const matchesColors =
      filters.colors?.length === 0 ||
      filters.colors?.some((color) => product.colors?.includes(color));
    const matchesSizes =
      filters.sizes?.length === 0 ||
      filters.sizes?.some((size) => product.sizes?.includes(size));

    return (
      matchesSearch &&
      matchesCategory &&
      matchesBrand &&
      matchesPrice &&
      matchesRating &&
      matchesStock &&
      matchesTags &&
      matchesColors &&
      matchesSizes
    );
  });
};

export const sortProducts = (
  products: Product[],
  sortBy: SortBy
): Product[] => {
  return [...products].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return a.price - b.price;
      case "price-high":
        return b.price - a.price;
      case "rating":
        return b.rating - a.rating;
      case "newest":
        return (
          new Date(b.createdAt || 0).getTime() -
          new Date(a.createdAt || 0).getTime()
        );
      case "popularity":
        return b.reviews - a.reviews;
      default:
        return 0;
    }
  });
};

export const getUniqueFilterOptions = (products: Product[]) => {
  const categories = [...new Set(products.map((p) => p.category))];
  const brands = [...new Set(products.map((p) => p.brand))];
  const tags = [...new Set(products.flatMap((p) => p.tags))];
  const colors = [...new Set(products.flatMap((p) => p.colors || []))];
  const sizes = [...new Set(products.flatMap((p) => p.sizes || []))];

  return { categories, brands, tags, colors, sizes };
};

export const calculateDiscount = (
  price: number,
  originalPrice?: number
): number => {
  if (!originalPrice || originalPrice <= price) return 0;
  return Math.round(((originalPrice - price) / originalPrice) * 100);
};

export const formatPrice = (price: number): string => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(price);
};

export const getProductUrl = (product: Product): string => {
  return `/products/${product.id}`;
};

export const isProductNew = (
  product: Product,
  daysThreshold: number = 30
): boolean => {
  if (!product.createdAt) return false;
  const createdDate = new Date(product.createdAt);
  const now = new Date();
  const diffTime = Math.abs(now.getTime() - createdDate.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays <= daysThreshold;
};

export const getStockStatus = (
  product: Product
): "in-stock" | "out-of-stock" | "low-stock" => {
  if (!product.inStock) return "out-of-stock";
  // You can extend this logic if you have stock quantity
  return "in-stock";
};

export const searchProducts = (
  products: Product[],
  query: string
): Product[] => {
  if (!query.trim()) return products;

  const searchTerms = query.toLowerCase().split(" ");

  return products.filter((product) => {
    const searchableText = [
      product.title,
      product.description,
      product.category,
      product.brand,
      ...product.tags,
    ]
      .join(" ")
      .toLowerCase();

    return searchTerms.every((term) => searchableText.includes(term));
  });
};

import { useState, useEffect, useMemo } from "react";
import { Product, Filters, SortBy } from "@/types/products";

export const useProducts = (initialProducts: Product[] = []) => {
  const [products, setProducts] = useState<Product[]>(initialProducts);
  const [filters, setFilters] = useState<Filters>({
    search: "",
    category: [],
    brand: [],
    priceRange: [0, 1000],
    rating: 0,
    inStock: false,
    tags: [],
    colors: [],
    sizes: [],
  });
  const [sortBy, setSortBy] = useState<SortBy>("featured");
  const [isLoading, setIsLoading] = useState(false);

  // Calculate filtered and sorted products
  const filteredProducts = useMemo(() => {
    let filtered = products.filter((product) => {
      const matchesSearch =
        product.title.toLowerCase().includes(filters.search.toLowerCase()) ||
        product.description
          ?.toLowerCase()
          .includes(filters.search.toLowerCase());
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

    // Sort products
    filtered.sort((a, b) => {
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

    return filtered;
  }, [products, filters, sortBy]);

  // Get unique filter options
  const filterOptions = useMemo(() => {
    const categories = [...new Set(products.map((p) => p.category))];
    const brands = [...new Set(products.map((p) => p.brand))];
    const tags = [...new Set(products.flatMap((p) => p.tags))];
    const colors = [...new Set(products.flatMap((p) => p.colors || []))];
    const sizes = [...new Set(products.flatMap((p) => p.sizes || []))];

    return { categories, brands, tags, colors, sizes };
  }, [products]);

  // Update filter
  const updateFilter = (key: keyof Filters, value: any) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  // Clear all filters
  const clearFilters = () => {
    setFilters({
      search: "",
      category: [],
      brand: [],
      priceRange: [0, 1000],
      rating: 0,
      inStock: false,
      tags: [],
      colors: [],
      sizes: [],
    });
  };

  // Count active filters
  const activeFiltersCount =
    filters.category.length +
    filters.brand.length +
    filters.tags.length +
    (filters.colors?.length || 0) +
    (filters.sizes?.length || 0) +
    (filters.rating > 0 ? 1 : 0) +
    (filters.inStock ? 1 : 0);

  // Remove specific filter
  const removeFilter = (filterType: keyof Filters, value?: string) => {
    if (filterType === "rating" || filterType === "inStock") {
      setFilters((prev) => ({
        ...prev,
        [filterType]: filterType === "rating" ? 0 : false,
      }));
    } else if (Array.isArray(filters[filterType]) && value) {
      setFilters((prev) => ({
        ...prev,
        [filterType]: (prev[filterType] as string[]).filter(
          (item) => item !== value
        ),
      }));
    }
  };

  return {
    products,
    setProducts,
    filteredProducts,
    filters,
    setFilters,
    updateFilter,
    clearFilters,
    removeFilter,
    sortBy,
    setSortBy,
    isLoading,
    setIsLoading,
    activeFiltersCount,
    filterOptions,
  };
};

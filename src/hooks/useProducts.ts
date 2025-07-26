import { useState, useEffect, useMemo } from "react";
import { Product, Filters, SortOption } from "@/types/products";
import { supabase } from "@/config/client";

export const useSupabaseProducts = (paramCategory: string) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [filters, setFilters] = useState<Filters>({
    search: "",
    category: paramCategory ? [paramCategory] : [], // This should be string[] for UUIDs
    brand: [], // This should be string[] for UUIDs
    priceRange: [0, 1000],
    rating: 0,
    inStock: false,
    colors: [],
    sizes: [],
  });

  useEffect(() => {
  setFilters((prev) => ({
    ...prev,
    category: paramCategory ? [paramCategory] : [],
  }));
}, [paramCategory]);

  const [sortBy, setSortBy] = useState<SortOption>("featured");

  // Fetch products with applied filters and sorting
  const fetchProducts = async () => {
    setIsLoading(true);
    setError(null);

    try {
      let query = supabase.from("products").select(`
          *,
          categories:category_id(id, name),
          brands:brand_id(id, name)
        `);

      if (filters.search && filters.search.trim()) {
        const searchTerm = filters.search.trim();

        query = query.or(
          `title.ilike.%${searchTerm}%,description.ilike.%${searchTerm}%`
        );
      }

      // Apply category filter - Fixed: Ensure we're using the correct ID format
      if (filters.category && filters.category.length > 0) {
        query = query.in("category_id", filters.category);
      }

      // Apply brand filter - Fixed: Ensure we're using the correct ID format
      if (filters.brand && filters.brand.length > 0) {
        query = query.in("brand_id", filters.brand);
      }

      // Apply price range filter - Fixed: Uncommented and improved
      if (filters.priceRange[0] > 0 || filters.priceRange[1] < 1000) {
        query = query
          .gte("price", filters.priceRange[0])
          .lte("price", filters.priceRange[1]);
      }

      // Apply rating filter
      if (filters.rating > 0) {
        query = query.gte("rating", filters.rating);
      }

      // Apply stock filter
      if (filters.inStock) {
        query = query.gt("stock_quantity", 0);
      }

      // Apply sorting
      switch (sortBy) {
        case "featured":
          query = query.order("is_featured", { ascending: false });
          break;
        case "newest":
          query = query.order("created_at", { ascending: false });
          break;
        case "price-low":
          query = query.order("price", { ascending: true });
          break;
        case "price-high":
          query = query.order("price", { ascending: false });
          break;
        case "rating":
          query = query.order("rating", { ascending: false });
          break;
        case "popularity":
          query = query.order("total_reviews", { ascending: false });
          break;
      }

      const { data, error } = await query;

      if (error) {
        console.error("Database error:", error);
        throw error;
      }

      setProducts(data || []);
    } catch (err) {
      console.error("Error fetching products:", err);
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  // Fetch filter options (categories, brands)
  const [filterOptions, setFilterOptions] = useState<any>({
    categories: [],
    brands: [],
    tags: [],
    colors: [],
    sizes: [],
  });

  const fetchFilterOptions = async () => {
    try {
      // Fetch categories
      const { data: categories, error: categoriesError } = await supabase
        .from("categories")
        .select("id, name")
        .order("name");

      if (categoriesError) {
        console.error("Error fetching categories:", categoriesError);
      }

      // Fetch brands
      const { data: brands, error: brandsError } = await supabase
        .from("brands")
        .select("id, name")
        .order("name");

      if (brandsError) {
        console.error("Error fetching brands:", brandsError);
      }

      setFilterOptions({
        categories: categories || [],
        brands: brands || [],
        tags: [],
        colors: [],
        sizes: [],
      });
    } catch (err) {
      console.error("Error fetching filter options:", err);
    }
  };

  // Update a specific filter
  const updateFilter = (key: keyof Filters, value: any) => {
    setFilters((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  // Clear all filters
  const clearFilters = () => {
    setFilters({
      search: "",
      category: [], // Reset to empty array
      brand: [], // Reset to empty array
      priceRange: [0, 1000],
      rating: 0,
      inStock: false,
      colors: [],
      sizes: [],
    });
  };

  // Remove a specific filter
  const removeFilter = (key: keyof Filters, value?: string) => {
    if (key === "search") {
      updateFilter(key, "");
    } else if (key === "rating") {
      updateFilter(key, 0);
    } else if (key === "inStock") {
      updateFilter(key, false);
    } else if (key === "priceRange") {
      updateFilter(key, [0, 1000]);
    } else if (Array.isArray(filters[key]) && value) {
      const currentArray = filters[key] as string[];
      updateFilter(
        key,
        currentArray.filter((item) => item !== value)
      );
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [filters, sortBy]);

  useEffect(() => {
    fetchFilterOptions();
  }, []);

  return {
    products,
    filters,
    updateFilter,
    clearFilters,
    removeFilter,
    sortBy,
    setSortBy,
    isLoading,
    error,
    // activeFiltersCount,
    filterOptions,
    refetch: fetchProducts,
  };
};

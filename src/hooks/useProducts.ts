import { useState, useEffect, useMemo } from "react";
import { Product, Filters, SortOption } from "@/types/products";
import { supabase } from "@/config/client";

let debounceTimeout: NodeJS.Timeout;

export const useSupabaseProducts = (paramCategory: string) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [filters, setFilters] = useState<Filters>({
    search: "",
    category: paramCategory ? [paramCategory] : [],
    brand: [],
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

      if (filters.category.length > 0) {
        query = query.in("category_id", filters.category);
      }

      if (filters.brand.length > 0) {
        query = query.in("brand_id", filters.brand);
      }

      if (filters.priceRange[0] > 0 || filters.priceRange[1] < 1000) {
        query = query
          .gte("price", filters.priceRange[0])
          .lte("price", filters.priceRange[1]);
      }

      if (filters.rating > 0) {
        query = query.gte("rating", filters.rating);
      }

      if (filters.inStock) {
        query = query.gt("stock_quantity", 0);
      }

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

  // Debounce fetchProducts when filters or sortBy change
  const stableFilters = useMemo(() => filters, [JSON.stringify(filters)]);
  const stableSort = useMemo(() => sortBy, [sortBy]);

  useEffect(() => {
    clearTimeout(debounceTimeout);
    debounceTimeout = setTimeout(() => {
      fetchProducts();
    }, 300); // adjust delay if needed
    return () => clearTimeout(debounceTimeout);
  }, [stableFilters, stableSort]);

  const [filterOptions, setFilterOptions] = useState<any>({
    categories: [],
    brands: [],
    tags: [],
    colors: [],
    sizes: [],
  });

  const fetchFilterOptions = async () => {
    try {
      const { data: categories, error: categoriesError } = await supabase
        .from("categories")
        .select("id, name")
        .order("name");

      if (categoriesError) {
        console.error("Error fetching categories:", categoriesError);
      }

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

  useEffect(() => {
    fetchFilterOptions();
  }, []);

  const updateFilter = (key: keyof Filters, value: any) => {
    setFilters((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const clearFilters = () => {
    setFilters({
      search: "",
      category: [],
      brand: [],
      priceRange: [0, 1000],
      rating: 0,
      inStock: false,
      colors: [],
      sizes: [],
    });
  };

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
    filterOptions,
    refetch: fetchProducts,
  };
};

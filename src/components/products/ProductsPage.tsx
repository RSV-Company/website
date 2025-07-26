"use client";

import { useEffect, useState } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ViewMode } from "@/types/products";
import FilterSheet from "./FilterSheet";
import ActiveFilters from "./ActiveFilters";
import ProductGrid from "./ProductGrid";
import { useSupabaseProducts } from "@/hooks/useProducts";
import { useSearchParams } from "next/navigation";

const ProductsPage = () => {
  const [viewMode, setViewMode] = useState<ViewMode>("grid");
  const params = useSearchParams()
  const categoryId = params.get("category") || "";

  const [activeCategoryId, setActiveCategoryId] = useState(categoryId);

  useEffect(() => {
    setActiveCategoryId(categoryId);
  }, [categoryId]);

  const {
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
  } = useSupabaseProducts(activeCategoryId);

  const [searchTerm, setSearchTerm] = useState(filters.search);

useEffect(() => {
  const handler = setTimeout(() => {
    updateFilter("search", searchTerm);
  }, 500); // 500ms debounce

  return () => {
    clearTimeout(handler);
  };
}, [searchTerm]);

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-red-600 mb-2">Error</h2>
          <p className="text-muted-foreground">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen max-w-7xl mx-auto bg-primary-bg">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Products</h1>
          <p className="text-muted-foreground">
            Showing {products?.length} products
          </p>
        </div>

        {/* Search and Filter Bar */}
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>

          <div className="flex gap-2">
            <FilterSheet
              filters={filters}
              updateFilter={updateFilter}
              clearFilters={clearFilters}
              // activeFiltersCount={activeFiltersCount}
              filterOptions={filterOptions}
            />

            <Select value={sortBy} onValueChange={setSortBy as any}>
              <SelectTrigger className="w-48">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="featured">Featured</SelectItem>
                <SelectItem value="newest">Newest</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="rating">Highest Rated</SelectItem>
                <SelectItem value="popularity">Most Popular</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Active Filters */}
        <ActiveFilters
          filters={filters}
          removeFilter={removeFilter}
          clearFilters={clearFilters}
          // activeFiltersCount={activeFiltersCount}
        />

        {/* Products Grid */}
        <ProductGrid
          products={products}
          viewMode={viewMode}
          isLoading={isLoading}
          onClearFilters={clearFilters}
        />
      </div>
      
    </div>
  );
};

export default ProductsPage;

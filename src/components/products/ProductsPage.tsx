"use client";

import { useState, useEffect } from "react";
import { Search, Grid, List } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useProducts } from "@/hooks/useProducts";
import { ViewMode } from "@/types/products";
import FilterSheet from "./FilterSheet";
import ActiveFilters from "./ActiveFilters";
import ProductGrid from "./ProductGrid";
import { allMockProducts } from "@/const/products";

const ProductsPage = () => {
  const [viewMode, setViewMode] = useState<ViewMode>("grid");
  const {
    products,
    setProducts,
    filteredProducts,
    filters,
    updateFilter,
    clearFilters,
    removeFilter,
    sortBy,
    setSortBy,
    isLoading,
    setIsLoading,
    activeFiltersCount,
    filterOptions,
  } = useProducts();

  // Fetch products - replace with your API call
  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);
      try {
        setProducts(allMockProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, [setProducts, setIsLoading]);

  return (
    <div className="min-h-screen max-w-7xl mx-auto bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Products</h1>
          <p className="text-muted-foreground">
            Showing {filteredProducts.length} of {products.length} products
          </p>
        </div>

        {/* Search and Filter Bar */}
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search products..."
              value={filters.search}
              onChange={(e) => updateFilter("search", e.target.value)}
              className="pl-10"
            />
          </div>

          <div className="flex gap-2">
            <FilterSheet
              filters={filters}
              updateFilter={updateFilter}
              clearFilters={clearFilters}
              activeFiltersCount={activeFiltersCount}
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

            {/* <div className="flex border rounded-md">
              <Button
                variant={viewMode === "grid" ? "default" : "ghost"}
                size="sm"
                onClick={() => setViewMode("grid")}
              >
                <Grid className="h-4 w-4" />
              </Button>
              <Button
                variant={viewMode === "list" ? "default" : "ghost"}
                size="sm"
                onClick={() => setViewMode("list")}
              >
                <List className="h-4 w-4" />
              </Button>
            </div> */}
          </div>
        </div>

        {/* Active Filters */}
        <ActiveFilters
          filters={filters}
          removeFilter={removeFilter}
          clearFilters={clearFilters}
          activeFiltersCount={activeFiltersCount}
        />

        {/* Products Grid */}
        <ProductGrid
          products={filteredProducts}
          viewMode={viewMode}
          isLoading={isLoading}
          onClearFilters={clearFilters}
        />
      </div>
    </div>
  );
};

export default ProductsPage;

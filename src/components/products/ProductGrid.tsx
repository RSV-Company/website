import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Product, ViewMode } from "@/types/products";
import { ProductCard } from "../landingPage/ProductCard";

interface ProductGridProps {
  products: Product[];
  viewMode: ViewMode;
  isLoading: boolean;
  onClearFilters: () => void;
}

const ProductGrid = ({
  products,
  viewMode,
  isLoading,
  onClearFilters,
}: ProductGridProps) => {
  // Loading skeleton
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[...Array(8)].map((_, i) => (
          <div key={i} className="bg-muted animate-pulse rounded-lg h-80" />
        ))}
      </div>
    );
  }

  // No products found
  if (products.length === 0) {
    return (
      <div className="text-center py-16">
        <div className="mb-4">
          <h3 className="text-lg font-semibold text-muted-foreground">
            No products found
          </h3>
          <p className="text-sm text-muted-foreground mt-2">
            Try adjusting your filters or search terms
          </p>
        </div>
        <Button onClick={onClearFilters} variant="outline">
          Clear all filters
        </Button>
      </div>
    );
  }

  // Products grid
  return (
    <div
      className={`grid gap-6 ${
        viewMode === "grid"
          ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          : "grid-cols-2"
      }`}
    >
      {products.map((product) => (
        <Link key={product.id} href={`/products/${product.id}`}>
          <ProductCard viewMode={viewMode} {...product} />
        </Link>
      ))}
    </div>
  );
};

export default ProductGrid;

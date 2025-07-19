import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { Filters } from "@/types/products";

interface ActiveFiltersProps {
  filters: Filters;
  removeFilter: (filterType: keyof Filters, value?: string) => void;
  clearFilters: () => void;
  // activeFiltersCount: number;
}

const ActiveFilters = ({
  filters,
  removeFilter,
  clearFilters,
}: // activeFiltersCount,
ActiveFiltersProps) => {
  // if (activeFiltersCount === 0) return null;

  return (
    <div className="mb-6">
      <div className="flex flex-wrap gap-2 items-center">
        {/* <span className="text-sm text-muted-foreground">Active filters:</span> */}

        {/* {filters.category.map((category) => (
          <Badge
            key={`category-${category}`}
            variant="secondary"
            className="cursor-pointer hover:bg-secondary/80 transition-colors"
            onClick={() => removeFilter("category", category)}
          >
            {category}
            <X className="h-3 w-3 ml-1" />
          </Badge>
        ))}

        {filters.brand.map((brand) => (
          <Badge
            key={`brand-${brand}`}
            variant="secondary"
            className="cursor-pointer hover:bg-secondary/80 transition-colors"
            onClick={() => removeFilter("brand", brand)}
          >
            {brand}
            <X className="h-3 w-3 ml-1" />
          </Badge>
        ))}

        {filters.tags.map((tag) => (
          <Badge
            key={`tag-${tag}`}
            variant="secondary"
            className="cursor-pointer hover:bg-secondary/80 transition-colors"
            onClick={() => removeFilter("tags", tag)}
          >
            #{tag}
            <X className="h-3 w-3 ml-1" />
          </Badge>
        ))}

        {filters.colors?.map((color) => (
          <Badge
            key={`color-${color}`}
            variant="secondary"
            className="cursor-pointer hover:bg-secondary/80 transition-colors capitalize"
            onClick={() => removeFilter("colors", color)}
          >
            {color}
            <X className="h-3 w-3 ml-1" />
          </Badge>
        ))}

        {filters.sizes?.map((size) => (
          <Badge
            key={`size-${size}`}
            variant="secondary"
            className="cursor-pointer hover:bg-secondary/80 transition-colors uppercase"
            onClick={() => removeFilter("sizes", size)}
          >
            {size}
            <X className="h-3 w-3 ml-1" />
          </Badge>
        ))}

        {filters.rating > 0 && (
          <Badge
            variant="secondary"
            className="cursor-pointer hover:bg-secondary/80 transition-colors"
            onClick={() => removeFilter("rating")}
          >
            {filters.rating}+ stars
            <X className="h-3 w-3 ml-1" />
          </Badge>
        )}

        {filters.inStock && (
          <Badge
            variant="secondary"
            className="cursor-pointer hover:bg-secondary/80 transition-colors"
            onClick={() => removeFilter("inStock")}
          >
            In stock
            <X className="h-3 w-3 ml-1" />
          </Badge>
        )}

        {(filters.priceRange[0] > 0 || filters.priceRange[1] < 1000) && (
          <Badge
            variant="secondary"
            className="cursor-pointer hover:bg-secondary/80 transition-colors"
            onClick={() => removeFilter("priceRange")}
          >
            ${filters.priceRange[0]} - ${filters.priceRange[1]}
            <X className="h-3 w-3 ml-1" />
          </Badge>
        )} */}

        <Button
          variant="ghost"
          size="sm"
          onClick={clearFilters}
          className="text-muted-foreground hover:text-foreground"
        >
          Clear all filters
        </Button>
      </div>
    </div>
  );
};

export default ActiveFilters;

import { Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Filters } from "@/types/products";

interface FilterSheetProps {
  filters: Filters;
  updateFilter: (key: keyof Filters, value: any) => void;
  clearFilters: () => void;
  activeFiltersCount: number;
  filterOptions: {
    categories: string[];
    brands: string[];
    tags: string[];
    colors: string[];
    sizes: string[];
  };
}

const FilterSheet = ({
  filters,
  updateFilter,
  clearFilters,
  activeFiltersCount,
  filterOptions,
}: FilterSheetProps) => {
  const handleArrayFilter = (
    key: keyof Filters,
    value: string,
    checked: boolean
  ) => {
    const currentArray = filters[key] as string[];
    if (checked) {
      updateFilter(key, [...currentArray, value]);
    } else {
      updateFilter(
        key,
        currentArray.filter((item) => item !== value)
      );
    }
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" className="relative">
          <Filter className="h-4 w-4 mr-2" />
          Filters
          {activeFiltersCount > 0 && (
            <Badge
              variant="secondary"
              className="ml-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs"
            >
              {activeFiltersCount}
            </Badge>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent className="w-80 overflow-y-auto">
        <SheetHeader>
          <SheetTitle>Filters</SheetTitle>
          <SheetDescription>
            Narrow down your search with these filters
          </SheetDescription>
        </SheetHeader>

        <div className="space-y-6 mt-6 px-2 pb-2">
          {/* Price Range */}
          <div>
            <Label className="text-sm font-medium">Price Range</Label>
            <div className="mt-2">
              <Slider
                value={filters.priceRange}
                onValueChange={(value) =>
                  updateFilter("priceRange", value as [number, number])
                }
                max={1000}
                step={10}
                className="w-full"
              />
              <div className="flex justify-between text-sm text-muted-foreground mt-1">
                <span>${filters.priceRange[0]}</span>
                <span>${filters.priceRange[1]}</span>
              </div>
            </div>
          </div>

          <Separator />

          {/* Categories */}
          <div>
            <Label className="text-sm font-medium">Categories</Label>
            <div className="mt-2 space-y-2 max-h-32 overflow-y-auto">
              {filterOptions.categories.map((category) => (
                <div key={category} className="flex items-center space-x-2">
                  <Checkbox
                    id={`category-${category}`}
                    checked={filters.category.includes(category)}
                    onCheckedChange={(checked) =>
                      handleArrayFilter(
                        "category",
                        category,
                        checked as boolean
                      )
                    }
                  />
                  <Label htmlFor={`category-${category}`} className="text-sm">
                    {category}
                  </Label>
                </div>
              ))}
            </div>
          </div>

          <Separator />

          {/* Brands */}
          <div>
            <Label className="text-sm font-medium">Brands</Label>
            <div className="mt-2 space-y-2 max-h-32 overflow-y-auto">
              {filterOptions.brands.map((brand) => (
                <div key={brand} className="flex items-center space-x-2">
                  <Checkbox
                    id={`brand-${brand}`}
                    checked={filters.brand.includes(brand)}
                    onCheckedChange={(checked) =>
                      handleArrayFilter("brand", brand, checked as boolean)
                    }
                  />
                  <Label htmlFor={`brand-${brand}`} className="text-sm">
                    {brand}
                  </Label>
                </div>
              ))}
            </div>
          </div>

          <Separator />

          {/* Colors */}
          {filterOptions.colors.length > 0 && (
            <>
              <div>
                <Label className="text-sm font-medium">Colors</Label>
                <div className="mt-2 flex flex-wrap gap-2">
                  {filterOptions.colors.map((color) => (
                    <div key={color} className="flex items-center space-x-2">
                      <Checkbox
                        id={`color-${color}`}
                        checked={filters.colors?.includes(color) || false}
                        onCheckedChange={(checked) =>
                          handleArrayFilter("colors", color, checked as boolean)
                        }
                      />
                      <Label
                        htmlFor={`color-${color}`}
                        className="text-sm capitalize"
                      >
                        {color}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>
              <Separator />
            </>
          )}

          {/* Sizes */}
          {filterOptions.sizes.length > 0 && (
            <>
              <div>
                <Label className="text-sm font-medium">Sizes</Label>
                <div className="mt-2 flex flex-wrap gap-2">
                  {filterOptions.sizes.map((size) => (
                    <div key={size} className="flex items-center space-x-2">
                      <Checkbox
                        id={`size-${size}`}
                        checked={filters.sizes?.includes(size) || false}
                        onCheckedChange={(checked) =>
                          handleArrayFilter("sizes", size, checked as boolean)
                        }
                      />
                      <Label
                        htmlFor={`size-${size}`}
                        className="text-sm uppercase"
                      >
                        {size}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>
              <Separator />
            </>
          )}

          {/* Rating */}
          <div>
            <Label className="text-sm font-medium">Minimum Rating</Label>
            <Select
              value={filters.rating.toString()}
              onValueChange={(value) => updateFilter("rating", Number(value))}
            >
              <SelectTrigger className="mt-2">
                <SelectValue placeholder="Any rating" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="0">Any rating</SelectItem>
                <SelectItem value="4">4+ stars</SelectItem>
                <SelectItem value="3">3+ stars</SelectItem>
                <SelectItem value="2">2+ stars</SelectItem>
                <SelectItem value="1">1+ stars</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Separator />

          {/* Stock Status */}
          <div className="flex items-center space-x-2">
            <Checkbox
              id="inStock"
              checked={filters.inStock}
              onCheckedChange={(checked) =>
                updateFilter("inStock", checked as boolean)
              }
            />
            <Label htmlFor="inStock" className="text-sm">
              In stock only
            </Label>
          </div>

          <Button onClick={clearFilters} variant="outline" className="w-full">
            Clear All Filters
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default FilterSheet;

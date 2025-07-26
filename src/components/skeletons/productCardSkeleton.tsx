import { Skeleton } from "@/components/ui/skeleton";

export function SkeletonProductCard() {
  return (
    <div className="w-full border gap-2 bg-white p-3 shadow-none rounded-none dark:border-gray-700 dark:bg-gray-800 space-y-3">
      {/* Image section with badges */}
      <div className="h-56 w-full relative">
        <Skeleton className="w-full h-full rounded-md" />

        {/* Top-left badge */}
        <div className="absolute top-2 left-2">
          <Skeleton className="h-5 w-16 rounded-full" />
        </div>

        {/* Top-right badge */}
        <div className="absolute top-2 right-2">
          <Skeleton className="h-5 w-20 rounded-full" />
        </div>

        {/* Bottom-left discount badge */}
        <div className="absolute bottom-2 left-2">
          <Skeleton className="h-5 w-16 rounded-full" />
        </div>
      </div>

      <div className="pt-2 space-y-2">
        {/* Category pill */}
        <Skeleton className="h-4 w-20 rounded-full" />

        {/* Product title */}
        <Skeleton className="h-5 w-3/4" />

        {/* Rating */}
        <div className="flex items-center gap-2">
          <Skeleton className="h-4 w-20" />
          <Skeleton className="h-4 w-6" />
          <Skeleton className="h-4 w-10" />
        </div>

        {/* Prices */}
        <div className="flex items-center gap-2">
          <Skeleton className="h-6 w-24" />
          <Skeleton className="h-5 w-16" />
        </div>

        {/* Stock status */}
        <Skeleton className="h-4 w-32" />

        {/* Add to Cart button */}
        <Skeleton className="h-10 w-full rounded-md" />
      </div>
    </div>
  );
}

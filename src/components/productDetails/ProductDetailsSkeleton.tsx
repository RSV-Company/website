import React from "react";
import { Skeleton } from "../ui/skeleton";

const ProductDetailsSkeleton = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Back button and title skeleton */}
      <div className="flex items-center space-x-2 mb-4">
        <Skeleton className="h-8 w-8 rounded" />
        <Skeleton className="h-6 w-40" />
      </div>

      {/* Image and Info skeleton */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Image skeleton */}
        <div className="w-full aspect-square">
          <Skeleton className="w-full h-full rounded" />
        </div>

        {/* Product info skeleton */}
        <div className="space-y-4">
          <Skeleton className="h-6 w-3/4" />
          <Skeleton className="h-6 w-1/2" />
          <Skeleton className="h-10 w-full" />
          <Skeleton className="h-10 w-1/2" />
        </div>
      </div>

      {/* Tabs skeleton */}
      <div className="my-8">
        <div className="grid grid-cols-3 gap-4 mb-4">
          <Skeleton className="h-10 w-full" />
          <Skeleton className="h-10 w-full" />
          <Skeleton className="h-10 w-full" />
        </div>
        <Skeleton className="h-40 w-full" />
      </div>
    </div>
  );
};

export default ProductDetailsSkeleton;

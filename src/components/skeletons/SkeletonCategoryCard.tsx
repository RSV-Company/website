import { Skeleton } from "@/components/ui/skeleton";

export function SkeletonCategoryCard() {
  return (
    <div className="min-w-[85%] max-w-[320px] shrink-0 bg-[#e9fef9] p-4 flex flex-col items-center space-y-4 rounded-md">
      {/* Image placeholder */}
      <Skeleton className="w-full h-[300px] rounded-md" />

      {/* Title */}
      <Skeleton className="h-5 w-32" />

      {/* Button */}
      <Skeleton className="h-10 w-36 rounded-full" />
    </div>
  );
}

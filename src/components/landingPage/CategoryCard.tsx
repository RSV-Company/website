// components/CategoryCard.tsx
import React from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

interface CategoryCardProps {
  imageUrl: string;
  title: string;
  itemCount: number;
  items: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({
  imageUrl,
  title,
  itemCount,
  items,
}) => {
  return (
    <Card className="overflow-hidden py-0 gap-0">
      <div className="relative w-full h-58">
        <img
          src={imageUrl}
          alt={title}
          className="object-cover w-full h-full"
        />
        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent px-4 py-2 text-white">
          <h3 className="text-sm font-semibold">{title}</h3>
          <p className="text-xs">{itemCount} items</p>
        </div>
      </div>
      <CardContent className="py-4 px-4">
        <h3 className="text-sm text-gray-800">{items}</h3>
      </CardContent>
    </Card>
  );
};

export default CategoryCard;

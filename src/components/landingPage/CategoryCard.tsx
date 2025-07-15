// components/CategoryCard.tsx
import React from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface CategoryCardProps {
  imageUrl: string;
  title: string;
  itemCount: number;
}

const CategoryCard: React.FC<CategoryCardProps> = ({
  imageUrl,
  title,
  itemCount,
}) => {
  return (
    <Card className="group w-full rounded-none p-0 bg-transparent overflow-hidden border-0 shadow-none">
      {/* Image Section */}
      <div className="relative w-full h-96 overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Content Section */}
      <CardContent className="text-center">
        <h3 className="text-xl font-bold mb-4 uppercase tracking-wide text-gray-900">
          {title}
        </h3>
        <Button className="bg-primary hover:bg-gray-800 text-white font-semibold px-8 py-3 rounded-full text-sm uppercase tracking-wide transition-colors duration-200">
          Shop now
        </Button>
      </CardContent>
    </Card>
  );
};

export default CategoryCard;

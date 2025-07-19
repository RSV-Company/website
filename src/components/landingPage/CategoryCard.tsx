// components/CategoryCard.tsx
import React from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface CategoryCardProps {
  imageUrl: string;
  title: string;
  itemCount: number;
  link: number;
}

const CategoryCard: React.FC<CategoryCardProps> = ({
  imageUrl,
  title,
  itemCount,
  link,
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
        <Link href={`/products?category=${link}`}>
          <Button className="bg-primary hover:bg-gray-800 text-white font-semibold px-8 py-3 rounded-full text-sm uppercase tracking-wide transition-colors duration-200">
            Shop now
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
};

export default CategoryCard;

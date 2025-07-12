"use client";
import { Eye, Heart, ShoppingCart } from "lucide-react";
import { useState } from "react";

interface ProductCardProps {
  title: string;
  category: string;
  image: string;
  price: string;
  originalPrice?: string;
  badge?: string;
  viewMode?: string;
}

export function ProductCard({
  title,
  category,
  image,
  price,
  originalPrice,
  badge,
  viewMode,
}: any) {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  console.log(title);

  if (viewMode === "list") {
    return (
      <div
        className="group relative bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 flex"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {badge && (
          <div className="absolute top-3 left-3 z-10 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
            {badge}
          </div>
        )}

        <button
          onClick={() => setIsWishlisted(!isWishlisted)}
          className="absolute cursor-pointer top-3 right-3 z-10 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm hover:shadow-md transition-all duration-200"
        >
          <Heart
            className={`w-4 h-4 transition-colors ${
              isWishlisted
                ? "fill-red-500 text-red-500"
                : "text-gray-400 hover:text-red-500"
            }`}
          />
        </button>

        {/* Image section - fixed width in list view */}
        <div className="relative w-48 h-48 flex-shrink-0 overflow-hidden bg-gray-50">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />

          <div
            className={`absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center gap-2 transition-opacity duration-300 ${
              isHovered ? "opacity-75" : "opacity-0"
            }`}
          >
            <button className="bg-white cursor-pointer text-gray-800 p-2 rounded-full hover:bg-gray-100 transition-colors">
              <Eye className="w-4 h-4" />
            </button>
            <button className="bg-white text-gray-800 cursor-pointer p-2 rounded-full hover:bg-gray-100 transition-colors">
              <ShoppingCart className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Content section - takes remaining space */}
        <div className="flex-1 p-4 flex flex-col justify-between">
          <div>
            <div className="text-sm text-gray-500 mb-1 uppercase tracking-wide">
              {category}
            </div>

            <h3 className="font-semibold cursor-pointer text-gray-900 mb-2 text-lg group-hover:text-blue-600 transition-colors">
              {title}
            </h3>

            <div className="flex items-center gap-2 mb-3">
              <span className="text-xl font-bold text-gray-900">{price}</span>
              {originalPrice && (
                <span className="text-sm text-gray-500 line-through">
                  {originalPrice}
                </span>
              )}
            </div>
          </div>

          <button className="w-full cursor-pointer bg-gray-900 text-white py-2 rounded-lg hover:bg-gray-800 transition-colors duration-200 font-medium">
            Add to Cart
          </button>
        </div>
      </div>
    );
  }

  // Grid view (original layout)
  return (
    <div
      className="group relative bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {badge && (
        <div className="absolute top-3 left-3 z-10 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
          {badge}
        </div>
      )}

      <button
        onClick={() => setIsWishlisted(!isWishlisted)}
        className="absolute cursor-pointer top-3 right-3 z-10 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm hover:shadow-md transition-all duration-200"
      >
        <Heart
          className={`w-4 h-4 transition-colors ${
            isWishlisted
              ? "fill-red-500 text-red-500"
              : "text-gray-400 hover:text-red-500"
          }`}
        />
      </button>

      <div className="relative aspect-square overflow-hidden bg-gray-50">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />

        <div
          className={`absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center gap-2 transition-opacity duration-300 ${
            isHovered ? "opacity-75" : "opacity-0"
          }`}
        >
          <button className="bg-white cursor-pointer text-gray-800 p-2 rounded-full hover:bg-gray-100 transition-colors">
            <Eye className="w-4 h-4" />
          </button>
          <button className="bg-white text-gray-800 cursor-pointer p-2 rounded-full hover:bg-gray-100 transition-colors">
            <ShoppingCart className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="p-4">
        <div className="text-sm text-gray-500 mb-1 uppercase tracking-wide">
          {category}
        </div>

        <h3 className="font-semibold cursor-pointer text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
          {title}
        </h3>

        <div className="flex items-center gap-2 mb-3">
          <span className="text-lg font-bold text-gray-900">{price}</span>
          {originalPrice && (
            <span className="text-sm text-gray-500 line-through">
              {originalPrice}
            </span>
          )}
        </div>

        <button className="w-full cursor-pointer bg-primary text-white py-2 rounded-lg hover:bg-gray-800 transition-colors duration-200 font-medium">
          Add to Cart
        </button>
      </div>
    </div>
  );
}

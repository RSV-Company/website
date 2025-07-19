"use client";

import { Heart, ShoppingCart, Star } from "lucide-react";
import { useState } from "react";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { Product } from "@/types/products";
import Link from "next/link";
import { useCart } from "react-use-cart";

interface ProductCardProps {
  product: Product;
  viewMode?: "grid" | "list";
}

export function ProductCard({ product, viewMode = "grid" }: ProductCardProps) {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const { addItem } = useCart();

  const currentPrice = product?.discount_price || product?.price;
  const hasDiscount = !!product?.discount_price;

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${
          i < Math.floor(rating)
            ? "text-yellow-400 fill-current"
            : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <div className="w-full border gap-2 bg-white p-3 shadow-none rounded-none dark:border-gray-700 dark:bg-gray-800">
      <div className="h-56 w-full relative">
        <img
          className="w-full h-full object-cover"
          src={product.main_image_url || "/placeholder.jpg"}
          alt={product.title}
        />

        {/* Badges */}
        {product.is_featured && (
          <Badge className="bg-blue-500 text-white absolute top-2 left-2 text-xs font-medium">
            Featured
          </Badge>
        )}

        {product.is_best_selling && (
          <Badge className="bg-green-500 text-white absolute top-2 right-2 text-xs font-medium">
            Best Seller
          </Badge>
        )}

        {hasDiscount && (
          <Badge className="bg-red-500 text-white absolute bottom-2 left-2 text-xs font-medium">
            {Math.round(((product.price - currentPrice) / product.price) * 100)}
            % OFF
          </Badge>
        )}
      </div>

      <div className="pt-2 p-0">
        <div className="mb-2 flex items-center justify-between gap-4">
          {product.category && (
            <p className="bg-primary-100 text-primary-800 dark:bg-primary-900 dark:text-primary-300 text-xs font-medium">
              {product.category.name}
            </p>
          )}

          {/* <div className="flex items-center justify-end gap-1">
            <Button
              variant="ghost"
              size="sm"
              className="p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              onClick={() => setIsWishlisted(!isWishlisted)}
            >
              <Heart
                className={`h-5 w-5 ${
                  isWishlisted ? "fill-red-500 text-red-500" : ""
                }`}
              />
            </Button>
          </div> */}
        </div>

        <Link
          href={`/products/${product.slug}`}
          className="text-lg font-semibold leading-tight text-gray-900 hover:underline dark:text-white"
        >
          {product.title}
        </Link>

        <div className="mt-2 flex items-center gap-2">
          <div className="flex items-center">{renderStars(product.rating)}</div>
          <p className="text-sm font-medium text-gray-900 dark:text-white">
            {product.rating.toFixed(1)}
          </p>
          <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
            ({product.total_reviews})
          </p>
        </div>

        <div className="mt-4 flex flex-col justify-between gap-4">
          <div className="flex items-center gap-2">
            <p className="text-2xl font-extrabold leading-tight text-gray-900 dark:text-white">
              ${currentPrice.toFixed(2)}
            </p>
            {hasDiscount && (
              <p className="text-lg font-medium text-gray-500 dark:text-gray-400 line-through">
                ${product.price.toFixed(2)}
              </p>
            )}
          </div>

          {/* Stock status */}
          <div className="text-sm">
            {product.stock_quantity > 0 ? (
              <span className="text-green-600">
                In Stock ({product.stock_quantity} left)
              </span>
            ) : (
              <span className="text-red-600">Out of Stock</span>
            )}
          </div>

          <Button
            className="inline-flex items-center bg-primary px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            disabled={product.stock_quantity === 0}
            onClick={() => {
              addItem({
                ...product,
                price: product.discount_price,
                originalPrice: product.price,
              });
            }}
          >
            <ShoppingCart className="-ms-2 me-2 h-5 w-5" />
            Add to cart
          </Button>
        </div>
      </div>
    </div>
  );
}

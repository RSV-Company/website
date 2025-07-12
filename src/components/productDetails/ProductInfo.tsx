"use client";

import {
  Heart,
  Minus,
  Plus,
  RotateCcw,
  Share2,
  Shield,
  ShoppingCart,
  Star,
  Truck,
} from "lucide-react";
import { useState } from "react";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";

const ProductInfo = ({ product }: any) => {
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);

  const handleQuantityChange = (type: string) => {
    if (type === "increment") {
      setQuantity((prev) => prev + 1);
    } else if (type === "decrement" && quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
        <p className="text-lg text-gray-600 mt-2">{product.brand}</p>
      </div>

      <div className="flex items-center space-x-4">
        <div className="flex items-center">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`h-5 w-5 ${
                i < Math.floor(product.rating)
                  ? "text-yellow-400 fill-current"
                  : "text-gray-300"
              }`}
            />
          ))}
        </div>
        <span className="text-sm text-gray-600">
          ({product.reviews} reviews)
        </span>
      </div>

      <div className="flex items-center space-x-4">
        <span className="text-3xl font-bold text-gray-900">
          ${product.price}
        </span>
        {product.originalPrice && (
          <span className="text-lg text-gray-500 line-through">
            ${product.originalPrice}
          </span>
        )}
        {product.discount && (
          <Badge variant="destructive">{product.discount}% OFF</Badge>
        )}
      </div>

      <div className="space-y-4">
        <div>
          <h3 className="text-sm font-medium text-gray-900 mb-2">Color</h3>
          <div className="flex space-x-2">
            {product.colors.map((color: string) => (
              <button
                key={color}
                onClick={() => setSelectedColor(color)}
                className={`w-8 h-8 rounded-full border-2 ${
                  selectedColor === color
                    ? "border-gray-900"
                    : "border-gray-300"
                }`}
                style={{ backgroundColor: color.toLowerCase() }}
              />
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-medium text-gray-900 mb-2">Size</h3>
          <div className="flex space-x-2">
            {product.sizes.map((size: string) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`px-3 py-1 text-sm border rounded-md ${
                  selectedSize === size
                    ? "border-gray-900 bg-gray-900 text-white"
                    : "border-gray-300 text-gray-700 hover:border-gray-400"
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-medium text-gray-900 mb-2">Quantity</h3>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => handleQuantityChange("decrement")}
              className="p-1 rounded-md border border-gray-300 hover:bg-gray-50"
            >
              <Minus className="h-4 w-4" />
            </button>
            <span className="px-4 py-1 text-center min-w-[3rem]">
              {quantity}
            </span>
            <button
              onClick={() => handleQuantityChange("increment")}
              className="p-1 rounded-md border border-gray-300 hover:bg-gray-50"
            >
              <Plus className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      <div className="flex space-x-4">
        <Button className="flex-1" size="lg">
          <ShoppingCart className="h-5 w-5 mr-2" />
          Add to Cart
        </Button>
        <Button
          variant="outline"
          size="lg"
          onClick={() => setIsWishlisted(!isWishlisted)}
        >
          <Heart
            className={`h-5 w-5 ${
              isWishlisted ? "fill-current text-red-500" : ""
            }`}
          />
        </Button>
        <Button variant="outline" size="lg">
          <Share2 className="h-5 w-5" />
        </Button>
      </div>

      <div className="space-y-4 pt-4">
        <div className="flex items-center space-x-3">
          <Truck className="h-5 w-5 text-green-600" />
          <span className="text-sm text-gray-700">
            Free shipping on orders over $50
          </span>
        </div>
        <div className="flex items-center space-x-3">
          <Shield className="h-5 w-5 text-blue-600" />
          <span className="text-sm text-gray-700">
            2-year warranty included
          </span>
        </div>
        <div className="flex items-center space-x-3">
          <RotateCcw className="h-5 w-5 text-orange-600" />
          <span className="text-sm text-gray-700">30-day return policy</span>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;

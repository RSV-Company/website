import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Minus, Plus, Heart, Trash2, Star } from "lucide-react";

interface CartItemProps {
  item: any;
  onUpdateQuantity: (id: string, quantity: number) => void;
  onRemove: (id: string) => void;
}

export function CartItem({ item, onUpdateQuantity, onRemove }: CartItemProps) {
  const [isUpdating, setIsUpdating] = useState(false);
  const [isFavorited, setIsFavorited] = useState(false);

  const handleQuantityChange = async (newQuantity: number) => {
    setIsUpdating(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 300));
    onUpdateQuantity(item.id, newQuantity);
    setIsUpdating(false);
  };

  const handleRemove = () => {
    onRemove(item.id);
  };

  const handleMoveToWishlist = () => {
    setIsFavorited(!isFavorited);
    // In a real app, this would add to wishlist and remove from cart
  };

  return (
    <Card className="p-6 border-0 shadow-none">
      <div className="flex flex-col sm:flex-row gap-4">
        {/* Product Image */}
        <div className="relative flex-shrink-0 max-w-[6rem] sm:max-w-none">
          {" "}
          <img
            src={item.image}
            alt={item.name}
            className="w-24 h-24 sm:w-32 sm:h-32 object-cover rounded-lg"
          />
          {item.originalPrice && (
            <Badge className="absolute top-2 left-2 bg-red-500 text-white text-xs">
              SALE
            </Badge>
          )}
          {!item.inStock && (
            <Badge
              variant="secondary"
              className="absolute top-2 right-2 text-xs"
            >
              Out of Stock
            </Badge>
          )}
        </div>

        {/* Product Details */}
        <div className="flex-1 min-w-0">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
            <div className="flex-1">
              <h3 className="font-semibold text-lg text-gray-900 line-clamp-2">
                {item.name}
              </h3>

              {/* Rating */}
              {item.rating && (
                <div className="flex items-center mt-1 text-sm text-gray-600">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="ml-1">{item.rating}</span>
                  {item.reviews && (
                    <span className="ml-1">
                      ({item.reviews.toLocaleString()} reviews)
                    </span>
                  )}
                </div>
              )}

              {/* Variants */}
              <div className="flex gap-4 mt-2 text-sm text-gray-600">
                {item.color && <span>Color: {item.color}</span>}
                {item.size && <span>Size: {item.size}</span>}
              </div>

              {/* Price */}
              <div className="flex items-center gap-2 mt-2">
                <span className="text-xl font-bold text-gray-900">
                  ${item.price.toFixed(2)}
                </span>
                {item.originalPrice && (
                  <span className="text-sm text-gray-500 line-through">
                    ${item.originalPrice.toFixed(2)}
                  </span>
                )}
              </div>
            </div>

            {/* Actions */}
            <div className="flex sm:flex-col gap-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={handleMoveToWishlist}
                className="flex items-center gap-1"
              >
                <Heart
                  className={`h-4 w-4 ${
                    isFavorited ? "fill-red-500 text-red-500" : ""
                  }`}
                />
                <span className="hidden sm:inline">Save</span>
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={handleRemove}
                className="flex items-center gap-1 text-red-600 hover:text-red-700"
              >
                <Trash2 className="h-4 w-4" />
                <span className="hidden sm:inline">Remove</span>
              </Button>
            </div>
          </div>

          {/* Quantity Controls */}
          <div className="flex items-center justify-between mt-4">
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-gray-700">
                Quantity:
              </span>
              <div className="flex items-center border rounded-lg">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => handleQuantityChange(item.quantity - 1)}
                  disabled={isUpdating || item.quantity <= 1}
                  className="h-8 w-8 p-0"
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="px-3 py-1 text-center min-w-[2rem] text-sm font-medium">
                  {isUpdating ? "..." : item.quantity}
                </span>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => handleQuantityChange(item.quantity + 1)}
                  disabled={isUpdating || !item.inStock}
                  className="h-8 w-8 p-0"
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="text-right">
              <div className="text-lg font-bold text-gray-900">
                ${(item.price * item.quantity).toFixed(2)}
              </div>
              {item.originalPrice && (
                <div className="text-sm text-gray-500 line-through">
                  ${(item.originalPrice * item.quantity).toFixed(2)}
                </div>
              )}
            </div>
          </div>

          {/* Stock Status */}
          {!item.inStock && (
            <div className="mt-2 text-sm text-red-600">
              This item is currently out of stock. You can keep it in your cart
              and we'll notify you when it's available.
            </div>
          )}
        </div>
      </div>
    </Card>
  );
}

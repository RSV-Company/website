"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ShoppingBag } from "lucide-react";
import { EmptyCart } from "./EmptyCart";
import { CartItem } from "./CartItem";
import { CartSummary } from "./CartSummary";
import { RecommendedProducts } from "./RecommendedProducts";
import { initialCartItems } from "@/const/products";
import { useRouter } from "next/navigation";
import { useCart } from "react-use-cart";

export interface CartItemType {
  id: string;
  title: string;
  price: number;
  originalPrice?: number;
  image: string;
  quantity: number;
  color?: string;
  size?: string;
  inStock: boolean;
  rating?: number;
  reviews?: number;
}

export default function CartPage() {
  const {
    isEmpty,
    totalUniqueItems,
    items,
    updateItemQuantity,
    removeItem,
    cartTotal,
  } = useCart();

  const [promoCode, setPromoCode] = useState("");
  const [appliedPromo, setAppliedPromo] = useState<string | null>(null);
  const router = useRouter();

  // const updateQuantity = (id: string, quantity: number) => {
  //   if (quantity <= 0) {
  //     removeItem(id);
  //     return;
  //   }
  //   setCartItems((items) =>
  //     items.map((item) => (item.id === id ? { ...item, quantity } : item))
  //   );
  // };

  const applyPromoCode = () => {
    if (promoCode.toLowerCase() === "save20") {
      setAppliedPromo("SAVE20");
      setPromoCode("");
    }
  };

  const removePromoCode = () => {
    setAppliedPromo(null);
  };

  // const subtotal = cartItems.reduce(
  //   (sum, item) => sum + item.price * item.quantity,
  //   0
  // );
  // const discount = appliedPromo ? subtotal * 0.2 : 0;
  // const shipping = subtotal > 100 ? 0 : 9.99;
  // const tax = (subtotal - discount) * 0.08;
  // const total = subtotal - discount + shipping + tax;

  if (isEmpty) {
    return <EmptyCart />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <Button
              onClick={() => router.back()}
              variant="ghost"
              className="p-2"
            >
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Cart</h1>
              <p className="text-gray-600 mt-1">
                {totalUniqueItems} {totalUniqueItems === 1 ? "item" : "items"}{" "}
                in your cart
              </p>
            </div>
          </div>
          {/* <div className="flex items-center space-x-2 text-gray-600">
            <ShoppingBag className="h-5 w-5" />
            <span className="font-medium">Secure Checkout</span>
          </div> */}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm">
              <div className="p-6 border-b">
                <h2 className="text-lg font-semibold text-gray-900">
                  Cart Items
                </h2>
              </div>
              <div className="divide-y">
                {items.map((item) => (
                  <CartItem
                    key={item.id}
                    item={item}
                    onUpdateQuantity={updateItemQuantity}
                    onRemove={removeItem}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Cart Summary */}
          <div className="lg:col-span-1">
            <CartSummary
              // subtotal={subtotal}
              // discount={discount}
              // shipping={shipping}
              // tax={tax}
              total={cartTotal}
              promoCode={promoCode}
              appliedPromo={appliedPromo}
              onPromoChange={setPromoCode}
              onApplyPromo={applyPromoCode}
              onRemovePromo={removePromoCode}
            />
          </div>
        </div>

        {/* Recommended Products */}
        <div className="mt-12">{/* <RecommendedProducts /> */}</div>
      </div>
    </div>
  );
}

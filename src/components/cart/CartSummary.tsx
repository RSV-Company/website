import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ShoppingBag, Tag, X, Shield, Truck, RotateCcw } from "lucide-react";
import Separator from "../tabs/Separator";

interface CartSummaryProps {
  subtotal: number;
  discount: number;
  shipping: number;
  tax: number;
  total: number;
  promoCode: string;
  appliedPromo: string | null;
  onPromoChange: (code: string) => void;
  onApplyPromo: () => void;
  onRemovePromo: () => void;
}

export function CartSummary({
  subtotal,
  discount,
  shipping,
  tax,
  total,
  promoCode,
  appliedPromo,
  onPromoChange,
  onApplyPromo,
  onRemovePromo,
}: CartSummaryProps) {
  const [isProcessing, setIsProcessing] = useState(false);

  const handleCheckout = async () => {
    setIsProcessing(true);
    // Simulate checkout process
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsProcessing(false);
    // Redirect to checkout page
    console.log("Proceeding to checkout...");
  };

  return (
    <div className="space-y-6">
      {/* Order Summary */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <ShoppingBag className="h-5 w-5" />
            Order Summary
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex justify-between text-sm">
            <span>Subtotal</span>
            <span className="font-medium">${subtotal.toFixed(2)}</span>
          </div>

          {discount > 0 && (
            <div className="flex justify-between text-sm text-green-600">
              <span>Discount</span>
              <span className="font-medium">-${discount.toFixed(2)}</span>
            </div>
          )}

          <div className="flex justify-between text-sm">
            <span>Shipping</span>
            <span className="font-medium">
              {shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}
            </span>
          </div>

          <div className="flex justify-between text-sm">
            <span>Tax</span>
            <span className="font-medium">${tax.toFixed(2)}</span>
          </div>

          <Separator />

          <div className="flex justify-between text-lg font-bold">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>
        </CardContent>
      </Card>

      {/* Promo Code */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-base">
            <Tag className="h-4 w-4" />
            Promo Code
          </CardTitle>
        </CardHeader>
        <CardContent>
          {appliedPromo ? (
            <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
              <div className="flex items-center gap-2">
                <Badge
                  variant="secondary"
                  className="bg-green-100 text-green-800"
                >
                  {appliedPromo}
                </Badge>
                <span className="text-sm text-green-700">20% off applied!</span>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={onRemovePromo}
                className="h-6 w-6 p-0 text-green-600 hover:text-green-700"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          ) : (
            <div className="flex gap-2">
              <Input
                placeholder="Enter promo code"
                value={promoCode}
                onChange={(e) => onPromoChange(e.target.value)}
                className="flex-1"
              />
              <Button
                onClick={onApplyPromo}
                disabled={!promoCode.trim()}
                variant="outline"
              >
                Apply
              </Button>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Checkout Button */}
      <Button
        onClick={handleCheckout}
        disabled={isProcessing}
        className="w-full h-12 text-lg font-semibold"
        size="lg"
      >
        {isProcessing ? "Processing..." : "Proceed to Checkout"}
      </Button>

      {/* Security & Benefits */}
      <Card>
        <CardContent className="pt-6">
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-sm">
              <Shield className="h-5 w-5 text-green-600" />
              <span>Secure checkout with 256-bit SSL encryption</span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <Truck className="h-5 w-5 text-blue-600" />
              <span>Free shipping on orders over $100</span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <RotateCcw className="h-5 w-5 text-orange-600" />
              <span>30-day free returns</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Payment Methods */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base">Accepted Payment Methods</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex gap-2 flex-wrap">
            {["Visa", "Mastercard", "PayPal", "Apple Pay", "Google Pay"].map(
              (method) => (
                <Badge key={method} variant="outline" className="text-xs">
                  {method}
                </Badge>
              )
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

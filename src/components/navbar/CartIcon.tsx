"use client";

import { ShoppingCart } from "lucide-react";
import { Badge } from "../ui/badge";
import Link from "next/link";
import { useCart } from "react-use-cart";

const CartIcon = () => {
  const { totalUniqueItems } = useCart();

  return (
    <Link
      href={"/cart"}
      className="relative p-2 text-gray-700 hover:text-green-600 transition-colors rounded-full hover:bg-gray-100"
    >
      <ShoppingCart className="h-6 w-6" />
      {totalUniqueItems > 0 && (
        <Badge className="absolute -top-1 -right-1 bg-primary">
          {totalUniqueItems}
        </Badge>
      )}
    </Link>
  );
};

export default CartIcon;

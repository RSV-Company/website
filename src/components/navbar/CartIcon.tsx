"use client";

import { ShoppingCart } from "lucide-react";
import { useState } from "react";
import { Badge } from "../ui/badge";
import Link from "next/link";

const CartIcon = () => {
  const [cartCount, setCartCount] = useState(3);

  return (
    <Link
      href={"/cart"}
      className="relative p-2 text-gray-700 hover:text-green-600 transition-colors rounded-full hover:bg-gray-100"
    >
      <ShoppingCart className="h-6 w-6" />
      {cartCount > 0 && (
        <Badge className="absolute -top-1 -right-1 bg-primary">
          {cartCount}
        </Badge>
      )}
    </Link>
  );
};

export default CartIcon;

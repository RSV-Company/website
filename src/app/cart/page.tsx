import CartPage from "@/components/cart/CartPage";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Shopping Cart - Complete Your Purchase",
  description: "Review your selected RSV furniture and home decor items. Complete your purchase and transform your space with our premium collection.",
  keywords: ["shopping cart", "checkout", "purchase furniture", "buy home decor"],
  robots: {
    index: false, // Usually you don't want cart pages indexed
    follow: true,
  },
  openGraph: {
    title: "Shopping Cart | RSV",
    description: "Review your selected items and complete your purchase.",
    url: "https://shoprsv.uk/cart",
  },
  alternates: {
    canonical: 'https://shoprsv.uk/cart',
  },
}

const Cart = () => {
  return <CartPage />;
};

export default Cart;

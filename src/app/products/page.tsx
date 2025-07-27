import ProductsPage from "@/components/products/ProductsPage";
import { Metadata } from "next";
import React, { Suspense } from "react";

export const metadata: Metadata = {
  title: "Products - Shop Premium Home Furniture & Decor",
  description: "Browse RSV's complete collection of premium furniture, home decor, lighting, and accessories. Find the perfect pieces to create your dream home interior.",
  keywords: ["shop furniture", "home decor products", "premium furniture", "home accessories", "interior design", "furniture collection"],
  openGraph: {
    title: "Shop Premium Furniture & Home Decor | RSV Products",
    description: "Browse RSV's complete collection of premium furniture, home decor, lighting, and accessories.",
    url: "https://shoprsv.uk/products",
    images: [
      {
        url: "/fav.svg",
        width: 1200,
        height: 630,
        alt: "RSV Product Collection",
      },
    ],
  },
  alternates: {
    canonical: 'https://shoprsv.uk/products',
  },
}

const Products = () => {
  return <Suspense> <ProductsPage /> </Suspense>;
};

export default Products;

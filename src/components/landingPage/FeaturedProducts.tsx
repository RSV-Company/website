"use client";

import Link from "next/link";
import { products } from "@/const/products";
import { ProductCard } from "./ProductCard";
import { useRef } from "react";
import { Product } from "@/types/products";

export function FeaturedProducts({
  title,
  description,
  products,
  loading,
}: {
  title?: string;
  description?: string;
  products: Product[];
  loading: boolean;
}) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  return (
    <section className="w-full px-3 md:px-16 py-6 md:py-16">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-start gap-2 mb-4 flex-col lg:flex-row justify-between">
          <div>
            <h2 className="text-2xl mb-1 font-bold text-gray-900">
              {title || "Featured products this week"}
            </h2>
            <p className="text-gray-600">
              {description ||
                "Discover this week’s top picks—handpicked favorites just for you."}
            </p>
          </div>
        </div>

        {/* Mobile - horizontal scroll */}
        <div
          ref={scrollContainerRef}
          className="flex gap-4 overflow-x-auto scroll-smooth hide-scroll pb-4 pr-6 -ml-1 lg:hidden"
        >
          {products.map((product, index) => (
            <div key={index} className="max-w-[320px] shrink-0">
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        {/* Desktop - grid layout */}
        <div className="hidden lg:grid grid-cols-4 gap-6">
          {products.map((product, index) => (
            <ProductCard product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}

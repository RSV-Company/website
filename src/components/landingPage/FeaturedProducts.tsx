"use client";

import Link from "next/link";
import { products } from "@/const/products";
import { ProductCard } from "./ProductCard";
import { useRef } from "react";
import { Button } from "../ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function FeaturedProducts({
  title,
  description,
}: {
  title?: string;
  description?: string;
}) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    scrollContainerRef.current?.scrollBy({
      left: -250,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    scrollContainerRef.current?.scrollBy({
      left: 250,
      behavior: "smooth",
    });
  };

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

          <div className="flex gap-2 lg:hidden ml-auto">
            <Button
              variant="outline"
              size="icon"
              onClick={scrollLeft}
              className="rounded-full border-gray-300 hover:border-gray-400"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={scrollRight}
              className="rounded-full border-gray-300 hover:border-gray-400"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Mobile - horizontal scroll */}
        <div
          ref={scrollContainerRef}
          className="flex gap-4 overflow-x-auto scroll-smooth hide-scroll pb-4 pr-6 -ml-1 lg:hidden"
        >
          {products.map((product, index) => (
            <div key={index} className="min-w-[250px] shrink-0">
              <Link href={"/products/productDetails"}>
                <ProductCard {...product} />
              </Link>
            </div>
          ))}
        </div>

        {/* Desktop - grid layout */}
        <div className="hidden lg:grid grid-cols-4 gap-6">
          {products.map((product, index) => (
            <Link key={index} href={"/products/productDetails"}>
              <ProductCard {...product} />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

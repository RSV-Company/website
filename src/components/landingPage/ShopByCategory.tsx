"use client";

import React, { useRef } from "react";
import CategoryCard from "./CategoryCard";
import { categories } from "@/const/products";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const ShopByCategory = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    scrollContainerRef.current?.scrollBy({
      left: -320,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    scrollContainerRef.current?.scrollBy({
      left: 320,
      behavior: "smooth",
    });
  };

  return (
    <div className="bg-teal-200/15">
      <section className="px-3 max-w-7xl mx-auto py-6 md:py-16 ">
        <div className="mb-12 relative">
          <div className="flex items-start gap-2 flex-col lg:flex-row justify-between">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Shop by Category
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl">
                Explore our curated selection of products, organized by category
                for easy browsing.
              </p>
            </div>

            {/* Arrow buttons - only visible on tablet and mobile */}
            {/* <div className="flex gap-2 lg:hidden ml-auto">
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
            </div> */}
          </div>
        </div>

        {/* Horizontally scrollable container */}
        <div
          ref={scrollContainerRef}
          className="flex gap-2 overflow-x-auto scroll-smooth hide-scroll pb-4 pr-6 -ml-1 lg:hidden"
        >
          {categories.map((category, index) => (
            <div key={index} className="max-w-[320px] shrink-0">
              <CategoryCard
                imageUrl={category.imageUrl}
                title={category.title}
                itemCount={category.itemCount}
              />
            </div>
          ))}
        </div>

        {/* Grid layout for large screens */}
        <div className="hidden lg:grid grid-cols-4 gap-2">
          {categories.slice(0, 4).map((category, index) => (
            <CategoryCard
              key={index}
              imageUrl={category.imageUrl}
              title={category.title}
              itemCount={category.itemCount}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default ShopByCategory;

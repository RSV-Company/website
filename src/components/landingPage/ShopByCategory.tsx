"use client";

import React, { useRef } from "react";
import CategoryCard from "./CategoryCard";

const ShopByCategory = ({ categories }: any) => {
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
          {categories?.map((category: any) => (
            <div key={category.id} className="max-w-[320px] shrink-0">
              <CategoryCard
                imageUrl={
                  category.imageUrl ||
                  "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1099&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                }
                title={category.name}
                itemCount={category.order}
                link={category.id}
              />
            </div>
          ))}
        </div>

        {/* Grid layout for large screens */}
        <div className="hidden lg:grid grid-cols-4 gap-2">
          {categories?.map((category: any) => (
            <CategoryCard
              key={category.id}
              imageUrl={
                category.imageUrl ||
                "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1099&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
              title={category.name}
              itemCount={category.order}
              link={category.id}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default ShopByCategory;

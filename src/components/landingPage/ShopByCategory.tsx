"use client";

import React from "react";
import CategoryCard from "./CategoryCard";
import { categories } from "@/const/products";

const ShopByCategory = () => {
  return (
    <section className="px-6 py-16 bg-teal-200/10">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8">
          <h2 className="text-2xl mb-1 font-bold text-gray-900">
            Shop by Category
          </h2>
          <p className="text-gray-600">
            Explore our curated selection of products, organized by category for
            easy browsing.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {categories.map((category, index) => (
            <CategoryCard
              key={index}
              imageUrl={category.imageUrl}
              title={category.title}
              itemCount={category.itemCount}
              items={category.items}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopByCategory;

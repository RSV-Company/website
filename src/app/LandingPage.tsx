"use client";

import React, { useEffect, useState } from "react";
import { FeaturedProducts } from "@/components/landingPage/FeaturedProducts";
import GetLookContainer from "@/components/landingPage/GetLookContainer";
import { HeroSection } from "@/components/landingPage/HeroSection";
import { NewsletterSection } from "@/components/landingPage/NewsletterSection";
import ShopByCategory from "@/components/landingPage/ShopByCategory";
import { supabase } from "@/config/client";
import { Product } from "@/types/products";

const LandingPage = () => {
  const [featuredProducts, setFeaturedProducts] = useState<Product[]>([]);
  const [bestSellingProducts, setBestSellingProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<any>([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);

      // Fetch featured products
      const { data: featured, error: featuredError } = await supabase
        .from("products")
        .select(
          `
          *,
          categories:category_id(id, name),
          brands:brand_id(id, name)
        `
        )
        .eq("is_featured", true)
        .limit(4);

      if (featuredError) {
        console.error(
          "Error fetching featured products:",
          featuredError.message
        );
      }

      // Fetch best-selling products
      const { data: bestSelling, error: bestSellingError } = await supabase
        .from("products")
        .select(
          `
          *,
          categories:category_id(id, name),
          brands:brand_id(id, name)
        `
        )
        .eq("is_best_selling", true)
        .limit(4);

      const { data, error } = await supabase
        .from("categories")
        .select("*")
        .limit(4);

      setCategories(data);

      if (bestSellingError) {
        console.error(
          "Error fetching best-selling products:",
          bestSellingError.message
        );
      }

      setFeaturedProducts(featured || []);
      setBestSellingProducts(bestSelling || []);
      setLoading(false);
    };

    fetchProducts();
  }, []);

  return (
    <div className="min-h-screen bg-primary-bg overflow-x-hidden">
      <HeroSection />
      {/* <GetLookContainer /> */}
      <FeaturedProducts products={featuredProducts} loading={loading} />
      <ShopByCategory categories={categories} />
      <FeaturedProducts
        title="WAIT THERE’S MORE…"
        description="Discover some more items in our shop."
        products={bestSellingProducts}
        loading={loading}
      />
      {/* <NewsletterSection /> */}
    </div>
  );
};

export default LandingPage;

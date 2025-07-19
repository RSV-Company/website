"use client";

import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import ProductImages from "@/components/productDetails/ProductImages";
import ProductInfo from "@/components/productDetails/ProductInfo";
import Separator from "@/components/tabs/Separator";
import TabsList from "@/components/tabs/Tablist";
import Tabs from "@/components/tabs/Tabs";
import TabsContent from "@/components/tabs/TabsContent";
import TabsTrigger from "@/components/tabs/TabsTrigger";
import { ArrowLeft, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { supabase } from "@/config/client";
import ProductDetailsSkeleton from "@/components/productDetails/ProductDetailsSkeleton";

const ProductDetailsComponent = () => {
  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const { slug } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const { data, error } = await supabase
          .from("products")
          .select(
            `
          *,
          brand:brand_id(name),
          category:category_id(name),
          images:product_images(image_url, alt)
           reviews:reviews(
              id,
              rating,
              comment,
              created_at,
              user_id
            )
        `
          )
          .eq("slug", slug)
          .single();

        if (error) {
          console.error("Error fetching product:", error.message);
          setLoading(false);
          return;
        }

        setProduct(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    if (slug) fetchProduct();
  }, [slug]);

  if (loading) {
    return <ProductDetailsSkeleton />;
  }

  if (!product) {
    return <div className="p-8 text-red-500">Product not found.</div>;
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center space-x-2 mb-4">
          <Button onClick={() => router.back()} variant="ghost" className="p-2">
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <h3 className="text-md font-medium text-gray-900">{product.title}</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ProductImages
            images={product.images?.map((img: any) => img.image_url)}
            productName={product.title}
          />
          <ProductInfo product={product} />
        </div>

        <Separator className="my-8" />

        <Tabs defaultValue="description" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="description">Description</TabsTrigger>
            <TabsTrigger value="specifications">Specifications</TabsTrigger>
            {/* <TabsTrigger value="reviews">Reviews</TabsTrigger> */}
          </TabsList>

          <TabsContent value="description" className="mt-6">
            <div className="prose max-w-none text-gray-700 leading-relaxed">
              {product.description || "No description available."}
            </div>
          </TabsContent>

          <TabsContent value="specifications" className="mt-6">
            <div className="prose max-w-none text-gray-700 leading-relaxed whitespace-pre-line">
              {product.specification || "No specifications provided."}
            </div>
          </TabsContent>

          {/* <TabsContent value="reviews" className="mt-6">
            <p className="text-sm text-gray-500">
              {product.total_reviews || 0} review(s) with average rating{" "}
              {product.rating?.toFixed(1) || 0}/5
            </p>
          </TabsContent> */}
        </Tabs>
      </div>
    </div>
  );
};

export default ProductDetailsComponent;

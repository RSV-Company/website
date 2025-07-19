import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Plus, Heart } from "lucide-react";
import { products } from "@/const/products";
import Link from "next/link";
import { ProductCard } from "../landingPage/ProductCard";

export function RecommendedProducts() {
  const addToCart = (product: any) => {
    console.log("Adding to cart:", product.name);
    // Add to cart logic here
  };

  const addToWishlist = (product: any) => {
    console.log("Adding to wishlist:", product.name);
    // Add to wishlist logic here
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">
            You might also like
          </h2>
          <p className="text-gray-600 mt-1">
            Customers who bought similar items also purchased
          </p>
        </div>
        <Button variant="outline" className="hidden sm:inline-flex">
          View All
        </Button>
      </div>

      {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <Link key={index} href={"/products/productDetails"}>
            <ProductCard {...product} />
          </Link>
        ))}
      </div> */}

      {/* Mobile View All Button */}
      <div className="mt-6 text-center sm:hidden">
        <Button variant="outline" className="w-full">
          View All Recommendations
        </Button>
      </div>
    </div>
  );
}

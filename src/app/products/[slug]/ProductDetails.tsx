"use client";

import React from "react";
import ProductImages from "@/components/productDetails/ProductImages";
import ProductInfo from "@/components/productDetails/ProductInfo";
import Separator from "@/components/tabs/Separator";
import TabsList from "@/components/tabs/Tablist";
import Tabs from "@/components/tabs/Tabs";
import TabsContent from "@/components/tabs/TabsContent";
import TabsTrigger from "@/components/tabs/TabsTrigger";
import { ArrowLeft, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const product = {
  name: "Premium Wireless Headphones",
  brand: "AudioTech Pro",
  rating: 4.5,
  reviews: 324,
  price: 199.99,
  originalPrice: 249.99,
  discount: 20,
  colors: ["Black", "White", "Blue", "Red"],
  sizes: ["S", "M", "L", "XL"],
  images: [
    "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&h=600&fit=crop",
    "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=600&h=600&fit=crop",
    "https://images.unsplash.com/photo-1487215078519-e21cc028cb29?w=600&h=600&fit=crop",
    "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=600&h=600&fit=crop",
  ],
};

const ProductDetailsComponent = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center space-x-2 mb-4">
          <Button onClick={() => router.back()} variant="ghost" className="p-2">
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <div>
            <h3 className="text-md font-medium text-gray-900">
              {product.name}
            </h3>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ProductImages images={product.images} productName={product.name} />
          <ProductInfo product={product} />
        </div>

        <Separator className="my-8" />

        <Tabs defaultValue="description" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="description">Description</TabsTrigger>
            <TabsTrigger value="specifications">Specifications</TabsTrigger>
            <TabsTrigger value="reviews">Reviews</TabsTrigger>
          </TabsList>

          <TabsContent value="description" className="mt-6">
            <div className="prose max-w-none">
              <p className="text-gray-700 leading-relaxed">
                Experience superior sound quality with our Premium Wireless
                Headphones. Featuring advanced noise cancellation technology and
                premium materials, these headphones deliver an exceptional audio
                experience for music lovers and professionals alike.
              </p>
              <br />
              <p className="text-gray-700 leading-relaxed">
                With up to 30 hours of battery life and quick charge capability,
                you can enjoy uninterrupted listening throughout your day. The
                comfortable over-ear design ensures hours of comfortable wear,
                while the intuitive controls make it easy to manage your music
                and calls.
              </p>
            </div>
          </TabsContent>

          <TabsContent value="specifications" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium mb-3">Audio</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Frequency Response: 20Hz - 20kHz</li>
                  <li>• Driver Size: 40mm</li>
                  <li>• Impedance: 32 ohms</li>
                  <li>• Active Noise Cancellation: Yes</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-3">Connectivity</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Bluetooth Version: 5.2</li>
                  <li>• Range: Up to 30 feet</li>
                  <li>• Codecs: SBC, AAC, aptX</li>
                  <li>• Multi-device pairing: Yes</li>
                </ul>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="reviews" className="mt-6">
            <div className="space-y-4">
              <div className="border rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    <span className="font-medium">Sarah Johnson</span>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-4 w-4 text-yellow-400 fill-current"
                        />
                      ))}
                    </div>
                  </div>
                  <span className="text-sm text-gray-500">2 days ago</span>
                </div>
                <p className="text-gray-700 text-sm">
                  Amazing sound quality! The noise cancellation works perfectly,
                  and the battery life is exactly as advertised. Highly
                  recommend!
                </p>
              </div>

              <div className="border rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    <span className="font-medium">Mike Chen</span>
                    <div className="flex">
                      {[...Array(4)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-4 w-4 text-yellow-400 fill-current"
                        />
                      ))}
                      <Star className="h-4 w-4 text-gray-300" />
                    </div>
                  </div>
                  <span className="text-sm text-gray-500">1 week ago</span>
                </div>
                <p className="text-gray-700 text-sm">
                  Great headphones overall. The build quality is solid and
                  they're very comfortable for long listening sessions. The only
                  minor issue is that they're a bit heavy.
                </p>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default ProductDetailsComponent;

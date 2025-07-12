import Link from "next/link";
import { ProductCard } from "./ProductCard";
import { products } from "@/const/products";

export function FeaturedProducts() {
  return (
    <section className="w-full px-6 py-16">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h2 className="text-2xl mb-1 font-bold text-gray-900">
            Featured products this week{" "}
          </h2>
          <p className="text-gray-600">
            Discover this week’s top picks—handpicked favorites just for you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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

import Link from "next/link";
import { Button } from "../ui/button";

export function HeroSection() {
  const stats = [
    { value: "1K+", label: "Products" },
    { value: "500", label: "Brands" },
    { value: "100K+", label: "Happy customers" },
  ];

  return (
    <section className="w-full px-4 sm:px-6 pt-12 pb-16 sm:pt-16 bg-teal-200/10">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div className="space-y-10">
            {/* Headline */}
            <div className="space-y-4 text-center lg:text-left">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Explore high-quality household products
              </h1>
              <p className="text-gray-600 text-base sm:text-lg">
                Shop over 1,000 essential items for your home
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <Link href={"/products"}>
                <Button
                  variant="default"
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  Start shopping
                </Button>
              </Link>
              {/* <Button
                variant="secondary"
                size="lg"
                className="w-full sm:w-auto"
              >
                Explore products
              </Button> */}
            </div>

            {/* Stats */}
            <section className="w-full pt-6 sm:pt-8">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center sm:text-left">
                {stats.map((stat, index) => (
                  <div key={index}>
                    <div className="text-2xl font-bold text-gray-900 mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Right Column */}
          <div className="relative flex justify-end">
            <div className="bg-gray-100 rounded-2xl p-2 sm:p-4 aspect-square max-w-md mx-auto lg:mx-0">
              <img
                src="https://images.unsplash.com/photo-1614859233060-1ac2b801125c?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Household product"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { featuredCategories } from "@/const/products";
import { ShoppingCart, ArrowRight, Heart, Clock } from "lucide-react";
import { useRouter } from "next/navigation";

export function EmptyCart() {
  const router = useRouter();
  const quickActions = [
    {
      icon: Heart,
      title: "View Wishlist",
      description: "See items you saved for later",
      action: () => console.log("Navigate to wishlist"),
    },
    {
      icon: Clock,
      title: "Recent Orders",
      description: "Reorder your favorite items",
      action: () => console.log("Navigate to orders"),
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full">
        <Card className="p-8 text-center">
          {/* Empty Cart Icon */}
          <div className="mx-auto w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-6">
            <ShoppingCart className="h-12 w-12 text-gray-400" />
          </div>

          {/* Main Message */}
          <h1 className="text-3xl font-bold text-gray-900 mb-3">
            Your cart is empty
          </h1>
          <p className="text-gray-600 mb-8 text-lg">
            Looks like you haven't added any items to your cart yet. Start
            shopping to fill it up!
          </p>

          {/* Primary Action */}
          <Button
            size="lg"
            className="mb-8 h-12 px-8 text-lg font-semibold"
            onClick={() => router.push("/products")}
          >
            Start Shopping
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>

          {/* Quick Actions */}
          {/* <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            {quickActions.map((action, index) => (
              <Button
                key={index}
                variant="outline"
                onClick={action.action}
                className="h-auto p-4 flex flex-col items-center text-center hover:bg-gray-50"
              >
                <action.icon className="h-6 w-6 mb-2 text-gray-600" />
                <div className="font-medium text-gray-900">{action.title}</div>
                <div className="text-sm text-gray-500">
                  {action.description}
                </div>
              </Button>
            ))}
          </div> */}

          {/* Featured Categories */}
          {/* <div className="border-t pt-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Popular Categories
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {featuredCategories.map((category, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  className="h-auto p-3 flex flex-col items-center hover:bg-gray-50"
                  onClick={() => console.log(`Navigate to ${category.name}`)}
                >
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-16 h-16 object-cover rounded-lg mb-2"
                  />
                  <span className="text-sm font-medium text-gray-900">
                    {category.name}
                  </span>
                </Button>
              ))}
            </div>
          </div> */}
        </Card>
      </div>
    </div>
  );
}

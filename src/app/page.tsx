import { FeaturedProducts } from "@/components/landingPage/FeaturedProducts";
import { HeroSection } from "@/components/landingPage/HeroSection";
import { NewsletterSection } from "@/components/landingPage/NewsletterSection";
import ShopByCategory from "@/components/landingPage/ShopByCategory";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <FeaturedProducts />
      <ShopByCategory />
      <NewsletterSection />
    </div>
  );
}

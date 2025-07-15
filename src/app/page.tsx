import { FeaturedProducts } from "@/components/landingPage/FeaturedProducts";
import GetLookContainer from "@/components/landingPage/GetLookContainer";
import { HeroSection } from "@/components/landingPage/HeroSection";
import { NewsletterSection } from "@/components/landingPage/NewsletterSection";
import ShopByCategory from "@/components/landingPage/ShopByCategory";

export default function Home() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <HeroSection />
      <GetLookContainer />
      <FeaturedProducts />
      <ShopByCategory />
      <FeaturedProducts
        title="WAIT THERE’S MORE…"
        description="Discover some more items in our shop."
      />
      <NewsletterSection />
    </div>
  );
}

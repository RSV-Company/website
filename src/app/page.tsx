import { Metadata } from "next";
import LandingPage from "./LandingPage";

export const metadata: Metadata = {
  title: "Home - Premium Furniture & Home Decor",
  description: "Discover RSV's curated collection of premium furniture, home decor, and accessories. Transform your living space with our beautiful, quality pieces that make your house feel like home.",
  keywords: ["home decor", "furniture", "interior design", "premium furniture", "home accessories", "living room", "bedroom", "dining room"],
  openGraph: {
    title: "RSV - Premium Furniture & Home Decor | Creating Beautiful Spaces",
    description: "Discover RSV's curated collection of premium furniture, home decor, and accessories.",
    url: "https://shoprsv.uk",
    images: [
      {
        url: "/fav.svg",
        width: 1200,
        height: 630,
        alt: "RSV Home Collection",
      },
    ],
  },
  alternates: {
    canonical: 'https://shoprsv.uk',
  },
}


export default function Home() {
  return <LandingPage />;
}

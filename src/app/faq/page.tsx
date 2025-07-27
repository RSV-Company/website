import Faq from "@/components/Faq";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ - Frequently Asked Questions",
  description: "Find answers to common questions about RSV's furniture, shipping, returns, and more. Get the information you need about our premium home decor collection.",
  keywords: ["FAQ", "frequently asked questions", "furniture questions", "shipping info", "returns policy", "RSV help"],
  openGraph: {
    title: "Frequently Asked Questions | RSV",
    description: "Find answers to common questions about RSV's furniture, shipping, returns, and more.",
    url: "https://shoprsv.uk/faq",
    images: [
      {
        url: "/fav.svg",
        width: 1200,
        height: 630,
        alt: "RSV FAQ",
      },
    ],
  },
  alternates: {
    canonical: 'https://shoprsv.uk/faq',
  },
}

export default function FAQPage() {
  return (
    <Faq />
  );
}

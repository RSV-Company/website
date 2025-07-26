import Faq from "@/components/Faq";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ - HomeEssentials",
  description: "Frequently Asked Questions about shopping with HomeEssentials.",
};

export default function FAQPage() {
  return (
    <Faq />
  );
}

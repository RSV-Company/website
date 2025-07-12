import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ - HomeEssentials",
  description: "Frequently Asked Questions about shopping with HomeEssentials.",
};

export default function FAQPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-semibold mb-8 text-center">
        Frequently Asked Questions
      </h1>

      <Accordion type="single" collapsible className="w-full space-y-4">
        <AccordionItem value="q1">
          <AccordionTrigger>What is your return policy?</AccordionTrigger>
          <AccordionContent>
            We accept returns within 30 days of delivery. Items must be in
            original condition with packaging.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="q2">
          <AccordionTrigger>How long does shipping take?</AccordionTrigger>
          <AccordionContent>
            Orders are typically processed in 1–2 business days. Standard
            shipping takes 3–7 business days depending on location.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="q3">
          <AccordionTrigger>Do you ship internationally?</AccordionTrigger>
          <AccordionContent>
            Yes, we ship to most countries. International shipping times and
            fees vary by destination.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="q4">
          <AccordionTrigger>Can I change or cancel my order?</AccordionTrigger>
          <AccordionContent>
            If your order hasn't shipped yet, contact us immediately at
            support@homeessentials.com and we'll do our best to help.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="q5">
          <AccordionTrigger>How do I track my order?</AccordionTrigger>
          <AccordionContent>
            Once your order ships, you'll receive a tracking link via email. You
            can also log in to your account to view tracking details.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </main>
  );
}

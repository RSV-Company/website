import ContactForm from "@/components/ContactForm";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Contact Us - Get in Touch with RSV",
  description: "Contact RSV for inquiries about our premium furniture and home decor collection. We're here to help you create beautiful spaces that feel like home.",
  keywords: ["contact RSV", "customer service", "furniture inquiry", "home decor help", "interior design consultation"],
  openGraph: {
    title: "Contact RSV - We're Here to Help",
    description: "Contact RSV for inquiries about our premium furniture and home decor collection.",
    url: "https://shoprsv.uk/contact-us",
    images: [
      {
        url: "/fav.svg",
        width: 1200,
        height: 630,
        alt: "Contact RSV",
      },
    ],
  },
  alternates: {
    canonical: 'https://shoprsv.uk/contact-us',
  },
}

const ContactUs = () => {
  return <ContactForm />;
};

export default ContactUs;

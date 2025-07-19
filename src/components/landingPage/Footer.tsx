"use client";

import Link from "next/link";
import { Facebook, Twitter, Instagram, Mail } from "lucide-react";
import { useEffect, useState } from "react";
import { supabase } from "@/config/client";

export function Footer() {
  const [categories, setCategories] = useState<any>([]);

  const fetchCategories = async () => {
    const { data, error } = await supabase.from("categories").select("*");

    setCategories(data);

    if (error) {
      console.error("Error fetching categories:", error.message);
      return [];
    }

    return categories;
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <footer className="w-full bg-gray-900 text-gray-400 px-6 py-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Brand Section */}
        <div>
          <h2 className="text-white text-lg font-semibold">Website</h2>
          <p className="text-sm mt-2">
            Your trusted store for everyday essentials. Quality you can count
            on.
          </p>
        </div>

        {/* Shop Links */}
        <div>
          <h3 className="text-white text-sm font-semibold mb-3">Shop</h3>
          <ul className="space-y-2 text-sm">
            {categories?.map((ct: any) => {
              return (
                <li key={ct.id}>
                  <Link
                    href={`/products?category=${ct.id}`}
                    className="hover:text-white"
                  >
                    {ct.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Customer Service */}
        <div>
          <h3 className="text-white text-sm font-semibold mb-3">
            Customer Service
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/help/contact" className="hover:text-white">
                Contact Us
              </Link>
            </li>
            <li>
              <Link href="/help/shipping" className="hover:text-white">
                Shipping Info
              </Link>
            </li>
            <li>
              <Link href="/help/returns" className="hover:text-white">
                Returns & Exchanges
              </Link>
            </li>
            <li>
              <Link href="/faq" className="hover:text-white">
                FAQs
              </Link>
            </li>
          </ul>
        </div>

        {/* Follow Us / Contact */}
        <div>
          <h3 className="text-white text-sm font-semibold mb-3">
            Connect with Us
          </h3>
          <div className="flex space-x-4 mb-4">
            <a
              href="https://facebook.com"
              aria-label="Facebook"
              className="hover:text-white"
            >
              <Facebook size={20} />
            </a>
            <a
              href="https://twitter.com"
              aria-label="Twitter"
              className="hover:text-white"
            >
              <Twitter size={20} />
            </a>
            <a
              href="https://instagram.com"
              aria-label="Instagram"
              className="hover:text-white"
            >
              <Instagram size={20} />
            </a>
            <a
              href="mailto:support@website.com"
              aria-label="Email"
              className="hover:text-white"
            >
              <Mail size={20} />
            </a>
          </div>
          <p className="text-sm">Email: support@website.com</p>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
        <p>&copy; 2024 Website. All rights reserved.</p>
      </div>
    </footer>
  );
}

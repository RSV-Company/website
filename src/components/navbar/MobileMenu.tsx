"use client";

import { ChevronDown, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const MobileMenu = ({ isOpen, onClose, categories }: any) => {
  const [expandedCategory, setExpandedCategory] = useState(null);

  const menuItems = [
    {
      name: "SHOP",
      subcategories: [
        "Women's Clothing",
        "Men's Clothing",
        "Shoes",
        "Bags & Accessories",
        "Vintage Collection",
        "Designer Pieces",
      ],
    },

    {
      name: "All Products",
      hasDropdown: false,
      subcategories: [],
      link: "/products",
    },
    {
      name: "Contact Us",
      hasDropdown: false,
      subcategories: [],
      link: "/contact-us",
    },
    {
      name: "FAQ",
      hasDropdown: false,
      subcategories: [],
      link: "/faq",
    },
  ];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      <div className="fixed inset-0 bg-black bg-opacity-50" onClick={onClose} />
      <div className="fixed top-0 right-0 h-full w-80 bg-white shadow-xl">
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-lg font-semibold">Menu</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="overflow-y-auto h-full pb-20">
          <div className="px-4 space-y-2 pt-4">
            {menuItems.map((item: any) => (
              <div key={item.name}>
                <button
                  onClick={() => {
                    if (item.subcategories.length > 0) {
                      setExpandedCategory(
                        expandedCategory === item.name ? null : item.name
                      );
                    }
                  }}
                  className="flex items-center justify-between w-full py-3 text-left text-gray-700 hover:text-green-600 font-medium"
                >
                  <Link
                    onClick={item.link ? onClose : () => {}}
                    href={item.link || "#"}
                  >
                    {item.name}
                  </Link>
                  {item.subcategories.length > 0 && (
                    <ChevronDown
                      className={`h-4 w-4 transition-transform ${
                        expandedCategory === item.name ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </button>

                {expandedCategory === item.name && categories.length > 0 && (
                  <div className="pl-4 space-y-2">
                    {categories.map((ct: any) => (
                      <Link
                        key={ct.id}
                        href={`/products/?category=${ct.id}`}
                        className="block py-2 text-sm text-gray-600 hover:text-green-600"
                      >
                        {ct.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="border-t mt-6 pt-6 px-4">
            <div className="space-y-4">
              <a
                href="#"
                className="block text-gray-700 hover:text-green-600 font-medium"
              >
                My Account
              </a>
              <a
                href="#"
                className="block text-gray-700 hover:text-green-600 font-medium"
              >
                Order History
              </a>
              <a
                href="#"
                className="block text-gray-700 hover:text-green-600 font-medium"
              >
                Wishlist
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;

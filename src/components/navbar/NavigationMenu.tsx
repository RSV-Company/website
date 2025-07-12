"use client";

import { menuItems } from "@/const/menu";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const NavigationMenu = () => {
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);

  return (
    <nav className="hidden lg:flex items-center space-x-8">
      {menuItems.map((item: any) => (
        <div
          key={item.name}
          className="relative group"
          onMouseEnter={() => item.hasDropdown && setHoveredCategory(item.name)}
          onMouseLeave={() => setHoveredCategory(null)}
        >
          <button className="flex items-center space-x-1 text-gray-700 hover:text-green-600 transition-colors py-2 font-medium">
            <Link href={item.link || "#"}>{item.name}</Link>
            {item.hasDropdown && <ChevronDown className="h-4 w-4" />}
          </button>

          {item.hasDropdown && hoveredCategory === item.name && (
            <div className="absolute top-full left-0 w-56 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
              <div className="py-2">
                {item.subcategories.map((subcategory: any) => (
                  <a
                    key={subcategory}
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-green-600 transition-colors"
                    onClick={(e) => {
                      e.preventDefault();
                      console.log(`Clicked on ${subcategory}`);
                    }}
                  >
                    {subcategory}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      ))}
    </nav>
  );
};

export default NavigationMenu;

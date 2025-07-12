"use client";

import { useState } from "react";
import TopBanner from "./TopBanner";
import NavigationMenu from "./NavigationMenu";
import { Menu, Search } from "lucide-react";
import UserMenu from "./UserMenu";
import CartIcon from "./CartIcon";
import SearchOverlay from "./SearchOverlay";
import MobileMenu from "./MobileMenu";
import Link from "next/link";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <div className="font-inter">
      <TopBanner />

      <header className="bg-white shadow-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <Link href="/" className="flex items-center">
                <span
                  className="text-2xl font-bold text-green-600"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  Website
                </span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <NavigationMenu />

            {/* Right Side Icons */}
            <div className="flex items-center space-x-2">
              {/* Search Icon */}
              <button
                onClick={() => setIsSearchOpen(true)}
                className="p-2 text-gray-700 hover:text-green-600 transition-colors rounded-full hover:bg-gray-100"
              >
                <Search className="h-6 w-6" />
              </button>

              {/* User Menu */}
              <UserMenu />

              {/* Cart */}
              <CartIcon />

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="lg:hidden p-2 text-gray-700 hover:text-green-600 transition-colors rounded-full hover:bg-gray-100"
              >
                <Menu className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>

        {/* Search Overlay */}
        <SearchOverlay
          isOpen={isSearchOpen}
          onClose={() => setIsSearchOpen(false)}
        />

        {/* Mobile Menu */}
        <MobileMenu
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
        />
      </header>
    </div>
  );
};

export default Navbar;

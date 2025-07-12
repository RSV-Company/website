"use client";

import { Search, X } from "lucide-react";
import { useState } from "react";

const SearchOverlay = ({ isOpen, onClose }: any) => {
  const [searchQuery, setSearchQuery] = useState("");

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/50">
      <div className="bg-white p-6 max-w-2xl mx-auto mt-20 rounded-lg shadow-xl">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-gray-900">
            Search Products
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="relative">
          <input
            type="text"
            placeholder="Search for sustainable fashion..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-lg"
            autoFocus
          />
          <Search className="absolute left-4 top-3.5 h-6 w-6 text-gray-400" />
        </div>

        <div className="mt-4 text-sm text-gray-600">
          <p>
            Popular searches: Vintage Denim, Designer Bags, Sneakers,
            Sustainable Fashion
          </p>
        </div>
      </div>
    </div>
  );
};

export default SearchOverlay;

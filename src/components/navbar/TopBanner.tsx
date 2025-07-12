"use client";

import { Bell, X } from "lucide-react";
import { useState } from "react";

const TopBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-teal-600 text-white text-sm relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center h-10">
          <div className="flex items-center space-x-2">
            <Bell className="h-4 w-4" />
            <span className="font-medium text-xs text-center px-2">
              {
                "Refresh your wardrobe with the season's latest drops right here."
              }
            </span>
          </div>
        </div>
      </div>
      <button
        onClick={() => setIsVisible(false)}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-200"
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  );
};

export default TopBanner;

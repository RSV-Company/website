"use client";

import { useEffect, useState } from "react";
import { Bell, X } from "lucide-react";
import { supabase } from "@/config/client";

type Banner = {
  id: string;
  message: string;
  is_active: boolean;
  created_at: string;
};

const TopBanner = () => {
  const [banner, setBanner] = useState<Banner | null>(null);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const fetchBanner = async () => {
      const { data, error } = await supabase
        .from("banners")
        .select("*")
        .eq("is_active", true)
        .order("created_at", { ascending: false })
        .limit(1)
        .single();

      if (error) {
        console.error("Error fetching banner:", error.message);
        return;
      }

      setBanner(data);
    };

    fetchBanner();
  }, []);

  if (!isVisible || !banner) return null;

  return (
    <div className="bg-teal-600 text-white text-sm relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center h-10">
          <div className="flex items-center space-x-2">
            <Bell className="h-4 w-4" />
            <span className="font-medium text-xs text-center px-2">
              {banner.message}
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

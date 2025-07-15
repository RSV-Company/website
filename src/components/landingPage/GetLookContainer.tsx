"use client";

import { looks } from "@/const/products";
import React, { useRef } from "react";
import GetLook from "./GetLook";

const GetLookContainer = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  return (
    <div>
      <div className="px-3 max-w-7xl mx-auto py-6 md:py-16">
        {/* Mobile - horizontal scroll */}
        <div
          ref={scrollContainerRef}
          className="flex gap-3 overflow-x-auto scroll-smooth hide-scroll -ml-1 pb-4 pr-6 lg:hidden"
        >
          {looks.map((look, index) => (
            <div key={index} className="min-w-[250px] shrink-0">
              <GetLook imageSrc={look.imageSrc} username={look.username} />
            </div>
          ))}
        </div>

        {/* Desktop - grid layout */}
        <div className="hidden lg:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {looks.map((look, index) => (
            <GetLook
              key={index}
              imageSrc={look.imageSrc}
              username={look.username}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default GetLookContainer;

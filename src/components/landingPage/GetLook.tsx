// app/components/GetLook.tsx
"use client";

import { Button } from "@/components/ui/button";

type LookProps = {
  imageSrc: string;
  username: string;
};

export default function GetLook({ imageSrc, username }: LookProps) {
  return (
    <div className="relative w-full h-[400px] overflow-hidden shadow-lg group">
      <img
        src={imageSrc}
        alt="Gym Look"
        className="absolute group-hover:scale-105 transition-transform duration-500 inset-0 w-full h-full object-cover"
      />

      <div className="relative z-10 flex flex-col justify-between h-full p-4">
        <div className="text-white text-sm font-semibold bg-black/60 px-3 py-1 rounded-full self-start">
          @{username}
        </div>

        <div className="mt-auto">
          <Button
            variant="default"
            className="rounded-full px-6 text-sm bg-white text-black hover:bg-gray-200"
          >
            GET THE LOOK
          </Button>
        </div>
      </div>

      <div className="absolute inset-0 bg-black/30 z-0" />
    </div>
  );
}

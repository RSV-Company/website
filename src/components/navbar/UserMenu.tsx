"use client";

import { User } from "lucide-react";
import Link from "next/link";

const UserMenu = () => {
  return (
    <Link href={"/auth"} className="relative">
      <button className="p-2 text-gray-700 hover:text-green-600 transition-colors rounded-full hover:bg-gray-100">
        <User className="h-6 w-6" />
      </button>
    </Link>
  );
};

export default UserMenu;

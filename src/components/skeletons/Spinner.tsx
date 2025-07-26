// components/ui/spinner.tsx
import { Loader2 } from "lucide-react";
import React from "react";

export const Spinner = () => {
  return (
    <div className="animate-spin text-primary">
      <Loader2 className="h-8 w-8" />
    </div>
  );
};

import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getDiscountPercentage(
  price: number,
  discountPrice: number
): number {
  if (!price || !discountPrice || discountPrice >= price) return 0;

  const discount = ((price - discountPrice) / price) * 100;
  return Math.round(discount);
}

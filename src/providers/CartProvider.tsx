"use client";

import { CartProvider } from "react-use-cart";

const CartProviderWrapper = ({ children }: any) => {
  return <CartProvider>{children}</CartProvider>;
};

export default CartProviderWrapper;

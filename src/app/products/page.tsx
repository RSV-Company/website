import ProductsPage from "@/components/products/ProductsPage";
import React, { Suspense } from "react";

const Products = () => {
  return <Suspense> <ProductsPage /> </Suspense>;
};

export default Products;

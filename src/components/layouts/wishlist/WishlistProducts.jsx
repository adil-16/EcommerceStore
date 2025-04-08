import ProductCard from "@/components/cards/ProductCard";
import React from "react";
import { products } from "@/utils/products";

const WishlistProducts = () => {
  return (
    <div className="flex flex-row w-full flex-wrap gap-x-6 justify-start gap-y-6 mt-10">
      {products.map((product) => (
        <ProductCard key={product?.id} product={product} />
      ))}
    </div>
  );
};

export default WishlistProducts;

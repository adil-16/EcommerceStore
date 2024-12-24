import ProductCard from "@/components/cards/ProductCard";
import React from "react";

const WishlistProducts = () => {
  return (
    <div className="flex flex-row w-full flex-wrap gap-x-6 justify-start gap-y-6 mt-10">
      <ProductCard fav={true} />
      <ProductCard fav={true} />
      <ProductCard fav={true} />
      <ProductCard fav={true} />
      <ProductCard fav={true} />
      <ProductCard fav={true} />
      <ProductCard fav={true} />
      <ProductCard fav={true} />
      <ProductCard fav={true} />
      <ProductCard fav={true} />
      <ProductCard fav={true} />
      <ProductCard fav={true} />
      <ProductCard fav={true} />
      <ProductCard fav={true} />
      <ProductCard fav={true} />
      <ProductCard fav={true} />
      <ProductCard fav={true} />
    </div>
  );
};

export default WishlistProducts;

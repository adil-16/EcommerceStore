import ProductCard from "@/components/cards/ProductCard";
import React from "react";

const WishlistProducts = ({favoriteProducts}) => {
  return (
    <div className="flex flex-row w-full flex-wrap gap-x-6 justify-start gap-y-6 mt-10">
      {favoriteProducts.length > 0 ? (
        favoriteProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))
      ) : (
        <p className="text-center text-xl opacity-60">
          No favorite products found.
        </p>
      )}
    </div>
  );
};

export default WishlistProducts;

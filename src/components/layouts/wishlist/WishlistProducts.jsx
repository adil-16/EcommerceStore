import ProductCard from "@/components/cards/ProductCard";
import React from "react";
import { useSelector } from "react-redux";

const WishlistProducts = () => {
  const products = useSelector((state) => state.product.products);
  const favoriteProducts = products.filter((product) => product.isFav);

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

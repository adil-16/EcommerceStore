import ProductCard from "@/components/cards/ProductCard";
import React from "react";
import ProductsSlider from "./utils/ProductsSlider";
import RoundedButton from "@/components/buttons/RoundedButton";
import { products } from "@/utils/products";

const ProductsWrappers = ({ title, viewAll }) => {
  return (
    <div className="w-full mt-[72px] flex flex-col gap-y-14 lg:px-[100px] md:px-8 px-4">
      <div className="w-full flex justify-center">
        <h1 className="font-bold text-5xl">{title}</h1>
      </div>

      <div className="hidden md:flex flex-row flex-wrap gap-x-1 lg:justify-between justify-start">
        {products.map((product) => (
          <ProductCard key={product?.id} product={product} />
        ))}
      </div>
      <div className="block md:hidden overflow-hidden">
        <ProductsSlider />
      </div>

      {viewAll && (
        <div className="w-full flex justify-center">
          <RoundedButton
            label="View All"
            className="py-4 bg-white text- border-black border-opacity-10 sm:w-[218px] w-full"
          />
        </div>
      )}
    </div>
  );
};

export default ProductsWrappers;

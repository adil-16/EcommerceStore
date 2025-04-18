"use client";
import RoundedButton from "@/components/buttons/RoundedButton";
import ProductCard from "@/components/cards/ProductCard";
import Browse from "@/components/layouts/homepage/Browse";
import React from "react";
import { products } from "@/utils/products";
import { useState } from "react";

const Page = ({ viewAll = true }) => {
  const [showAll, setShowAll] = useState(false);

  const handleViewAll = () => {
    setShowAll(true);
  };

  const displayedProducts = showAll ? products : products.slice(0, 5);
  return (
    <div className="pt-28 w-full flex flex-col">
      {/* Header */}
      <div className="lg:px-[100px] md:px-8 px-4 flex flex-col items-center w-full">
        <div className="flex justify-center w-full sm:pb-16 pb-8">
          <h1 className="text-[40px] font-bold">New Arrivals</h1>
        </div>

        <div className="flex flex-row w-full flex-wrap gap-x-10 justify-start gap-y-6">
          {displayedProducts?.map((product) => (
            <ProductCard key={product?.id} product={product} />
          ))}
        </div>

        {viewAll && !showAll && (
          <div className="w-full flex justify-center">
            <RoundedButton
              label="View All"
              onClick={handleViewAll}
              className="py-4 bg-white text- border-black border-opacity-10 sm:w-[218px] w-full"
            />
          </div>
        )}
      </div>
      <Browse />
    </div>
  );
};

export default Page;

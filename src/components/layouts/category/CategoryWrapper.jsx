"use client";
import { useState } from "react";
import Filters from "./Filters";
import ProductList from "./ProductList";

const CategoryWrapper = () => {
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [appliedFilters, setAppliedFilters] = useState({});

  const handleApplyFilters = () => {
    setAppliedFilters({
      priceRange,
      selectedColor,
      selectedSize,
    });
  };

  return (
    <div className="flex flex-row w-full flex-nowrap mt-10 gap-x-6 justify-start items-start gap-y-6">
      <Filters
        priceRange={priceRange}
        setPriceRange={setPriceRange}
        selectedColor={selectedColor}
        setSelectedColor={setSelectedColor}
        selectedSize={selectedSize}
        setSelectedSize={setSelectedSize}
        onApply={handleApplyFilters}
      />

      <ProductList appliedFilters={appliedFilters} />

      {/* <ProductDetails /> */}
    </div>
  );
};

export default CategoryWrapper;

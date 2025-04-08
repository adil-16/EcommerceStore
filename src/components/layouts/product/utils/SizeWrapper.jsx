"use client";
import React from "react";
import Color from "./Color";
import Size from "./Size";

const SizeWrapper = ({ product, setSelectedSize, selectedSize }) => {
  return (
    <div className="flex flex-col pb-6 mb-6 gap-y-3.5 border-b border-b-black border-opacity-10">
      <p className="opacity-60">Select Size</p>

      <div className="flex flex-row gap-4 flex-wrap">
        {product?.sizes?.map((size, index) => (
          <Size
            onClick={() => setSelectedSize(size)}
            key={index}
            size={size}
            // selected boolean
            selected={selectedSize === size}
          />
        ))}
      </div>
    </div>
  );
};

export default SizeWrapper;

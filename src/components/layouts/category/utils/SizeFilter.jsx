"use client";
import React from "react";
import Size from "../../product/utils/Size";
import { catNextIcon } from "@/utils/Svgs";

// remove with the api data of the product
const sizes = ["X-Small ", "Small", "Medium", "Large", "X-Large", "XX-Large"];
const SizeFilter = ({ selectedSize, setSelectedSize }) => {
  const [show, setShow] = React.useState(true);
  const [selected, setSelected] = React.useState(sizes[0]);
  return (
    <div className="flex flex-col w-full sm:gap-y-5 gap-y-4 sm:mt-6 mt-4 sm:pb-6 pb-4 border-b border-b-black border-opacity-10">
      <div
        onClick={() => setShow(!show)}
        className="flex flex-row w-full justify-between cursor-pointer"
      >
        <p className="font-bold text-xl">Size</p>

        <div className="transform -rotate-90">{catNextIcon}</div>
      </div>
      {show && (
        <div className="flex flex-row sm:gap-4 gap-3 flex-wrap">
          {sizes.map((size, index) => (
            <div
              key={index}
              onClick={() => setSelectedSize(size)}
              className={`flex justify-center items-center sm:px-5 px-4 sm:py-2.5 py-2 rounded-full transition-all duration-300 ease-in-out cursor-pointer ${
                selectedSize === size
                  ? "bg-brandsbg text-white"
                  : "bg-searchBarBg text-black text-opacity-60"
              }`}
            >
              <p>{size}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SizeFilter;

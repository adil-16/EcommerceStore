"use client";
import React from "react";
import { catNextIcon, selectColorIcon } from "@/utils/Svgs";

// remove with the api data of the product
const colors = [
  "Black",
  "Red",
  "Blue",
  "Yellow",
  "Green",
  "Gray",
  "Pink",
  "Orange",
  "White",
];
const ColorsFilter = ({ selectedColor, setSelectedColor }) => {
  const [show, setShow] = React.useState(true);
  const [selected, setSelected] = React.useState(colors[0]);
  return (
    <div className="flex flex-col w-full sm:gap-y-5 gap-y-4 sm:mt-6 mt-4 sm:pb-6 pb-4 border-b border-b-black border-opacity-10">
      <div
        onClick={() => setShow(!show)}
        className="flex flex-row w-full justify-between cursor-pointer"
      >
        <p className="font-bold text-xl">Colors</p>

        <div className="transform -rotate-90">{catNextIcon}</div>
      </div>

      {show && (
        <div className="flex flex-row sm:gap-4 gap-3 flex-wrap">
          {colors.map((color, index) => (
            <div
              key={index}
              onClick={() => setSelectedColor(color)}
              className={`sm:w-9 sm:h-9 w-8 h-8 rounded-full flex justify-center items-center cursor-pointer border-2 border-black border-opacity-20 ${
                color === "white" || color === "#ffffff"
                  ? "border border-black text-black"
                  : "text-white"
              }`}
              style={{ backgroundColor: color }}
            >
              {selectedColor === color && selectColorIcon}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ColorsFilter;

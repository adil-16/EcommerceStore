"use client";
import { catNextIcon, filterIcon } from "@/utils/Svgs";
import { Slider } from "@mui/material";
import Image from "next/image";
import React from "react";
import ClothesFilter from "./utils/ClothesFilter";
import PriceFilter from "./utils/PriceFilter";
import ColorsFilter from "./utils/ColorsFilter";
import SizeFilter from "./utils/SizeFilter";
import StyleFilter from "./utils/StyleFilter";
import RoundedButton from "@/components/buttons/RoundedButton";

const clothes = ["T-shirts", "Shorts", "Shirts", "Hoodie", "Jeans"];

const Filters = () => {
  const [value, setValue] = React.useState([20, 37]);
  return (
    <div className="flex-col w-[295px] sm:flex hidden py-5 px-6 border border-black border-opacity-10 rounded-[20px]">
      <div className="flex flex-row w-full justify-between pb-6 border-b border-b-black border-opacity-10">
        <p className="font-bold text-xl">Filters</p>

        {filterIcon}
      </div>

      <ClothesFilter clothes={clothes} />

      <PriceFilter value={value} setValue={setValue} />

      <ColorsFilter />

      <SizeFilter />

      <StyleFilter />

      <RoundedButton
        label="Apply Filter"
        className=" bg-primary border-primary text-white font-medium w-full px-6 py-3.5"
      />
    </div>
  );
};

export default Filters;

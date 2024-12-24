import React from "react";
import AddFav from "./utils/AddFav";
import { fullStarIcon, halfStarIcon, zaraLargeIcon } from "@/utils/Svgs";
import ColorsWrapper from "./utils/ColorsWrapper";
import SizeWrapper from "./utils/SizeWrapper";
import Quantity from "./utils/Quantity";
import RoundedButton from "@/components/buttons/RoundedButton";

const ProductDetails = () => {
  return (
    <div className="flex flex-col flex-grow sm:w-[48%] w-full">
      {/* title and add to fav */}
      <div className="flex flex-row items-center gap-x-4 justify-between w-full">
        <h1 className="font-bold md:text-[40px] text-[30px]">One Life Graphic T-shirt</h1>

        <AddFav />
      </div>

      {/* rating price and brand */}
      <div className="flex flex-row justify-between gap-x-1 items-center w-full">
        <div className="flex flex-col gap-y-3.5">
          {/* rating */}
          <div className="flex flex-row items-center mt-3.5 gap-x-4">
            <div className="flex flex-row gap-x-1.5">
              {fullStarIcon}
              {fullStarIcon}
              {fullStarIcon}
              {fullStarIcon}
              {halfStarIcon}
            </div>

            <p>
              4.5/ <span className="opacity-60">5</span>
            </p>
          </div>
          {/* price */}
          <p className="text-3xl font-bold">$260</p>
        </div>
        <div className="sm:block hidden">

        {zaraLargeIcon}
        </div>
      </div>

      <p className="opacity-60 mt-6">
        This graphic t-shirt which is perfect for any occasion. Crafted from a
        soft and breathable fabric, it offers superior comfort and style.
      </p>

      <ColorsWrapper />

      <SizeWrapper />

      <div className="flex flex-row gap-x-5 w-full">
        <Quantity />

        <RoundedButton
          label="Add to Cart"
          className="py-4 bg-primary border-primary w-fit text-white"
        />
      </div>
    </div>
  );
};

export default ProductDetails;

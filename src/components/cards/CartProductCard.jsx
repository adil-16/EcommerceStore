import { binIcon } from "@/utils/Svgs";
import Image from "next/image";
import React from "react";
import Quantity from "../layouts/cart/utils/Quantity";

const CartProductCard = () => {
  return (
    <div className="flex flex-row gap-x-4 w-full pb-6 border-b border-b-black border-opacity-10">
      <div className="flex w-[124px] h-[124px] rounded-lg bg-productBg justify-center items-center overflow-hidden">
        <Image
          src="/images/prod1.png"
          objectFit="contain"
          width={124}
          height={124}
          alt="Afriva-logo"
        />
      </div>

      <div className="flex flex-col w-[calc(100%-124px)]">
        <div className="flex flex-row w-full justify-between gap-x-1">
          <div className="flex flex-col">
            <h2 className="font-bold text-xl">Gradient Graphic T-shirt</h2>
            <p className="text-sm ">
              Size: <span className="opacity-60">Large</span>
            </p>
            <p className="text-sm ">
              Color: <span className="opacity-60">White</span>
            </p>
          </div>

          <div className="w-6 h-6 flex justify-center items-center cursor-pointer">
            {binIcon}
          </div>
        </div>

        <div className="flex flex-row justify-between gap-x-1 items-center">
          <h2 className="font-bold text-xl">$240</h2>

          <Quantity />
        </div>
      </div>
    </div>
  );
};

export default CartProductCard;

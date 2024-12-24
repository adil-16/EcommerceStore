"use client";
import { fullStarIcon, halfStarIcon } from "@/utils/Svgs";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import AddFav from "../layouts/product/utils/AddFav";
import { useRouter } from "next/navigation";

const ProductCard = ({ fav }) => {
  const router = useRouter();
  const [isSwiping, setIsSwiping] = useState(false);
  const [startPosition, setStartPosition] = useState(0);

  const handleMouseDown = (e) => {
    setStartPosition(e.clientX); // Store the initial click/touch position
  };

  const handleMouseUp = (e) => {
    const distance = Math.abs(e.clientX - startPosition); // Calculate the movement distance
    setIsSwiping(distance > 10); // If distance is over a threshold, consider it a swipe
  };

  const handleClick = () => {
    if (!isSwiping) {
      router.push("/product/shirt-133123");
    }
    setIsSwiping(false); // Reset swipe status after click
  };

  return (
    <div
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onClick={handleClick}
      className="flex flex-col gap-y-4"
      // href="/product/shirt-133123"
    >
      <div className="relative flex w-[295px] h-[298px] rounded-[20px] bg-productBg justify-center items-center overflow-hidden">
        <Image
          src="/images/prod1.png"
          objectFit="contain"
          width={296}
          height={253}
          alt="Afriva-logo"
        />

        {fav && (
          <div
            onClick={(e) => e.preventDefault()}
            className="absolute top-2 right-2"
          >
            <AddFav />
          </div>
        )}
      </div>

      <div className="flex flex-col">
        <h2 className="font-bold text-xl">T-SHIRT WITH TAPE DETAILS</h2>
        <div className="flex flex-row items-center mt-2.5 mb-2 gap-x-3">
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

        <p className="font-bold text-2xl">$120</p>
      </div>
    </div>
  );
};

export default ProductCard;

"use client";
import { fullStarIcon, halfStarIcon } from "@/utils/Svgs";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import AddFav from "../layouts/product/utils/AddFav";

const ProductCard = ({ product }) => {
  const router = useRouter();
  const [isSwiping, setIsSwiping] = useState(false);
  const [startPosition, setStartPosition] = useState(0);

  const handleMouseDown = (e) => {
    setStartPosition(e.clientX);
  };

  const handleMouseUp = (e) => {
    const distance = Math.abs(e.clientX - startPosition);
    setIsSwiping(distance > 10);
  };

  const handleClick = () => {
    if (!isSwiping) {
      router.push(`/product/${product.id}`);
    }
    setIsSwiping(false);
  };

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    return (
      <>
        {Array(fullStars ? fullStars : [])
          ?.fill(fullStarIcon)
          ?.map((star, index) => (
            <span key={`full-star-${index}`}>{star}</span>
          ))}
        {hasHalfStar && <span key="half-star">{halfStarIcon}</span>}
      </>
    );
  };

  return (
    <div
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onClick={handleClick}
      className="flex flex-col gap-y-4 cursor-pointer"
    >
      <div className="relative flex w-[295px] h-[298px] rounded-[20px] bg-productBg justify-center items-center overflow-hidden">
        <Image
          src={product?.images[0]}
          objectFit="contain"
          width={296}
          height={253}
          alt={product?.title}
        />

        {product?.isFavorite && (
          <div
            onClick={(e) => e.preventDefault()}
            className="absolute top-2 right-2"
          >
            <AddFav />
          </div>
        )}
      </div>

      <div className="flex flex-col">
        <h2 className="font-bold text-xl">{product?.title}</h2>
        <div className="flex flex-row items-center mt-2.5 mb-2 gap-x-3">
          <div className="flex flex-row gap-x-1.5">
            {renderStars(product?.ratings)}
          </div>
          <p>
            {product?.ratings}/ <span className="opacity-60">5</span>
          </p>
        </div>

        <p className="font-bold text-2xl">${product?.price.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default ProductCard;

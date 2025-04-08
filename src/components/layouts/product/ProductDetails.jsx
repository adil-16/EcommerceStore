"use client";
import { useState } from "react";
import React from "react";
import AddFav from "./utils/AddFav";
import { fullStarIcon, halfStarIcon, zaraLargeIcon } from "@/utils/Svgs";
import ColorsWrapper from "./utils/ColorsWrapper";
import SizeWrapper from "./utils/SizeWrapper";
import Quantity from "./utils/Quantity";
import RoundedButton from "@/components/buttons/RoundedButton";
import { addToCart } from "@/store/slices/productSlice";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";

const ProductDetails = ({ product }) => {
  const dispatch = useDispatch();
  const [selectedColor, setSelectedColor] = useState(product?.colors[0] || "");
  const [selectedSize, setSelectedSize] = useState(product?.sizes[0] || "");
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        id: product.id,
        selectedColor,
        selectedSize,
        quantity,
      })
    );
    toast.success("Product added to cart successfully!");
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
    <div className="flex flex-col flex-grow sm:w-[48%] w-full">
      {/* title and add to fav */}
      <div className="flex flex-row items-center gap-x-4 justify-between w-full">
        <h1 className="font-bold md:text-[40px] text-[30px]">
          {product?.title}
        </h1>

        <AddFav />
      </div>

      {/* rating price and brand */}
      <div className="flex flex-row justify-between gap-x-1 items-center w-full">
        <div className="flex flex-col gap-y-3.5">
          {/* rating */}
          <div className="flex flex-row items-center mt-3.5 gap-x-4">
            <div className="flex flex-row gap-x-1.5">
              {renderStars(product?.ratings)}
            </div>

            <p>
              {product?.ratings}/ <span className="opacity-60">5</span>
            </p>
          </div>
          {/* price */}
          <p className="text-3xl font-bold">${product?.price}</p>
        </div>
        <div className="sm:block hidden">{product?.brandName}</div>
      </div>

      <p className="opacity-60 mt-6">{product?.description}</p>

      <ColorsWrapper
        product={product}
        setSelectedColor={setSelectedColor}
        selectedColor={selectedColor}
      />

      <SizeWrapper
        product={product}
        selectedSize={selectedSize}
        setSelectedSize={setSelectedSize}
      />

      <div className="flex flex-row gap-x-5 w-full">
        <Quantity quantity={quantity} setQuantity={setQuantity} />

        <RoundedButton
          onClick={handleAddToCart}
          label="Add to Cart"
          className="py-4 bg-primary border-primary w-fit text-white"
        />
      </div>
    </div>
  );
};

export default ProductDetails;

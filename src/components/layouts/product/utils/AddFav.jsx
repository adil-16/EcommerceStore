"use client";
import { favIcon } from "@/utils/Svgs";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleFavorite } from "@/store/slices/productSlice"; // Verify this path is correct

const AddFav = ({ product }) => {
  const dispatch = useDispatch();

  // Get the current product from Redux store
  const currentProduct = useSelector((state) =>
    state.product.products.find((p) => p.id === product?.id)
  );

  const isFav = currentProduct?.isFav || false;

  const handleToggle = (e) => {
    e.stopPropagation();
    if (product?.id) {
      dispatch(toggleFavorite(product.id));
    }
  };

  return (
    <div
      onClick={handleToggle}
      className={`w-10 h-10 rounded-full cursor-pointer flex justify-center items-center transition-all duration-300 ease-in-out min-w-10 min-h-10 ${
        isFav
          ? "bg-redColor bg-opacity-10 text-redColor"
          : "bg-grayMid text-grayMid bg-opacity-10"
      } hover:bg-redColor hover:bg-opacity-10 hover:text-redColor`}
    >
      {favIcon}
    </div>
  );
};

export default AddFav;

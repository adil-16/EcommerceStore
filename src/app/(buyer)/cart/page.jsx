"use client";
import CartWrapper from "@/components/layouts/cart/CartWrapper";
import React from "react";
import { useSelector } from "react-redux";

const page = ({ params }) => {
  const { slug } = params;
  const cart = useSelector((state) => state.product.cart);

  // console.log(cart);

  return (
    <div className="flex flex-col">
      <div className="pt-28 lg:px-[100px] md:px-8 px-4 w-full flex flex-col">
        <CartWrapper cart={cart} />
      </div>
    </div>
  );
};

export default page;

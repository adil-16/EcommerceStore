import CartProductCard from "@/components/cards/CartProductCard";
import React from "react";

const CartProducts = () => {
  return (
    <div className="flex flex-col py-5 px-6 md:w-[53%] w-full rounded-[20px] border border-black border-opacity-10">
      <CartProductCard />
      <CartProductCard />
      <CartProductCard />
    </div>
  );
};

export default CartProducts;

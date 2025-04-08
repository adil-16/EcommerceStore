import CartProductCard from "@/components/cards/CartProductCard";
import React from "react";

const CartProducts = ({ cart }) => {
  return (
    <div className="flex flex-col py-5 px-6 md:w-[53%] w-full rounded-[20px] border border-black border-opacity-10">
      {cart.length > 0 ? (
        cart.map((item, index) => <CartProductCard key={index} item={item} />)
      ) : (
        <p className="text-center text-gray-500">Your cart is empty.</p>
      )}
    </div>
  );
};

export default CartProducts;

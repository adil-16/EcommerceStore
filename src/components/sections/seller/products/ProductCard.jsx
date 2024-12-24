import React from "react";

const ProductCard = () => {
  return (
    <div className="flex flex-col">
      <img
        className="rounded-[10px] h-[183px] object-cover"
        alt="Product Image"
        src="/images/order-avatar.jpeg"
      />
      <p>Nike Sportswear Club Fleece</p>
      <p className="text-primary font-semibold ">$99</p>
    </div>
  );
};

export default ProductCard;

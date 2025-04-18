"use client";
import Image from "next/image";
import React from "react";

const ProductImages = ({ product }) => {
  const [display, setDisplay] = React.useState(0);
  const images = product?.images || [];

  if (images.length === 0) {
    return <div>No images available</div>;
  }
  // console.log(product);

  return (
    <div className="flex sm:flex-row flex-col sm:w-[48%] w-full gap-3.5">
      <div className="flex sm:flex-col flex-row gap-3.5 sm:justify-start justify-center sm:order-1 order-2">
        {product?.images?.map((image, index) => (
          <div
            key={index}
            onClick={() => setDisplay(index)}
            className={`sm:w-[152px] border sm:h-[167px] bg-productBg overflow-hidden rounded-[20px] cursor-pointer w-[120px] h-[120px]
              ${display === index ? " border-black" : "border-transparent"}`}
          >
            <Image
              src={image}
              objectFit="contain"
              width={152}
              height={167}
              alt="Afriva-product"
            />
          </div>
        ))}
      </div>

      <div className="flex justify-center items-center bg-productBg overflow-hidden h-fit rounded-[20px] sm:order-2 order-1">
        <Image
          src={product?.images[display]}
          className="w-full h-auto"
          width={444}
          height={530}
          alt="Afriva-product"
        />
      </div>
    </div>
  );
};

export default ProductImages;

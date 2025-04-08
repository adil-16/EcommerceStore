import { binIcon } from "@/utils/Svgs";
import Image from "next/image";
import React from "react";
import Quantity from "../layouts/cart/utils/Quantity";
import { useDispatch } from "react-redux";
import {
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
} from "@/store/slices/productSlice";

const CartProductCard = ({ item }) => {
  const [quantity, setQuantity] = React.useState(item?.quantity || 1);
  const totalPrice = item.price * quantity;
  const dispatch = useDispatch();

  const handleDecrease = () => {
    if (item.quantity > 1) {
      setQuantity(quantity - 1);
      dispatch(
        decrementQuantity({
          id: item.id,
          selectedColor: item.selectedColor,
          selectedSize: item.selectedSize,
        })
      );
    }
  };

  const handleIncrease = () => {
    setQuantity(quantity + 1);
    dispatch(
      incrementQuantity({
        id: item.id,
        selectedColor: item.selectedColor,
        selectedSize: item.selectedSize,
      })
    );
  };

  const handleRemove = () => {
    dispatch(
      removeFromCart({
        id: item.id,
        selectedColor: item.selectedColor,
        selectedSize: item.selectedSize,
      })
    );
  };

  return (
    <div className="flex flex-row gap-x-4 w-full pb-6 border-b border-b-black border-opacity-10">
      <div className="flex w-[124px] h-[124px] rounded-lg bg-productBg justify-center items-center overflow-hidden">
        <Image
          src={item?.images?.[0] || "/images/fallback.png"}
          objectFit="contain"
          width={124}
          height={124}
          alt={item?.title || "Product"}
        />
      </div>

      <div className="flex flex-col w-[calc(100%-124px)]">
        <div className="flex flex-row w-full justify-between gap-x-1">
          <div className="flex flex-col">
            <h2 className="font-bold text-xl">{item.title}</h2>
            <p className="text-sm ">
              Size: <span className="opacity-60">{item?.selectedSize}</span>
            </p>
            <p className="text-sm ">
              Color: <span className="opacity-60">{item?.selectedColor}</span>
            </p>
          </div>

          <div
            className="w-6 h-6 flex justify-center items-center cursor-pointer"
            onClick={handleRemove}
          >
            {binIcon}
          </div>
        </div>

        <div className="flex flex-row justify-between gap-x-1 items-center">
          <h2 className="font-bold text-xl">${totalPrice.toFixed(2)}</h2>

          <Quantity
            quantity={quantity}
            setQuantity={setQuantity}
            handleIncrease={handleIncrease}
            handleDecrease={handleDecrease}
          />
        </div>
      </div>
    </div>
  );
};

export default CartProductCard;

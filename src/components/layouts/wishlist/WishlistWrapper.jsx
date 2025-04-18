"use client";
import RoundedButton from "@/components/buttons/RoundedButton";
import React, { useEffect } from "react";
import WishlistProducts from "./WishlistProducts";
import { wishlistIcon } from "@/utils/Svgs";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { addToCart, toggleFavorite } from "@/store/slices/productSlice";

const WishlistWrapper = () => {
  const dispatch = useDispatch();
  const [count, setCount] = React.useState(0);
  const router = useRouter();
  const products = useSelector((state) => state.product.products);
  const favoriteProducts = products.filter((product) => product.isFav);

  useEffect(() => {
    const favoriteProductsCount = products.filter(
      (product) => product.isFav
    ).length;
    setCount(favoriteProductsCount);
  }, [products]);

  const handleMoveAllToBag = () => {
    if (favoriteProducts.length === 0) {
      toast.error("No items in wishlist to move to bag.");
    } else {
      favoriteProducts.forEach(product => {
        dispatch(addToCart({
          id: product.id,
          selectedColor: product.colors?.[0] || '', 
          selectedSize: product.sizes?.[0] || '',   
          quantity: 1                              
        }));
        dispatch(toggleFavorite(product.id));
      });
      toast.success(`${favoriteProducts.length} items moved to bag successfully!`);
    }
  }

  return (
    <div className="pt-28 lg:px-[100px] md:px-8 px-4 w-full flex flex-col">
      {/* Header */}
      <div className="flex flex-col lg:flex-row justify-between gap-x-1 items-center w-full">
        <h1 className="text-[40px] font-bold flex items-center">
          Wishlist
          <span className="text-base font-normal opacity-60 ml-2">{`(${count})`}</span>
        </h1>
        
        {/* Move All To Bag Button */}
        <div className="w-full lg:w-[223px] mt-4 lg:mt-0">
          <RoundedButton
            onClick={handleMoveAllToBag}
            label="Move All To Bag"
            className="bg-transparent border-black text-black font-medium px-6 py-3.5"
          />
        </div>
      </div>
  
      {count === 0 ? (
        <div className="flex justify-center items-center sm:mt-20 mt-9">
          <div className="flex flex-col items-center justify-center lg:w-1/2 md:w-[75%] w-full">
            {wishlistIcon}
            <h1 className="text-[28px] font-bold mt-10">Your Wishlist is Empty!</h1>
            <p className="text-xl opacity-60 text-center mt-4">
              No favorites yet? Start exploring and find something you love! 🌟
              Add some sparkle now! 🚀
            </p>
  
            <RoundedButton
              onClick={() => router.push("/new-arrival")}
              label="Shop Now"
              className="bg-primary border-primary text-white font-medium w-full px-6 py-3.5 mt-11"
            />
          </div>
        </div>
      ) : (
        <WishlistProducts favoriteProducts={favoriteProducts} />
      )}
    </div>
  );
  
};

export default WishlistWrapper;

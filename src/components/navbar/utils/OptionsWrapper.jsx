"use client";
import React from "react";
import Cart from "./Cart";
import Heart from "./Heart";
import { useRouter } from "next/navigation";
import User from "./User";
import Notification from "./Notification";

const OptionsWrapper = ({ isMobile = false, setOpen }) => {
  const router = useRouter();
  
  const handleNavigation = (path) => {
    if (isMobile && setOpen) {
      setOpen(false);
    }
    router.push(path);
  };

  if (isMobile) {
    return (
      <div className="flex flex-col gap-y-6">
        <div className="flex items-center gap-x-4" onClick={() => handleNavigation("/cart")}>
          <Cart />
          <span className="text-lg">Cart</span>
        </div>
        <div className="flex items-center gap-x-4" onClick={() => handleNavigation("/wishlist")}>
          <Heart />
          <span className="text-lg">Wishlist</span>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-row items-center gap-x-3.5">
      <Cart />
      <Heart />
      <Notification />
      <User />
    </div>
  );
};

export default OptionsWrapper;
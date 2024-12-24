"use client";
import { addProductIcon } from "@/svgs";
import React, { useState } from "react";

const Page = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openAddProductDrawer = () => {
    setIsOpen((state) => !state);
  };

  return (
    <div className="flex flex-col w-[100%] p-5">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold my-2">Returns</h1>
      </div>
      <div className="shadow-lg p-5 w-[100%] rounded-xl">
        <h1 className="text-2xl font-bold my-3">Return Order</h1>
        <hr className="border-grayLight my-3" />

        <div className="flex gap-3 flex-col">
          <div className="flex gap-3 items-center">
            <img
              className="w-[90px] h-[90px] object-cover rounded-[10px]"
              src="/images/order-avatar.jpeg"
            />
            <div className="flex flex-col gap-1 items-start">
              <p className="font-medium">Order # 9254345</p>
              <p className="text-sm">1 Skirt, 1 Gucci Bag, 1 Glasses</p>
              <p className="font-bold"> 12$</p>
            </div>
          </div>
          <div className="flex flex-col text-sm font-semibold mt-5 gap-5">
            <div className="flex justify-between">
              <p>Adjust Quantity</p>
              <p>1</p>
            </div>
            <div className="flex justify-between">
              <p>Refund Reason</p>
              <p>Quality Not Good</p>
            </div>
            <div className="flex justify-between">
              <p>Refund to</p>
              <p>Credit card</p>
            </div>
            <div className="flex justify-between">
              <p>Refund Amount</p>
              <p>12$</p>
            </div>
          </div>
          <div className="flex lg:flex-row flex-col justify-between">
            <div className="flex flex-col gap-2 mt-5">
              <div className="flex items-center gap-3">
                <img
                  className="w-[50px] h-[50px] rounded-full"
                  src="/images/profile-avatar.jpeg"
                  alt="User Profile Avatar"
                />
                <p className="font-semibold text-2xl">Harry Kane</p>
              </div>
              <div>
                <label className="font-semibold text-lg">Country</label>
                <p>Pakistan</p>
              </div>
              <div>
                <label className="font-semibold text-lg">City</label>
                <p>Islamabad</p>
              </div>
              <div>
                <label className="font-semibold text-lg">Phone Number</label>
                <p>+91-800 301 0108</p>
              </div>
              <div>
                <label className="font-semibold text-lg">Address</label>
                <p>43, Electronics City Phase 1, Electronic City</p>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <h1 className="text-2xl font-bold mt-9">Photos</h1>
              <div className="flex flex-wrap gap-5 justify-center sm:justify-start">
                <img
                  className="w-[90px] h-[90px] object-cover rounded-[10px]"
                  src="/images/order-avatar.jpeg"
                />
                <img
                  className="w-[90px] h-[90px] object-cover rounded-[10px]"
                  src="/images/order-avatar.jpeg"
                />
                <img
                  className="w-[90px] h-[90px] object-cover rounded-[10px]"
                  src="/images/order-avatar.jpeg"
                />
                <img
                  className="w-[90px] h-[90px] object-cover rounded-[10px]"
                  src="/images/order-avatar.jpeg"
                />
              </div>
            </div>
          </div>
          <div className="flex justify-center gap-5 mt-5">
            <button className="border py-2 w-[440px] rounded-[40px] border-black">
              Discard
            </button>
            <button className="rounded-[40px] w-[440px] py-2 bg-buttonGradient text-white">
              Confirm Return
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;

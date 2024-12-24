"use client";
import GiveReview from "@/components/layouts/product/utils/GiveReview";
import { chevronRightBlack, downloadIcon, progressBar } from "@/svgs";
import React, { useState } from "react";

const OrderDetails = ({ setState }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenReview = () => {
    setIsOpen((state) => !state);
  };

  return (
    <div className="flex flex-col gap-5 w-full p-5">
      <div className="flex flex-col gap-5 p-8">
        <h1 className="text-2xl font-bold">Orders Details</h1>
        <hr />
        <div className="flex flex-col lg:flex-row lg:space-x-4 space-y-4 lg:space-y-0 lg:w-[100%]">
          <div className="flex justify-between items-center w-full h-[90px]">
            <div className="flex gap-3 items-center">
              <div>
                <img
                  className="w-[90px] h-[90px] object-cover rounded-[10px]"
                  src="/images/order-avatar.jpeg"
                />
              </div>
              <div className="flex flex-col gap-1 items-start">
                <p className="font-medium">Order # 9254345</p>
                <p className="text-sm">1 Skirt, 1 Gucci Bag, 1 Glasses</p>
              </div>
            </div>
            <div className="flex flex-col items-center justify-between">
              {chevronRightBlack}
            </div>
          </div>
        </div>

        <div className="w-full">
          <div className="flex flex-col gap-5 px-10 py-5 border mx-auto w-full lg:w-[80%] border-primary rounded-[12px] bg-greenLight">
            <div className="flex justify-between items-center gap-3">
              <div className="flex items-center gap-3">
                <img
                  className="w-[50px] h-[50px] rounded-full"
                  src="/images/profile-avatar.jpeg"
                  alt="User Profile Avatar"
                />
                <p className="font-semibold text-2xl">Harry Kane</p>
              </div>
              <div>{downloadIcon}</div>
            </div>
            <div className="flex justify-between flex-wrap gap-5">
              <div>
                <p className="text-lg font-bold">Country</p>
                <p>Pakistan</p>
              </div>
              <div>
                <p className="text-lg font-bold">City</p>
                <p>Islamabad</p>
              </div>
              <div>
                <p className="text-lg font-bold">Phone Number</p>
                <p>+91-800 301 0108</p>
              </div>
              <div className="w-full">
                <p className="text-lg font-bold">Address</p>
                <p>43, Electronics City Phase 1, Electronic City</p>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="flex flex-col items-center justify-center space-y-6 py-2">
        <div className="w-full lg:w-3/4 bg-[#E5EBFC]  border-[5px] border-[#E5EBFC] rounded-full relative">
          <div
            className="h-full bg-primary p-[3px] shadow-lg border-2 rounded-lg border-white transition-all duration-500"
            style={{ width: `${getProgressPercentage()}%` }}
          />

          <div className="absolute  top-1/2 -left-2 w-[102%] transform -translate-y-1/2 flex justify-between">
            <div
              className={`w-10 h-10 rounded-full border-2 border-[#E5EBFC] transition-all duration-500 ${
                getProgressPercentage() >= 33 ? "bg-primary" : "bg-[#E5EBFC]"
              }`}
              style={{ left: "0%" }}
            ></div>

            <div
              className={`w-10 h-10 rounded-full border-2 border-[#E5EBFC] transition-all duration-500 ${
                getProgressPercentage() >= 66 ? "bg-primary" : "bg-[#E5EBFC]"
              }`}
              style={{ left: "50%" }}
            ></div>

            <div
              className={`w-10 h-10 rounded-full border-2 border-[#E5EBFC] transition-all duration-500 ${
                getProgressPercentage() >= 100 ? "bg-primary" : "bg-[#E5EBFC]"
              }`}
              style={{ left: "100%" }}
            ></div>
          </div>
        </div>

        <div className="flex justify-between w-3/4 text-xs font-semibold text-gray-600">
          <span
            className={
              getProgressPercentage() >= 33 ? "text-primary" : "text-gray-600"
            }
          >
            Packed
          </span>
          <span
            className={
              getProgressPercentage() >= 66 ? "text-primary" : "text-gray-600"
            }
          >
            Shipped
          </span>
          <span
            className={
              getProgressPercentage() === 100
                ? "text-primary"
                : "text-gray-600"
            }
          >
            Delivered
          </span>
        </div>
      </div> */}
        <div className="flex justify-center">{progressBar}</div>

        <div className="flex items-center justify-between flex-wrap gap-3">
          <div className="flex gap-2 flex-col items-start">
            <h4 className="text-lg font-medium">Packed</h4>
            <p className="text-sm">
              Your parcel is packed and will be handed over to our delivery
              partner.
            </p>
          </div>
          <div className="bg-whiteDark text-xs px-4 text-black/70 py-2 rounded-[4px]">
            16 April, 12:31
          </div>
        </div>
        <div className="flex gap-2 flex-col items-start">
          <h4 className="text-lg font-medium">Shipped</h4>
          <p className="text-sm">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore.
          </p>
        </div>
        <div className="flex gap-2 flex-col items-start">
          <h4 className="text-lg font-medium">Delivered</h4>
          <p className="text-sm">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore.
          </p>
        </div>
        <div className="flex w-full justify-end items-center gap-[19px]">
          <button
            onClick={() => setState("return")}
            className="rounded-[44px] w-[160px] text-danger border border-danger px-[22px] py-[10px] font-semibold"
          >
            Return
          </button>
          <button
            onClick={handleOpenReview}
            className="rounded-[44px] w-[160px] bg-buttonGradient px-[22px] py-[10px] font-semibold text-white"
          >
            Review
          </button>
        </div>
      </div>
      <GiveReview isOpen={isOpen} closeModal={handleOpenReview} />
    </div>
  );
};

export default OrderDetails;

import DelieveryProgress from "@/components/progress/DelieveryProgress";
import { packageDelieveryProgress } from "@/svgs";
import Link from "next/link";
import React from "react";

const ReverseDetails = () => {
  return (
    <div className="flex flex-col gap-5 w-full p-5">
      <div className="flex flex-col gap-5 p-8">
        <h1 className="text-2xl font-bold">Reverse Details</h1>
        <hr />

        <div className="flex flex-col shadow-md gap-5 px-10 py-5 mx-auto w-full lg:w-[80%] rounded-[12px]">
          {/* <div className="flex justify-center">{packageDelieveryProgress}</div> */}
          <DelieveryProgress />
        </div>

        <h3 className="text-lg font-semibold">
          Your refund is being processed
        </h3>

        <div className="flex flex-col text-sm font-semibold mt-5 gap-5">
          <div className="flex justify-between">
            <p>Refund Reason</p>
            <p>Item does not fit me</p>
          </div>
          <div className="flex justify-between">
            <p>Refund to</p>
            <p>Debit/Credit card</p>
          </div>
          <div className="flex justify-between">
            <p>Refund Time</p>
            <p>Jan 05,2024</p>
          </div>
          <div className="flex justify-between">
            <p>Refund Amount</p>
            <p>12$</p>
          </div>
        </div>

        <h3 className="text-lg font-semibold">Return/Refund Product</h3>

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
          </div>
        </div>

        <div className="flex flex-col text-sm font-semibold mt-5 gap-5">
          <div className="flex justify-between">
            <p>Request Time</p>
            <p>Jan 05, 2024</p>
          </div>
          <div className="flex justify-between">
            <p>Order Number</p>
            <p>154422819834369</p>
          </div>
          <div className="flex justify-between">
            <p>Seller</p>
            <p>ZARA</p>
          </div>
        </div>

        <div className="flex w-full justify-end items-center gap-[19px]">
          <Link
            href="/profile"
            className="rounded-[44px] w-[160px] text-grayDark border border-grayDark px-[22px] py-[10px] font-semibold"
          >
            Back
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ReverseDetails;

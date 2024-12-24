import BagsPerDay from "@/components/BagsPerDay";
import { chevronRightBlack, shoppingBagActiveIcon } from "@/svgs";
import React from "react";

const RefundBill = ({ setState }) => {
  return (
    <div className="flex flex-col gap-5 p-8">
      <h1 className="text-2xl font-bold">Return & Refund</h1>
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

      <div className="flex flex-col text-sm font-semibold mt-5 gap-5">
        <div className="flex justify-between">
          <p>
            Adjust Quantity <span className="text-danger">*</span>
          </p>
          <BagsPerDay />
        </div>
        <div className="flex justify-between">
          <p>
            Refund Reason <span className="text-danger">*</span>
          </p>
          <p>Please select</p>
        </div>
        <div className="flex justify-between">
          <p>
            Refund to <span className="text-danger">*</span>
          </p>
          <p>Debit/Credit card</p>
        </div>
        <div className="flex justify-between">
          <p>
            Refund Amount <span className="text-danger">*</span>
          </p>
          <p>12$</p>
        </div>
      </div>

      <div className="flex w-full justify-end items-center gap-[19px]">
        <button
          onClick={() => setState("list")}
          className="rounded-[44px] w-[160px] text-grayDark border border-grayDark px-[22px] py-[10px] font-semibold"
        >
          Cancel
        </button>
        <button
          onClick={() => setState("refundDetails")}
          className="rounded-[44px] w-[160px] bg-buttonGradient px-[22px] py-[10px] font-semibold text-white"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default RefundBill;

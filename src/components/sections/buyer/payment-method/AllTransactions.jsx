import { paypalIcon } from "@/svgs";
import React from "react";

const AllTransactions = () => {
  return (
    <div className="flex flex-col mt-4 p-3">
      <div className="flex items-center justify-between">
        <h1 className="font-semibold text-2xl text-blackTwo mb-2">
          Transaction History
        </h1>
      </div>
      <div className="flex justify-between px-6 py-4 items-center bg-white shadow-lg transform translate-y-[-5px] p-2 rounded-lg mt-2 w-full">
        <div className="flex gap-2">
          <span className="mt-2">{paypalIcon}</span>
          <div className="flex flex-col">
            <p className="text-cardNumber text-[16px] font-semibold">
              1452 xxxx xxxx 0354
            </p>
            <p className="text-grayDark text-[14px] font-medium">
              2 Jan, 24 - 12:00
            </p>
          </div>
        </div>
        <div className="flex gap-5 items-center">
          <div className="text-amount text-[20px] font-semibold">$ 55.00</div>
        </div>
      </div>
      <div className="flex justify-between px-6 py-4 items-center bg-white shadow-lg transform translate-y-[-5px] p-2 rounded-lg mt-2 w-full">
        <div className="flex gap-2">
          <span className="mt-2">{paypalIcon}</span>
          <div className="flex flex-col">
            <p className="text-cardNumber text-[16px] font-semibold">
              1452 xxxx xxxx 0354
            </p>
            <p className="text-grayDark text-[14px] font-medium">
              2 Jan, 24 - 12:00
            </p>
          </div>
        </div>
        <div className="flex gap-5 items-center">
          <div className="text-amount text-[20px] font-semibold">$ 55.00</div>
        </div>
      </div>
      <div className="flex justify-between px-6 py-4 items-center bg-white shadow-lg transform translate-y-[-5px] p-2 rounded-lg mt-2 w-full">
        <div className="flex gap-2">
          <span className="mt-2">{paypalIcon}</span>
          <div className="flex flex-col">
            <p className="text-cardNumber text-[16px] font-semibold">
              1452 xxxx xxxx 0354
            </p>
            <p className="text-grayDark text-[14px] font-medium">
              2 Jan, 24 - 12:00
            </p>
          </div>
        </div>
        <div className="flex gap-5 items-center">
          <div className="text-amount text-xl font-semibold">$ 55.00</div>
        </div>
      </div>
    </div>
  );
};

export default AllTransactions;

import React from "react";
import { FaChevronRight } from "react-icons/fa6";

const RefundDetails = ({ setState }) => {
  return (
    <div className="flex flex-col gap-5 p-8">
      <h1 className="text-2xl font-bold">Return & Refund</h1>
      <hr />

      <div className="flex items-center justify-between">
        <p>
          Package location<span className="text-danger">*</span>
        </p>
        <FaChevronRight />
      </div>

      <textarea rows="4" className="border rounded-[6px] p-2 w-full" />

      <p className="font-semibold">Details</p>
      <p className="font-medium">Comments</p>

      <textarea rows="4" className="border rounded-[6px] p-2 w-full" />

      <div className="flex w-full justify-end items-center gap-[19px]">
        <button
          onClick={() => setState("list")}
          className="rounded-[44px] w-[160px] text-grayDark border border-grayDark px-[22px] py-[10px] font-semibold"
        >
          Cancel
        </button>
        <button
          onClick={() => setState("upload")}
          className="rounded-[44px] w-[160px] bg-buttonGradient px-[22px] py-[10px] font-semibold text-white"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default RefundDetails;

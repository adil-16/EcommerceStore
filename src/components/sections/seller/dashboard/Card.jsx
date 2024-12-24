import { ChevronUp, ChevronDown, chevronUp } from "@/svgs";
import React from "react";

const Card = (props) => {
  return (
    <div className="flex flex-col border border-gray-200 shadow-sm rounded-2xl pt-6 pl-6 pb-14 pr-8 w-full lg:w-[100%]">
      <h1 className="text-4xl font-semibold leading-[28px] text-black">
        {props.title}
      </h1>
      <h1 className="text-sm font-semibold leading-[28px] text-gray-500 py-4">
        {props.content}
      </h1>
      <p
        className={`flex gap-3 px-3 text-xs rounded-lg w-fit py-2 ${"bg-greenLight text-greenText"}    items-center font-semibold`}
      >
        {chevronUp}
        {Math.abs(props.percentage)}% compared to last month
      </p>
    </div>
  );
};

export default Card;

import { fullStarIcon } from "@/utils/Svgs";
import React from "react";

const ReviewCard = ({className}) => {
  return (
    <div
      className={`rounded-[20px] border border-black border-opacity-10 px-8 py-7 gap-y-4 ${className}`}
    >
      <div className="flex flex-row gap-x-1.5">
        {fullStarIcon}
        {fullStarIcon}
        {fullStarIcon}
        {fullStarIcon}
        {fullStarIcon}
      </div>

      <div className="flex flex-col gap-y-3">
        <h3 className="text-xl font-bold">Alex K.</h3>
        <p className="text-base opacity-60">
          &quot;Finding clothes that align with my personal style used to be a
          challenge until I discovered Shop.co. The range of options they offer
          is truly remarkable, catering to a variety of tastes and
          occasions.&quot;
        </p>
      </div>
    </div>
  );
};

export default ReviewCard;

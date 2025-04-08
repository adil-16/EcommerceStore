import React from "react";
import { fullStarIcon, halfStarIcon } from "@/utils/Svgs";

const ReviewCard = ({ user, comment, rating, className }) => {
  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    return (
      <>
        {Array(fullStars ? fullStars : [])
          ?.fill(fullStarIcon)
          ?.map((star, index) => (
            <span key={`full-star-${index}`}>{star}</span>
          ))}
        {hasHalfStar && <span key="half-star">{halfStarIcon}</span>}
      </>
    );
  };

  return (
    <div
      className={`rounded-[20px] border border-black border-opacity-10 px-8 py-7 gap-y-4 ${className}`}
    >
      <div className="flex flex-row gap-x-1.5">{renderStars(rating)}</div>

      <div className="flex flex-col gap-y-3">
        <h3 className="text-xl font-bold">{user}</h3>
        <p className="text-base opacity-60">&quot;{comment}&quot;</p>
      </div>
    </div>
  );
};

export default ReviewCard;

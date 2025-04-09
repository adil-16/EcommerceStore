"use client";
import React from "react";
import FilterButton from "./FilterButton";
import SortDropdown from "./SortDropdown";
import RoundedButton from "@/components/buttons/RoundedButton";
import GiveReview from "./GiveReview";
import ReviewCard from "../../homepage/utils/ReviewCard";
import ProductsWrappers from "../../homepage/ProductsWrappers";
import { useState } from "react";

const ReviewTab = ({ product }) => {
  const [openModal, setOpenModal] = React.useState(false);
  const [showAllReviews, setShowAllReviews] = useState(false); // State to toggle reviews visibility

  // Initially show 4 reviews
  const reviewsToShow = showAllReviews ? product.reviews : product.reviews.slice(0, 4);
  return (
    <div className="w-full flex flex-col sm:mt-7 mt-9 ">
      <div className="flex flex-row gap-x-1 justify-between w-full">
        <h1 className="font-bold text-2xl sm:mb-7 mb-9">
          Details <span className="text-lg opacity-60 font-normal">(451)</span>
        </h1>
        <div className="flex flex-row items-center gap-x-2.5">
          <FilterButton />
          <SortDropdown />

          <RoundedButton
            onClick={() => setOpenModal(true)}
            label="Write a Review"
            className=" bg-black border-black text-white font-medium w-full px-6 whitespace-nowrap py-2 rounded-lg"
          />
        </div>
      </div>
      {/* grid for 2 col and on mobile 1 col */}
      <div className="grid grid-cols-1 gap-4 sm:mt-7 mt-5 sm:grid-cols-2">
      {reviewsToShow.map((review, index) => (
          <ReviewCard
            key={index}
            user={review.user}
            comment={review.comment}
            rating={review.rating}
          />
        ))}
      </div>

      {!showAllReviews && product.reviews.length > 4 && (
        <div className="w-full flex justify-center sm:mt-11 mt-5 sm:mb-16 mb-12">
          <RoundedButton
            onClick={() => setShowAllReviews(true)} 
            label="Load More Reviews"
            className="py-4 bg-white text-black border-black border-opacity-10 sm:w-[218px] w-full"
          />
        </div>
      )}
      <GiveReview isOpen={openModal} closeModal={() => setOpenModal(false)} />
    </div>
  );
};

export default ReviewTab;

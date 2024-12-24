"use client";
import React from "react";
import FilterButton from "./FilterButton";
import SortDropdown from "./SortDropdown";
import RoundedButton from "@/components/buttons/RoundedButton";
import GiveReview from "./GiveReview";
import ReviewCard from "../../homepage/utils/ReviewCard";
import ProductsWrappers from "../../homepage/ProductsWrappers";

const ReviewTab = () => {
  const [openModal, setOpenModal] = React.useState(false);
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
            className=" bg-black border-black text-white font-medium w-full px-6 py-3.5"
          />
        </div>
      </div>
      {/* grid for 2 col and on mobile 1 col */}
      <div className="grid grid-cols-1 gap-4 sm:mt-7 mt-5 sm:grid-cols-2">
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
      </div>

      <div className="w-full flex justify-center sm:mt-11 mt-5 sm:mb-16 mb-12">
        <RoundedButton
          label="Load More Reviews"
          className="py-4 bg-white text- border-black border-opacity-10 sm:w-[218px] w-full"
        />
      </div>
      <GiveReview isOpen={openModal} closeModal={() => setOpenModal(false)} />
    </div>
  );
};

export default ReviewTab;

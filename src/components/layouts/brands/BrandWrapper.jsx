"use client";
import RoundedButton from "@/components/buttons/RoundedButton";
import { largeZaraIcon } from "@/utils/Svgs";
import { useRouter } from "next/navigation";
import React from "react";
import BrandProducts from "./BrandProducts";

const BrandWrapper = () => {
  const router = useRouter();
  return (
    <div className="flex flex-col gap-y-8 w-full">
      <div className="flex flex-row justify-between items-center">
        {largeZaraIcon}

        <div className="w-[218px]">
          <RoundedButton
            onClick={() => router.push("/category/zara")}
            label="View All"
            className="py-4 bg-white text- border-black border-opacity-10 sm:w-[218px] w-full sm:mt-16 mt-8"
          />
        </div>
      </div>

      <BrandProducts />
    </div>
  );
};

export default BrandWrapper;

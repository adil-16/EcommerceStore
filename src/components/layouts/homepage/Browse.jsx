import Link from "next/link";
import React from "react";

const Browse = () => {
  return (
    <div className="lg:px-[100px] md:px-8 px-4 w-full mt-[80px]">
      <div className="w-full sm:py-[70px] py-10 sm:px-16 px-6  flex flex-col bg-searchBarBg rounded-[40px]">
        <div className="w-full flex justify-center sm:mb-16 mb-7">
          <h2 className="sm:text-[48px] text-2xl font-bold leading-normal">
            BROWSE BY DRESS STYLE
          </h2>
        </div>

        <div className="flex w-full flex-row flex-wrap gap-5">
          <Link
            href="/category/casual"
            className="md:py-6 md:px-9 py-[18px] px-6 md:w-[39%] w-full bg-browse1 md:h-[289px] h-[190px] bg-center bg-no-repeat bg-cover rounded-[20px]"
          >
            <p className="text-4xl font-bold">Casual</p>
          </Link>
          <Link
            href="/category/formal"
            className="md:py-6 md:px-9 py-[18px] px-6 md:w-[57%] w-full bg-browse2 md:h-[289px] h-[190px] bg-left bg-no-repeat bg-cover rounded-[20px]"
          >
            <p className="text-4xl font-bold">Formal</p>
          </Link>
          <Link
            href="/category/party"
            className="md:py-6 md:px-9 py-[18px] px-6 md:w-[57%] w-full bg-browse3 md:h-[289px] h-[190px] bg-center bg-no-repeat bg-cover rounded-[20px]"
          >
            <p className="text-4xl font-bold">Party</p>
          </Link>
          <Link
            href="/category/gym"
            className="md:py-6 md:px-9 py-[18px] px-6 md:w-[39%] w-full bg-browse4 md:h-[289px] h-[190px] bg-center bg-no-repeat bg-cover rounded-[20px]"
          >
            <p className="text-4xl font-bold">Gym</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Browse;

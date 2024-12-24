import RoundedButton from "@/components/buttons/RoundedButton";
import { stats } from "@/utils/Constants";
import React from "react";

const HeroDetails = () => {
  return (
    <div className="flex flex-col w-full md:w-[50%] h-full sm:justify-center justify-start sm:gap-y-10 gap-y-6">
      <div className="flex flex-col sm:gap-y-6 gap-5">
        <h1 className="sm:text-6xl text-5xl font-bold ">
          FIND CLOTHES THAT MATCHES YOUR STYLE
        </h1>
        <p className="opacity-60">
          Browse through our diverse range of meticulously crafted garments,
          designed to bring out your individuality and cater to your sense of
          style.
        </p>
      </div>
      <div className="sm:w-[210px] w-full">
        <RoundedButton label="Shop Now" className="py-4 text-white bg-primary border-primary" />
      </div>

      <div className="flex flex-row w-full md:gap-x-8 gap-x-6 gap-y-5 flex-wrap md:justify-start justify-center">
        {stats.map((stat, index) =>
          stat.number === "" ? (
            <div
              className="w-0.5 border-r border-r-black border-opacity-10"
              key={index}
            >
              {" "}
            </div>
          ) : (
            <div className="flex flex-col h-auto" key={index}>
              <h2 className="sm:text-[40px] text-4xl font-bold">
                {stat.number}
              </h2>
              <p className="opacity-60">{stat.text}</p>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default HeroDetails;

import React from "react";
import HeroDetails from "./utils/HeroDetails";
import HeroImage from "./utils/HeroImage";

const Hero = () => {
  return (
    <div className="w-full md:h-full h-full min-h-svh bg-heroBg flex md:flex-row flex-col justify-between pt-28 lg:px-[100px] md:px-8 px-4">
      <HeroDetails />

      <HeroImage />
    </div>
  );
};

export default Hero;

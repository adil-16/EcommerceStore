"use client";

import CardsRow from "./CardsRow";
import StatSlider from "./StatSlider";
import React, { useEffect, useState } from "react";
import StatsChart from "./StatsChart";
import { toast } from "sonner";

const RenderStats = () => {
  const [isSmallDevice, setIsSmallDevice] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallDevice(window.innerWidth < 1024);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isSmallDevice ? (
    <>
      <div className="w-full lg:w-[30%] flex-1 lg:flex-[0_0_30%] px-2">
        {isSmallDevice ? (
          <StatSlider
            totalUsers={12}
            totalPosts={4}
            percentagePosts={30}
            percentageUsers={30}
          />
        ) : (
          <CardsRow
            totalUsers={12}
            totalPosts={4}
            percentagePosts={30}
            percentageUsers={30}
          />
        )}
      </div>
      <div className="w-full lg:w-[70%] flex-1 lg:flex-[0_0_70%] px-2">
        <StatsChart />
      </div>
    </>
  ) : (
    <>
      <div className="w-full lg:w-[30%] flex-1 lg:flex-[0_0_30%] px-2">
        {isSmallDevice ? (
          <StatSlider
            totalUsers={12}
            totalPosts={4}
            percentagePosts={30}
            percentageUsers={30}
          />
        ) : (
          <CardsRow
            totalUsers={12}
            totalPosts={4}
            percentagePosts={30}
            percentageUsers={30}
          />
        )}
      </div>
      <div className="w-full lg:w-[70%] flex-1 lg:flex-[0_0_70%] px-2">
        <StatsChart />
      </div>
    </>
  );
};

export default RenderStats;

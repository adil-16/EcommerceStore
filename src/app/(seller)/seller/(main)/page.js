import RecentOrders from "@/components/sections/seller/dashboard/RecentOrders";
import RenderStats from "@/components/sections/seller/dashboard/RenderStats";
import React from "react";

const Page = () => {
  return (
    <div className="flex flex-col w-[100%] p-5">
      <h1 className="text-2xl font-bold my-5">Statistics</h1>
      <div className="flex flex-col lg:flex-row lg:space-x-4 space-y-4 lg:space-y-0 lg:w-[100%]">
        <RenderStats />
      </div>
      <RecentOrders />
    </div>
  );
};

export default Page;

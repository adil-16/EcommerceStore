"use client";
import React from "react";
import RecentOrderTableContainer from "./RecentOrderTableContainer";

const RecentOrders = () => {
  return (
    <>
      <h1 className="text-2xl font-bold my-5">Recent Orders</h1>
      <RecentOrderTableContainer />
    </>
  );
};

export default RecentOrders;
